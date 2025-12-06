"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Copy, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export function ChatMessage({ role, content, timestamp }: ChatMessageProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex gap-3",
        role === "user" ? "justify-end" : "justify-start"
      )}
    >
      {role === "assistant" && (
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
          <span className="text-primary-foreground font-bold text-xs">AI</span>
        </div>
      )}

      <div
        className={cn(
          "max-w-[70%] group",
          role === "user" ? "order-first" : ""
        )}
      >
        <div
          className={cn(
            "rounded-2xl px-4 py-3",
            role === "user"
              ? "bg-primary text-primary-foreground rounded-tr-sm"
              : "bg-muted text-foreground rounded-tl-sm"
          )}
        >
          <p className="text-sm whitespace-pre-wrap">{content}</p>
        </div>

        <div
          className={cn(
            "flex items-center gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity",
            role === "user" ? "justify-end" : "justify-start"
          )}
        >
          <span className="text-xs text-muted-foreground">{timestamp}</span>
          {role === "assistant" && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={handleCopy}
              >
                {copied ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ThumbsUp className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ThumbsDown className="w-3 h-3" />
              </Button>
            </>
          )}
        </div>
      </div>

      {role === "user" && (
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
          <span className="text-foreground font-bold text-xs">U</span>
        </div>
      )}
    </motion.div>
  );
}
