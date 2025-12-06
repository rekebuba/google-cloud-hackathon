"use client";

import { motion } from "framer-motion";
import { FileText, GraduationCap, HelpCircle, Languages } from "lucide-react";

const prompts = [
  {
    icon: FileText,
    title: "Explain a government form",
    description: "Get help understanding official documents",
    prompt: "Can you help me understand this government form?",
  },
  {
    icon: Languages,
    title: "Translate my text",
    description: "Translate between Ethiopian languages",
    prompt: "Please translate this text for me",
  },
  {
    icon: GraduationCap,
    title: "Help with studying",
    description: "Learn any subject in your language",
    prompt: "Can you teach me about Grade 10 Biology?",
  },
  {
    icon: HelpCircle,
    title: "General assistance",
    description: "Ask any question in your language",
    prompt: "I have a question about...",
  },
];

interface SuggestedPromptsProps {
  onSelect: (prompt: string) => void;
}

export function SuggestedPrompts({ onSelect }: SuggestedPromptsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {prompts.map((item, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onSelect(item.prompt)}
          className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl text-left hover:border-primary/50 hover:bg-muted/50 transition-all group"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-medium text-foreground text-sm">{item.title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {item.description}
            </p>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
