// AI integration using Azion AI Inference
import "dotenv/config";

const AI_INFERENCE_BASE_URL = process.env.AI_INFERENCE_BASE_URL!;
const IS_PROD = process.env.NODE_ENV === "production";

declare global {
  // eslint-disable-next-line no-var
  var Azion: {
    AI: {
      run: (model: string, options: any) => Promise<any>;
    };
  };
}

export const ai = async (
  model: string,
  options?: any,
  type: "embedding" | "chat" | "rerank" = "chat"
) => {
  if (IS_PROD) {
    console.log("[AI] Using Azion AI Inference");
    return Azion.AI.run(model, options);
  }

  const body = {
    model,
    ...options,
  };

  const url = {
    embedding: `${AI_INFERENCE_BASE_URL}/v1/embeddings`,
    chat: `${AI_INFERENCE_BASE_URL}/v1/chat/completions`,
    rerank: `${AI_INFERENCE_BASE_URL}/v1/rerank`,
  };

  console.log("[AI] Using Fetch");
  const response = await fetch(url[type], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  // console.log("[AI] Response: ", response);
  return response.json();
};

export const embedding = async (text: string, dimension: number = 1536) => {
  console.log("[AI] Embedding");
  // console.log("[AI] Embedding text: ", text);

  const model = "Qwen/Qwen3-Embedding-4B";
  const options = {
    input: text,
    encoding_format: "float",
    dimension,
  };

  return ai(model, options, "embedding");
};

export const chat = async (
  messages: {
    role: "user" | "assistant";
    content: string;
  }[]
) => {
  console.log("[AI] Chat");
  // console.log("[AI] Chat messages: ", messages);

  const model = "Qwen/Qwen3-30B-A3B-Instruct-2507-FP8";
  const options = {
    messages,
  };

  return ai(model, options, "chat");
};

export const rerank = async (
  query: string,
  documents: string[],
  top_n: number = 3
) => {
  console.log("[AI] Rerank");
  const model = "baai-bge-reranker-v2-m3";
  const options = {
    query,
    documents,
    top_n,
    return_documents: true,
  };

  return ai(model, options, "rerank");
};
