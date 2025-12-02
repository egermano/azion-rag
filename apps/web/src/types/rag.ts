export interface ContextItem {
  filename: string;
  content: string;
  path?: string;
}

export interface RAGResponse {
  question: string;
  answer: string;
  context: ContextItem[];
}

export type ConfidenceLevel = 'high' | 'medium' | 'low';

export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  citations?: number[];
  context?: ContextItem[];
  confidence?: ConfidenceLevel;
  timestamp: Date;
}
