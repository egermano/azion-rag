import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { KeyboardEvent, useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export const ChatInput = ({
  onSend,
  isLoading = false,
  placeholder = "Faça sua pergunta...",
}: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() && !isLoading) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="relative">
      <div
        className={cn(
          "flex items-end gap-2 p-2 rounded-2xl",
          "bg-card border border-border",
          "focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20",
          "transition-all duration-200"
        )}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={isLoading}
          rows={1}
          className={cn(
            "flex-1 resize-none bg-transparent",
            "px-3 py-2 text-sm text-foreground",
            "placeholder:text-muted-foreground",
            "focus:outline-none",
            "min-h-[44px] max-h-[200px]",
            "scrollbar-thin"
          )}
          style={{
            height: "auto",
            minHeight: "44px",
          }}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = Math.min(target.scrollHeight, 200) + "px";
          }}
        />

        <button
          onClick={handleSubmit}
          disabled={!input.trim() || isLoading}
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-xl",
            "flex items-center justify-center",
            "bg-primary text-primary-foreground",
            "hover:bg-primary/90 active:scale-95",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
            "transition-all duration-200"
          )}
        >
          <Send className={cn("w-4 h-4", isLoading && "animate-pulse")} />
        </button>
      </div>

      <p className="mt-2 text-xs text-center text-muted-foreground">
        Pressione Enter para enviar, Shift + Enter para nova linha. <br /> As
        respostas são baseadas nos documentos que você processou e podem não
        refletir a totalidade de informações.
      </p>
    </div>
  );
};
