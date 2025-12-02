import { cn } from "@/lib/utils";
import type { ChatMessage, ContextItem } from "@/types/rag";
import { Bot, User } from "lucide-react";
import { useState } from "react";
import { AnswerContent } from "./AnswerContent";
import { ConfidenceIndicator } from "./ConfidenceIndicator";
import { ReferenceCard } from "./ReferenceCard";

interface ChatMessageBubbleProps {
  message: ChatMessage;
}

export const ChatMessageBubble = ({ message }: ChatMessageBubbleProps) => {
  const [activeCitation, setActiveCitation] = useState<number | null>(null);
  const isUser = message.type === "user";

  const handleCitationClick = (citationNumber: number) => {
    setActiveCitation(citationNumber);
    const element = document.getElementById(`reference-${citationNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => setActiveCitation(null), 2000);
    }
  };

  // Deduplicate context by filename
  const deduplicatedContext = message.context?.reduce((acc, item) => {
    const existing = acc.find((i) => i.filename === item.filename);
    if (!existing || item.content.length > existing.content.length) {
      return [...acc.filter((i) => i.filename !== item.filename), item];
    }
    return acc;
  }, [] as ContextItem[]);

  return (
    <div
      className={cn(
        "flex gap-4 w-full",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
          isUser ? "bg-primary" : "bg-secondary"
        )}
      >
        {isUser ? (
          <User className="w-5 h-5 text-primary-foreground" />
        ) : (
          <Bot className="w-5 h-5 text-secondary-foreground" />
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex-1 max-w-3xl space-y-4",
          isUser && "flex flex-col items-end"
        )}
      >
        {/* Message bubble */}
        <div
          className={cn(
            "rounded-2xl px-5 py-4",
            isUser
              ? "bg-primary text-primary-foreground rounded-tr-sm"
              : "bg-card border border-border rounded-tl-sm"
          )}
        >
          {isUser ? (
            <p className="text-sm">{message.content}</p>
          ) : (
            <div className="space-y-4">
              <AnswerContent
                content={message.content}
                onCitationClick={handleCitationClick}
                activeCitation={activeCitation}
              />

              {/* Confidence indicator */}
              {message.confidence && (
                <div className="pt-2 border-t border-border">
                  <ConfidenceIndicator level={message.confidence} />
                </div>
              )}
            </div>
          )}
        </div>

        {/* References section for assistant messages */}
        {!isUser && deduplicatedContext && deduplicatedContext.length > 0 && (
          <div className="w-full space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
              <span className="w-6 h-px bg-border" />
              References
              <span className="w-6 h-px bg-border" />
            </h3>
            <div className="grid gap-3">
              {deduplicatedContext.map((ref, index) => (
                <ReferenceCard
                  key={`ref-${index}`}
                  reference={ref}
                  number={index + 1}
                  isHighlighted={activeCitation === index + 1}
                />
              ))}
            </div>
          </div>
        )}

        {/* No sources warning */}
        {!isUser && (!message.context || message.context.length === 0) && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-confidence-low" />
            Nenhuma fonte encontrada — verificar externamente
          </div>
        )}

        {/* Timestamp */}
        <span className="text-xs text-muted-foreground">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};
