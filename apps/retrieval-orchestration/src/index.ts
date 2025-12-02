import { Hono } from "hono";
import { cors } from "hono/cors";
import { fire } from "hono/service-worker";
import { ask, search } from "./services/rag";

const app = new Hono();

app.use(
  cors({
    origin: ["http://localhost:8080", "https://clc4fojzyiw.map.azionedge.net"],
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/", (c) => c.text("RAG Retrieval Orchestration API"));

// Search endpoint
app.post("/search", async (c) => {
  try {
    const body = await c.req.json();
    const q = body.q;
    const topK = body.top_k || 5;
    const useRerank = body.rerank !== false;

    if (!q) {
      return c.json({ error: 'Query "q" is required' }, 400);
    }

    const results = await search(q, topK, useRerank);
    return c.json({ results });
  } catch (err: any) {
    console.error("[Search] Error:", err);
    return c.json({ error: err.message }, 500);
  }
});

// Ask endpoint (RAG)
app.post("/ask", async (c) => {
  try {
    const body = await c.req.json();
    const question = body.question;

    if (!question) {
      return c.json({ error: "Question is required" }, 400);
    }

    const response = await ask(question);
    return c.json(response);
  } catch (err: any) {
    console.error("[Ask] Error:", err);
    return c.json({ error: err.message }, 500);
  }
});

fire(app);
