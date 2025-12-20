import { useState, useCallback, memo } from "react";
import { X, Send, Bot, User, Sparkles, Globe, Facebook, Instagram, Twitter, Youtube, ShoppingBag, Phone, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

// Import product images
import bambooStickBS1 from "@/assets/products/bamboo-stick-bs1.png";
import bambooStickBS2 from "@/assets/products/bamboo-stick-bs2.png";
import smartStickBSS1 from "@/assets/products/smart-stick-bss1.png";
import smartStickBSS2 from "@/assets/products/smart-stick-bss2.jpg";
import smartStickBSS3 from "@/assets/products/smart-stick-bss3.png";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  images?: string[];
}

type Language = "english" | "hinglish";

const socialLinks = {
  facebook: "https://www.facebook.com/people/Ravi-Tamta/100008829753247/",
  instagram: "https://www.instagram.com/ravitamta.3/",
  twitter: "https://x.com/RAVITAMTA3",
  youtube: "https://www.youtube.com/@ravitamta.",
};

const founderImage = "https://hapida.in/wp-content/uploads/2024/03/IMG_4905-836x1024.jpg";
const evChargerImage = "https://hapida.in/wp-content/uploads/2024/03/IMG_0792-1024x768.jpg";

// Image Lightbox Component
const ImageLightbox = memo(({ src, onClose }: { src: string; onClose: () => void }) => (
  <div 
    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
    onClick={onClose}
  >
    <button
      onClick={onClose}
      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
    >
      <X className="w-6 h-6 text-white" />
    </button>
    <img
      src={src}
      alt="Zoomed view"
      className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-scale-in"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
));

ImageLightbox.displayName = "ImageLightbox";

