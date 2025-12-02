import { useState } from "react";
import { ChevronDown, ExternalLink, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ContextItem } from "@/types/rag";

interface ReferenceCardProps {
  reference: ContextItem;
  number: number;
  isHighlighted?: boolean;
}

export const ReferenceCard = ({ reference, number, isHighlighted }: ReferenceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedContent = reference.content.slice(0, 200).trim();
  const hasMore = reference.content.length > 200;
  const displayContent = isExpanded ? reference.content : truncatedContent + (hasMore ? "..." : "");

  return (
    <div
      id={`reference-${number}`}
      className={cn(
        "group rounded-lg border transition-all duration-300",
        "bg-card hover:bg-card/80",
        isHighlighted
          ? "border-primary shadow-lg shadow-primary/20 ring-1 ring-primary"
          : "border-border hover:border-muted-foreground/30"
      )}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left focus:outline-none"
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-bold text-primary">{number}</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <h4 className="text-sm font-semibold text-foreground truncate">
                {reference.filename}
              </h4>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {displayContent}
            </p>
          </div>

          <ChevronDown
            className={cn(
              "w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0",
              isExpanded && "rotate-180"
            )}
          />
        </div>
      </button>

      {reference.path && (
        <div className="px-4 pb-4 pt-0">
          <a
            href={reference.path}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-medium",
              "text-primary hover:text-primary/80 transition-colors",
              "focus:outline-none focus:underline"
            )}
          >
            <ExternalLink className="w-3 h-3" />
            View source
          </a>
        </div>
      )}
    </div>
  );
};
