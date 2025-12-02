import { cn } from "@/lib/utils";

interface CitationBadgeProps {
  number: number;
  onClick?: () => void;
  isActive?: boolean;
}

export const CitationBadge = ({ number, onClick, isActive }: CitationBadgeProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center",
        "min-w-[1.25rem] h-5 px-1 mx-0.5",
        "text-xs font-semibold rounded",
        "transition-all duration-200",
        "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50",
        isActive
          ? "bg-primary text-primary-foreground"
          : "bg-surface-muted text-foreground hover:bg-primary/80 hover:text-primary-foreground"
      )}
    >
      [{number}]
    </button>
  );
};