// Memoized Message Component for performance
const ChatMessage = memo(({ message, onImageClick }: { message: Message; onImageClick: (src: string) => void }) => (
  <div
    className={`flex gap-2 ${message.role === "user" ? "flex-row-reverse" : ""} animate-fade-up`}
  >
    <div
      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
        message.role === "user"
          ? "bg-amber-100"
          : "bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30"
      }`}
    >
      {message.role === "user" ? (
        <User className="w-4 h-4 text-amber-600" />
      ) : (
        <Bot className="w-4 h-4 text-white" />
      )}
    </div>
    <div className="max-w-[80%] space-y-2">
      <div
        className={`p-3 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
          message.role === "user"
            ? "bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-br-md shadow-lg shadow-amber-500/20"
            : "bg-slate-50 text-foreground rounded-bl-md border border-border"
        }`}
      >
        {message.content}
      </div>
      {message.images && message.images.length > 0 && (
        <div className="grid grid-cols-2 gap-2">
          {message.images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative group cursor-pointer"
              onClick={() => onImageClick(img)}
            >
              <img
                src={img}
                alt="Product"
                className="w-full h-24 object-cover rounded-xl border border-border shadow-sm group-hover:scale-105 group-hover:shadow-lg transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 rounded-xl transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
));

ChatMessage.displayName = "ChatMessage";

// Helper function to detect product-related keywords and attach images
const getImagesForResponse = (userMessage: string, aiResponse: string): string[] => {
  const lowerMessage = userMessage.toLowerCase();
  const lowerResponse = aiResponse.toLowerCase();
  
  // Check for founder-related content
  if (lowerMessage.includes("founder") || lowerMessage.includes("ravi") || lowerMessage.includes("ceo") || 
      lowerResponse.includes("ravi tamta") || lowerResponse.includes("founder")) {
    return [founderImage];
  }
  
  // Check for EV charger content
  if (lowerMessage.includes("ev charger") || lowerMessage.includes("electrolyte") || 
      lowerMessage.includes("electric vehicle") || lowerResponse.includes("electrolyte pump") ||
      lowerResponse.includes("ev charger")) {
    return [evChargerImage];
  }
  
  // Check for smart stick/bamboo stick content
  if (lowerMessage.includes("smart stick") || lowerMessage.includes("bamboo") || 
      lowerMessage.includes("bss") || lowerMessage.includes("bs1") || lowerMessage.includes("bs2") ||
      lowerResponse.includes("smart stick") || lowerResponse.includes("bamboo stick")) {
    return [bambooStickBS1, bambooStickBS2, smartStickBSS1, smartStickBSS3];
  }
  
  // Check for products/all products
  if (lowerMessage.includes("product") || lowerMessage.includes("innovation") || 
      lowerMessage.includes("price") || lowerMessage.includes("all") ||
      lowerResponse.includes("products") || lowerResponse.includes("₹340") || lowerResponse.includes("₹860")) {
    return [bambooStickBS1, smartStickBSS1, smartStickBSS2, smartStickBSS3];
  }
  
  return [];
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("english");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "👋 Namaste! Welcome to HAPIDA SKY. I'm here to help you learn about our innovations like the Smart Bamboo Stick, Electrolyte Pump (World's Fastest EV Charger), and more. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleImageClick = useCallback((src: string) => {
    setLightboxImage(src);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('hapida-chat', {
        body: { message: currentInput, language },
      });

      if (error) {
        console.error("Edge function error:", error);
        throw new Error(error.message);
      }

      if (data.error) {
        throw new Error(data.error);
      }

      const aiResponse = data.response;
      const images = getImagesForResponse(currentInput, aiResponse);
      
      const assistantMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: aiResponse,
        images: images.length > 0 ? images : undefined,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
      
      // Fallback response
      const fallbackMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: language === "hinglish" 
          ? "Maaf kijiye, abhi response nahi mil paya. Kripya dobara try karein ya WhatsApp pe contact karein: +91-9410915009"
          : "Sorry, I couldn't process your request right now. Please try again or contact us on WhatsApp: +91-9410915009",
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages.length, language, toast]);

  const handleLanguageChange = useCallback(() => {
    const newLang = language === "english" ? "hinglish" : "english";
    setLanguage(newLang);
    const langMessage = newLang === "hinglish" 
      ? "🌐 Language changed to Hinglish! Ab main aapko Hinglish mein jawab dunga/dungi."
      : "🌐 Language changed to English! I'll now respond in English.";
    
    setMessages((prev) => [...prev, {
      id: prev.length + 1,
      role: "assistant",
      content: langMessage,
    }]);
  }, [language]);

  const openWhatsApp = useCallback(() => {
    window.open("https://web.whatsapp.com/send?phone=919410915009&text=hii", "_blank");
  }, []);

  return (
    <>
      {/* Chat Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2 transition-all duration-300 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 shadow-xl shadow-violet-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-fuchsia-500/60 group relative"
          aria-label="Open chat"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 animate-ping opacity-30" />
          <span className="absolute inset-1 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 animate-pulse opacity-50" />
          <span className="relative z-10 flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-white animate-pulse group-hover:animate-spin" />
          </span>
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg shadow-green-400/50 animate-bounce" />
        </button>
        <span className="text-xs font-medium text-foreground bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-border whitespace-nowrap">
          Chat with us
        </span>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 border border-border ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-white text-base">HAPIDA Assistant</h3>
              <p className="text-xs text-white/80">Powered by AI</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleLanguageChange}
              className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              title={`Switch to ${language === "english" ? "Hinglish" : "English"}`}
            >
              <Globe className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-amber-50 border-b border-amber-100 p-2 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setInput("Products")}
            className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full text-xs font-medium text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors whitespace-nowrap"
          >
            <ShoppingBag className="w-3 h-3" />
            Products
          </button>
          <button
            onClick={openWhatsApp}
            className="flex items-center gap-1 px-3 py-1.5 bg-green-500 rounded-full text-xs font-medium text-white hover:bg-green-600 transition-colors whitespace-nowrap"
          >
            <Phone className="w-3 h-3" />
            WhatsApp
          </button>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 rounded-full text-xs font-medium text-white hover:bg-blue-700 transition-colors">
            <Facebook className="w-3 h-3" />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-medium text-white hover:from-purple-600 hover:to-pink-600 transition-colors">
            <Instagram className="w-3 h-3" />
          </a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1.5 bg-black rounded-full text-xs font-medium text-white hover:bg-gray-800 transition-colors">
            <Twitter className="w-3 h-3" />
          </a>
          <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1.5 bg-red-600 rounded-full text-xs font-medium text-white hover:bg-red-700 transition-colors">
            <Youtube className="w-3 h-3" />
          </a>
        </div>

        {/* Language Indicator */}
        <div className="bg-white px-4 py-1.5 border-b border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            🌐 Language: <span className="font-medium text-foreground">{language === "english" ? "English" : "Hinglish"}</span>
          </span>
          <button onClick={handleLanguageChange} className="text-xs text-amber-600 hover:text-amber-700 font-medium">
            Switch
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 h-[calc(100%-220px)] overflow-y-auto p-4 space-y-3 bg-white">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} onImageClick={handleImageClick} />
          ))}
          {isLoading && (
            <div className="flex gap-2 animate-fade-up">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-50 text-foreground rounded-2xl rounded-bl-md border border-border p-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-border">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={language === "english" ? "Ask about products, founder..." : "Products, founder ke baare mein puchein..."}
              className="flex-1 bg-slate-50 border border-border rounded-xl px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
            />
            <Button
              variant="hero"
              size="icon"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="rounded-xl w-10 h-10"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {lightboxImage && (
        <ImageLightbox src={lightboxImage} onClose={closeLightbox} />
      )}
    </>
  );
};

export default memo(ChatBot);
