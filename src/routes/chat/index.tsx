import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessage } from "@/components/chat/chat-message";
import { ChatSidebar } from "@/components/chat/chat-sidebar";
import { RightPanel } from "@/components/chat/right-panel";
import { SuggestedPrompts } from "@/components/chat/suggested-prompts";
import { TypingIndicator } from "@/components/chat/typing-indicator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Menu, PanelRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const mockConversations = [
  { id: "1", title: "Translation help", date: "Today" },
  { id: "2", title: "Biology homework", date: "Yesterday" },
  { id: "3", title: "Government form explanation", date: "2 days ago" },
];

const mockResponses = [
  'I\'d be happy to help you with that! Let me translate your text. Here\'s the translation:\n\nOriginal: "Hello, how are you?"\nAmharic: "ሰላም፣ እንዴት ነህ?"\n\nIs there anything else you\'d like me to translate?',
  "Great question! Let me explain this concept in detail. In biology, photosynthesis is the process by which plants convert sunlight into energy. Here's a breakdown:\n\n1. Light absorption by chlorophyll\n2. Water molecules are split\n3. Carbon dioxide is converted to glucose\n\nWould you like me to explain any part in more detail?",
  "I understand you need help with a government form. This form is typically used for business registration. Here are the key sections:\n\n• Section 1: Personal Information\n• Section 2: Business Details\n• Section 3: Tax Information\n\nLet me know which section you'd like me to explain in Amharic or another language.",
];

export const Route = createFileRoute("/chat/")({
  component: ChatPage,
});

function ChatPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeConversation, setActiveConversation] = useState<string | null>(
    null
  );
  const [selectedLanguage, setSelectedLanguage] = useState("auto");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    await new Promise((resolve) =>
      setTimeout(resolve, 1500 + Math.random() * 1000)
    );

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: mockResponses[Math.floor(Math.random() * mockResponses.length)],
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setIsLoading(false);
    setMessages((prev) => [...prev, aiResponse]);
  };

  const handleNewChat = () => {
    setMessages([]);
    setActiveConversation(null);
  };

  const handleSelectConversation = (id: string) => {
    setActiveConversation(id);
    // Load mock conversation
    setMessages([
      {
        id: "1",
        role: "user",
        content: "Can you help me translate something?",
        timestamp: "10:30 AM",
      },
      {
        id: "2",
        role: "assistant",
        content:
          "Of course! I'd be happy to help you translate. Please share the text you'd like me to translate, and let me know the target language (Amharic, Afan Oromo, Tigrigna, or English).",
        timestamp: "10:31 AM",
      },
    ]);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-background">
      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 lg:relative lg:z-0
        transform transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <ChatSidebar
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          conversations={mockConversations}
          activeConversation={activeConversation}
          onSelectConversation={handleSelectConversation}
          onNewChat={handleNewChat}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <header className="h-14 border-b border-border flex items-center justify-between px-4 bg-background">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2 lg:hidden">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">
                  LA
                </span>
              </div>
              <span className="font-semibold text-foreground">Local AI</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setRightPanelOpen(!rightPanelOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              <PanelRight className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col min-w-0">
            <ScrollArea className="flex-1 p-4">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center max-w-2xl mx-auto">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-2xl font-bold text-foreground mb-2 text-center">
                    How can I help you today?
                  </h1>
                  <p className="text-muted-foreground mb-2 text-center">
                    Ask me anything in Amharic, Oromo, Tigrigna, or English
                  </p>
                  <p className="text-primary/70 mb-8 text-center">
                    ዛሬ እንዴት ልርዳዎት እችላለሁ?
                  </p>
                  <SuggestedPrompts onSelect={handleSendMessage} />
                </div>
              ) : (
                <div className="max-w-3xl mx-auto space-y-6">
                  {messages.map((message) => (
                    <ChatMessage
                      key={message.id}
                      role={message.role}
                      content={message.content}
                      timestamp={message.timestamp}
                    />
                  ))}
                  {isLoading && <TypingIndicator />}
                  <div ref={scrollRef} />
                </div>
              )}
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-background">
              <div className="max-w-3xl mx-auto">
                <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Local AI can make mistakes. Please verify important
                  information.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <RightPanel
            isOpen={rightPanelOpen}
            onClose={() => setRightPanelOpen(false)}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        </div>
      </div>
    </div>
  );
}
