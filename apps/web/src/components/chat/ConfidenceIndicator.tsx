import { cn } from "@/lib/utils";
import type { ConfidenceLevel } from "@/types/rag";
import { Shield, ShieldAlert, ShieldCheck } from "lucide-react";

interface ConfidenceIndicatorProps {
  level: ConfidenceLevel;
}

const confidenceConfig = {
  high: {
    label: "Alta confiança",
    description: "Fontes diretamente correspondem às afirmações",
    icon: ShieldCheck,
    colorClass: "text-confidence-high",
    bgClass: "bg-confidence-high/10",
  },
  medium: {
    label: "Média confiança",
    description: "Fontes parciais / paráfrases",
    icon: Shield,
    colorClass: "text-confidence-medium",
    bgClass: "bg-confidence-medium/10",
  },
  low: {
    label: "Baixa confiança",
    description: "Nenhuma fonte ou afirmações sem suporte",
    icon: ShieldAlert,
    colorClass: "text-confidence-low",
    bgClass: "bg-confidence-low/10",
  },
};

export const ConfidenceIndicator = ({ level }: ConfidenceIndicatorProps) => {
  const config = confidenceConfig[level];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
        "text-xs font-medium",
        config.bgClass,
        config.colorClass
      )}
      title={config.description}
    >
      <Icon className="w-3.5 h-3.5" />
      <span>{config.label}</span>
    </div>
  );
};
