import { useState, useCallback, memo } from "react";
import { X, Send, Bot, User, Sparkles, Globe, Facebook, Instagram, Twitter, Youtube, ShoppingBag, Phone, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const handleImageClick = useCallback((src: string) => {
    setLightboxImage(src);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  const getAIResponse = useCallback((userMessage: string): { content: string; images?: string[] } => {
    const lowerMessage = userMessage.toLowerCase();
    const isHinglish = language === "hinglish";
    
    // Founder response with image
    if (lowerMessage.includes("founder") || lowerMessage.includes("ravi") || lowerMessage.includes("who started") || lowerMessage.includes("ceo") || lowerMessage.includes("owner")) {
      return {
        content: isHinglish
          ? `**Ravi Tamta HAPIDA SKY PRIVATE LIMITED ke Founder aur CEO hain.**

📍 Location: Almora, Uttarakhand
🎯 Focus: Hilly areas aur village life mein innovation

**Unke innovations:**
• 👟 Mobile Chargeable Shoes
• 🎋 Smart Bamboo Stick
• ⚡ World's Fastest EV Charger

**Achievements:**
✅ Honorable CM Mr. Trivendra Singh Rawat dwara sammanit
✅ Uttarakhand Forest Department dwara honored
✅ National Innovation Foundation participant

**Kyun follow karein?**
Ravi Tamta ek visionary entrepreneur hain jo technology se villages ko empower kar rahe hain!`
          : `**Ravi Tamta is the Founder and CEO of HAPIDA SKY PRIVATE LIMITED.**

📍 Location: Almora, Uttarakhand
🎯 Focus: Innovation in hilly areas and village life

**His Innovations:**
• 👟 Mobile Chargeable Shoes
• 🎋 Smart Bamboo Stick
• ⚡ World's Fastest EV Charger

**Achievements:**
✅ Felicitated by Honorable CM Mr. Trivendra Singh Rawat
✅ Honored by Uttarakhand Forest Department
✅ National Innovation Foundation participant

**Why follow him?**
A visionary entrepreneur empowering villages through technology!`,
        images: [founderImage],
      };
    }
    
    // Smart Stick with product images
    if (lowerMessage.includes("smart stick") || lowerMessage.includes("bamboo stick") || lowerMessage.includes("walking stick") || lowerMessage.includes("bss") || lowerMessage.includes("bs1") || lowerMessage.includes("bs2")) {
      return {
        content: isHinglish
          ? `🎋 **Smart Bamboo Stick** - Humara Flagship Product!

**Features:**
📱 Mobile charging - Chalte hue phone charge karo
🔦 Built-in torch - Raat mein raasta dekho
📞 Bluetooth calling - Hands-free calls
🥾 Lightweight bamboo - Easy to carry

**Product Range & Prices:**
• Bamboo Stick BS1 - ₹340 (Basic model)
• Bamboo Stick BS2 - ₹860 (Better grip)
• Smart Stick BSS1 - ₹1,540 (with charging)
• Smart Stick BSS2 - ₹3,400 (Premium features)
• Smart Stick BSS3 - ₹5,300 (Full loaded!)

**Kyun khareedein?**
✅ Trekking ke liye perfect
✅ Elderly ke liye ideal
✅ Made in India, eco-friendly bamboo
✅ 100% quality guaranteed

📞 Order karne ke liye WhatsApp karein!`
          : `🎋 **Smart Bamboo Stick** - Our Flagship Innovation!

**Advanced Features:**
📱 Mobile charging - Charge your phone while walking
🔦 Built-in torch - Navigate safely at night
📞 Bluetooth calling - Hands-free communication
🥾 Lightweight bamboo - Easy to carry anywhere

**Product Range & Prices:**
• Bamboo Stick BS1 - ₹340 (Basic model)
• Bamboo Stick BS2 - ₹860 (Enhanced grip)
• Smart Stick BSS1 - ₹1,540 (with charging)
• Smart Stick BSS2 - ₹3,400 (Premium features)
• Smart Stick BSS3 - ₹5,300 (Fully loaded!)

**Why Buy?**
✅ Perfect for trekking in Himalayas
✅ Ideal for elderly daily walks
✅ Made in India with eco-friendly bamboo
✅ 100% quality guaranteed

📞 Click WhatsApp button to order now!`,
        images: [bambooStickBS1, bambooStickBS2, smartStickBSS1, smartStickBSS3],
      };
    }
    
    // EV Charger with image
    if (lowerMessage.includes("ev charger") || lowerMessage.includes("electrolyte") || lowerMessage.includes("electric vehicle") || lowerMessage.includes("charger") || lowerMessage.includes("fastest")) {
      return {
        content: isHinglish
          ? `⚡ **Electrolyte Pump - Duniya ka Sabse Fast EV Charger!**

**Inauguration:**
🎀 Honorable CM Shri. Trivendra Singh Rawat
🎀 Honorable Minister Shri. Ajay Tamta
📍 Location: Haldwani, Uttarakhand

**Ye special kyun hai?**
• ⚡ Revolutionary charging technology
• 🚗 EV charging time mein dramatic reduction
• 🇮🇳 Made in India innovation
• 🌍 Global impact potential

**Benefits:**
✅ Time bachao - faster charging
✅ Environment friendly
✅ India ki EV revolution mein contribution

Is technology ne poore desh ka dhyan khicha hai!`
          : `⚡ **Electrolyte Pump - World's Fastest Electric Vehicle Charger!**

**Grand Inauguration:**
🎀 Honorable CM Shri. Trivendra Singh Rawat
🎀 Honorable Minister Shri. Ajay Tamta
📍 Location: Haldwani, Uttarakhand

**What Makes It Special?**
• ⚡ Revolutionary charging technology
• 🚗 Dramatically reduces EV charging time
• 🇮🇳 Made in India innovation
• 🌍 Global impact potential

**Benefits:**
✅ Save time with faster charging
✅ Environmentally friendly solution
✅ Contributing to India's EV revolution

This technology has caught national attention!`,
        images: [evChargerImage],
      };
    }
    
    // Products list with images
    if (lowerMessage.includes("product") || lowerMessage.includes("innovation") || lowerMessage.includes("what do you make") || lowerMessage.includes("all") || lowerMessage.includes("list") || lowerMessage.includes("shop")) {
      return {
        content: isHinglish
          ? `🌟 **HAPIDA Products & Innovations:**

**🎋 Smart Bamboo Sticks:**
• BS1: ₹340 - Basic model
• BS2: ₹860 - Better grip
• BSS1: ₹1,540 - Mobile charging
• BSS2: ₹3,400 - Premium (3% OFF!)
• BSS3: ₹5,300 - Fully loaded

**⚡ Electrolyte Pump:**
Duniya ka fastest EV charger!

**👟 Mobile Chargeable Shoes:**
Chalte hue phone charge karo!

**🌲 Pinepeat Machine:**
Agricultural innovation

**Hum specialize karte hain:**
🏔️ Trekking equipment
🎯 Adventure products
✅ Safety certified
🛠️ Custom products available

Kaunsa product pasand aaya?`
          : `🌟 **HAPIDA Products & Innovations:**

**🎋 Smart Bamboo Sticks:**
• BS1: ₹340 - Basic model
• BS2: ₹860 - Enhanced grip
• BSS1: ₹1,540 - Mobile charging
• BSS2: ₹3,400 - Premium (3% OFF!)
• BSS3: ₹5,300 - Fully loaded

**⚡ Electrolyte Pump:**
World's fastest EV charger!

**👟 Mobile Chargeable Shoes:**
Generate power while walking!

**🌲 Pinepeat Machine:**
Agricultural innovation

**We Specialize In:**
🏔️ Trekking equipment
🎯 Adventure products
✅ Safety certified
🛠️ Custom products available

Which product interests you?`,
        images: [bambooStickBS1, smartStickBSS1, smartStickBSS2, smartStickBSS3],
      };
    }
    
    // Price response
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much") || lowerMessage.includes("kitna") || lowerMessage.includes("rate")) {
      return {
        content: isHinglish
          ? `💰 **Product Prices:**

**Bamboo Sticks:**
• BS1 - ₹340 (Basic)
• BS2 - ₹860 (Better grip)

**Smart Sticks:**
• BSS1 - ₹1,540 (Mobile charging)
• BSS2 - ₹3,400 (3% OFF!)
• BSS3 - ₹5,300 (Premium)

**Contact:**
📞 Phone: +91-9410915009
📧 Email: info@hapida.in
📍 Kaflikhan, Almora, Uttarakhand

✨ Customization bhi available hai!`
          : `💰 **Product Pricing:**

**Bamboo Sticks:**
• BS1 - ₹340 (Basic)
• BS2 - ₹860 (Enhanced grip)

**Smart Sticks:**
• BSS1 - ₹1,540 (Mobile charging)
• BSS2 - ₹3,400 (3% OFF!)
• BSS3 - ₹5,300 (Premium)

**Contact:**
📞 Phone: +91-9410915009
📧 Email: info@hapida.in
📍 Kaflikhan, Almora, Uttarakhand

✨ Customization also available!`,
        images: [smartStickBSS1, smartStickBSS3],
      };
    }
    
    // Location/Contact
    if (lowerMessage.includes("location") || lowerMessage.includes("where") || lowerMessage.includes("address") || lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email") || lowerMessage.includes("kahan")) {
      return {
        content: isHinglish
          ? `📍 **HAPIDA SKY PRIVATE LIMITED**

**Address:**
Kaflikhan, Almora, Uttarakhand
India - 263623

**Contact:**
📞 Phone: +91-9410915009
📧 Email: info@hapida.in

**Social Media:**
🔵 Facebook | 📸 Instagram | 🐦 Twitter | 🎥 YouTube

Hum hilly areas aur village life ko technology se empower karte hain!`
          : `📍 **HAPIDA SKY PRIVATE LIMITED**

**Address:**
Kaflikhan, Almora, Uttarakhand
India - 263623

**Contact:**
📞 Phone: +91-9410915009
📧 Email: info@hapida.in

**Social Media:**
🔵 Facebook | 📸 Instagram | 🐦 Twitter | 🎥 YouTube

Dedicated to empowering hilly areas through technology!`,
      };
    }
    
    // Order/Buy
    if (lowerMessage.includes("order") || lowerMessage.includes("buy") || lowerMessage.includes("purchase") || lowerMessage.includes("whatsapp") || lowerMessage.includes("kharidna")) {
      return {
        content: isHinglish
          ? `🛒 **Order Kaise Karein?**

📱 **WhatsApp Order:**
Neeche green WhatsApp button press karein!

**Contact:**
📞 Phone: +91-9410915009
📧 Email: info@hapida.in

**Delivery:**
✅ All India shipping available
✅ Safe packaging
✅ Quality guaranteed

Abhi order karein!`
          : `🛒 **How to Order?**

📱 **WhatsApp Order:**
Click the green WhatsApp button below!

**Contact:**
📞 Phone: +91-9410915009
📧 Email: info@hapida.in

**Delivery:**
✅ All India shipping available
✅ Safe packaging
✅ Quality guaranteed

Order now!`,
        images: [smartStickBSS1, smartStickBSS3],
      };
    }
    
    // Reviews/Testimonials
    if (lowerMessage.includes("review") || lowerMessage.includes("testimonial") || lowerMessage.includes("feedback") || lowerMessage.includes("customer")) {
      return {
        content: isHinglish
          ? `⭐ **Customer Reviews:**

**Neha** - Manager, Barclays:
"Smart stick se bahut satisfied hoon. Trekking ke liye perfect!"

**Abhay** - Doctor:
"Grandfather ko gift diya, woh bahut khush hain morning walks ke liye."

**Priya** - GM, Hotel Lily:
"Daily use karti hoon, mobile charging feature amazing hai!"

**Raghav** - Executive, TCS:
"Bamboo smart stick great hai torch aur bluetooth features ke saath."

⭐⭐⭐⭐⭐ 100+ Happy Customers!`
          : `⭐ **Customer Reviews:**

**Neha** - Manager, Barclays:
"Very satisfied with smart stick. Perfect for trekking!"

**Abhay** - Doctor:
"Gifted to my grandfather, he loves it for morning walks."

**Priya** - GM, Hotel Lily:
"Using it daily, mobile charging feature is amazing!"

**Raghav** - Executive, TCS:
"Bamboo smart stick is great with torch and bluetooth features."

⭐⭐⭐⭐⭐ 100+ Happy Customers!`,
      };
    }
    
    // Greeting
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage.includes("namaste") || lowerMessage.includes("hii")) {
      return {
        content: isHinglish
          ? `Namaste! 🙏 HAPIDA SKY mein aapka swagat hai!

Main help kar sakta/sakti hoon:
• 🎋 Smart Bamboo Stick details
• ⚡ EV Charger ke baare mein
• 👤 Founder Ravi Tamta
• 💰 Product prices
• 📍 Contact info
• 📱 Social media links

Kya jaanna chahte ho?`
          : `Namaste! 🙏 Welcome to HAPIDA SKY!

I can help you with:
• 🎋 Smart Bamboo Stick details
• ⚡ EV Charger information
• 👤 Founder Ravi Tamta
• 💰 Product prices
• 📍 Contact info
• 📱 Social media links

What would you like to know?`,
      };
    }
    
    // Default
    return {
      content: isHinglish
        ? `HAPIDA mein interest ke liye dhanyavaad! 🙏

Main aapki help kar sakta/sakti hoon:
• 🎋 Smart Bamboo Stick
• ⚡ Electrolyte Pump (EV Charger)
• 👟 Mobile Chargeable Shoes
• 👤 Founder Ravi Tamta
• 💰 Prices aur ordering
• 📍 Contact details

Kya jaanna chahte ho?`
        : `Thank you for your interest in HAPIDA! 🙏

I can help you with:
• 🎋 Smart Bamboo Stick
• ⚡ Electrolyte Pump (EV Charger)
• 👟 Mobile Chargeable Shoes
• 👤 Founder Ravi Tamta
• 💰 Prices and ordering
• 📍 Contact details

What would you like to know?`,
    };
  }, [language]);

  const handleSend = useCallback(() => {
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

    setTimeout(() => {
      const response = getAIResponse(currentInput);
      const assistantMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: response.content,
        images: response.images,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 500);
  }, [input, isLoading, messages.length, getAIResponse]);

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
              <p className="text-xs text-white/80">Ask about our innovations</p>
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
