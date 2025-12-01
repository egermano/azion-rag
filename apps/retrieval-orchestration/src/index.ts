import { chat, embedding, rerank } from 'ai';
import { useQuery } from 'azion/sql';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

app.use('*', cors());

app.get('/', (c) => c.text('RAG Retrieval Orchestration API'));

// Search endpoint
app.post('/search', async (c) => {
  try {
    const body = await c.req.json();
    const q = body.q;
    const top_k = body.top_k || 5;
    const useRerank = body.rerank !== false; // Default to true

    if (!q) {
      return c.json({ error: 'Query "q" is required' }, 400);
    }

    console.log(`[Search] Query: ${q}`);

    // 1. Embed the query
    const embedded = await embedding(q);
    if (!embedded?.data?.[0]?.embedding) {
      console.error('[Search] Embedding failed', embedded);
      return c.json({ error: 'Failed to generate embedding' }, 500);
    }
    const vector = embedded.data[0].embedding;

    // 2. Vector Search
    const limit = useRerank ? top_k * 3 : top_k; // Fetch more candidates if reranking
    const vectorStr = JSON.stringify(vector);
    
    const sql = `
      SELECT 
        id,
        filename,
        content,
        (1 - vector_distance_cos(embedding, vector('${vectorStr}'))) AS similarity
      FROM document_embeddings
      ORDER BY similarity DESC
      LIMIT ${limit};
    `;

    // Use the database name provided in environment or default
    const dbName = process.env.SQL_DATABASE_NAME!; 
    const { data, error } = await useQuery(dbName, [sql]);

    if (error) {
      console.error('[Search] SQL Error:', error);
      return c.json({ error: error.message }, 500);
    }

    // Handle different response structures (local vs edge might differ, but user example suggests data.results)
    // @ts-ignore
    const rows = data?.results?.[0]?.rows || data?.rows || [];

    let results = rows.map((row: any) => ({
      id: row[0],
      filename: row[1],
      content: row[2],
      similarity: row[3],
    }));

    console.log(`[Search] Found ${results.length} candidates`);

    // 3. Rerank (Optional)
    if (useRerank && results.length > 0) {
      const documents = results.map((r: any) => r.content);
      const reranked = await rerank(q, documents, top_k);
      
      if (reranked?.results) {
        // Map rerank scores back to results
        // The API returns results sorted by relevance
        results = reranked.results.map((r: any) => {
           const original = results[r.index];
           return {
             ...original,
             rerank_score: r.relevance_score,
           };
        });
      }
    } else {
        // If no rerank, take top_k
        results = results.slice(0, top_k);
    }

    return c.json({ results });

  } catch (err: any) {
    console.error('[Search] Error:', err);
    return c.json({ error: err.message }, 500);
  }
});

// Ask endpoint (RAG)
app.post('/ask', async (c) => {
  try {
    const body = await c.req.json();
    const question = body.question;
    
    if (!question) return c.json({ error: 'Question is required' }, 400);

    // 1. Search for context (invoking logic directly to avoid HTTP overhead)
    // Embed
    const embedded = await embedding(question);
    const vector = embedded?.data?.[0]?.embedding;
    
    if (!vector) return c.json({ error: 'Failed to embed question' }, 500);
    
    // Query DB
    const vectorStr = JSON.stringify(vector);
    const sql = `
      SELECT content
      FROM document_embeddings
      ORDER BY vector_distance_cos(embedding, vector('${vectorStr}')) ASC
      LIMIT 5;
    `;
    // Note: cosine distance 0 is identical, 2 is opposite. 
    // ASC distance = DESC similarity.
    
    const dbName = 'rag_db';
    const { data } = await useQuery(dbName, [sql]);
    
    // @ts-ignore
    const rows = data?.results?.[0]?.rows || data?.rows || [];
    const candidates = rows.map((r: any) => r[0]);
    
    // Rerank candidates
    let contextDocs = candidates;
    if (candidates.length > 0) {
        const reranked = await rerank(question, candidates, 3);
        if (reranked?.results) {
            contextDocs = reranked.results.map((r: any) => candidates[r.index]);
        }
    }

    const context = contextDocs.join('\n---\n');

    // 2. Chat with LLM
    const messages = [
      { role: 'system', content: 'You are a helpful assistant. Answer the user question based strictly on the provided context. If the answer is not in the context, say you do not know.' },
      { role: 'user', content: `Context:\n${context}\n\nQuestion: ${question}` }
    ];

    // Casting to any because of type mismatch in libs/ai vs simple object here, 
    // but runtime structure is correct.
    const response = await chat(messages as any);
    
    const answer = response?.choices?.[0]?.message?.content || 'No answer generated';

    return c.json({ 
      question,
      answer,
      context: contextDocs 
    });

  } catch (err: any) {
     console.error('[Ask] Error:', err);
     return c.json({ error: err.message }, 500);
  }
});

export default app;
