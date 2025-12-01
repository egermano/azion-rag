# Agent Instructions for RAG Project on Azion

These instructions are for AI agents working within this repository. Follow these guidelines to ensure consistency, quality, and alignment with the project's architecture.

## Global Context

- **Project**: Retrieval-Augmented Generation (RAG) implementation example.
- **Platform**: Azion (Edge Functions, Edge Storage, Edge Application).
- **Primary Language**: TypeScript (`.ts`, `.tsx`).
- **UI Framework**: React (TypeScript).
- **Tooling**: Azion CLI.

## General Guidelines

### 1. Language & Style

- **TypeScript First**: All new code must be TypeScript. Avoid `.js` unless strictly necessary for configuration files.
- **Type Safety**: Avoid `any`. Define interfaces and types for RAG data structures (e.g., `Document`, `SearchResult`, `QueryRequest`).
- **Consistency**: Respect existing ESLint/Prettier configurations and import ordering.

### 2. Architecture & Design (Edge-First)

- **Edge Compatibility**: Design backend logic to run in **Azion Edge Functions**. Avoid Node.js-specific APIs that are incompatible with the Edge runtime unless using polyfills or verified compatible libraries.
- **RAG Separation of Concerns**:
  - **Ingestion**: Logic for processing documents, chunking, and indexing.
  - **Retrieval**: Logic for querying the index (vector search, keyword search).
  - **Generation**: Logic for constructing prompts and calling LLMs.
- **State Management**: Keep the Edge stateless. Use Azion Edge Storage or external databases for persistence.

### 3. UI Development (React)

- **Component Style**: Functional components with Hooks.
- **Data Fetching**: Fetch data from Edge Functions. Handle loading/error states gracefully.
- **RAG UX**:
  - clearly visualize the RAG process: User Query -> Retrieval (show sources) -> Generation (show answer).
  - Provide feedback on indexing status.

### 4. Infrastructure & Deployment

- **Azion CLI**: Use `azion` CLI commands for all infrastructure operations (deploy, build, init).
- **Configuration**: Prefer `azion.json` for project config.
- **Secrets**: NEVER hardcode API keys (OpenAI, Azion tokens, Vector DB keys). Use environment variables and instruct the user on how to set them via the Azion platform or CLI.

## Role-Specific Instructions

### Planner Agent

- **Objective**: Break down user requests into tasks compatible with the Azion + RAG stack.
- **Focus**:
  - Identify if a task requires changes to the Ingestion pipeline or the Query pipeline.
  - Determine if new Edge Functions or static assets are needed.
  - Plan for necessary environment variables and secrets.

### Implementer Agent

- **Objective**: Write code.
- **Focus**:
  - **Backend**: Implement `*.ts` functions for Edge execution. Ensure strict typing for vector embeddings and LLM responses.
  - **Frontend**: Implement `*.tsx` components.
  - **Integration**: Connect frontend forms to backend Edge Functions.
  - **Documentation**: Add JSDoc/comments for complex RAG logic (e.g., chunking strategies, similarity thresholds).

### Reviewer/QA Agent

- **Objective**: Validate code quality and architecture alignment.
- **Checks**:
  - Is it TypeScript?
  - Is there any hardcoded secret?
  - Does it run on the Edge (no heavy Node.js deps)?
  - Is the RAG flow logical (retrieval happens before generation)?
  - Are Azion CLI commands used correctly in instructions?

## Quick Reference: RAG Flow on Azion

1. **Ingest**: content -> Chunk -> Embed -> Store in Vector DB/Edge Storage.
2. **Query**: User Input -> Embed Query -> Search Vector DB -> Retrieve Context.
3. **Generate**: Context + Query -> LLM -> Stream Response to Edge -> Client.
