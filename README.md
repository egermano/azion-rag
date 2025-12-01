# RAG Demonstration on Azion Platform

This repository provides a complete demonstration of building a **Retrieval-Augmented Generation (RAG)** application using the **Azion Platform**. It showcases how to combine **Azion SQL Database** (for vector storage) and **Azion AI Inference** (for embeddings and chat completions) within **Azion Functions**.

## Project Structure

The project is organized as a monorepo with the following components:

- **`apps/ingestion`**: A Node.js/TypeScript application responsible for reading documents, generating embeddings, and ingesting them into the Azion SQL Database.
- **`apps/retrieval-orchestration`**: An Azion Function (built with Hono) that serves as the API. It handles semantic search, reranking, and the RAG generation flow.
- **`libs/ai`**: A shared helper library that abstracts the interaction with Azion AI Inference models (Embeddings, Chat, Rerank).

## Architecture Overview

1. **Ingestion**: Documents are processed and stored as vectors in the **Azion SQL Database**.
2. **Retrieval**: User queries are embedded and matched against stored vectors using cosine similarity.
3. **Reranking**: Top results are refined using a reranker model for higher precision.
4. **Generation**: Relevant context is fed into an LLM (Azion AI Inference) to answer the user's question.

## Prerequisites

- An [Azion Account](https://console.azion.com/).
- **Azion CLI** installed and configured.
- **Node.js** installed.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-repo/rag-azion.git
   cd rag-azion
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment**:
   Check the READMEs in `apps/ingestion` and `apps/retrieval-orchestration` for specific environment variable requirements (e.g., Database names, API tokens).

4. **Run Ingestion**:
   Follow the instructions in `apps/ingestion/README.md` to populate your database.

5. **Deploy Orchestration**:
   Follow the instructions in `apps/retrieval-orchestration/README.md` to deploy the RAG API to the Azion Platform.

## Technologies Used

- **Azion Functions**: Serverless compute at the Azion Platform.
- **Azion SQL Database**: Distributed SQL database with vector support.
- **Azion AI Inference**: Serverless AI models (LLMs, Embeddings).
- **Hono**: Fast, lightweight web framework.

## References

- [Azion Documentation](https://www.azion.com/en/documentation/)
- [Azion AI Inference](https://www.azion.com/en/products/ai-inference/)
- [Azion SQL Database](https://www.azion.com/en/products/sql-database/)
