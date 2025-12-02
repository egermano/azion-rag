import type { ChatMessage, ConfidenceLevel, ContextItem } from "@/types/rag";
import { useCallback, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3333";

interface APIResponse {
  question: string;
  answer: string;
  context: {
    content: string;
    filename: string;
  }[];
}

// Determine confidence level based on context presence
const determineConfidence = (context: ContextItem[]): ConfidenceLevel => {
  if (!context || context.length === 0) return "low";
  if (context.length >= 4) return "high";
  return "medium";
};

export const useRAGChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: content }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data: APIResponse = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        type: "assistant",
        content: data.answer,
        context: data.context,
        confidence: determineConfidence(data.context),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("RAG Error:", error);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        type: "assistant",
        content: "Desculpe, não consegui processar sua pergunta. Tente novamente.",
        confidence: "low",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages,
  };
};
