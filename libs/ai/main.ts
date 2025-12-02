// AI integration using Azion AI Inference
import "dotenv/config";
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
  type: "embedding" | "chat" | "rerank" = "chat",
  forceFetch = false
) => {
  const AI_INFERENCE_BASE_URL = process.env.AI_INFERENCE_BASE_URL!;
  const IS_PROD = process.env.NODE_ENV === "production";

  if (!forceFetch && IS_PROD) {
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

export const embedding = async (text: string, dimension: number = 1536, forceFetch = false) => {
  console.log("[AI] Embedding");
  // console.log("[AI] Embedding text: ", text);

  const model = "Qwen/Qwen3-Embedding-4B";
  const options = {
    input: text,
    encoding_format: "float",
    dimension,
  };

  return ai(model, options, "embedding", forceFetch);
};

export const chat = async (
  messages: {
    role: "user" | "assistant";
    content: string;
  }[],
  forceFetch = false
) => {
  console.log("[AI] Chat");
  // console.log("[AI] Chat messages: ", messages);

  const model = "casperhansen-mistral-small-24b-instruct-2501-awq";
  const options = {
    messages,
  };

  console.log("[AI] Chat options: ", forceFetch);

  return ai(model, options, "chat", forceFetch);
};

export const rerank = async (
  query: string,
  documents: string[],
  forceFetch = false
) => {
  console.log("[AI] Rerank");
  const model = "baai-bge-reranker-v2-m3";
  const options = {
    query,
    documents,
  };

  return ai(model, options, "rerank", forceFetch);
};
