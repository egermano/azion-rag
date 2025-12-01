# RAG Overview

Retrieval-Augmented Generation (RAG) is a technique for enhancing the accuracy and reliability of generative AI models with facts fetched from external sources.

## How it works

1. **Ingestion**: Documents are chunked, embedded, and stored in a vector database.
2. **Retrieval**: User queries are embedded and used to search for relevant chunks.
3. **Generation**: The retrieved chunks are passed to the LLM as context.
