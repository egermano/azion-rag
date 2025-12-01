# AI Library

A shared helper library for interacting with **Azion AI Inference**.

## Implementation Details

This library provides a unified interface for AI operations, handling the environment differences between local development (via `fetch`) and Azion Platform execution (via `Azion.AI`).

### Supported Operations

- **`embedding`**: Generates vector embeddings.
  - Model: `Qwen/Qwen3-Embedding-4B` (or similar)
- **`chat`**: Generates text completions.
  - Model: `casperhansen-mistral-small-24b-instruct-2501-awq` / `Qwen`
- **`rerank`**: Re-orders documents based on relevance to a query.
  - Model: `baai-bge-reranker-v2-m3`

## References

- [Azion AI Inference Documentation](https://www.azion.com/en/products/ai-inference/)
