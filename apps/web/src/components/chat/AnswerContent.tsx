import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { CitationBadge } from "./CitationBadge";
import { cn } from "@/lib/utils";

interface AnswerContentProps {
  content: string;
  onCitationClick?: (citationNumber: number) => void;
  activeCitation?: number | null;
}

export const AnswerContent = ({ content, onCitationClick, activeCitation }: AnswerContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { displayContent, hasMore, citations } = useMemo(() => {
    const citationRegex = /\[(\d+)\]/g;
    const foundCitations: number[] = [];
    let match;
    
    while ((match = citationRegex.exec(content)) !== null) {
      const num = parseInt(match[1], 10);
      if (!foundCitations.includes(num)) {
        foundCitations.push(num);
      }
    }

    const sentences = content.split(/(?<=[.!?])\s+/);
    const shortContent = sentences.slice(0, 3).join(" ");
    const needsExpansion = sentences.length > 3;

    return {
      displayContent: isExpanded || !needsExpansion ? content : shortContent,
      hasMore: needsExpansion,
      citations: foundCitations.sort((a, b) => a - b),
    };
  }, [content, isExpanded]);

  const renderContentWithCitations = (text: string) => {
    const parts = text.split(/(\[\d+\])/g);
    
    return parts.map((part, index) => {
      const citationMatch = part.match(/\[(\d+)\]/);
      if (citationMatch) {
        const num = parseInt(citationMatch[1], 10);
        return (
          <CitationBadge
            key={`citation-${index}`}
            number={num}
            onClick={() => onCitationClick?.(num)}
            isActive={activeCitation === num}
          />
        );
      }
      return <span key={`text-${index}`}>{part}</span>;
    });
  };

  return (
    <div className="space-y-3">
      <div className="text-foreground leading-relaxed">
        {renderContentWithCitations(displayContent)}
        {!isExpanded && hasMore && "..."}
      </div>

      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-medium",
            "text-primary hover:text-primary/80 transition-colors",
            "focus:outline-none focus:underline"
          )}
        >
          {isExpanded ? "Show less" : "Read more"}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              isExpanded && "rotate-180"
            )}
          />
        </button>
      )}
    </div>
  );
};
