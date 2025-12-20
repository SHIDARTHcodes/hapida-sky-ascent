import { useState } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
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
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 shadow-xl shadow-violet-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-fuchsia-500/60 group ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open chat"
      >
        {/* Animated rings */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 animate-ping opacity-30" />
        <span className="absolute inset-1 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 animate-pulse opacity-50" />
        
        {/* Icon container */}
        <span className="relative z-10 flex items-center justify-center">
          <Sparkles className="w-7 h-7 text-white animate-pulse group-hover:animate-spin" />
        </span>
        
        {/* Online indicator */}
        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg shadow-green-400/50 animate-bounce" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] rounded-3xl overflow-hidden shadow-2xl transition-all duration-400 border border-border ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 p-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-white text-lg">HAPIDA Assistant</h3>
              <p className="text-sm text-white/80">Ask about our innovations</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 h-[calc(100%-160px)] overflow-y-auto p-5 space-y-4 bg-white">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === "user" ? "flex-row-reverse" : ""
              } animate-fade-up`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  message.role === "user"
                    ? "bg-amber-100"
                    : "bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30"
                }`}
              >
                {message.role === "user" ? (
                  <User className="w-5 h-5 text-amber-600" />
                ) : (
                  <Bot className="w-5 h-5 text-white" />
                )}
              </div>
              <div
                className={`max-w-[75%] p-4 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-br-md shadow-lg shadow-amber-500/20"
                    : "bg-slate-50 text-foreground rounded-bl-md border border-border"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 animate-fade-up">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-slate-50 text-foreground rounded-2xl rounded-bl-md border border-border p-4">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2.5 h-2.5 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-border">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about our innovations..."
              className="flex-1 bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
            />
            <Button
              variant="hero"
              size="icon"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="rounded-xl w-12 h-12"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
