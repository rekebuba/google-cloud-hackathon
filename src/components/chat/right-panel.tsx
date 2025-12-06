"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookOpen, ExternalLink, Languages, X } from "lucide-react";

interface RightPanelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const resources = [
  { title: "Ethiopian Languages Guide", url: "#" },
  { title: "Translation Tips", url: "#" },
  { title: "Learning Resources", url: "#" },
  { title: "Government Forms Help", url: "#" },
];

export function RightPanel({
  isOpen,
  onClose,
  selectedLanguage,
  onLanguageChange,
}: RightPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="w-80 h-full bg-sidebar border-l border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
        <h2 className="font-semibold text-sidebar-foreground">Options</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-sidebar-foreground"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Language Selector */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sidebar-foreground">
            <Languages className="w-4 h-4" />
            <span className="text-sm font-medium">Response Language</span>
          </div>
          <Select value={selectedLanguage} onValueChange={onLanguageChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="amharic">አማርኛ (Amharic)</SelectItem>
              <SelectItem value="oromo">Afaan Oromoo</SelectItem>
              <SelectItem value="tigrigna">ትግርኛ (Tigrigna)</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="auto">Auto-detect</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Useful Resources */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sidebar-foreground">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Useful Resources</span>
          </div>
          <div className="space-y-2">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                className="flex items-center justify-between p-3 rounded-lg bg-sidebar-accent/50 hover:bg-sidebar-accent transition-colors group"
              >
                <span className="text-sm text-sidebar-foreground">
                  {resource.title}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-sidebar-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
