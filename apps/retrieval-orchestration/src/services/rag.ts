import { chat, embedding, rerank } from "ai";
import { useQuery } from "azion/sql";

export interface SearchResult {
  id?: number;
  filename: string;
  content: string;
  similarity: number;
  rerank_score?: number;
}

export interface RagResponse {
  question: string;
  answer: string;
  context: SearchResult[];
}

const getDbConfig = () => {
  const dbName = process.env.SQL_DATABASE_NAME;
  const dbTable = process.env.SQL_DATABASE_TABLE;
  if (!dbName || !dbTable) {
    throw new Error("Missing SQL_DATABASE_NAME or SQL_DATABASE_TABLE env vars");
  }
  return { dbName, dbTable };
};

export const search = async (
  query: string,
  topK: number = 5,
  useRerank: boolean = true
): Promise<SearchResult[]> => {
  console.log(`[RAG] Searching for: "${query}"`);
  const { dbName, dbTable } = getDbConfig();

  // 1. Generate Embedding
  // We force fetch to ensure we hit the API if needed
  const embedded = await embedding(query) as any;
  const vector = embedded?.data?.[0]?.embedding;

  if (!vector) {
    throw new Error("Failed to generate embedding");
  }

  // 2. Vector Search
  // We fetch more candidates if we plan to rerank
  const limit = useRerank ? topK * 3 : topK;
  const vectorStr = JSON.stringify(vector);

  const sql = `
      SELECT 
        id,
        filename,
        content,
        (1 - vector_distance_cos(embedding, vector('${vectorStr}'))) AS similarity
      FROM ${dbTable}
      ORDER BY similarity DESC
      LIMIT ${limit};
    `;

  const { data, error } = await useQuery(dbName, [sql]);

  if (error) {
    console.error("[RAG] SQL Error:", error);
    throw new Error(`Database query failed: ${error.message}`);
  }

  // Parse results (handle different response structures if necessary)
  // @ts-ignore
  const rows = data?.results?.[0]?.rows || data?.rows || [];
  
  let results: SearchResult[] = rows.map((row: any) => ({
    id: row[0],
    filename: row[1],
    content: row[2],
    similarity: row[3],
  }));

  // 3. Rerank (Optional)
  if (useRerank && results.length > 0) {
    const documents = results.map((r) => r.content);
    const reranked = await rerank(query, documents) as any;

    if (reranked?.results) {
      // Map rerank scores back to results and sort
      results = reranked.results.map((r: any) => {
        const original = results[r.index];
        return {
          ...original,
          rerank_score: r.relevance_score,
        };
      });
      // Rerank API usually returns sorted results, but let's trust the mapping order
    }
  } else {
    // If no rerank, just slice to topK
    results = results.slice(0, topK);
  }

  return results;
};

export const ask = async (question: string): Promise<RagResponse> => {
  console.log(`[RAG] Asking: "${question}"`);

  // 1. Retrieve Context
  // We use the search function but we might want to apply a similarity threshold
  // For simplicity in this demo, we'll use the top results from search
  const contextResults = await search(question, 5);
  
  // Filter out low relevance if needed (e.g. similarity < 0.2 is handled in SQL in the original code, 
  // but let's do it here or just rely on top K)
  // The original code had `WHERE (similarity > 0.2)` in the SQL for `ask` endpoint.
  // Let's add a simple filter here if we want to be strict, or just use what we found.
  const relevantContext = contextResults.filter(r => r.similarity > 0.2);
  
  const contextText = relevantContext.map((c) => c.content).join("\n---\n");

  // 2. Generate Answer
  const messages = [
    {
      role: "system",
      content: `
        You are a helpful assistant. Your job is finding answers in the context provided. 
        If the context is empty, you should say you do not know.
        Answer the user question based strictly on the provided context. If the answer is not in the context, say you do not know.
        Always answer in brazilian portuguese.
      `,
    },
    {
      role: "user",
      content: `Context:\n${contextText}\n---\nQuestion: ${question}`,
    },
  ];

  // Force fetch = true
  const response = await chat(messages as any) as any;
  const answer = response?.choices?.[0]?.message?.content || "No answer generated";

  return {
    question,
    answer,
    context: relevantContext,
  };
};
