# Retrieval Orchestration App

This is an **Azion Function** built with **Hono** that serves as the API for the RAG system. It orchestrates retrieval and generation steps.

## Implementation Details

The application exposes two main endpoints:

### `POST /search`

Performs a semantic search over the ingested documents.

1. **Embed**: Converts the query into a vector using `libs/ai`.
2. **Vector Search**: Queries **Azion SQL Database** using cosine similarity (`vector_distance_cos`).
3. **Rerank**: Optionally reranks the top results using the `BAAI/bge-reranker-v2-m3` model for better precision.

### `POST /ask`

Executes the full RAG flow.

1. **Retrieve**: Calls the search logic to find relevant context chunks.
2. **Generate**: Constructs a prompt with the retrieved context and user question.
3. **Chat**: Generates a response using the `libs/ai` module (Mistral/Qwen models).

## Stack

- **Framework**: Hono (Service Worker mode)
- **Database**: Azion SQL Database
- **AI**: Azion AI Inference

## References

- [Azion Functions Documentation](https://www.azion.com/en/products/functions/)
- [Azion SQL Database Documentation](https://www.azion.com/en/products/sql-database/)
- [Azion AI Inference Documentation](https://www.azion.com/en/products/ai-inference/)
