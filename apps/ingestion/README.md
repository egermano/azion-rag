# Ingestion App

This application handles the ingestion of documents into **Azion SQL Database** for Retrieval-Augmented Generation (RAG).

## Implementation Details

The ingestion process follows these steps:

1. **Read Data**: Reads text files from the `data/` directory.
2. **Chunking**: Splits text into manageable chunks (default 1000 chars).
3. **Embedding**: Generates vector embeddings using the `libs/ai` module (Qwen model).
4. **Storage**: Stores the content and embeddings in an **Azion SQL Database**.

## Database Schema

The application expects a `document_embeddings` table with:

- `content`: Text chunk.
- `embedding`: Vector representation (F32_BLOB).
- `filename`: Source identifier.

## References

- [Azion SQL Database Documentation](https://www.azion.com/en/products/sql-database/)
- [Azion AI Inference Documentation](https://www.azion.com/en/products/ai-inference/)
