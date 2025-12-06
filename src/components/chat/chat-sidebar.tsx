"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Moon,
  Plus,
  Settings,
  Sun,
  Trash2,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

interface ChatSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  conversations: { id: string; title: string; date: string }[];
  activeConversation: string | null;
  onSelectConversation: (id: string) => void;
  onNewChat: () => void;
}

export function ChatSidebar({
  isCollapsed,
  onToggle,
  conversations,
  activeConversation,
  onSelectConversation,
  onNewChat,
}: ChatSidebarProps) {
  const { theme, setTheme } = useTheme();
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div
      className={cn(
        "h-full bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300",
        isCollapsed ? "w-16" : "w-72"
      )}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                LA
              </span>
            </div>
            <span className="font-semibold text-sidebar-foreground">
              Local AI
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* New Chat Button */}
      <div className="p-3">
        <Button
          onClick={onNewChat}
          className={cn(
            "w-full bg-primary hover:bg-primary/90 text-primary-foreground",
            isCollapsed ? "px-0" : ""
          )}
        >
          <Plus className="w-4 h-4" />
          {!isCollapsed && <span className="ml-2">New Chat</span>}
        </Button>
      </div>

      {/* Conversations List */}
      <ScrollArea className="flex-1 px-3">
        {!isCollapsed && (
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground px-2 py-2">
              Recent Conversations
            </p>
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => onSelectConversation(conv.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-colors group",
                  activeConversation === conv.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                )}
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <div className="flex-1 truncate">
                  <p className="truncate">{conv.title}</p>
                  <p className="text-xs text-muted-foreground">{conv.date}</p>
                </div>
                <Trash2 className="w-4 h-4 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-opacity" />
              </button>
            ))}
          </div>
        )}
      </ScrollArea>

      {/* Bottom Settings */}
      <div className="p-3 border-t border-sidebar-border space-y-2">
        {!isCollapsed && (
          <>
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={() => setShowSettings(!showSettings)}
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 mr-2" />
              ) : (
                <Moon className="w-4 h-4 mr-2" />
              )}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
          </>
        )}
        {isCollapsed && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="w-full text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-full text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
