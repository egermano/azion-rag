# RAG Web Interface

This is the frontend application for the RAG demonstration on the Azion Platform. It provides a chat interface for users to interact with the RAG system.

**Live Demo**: <https://clc4fojzyiw.map.azionedge.net>

## Features

- **Chat Interface**: A modern, responsive UI built with React and Tailwind CSS.
- **Real-time Responses**: Connects to the RAG Orchestration API.
- **Confidence Indicators**: Displays the confidence level of the AI answers.
- **Source Citations**: Shows the documents used to generate the answer.

## Tech Stack

- **Framework**: Vite + React
- **Language**: TypeScript
- **UI**: shadcn/ui, Tailwind CSS, Lucide React

## Getting Started

1. **Install dependencies**:

    ```bash
    npm install
    ```

2. **Configure Environment**:
    Create a `.env` file with the API URL:

    ```env
    VITE_API_URL=http://localhost:3333
    ```

3. **Run Development Server**:

    ```bash
    npm run dev
    ```

## Deployment

This application can be deployed as a static site on **Azion Edge Application**.

1. Build the project: `npm run build`
2. Deploy using Azion CLI or Console.
