import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "👋 Namaste! Welcome to HAPIDA SKY. I'm here to help you learn about our innovations like the Smart Bamboo Stick, Electrolyte Pump (World's Fastest EV Charger), and more. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Knowledge base for HAPIDA
  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("founder") || lowerMessage.includes("ravi") || lowerMessage.includes("who started")) {
      return "HAPIDA was founded by Mr. Ravi Tamta, a young entrepreneur based in Almora, Uttarakhand. He is known for his research work related to innovation in hilly areas and village life. He has been honored by the Honorable Chief Minister Mr. Trivendra Singh Rawat and the Uttarakhand Forest Department for his innovative work.";
    }
    
    if (lowerMessage.includes("smart stick") || lowerMessage.includes("bamboo stick") || lowerMessage.includes("walking stick")) {
      return "The Smart Bamboo Stick is one of our flagship innovations! It comes with advanced features including:\n\n• Mobile charging capability\n• Built-in torch\n• Bluetooth calling\n• Perfect for trekking and daily walks\n\nIt's especially popular among elderly people and trekking enthusiasts. Would you like to know the price or how to order?";
    }
    
    if (lowerMessage.includes("ev charger") || lowerMessage.includes("electrolyte") || lowerMessage.includes("electric vehicle") || lowerMessage.includes("charger")) {
      return "The Electrolyte Pump is our groundbreaking innovation - it's the World's Fastest Electric Vehicle Charger! It was inaugurated by Honorable Chief Minister Shri. Trivendra Singh Rawat and Honorable Minister Shri. Ajay Tamta at Haldwani, Uttarakhand. This technology aims to revolutionize EV charging across India.";
    }
    
    if (lowerMessage.includes("shoes") || lowerMessage.includes("chargeable shoes") || lowerMessage.includes("mobile charging shoes")) {
      return "Our Mobile Chargeable Shoes are a revolutionary wearable technology! They generate electricity while you walk and can charge your mobile devices on the go. Perfect for trekkers, outdoor enthusiasts, and anyone in areas with limited electricity access.";
    }
    
    if (lowerMessage.includes("product") || lowerMessage.includes("innovation") || lowerMessage.includes("what do you make")) {
      return "HAPIDA specializes in innovative products for hilly areas and adventure enthusiasts:\n\n1. 🎋 Smart Bamboo Stick - with torch, mobile charging & Bluetooth\n2. ⚡ Electrolyte Pump - World's fastest EV charger\n3. 👟 Mobile Chargeable Shoes - generate power while walking\n4. 🌲 Pinepeat Machine - agricultural innovation\n\nWhich product would you like to know more about?";
    }
    
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much")) {
      return "For pricing and ordering information, please contact us directly:\n\n📧 Email: contact@hapida.in\n📍 Location: Almora, Uttarakhand\n\nWe also offer customization based on your specific requirements!";
    }
    
    if (lowerMessage.includes("location") || lowerMessage.includes("where") || lowerMessage.includes("address")) {
      return "HAPIDA SKY PRIVATE LIMITED is based in Almora, Uttarakhand, India. We are dedicated to empowering hilly areas and village life through science and technology. You can reach us at contact@hapida.in for any inquiries.";
    }
    
    if (lowerMessage.includes("customiz") || lowerMessage.includes("custom")) {
      return "Yes! We offer customized products according to your specific requirements. Whether it's a modified Smart Bamboo Stick for specific needs or other innovations, we can work with you. Please contact us at contact@hapida.in to discuss your requirements.";
    }
    
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Namaste! 🙏 Welcome to HAPIDA SKY. I can help you with:\n\n• Information about our innovations\n• Details about the founder Mr. Ravi Tamta\n• Product pricing and customization\n• Contact information\n\nWhat would you like to know?";
    }
    
    return "Thank you for your interest in HAPIDA! I can help you with information about our innovations like Smart Bamboo Stick, Electrolyte Pump (World's Fastest EV Charger), Mobile Chargeable Shoes, and more. You can also ask about our founder Mr. Ravi Tamta or how to contact us. What would you like to know?";
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response with knowledge base
    setTimeout(() => {
      const assistantMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: getAIResponse(input),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-gold-light via-primary to-gold-dark shadow-lg hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[560px] max-h-[calc(100vh-6rem)] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gold-dark via-primary to-gold-light p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-primary-foreground">HAPIDA Assistant</h3>
              <p className="text-xs text-primary-foreground/80">Ask about our innovations</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          >
            <X className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 h-[calc(100%-140px)] overflow-y-auto p-4 space-y-4 bg-surface">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === "user"
                    ? "bg-primary/20"
                    : "bg-gradient-to-br from-gold-light to-primary"
                }`}
              >
                {message.role === "user" ? (
                  <User className="w-4 h-4 text-primary" />
                ) : (
                  <Bot className="w-4 h-4 text-primary-foreground" />
                )}
              </div>
              <div
                className={`max-w-[75%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-surface-elevated text-foreground rounded-bl-sm border border-border/50"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-light to-primary flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-surface-elevated text-foreground rounded-2xl rounded-bl-sm border border-border/50 p-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-surface border-t border-border/50">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about our innovations..."
              className="flex-1 bg-surface-elevated border border-border/50 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <Button
              variant="hero"
              size="icon"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="rounded-xl"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
