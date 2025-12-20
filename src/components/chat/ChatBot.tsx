import { useState } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles, Globe, Facebook, Instagram, Twitter, Youtube, ExternalLink, ShoppingBag, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

type Language = "english" | "hinglish";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("english");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "👋 Namaste! Welcome to HAPIDA SKY. I'm here to help you learn about our innovations like the Smart Bamboo Stick, Electrolyte Pump (World's Fastest EV Charger), and more. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const socialLinks = {
    facebook: "https://www.facebook.com/people/Ravi-Tamta/100008829753247/",
    instagram: "https://www.instagram.com/ravitamta.3/",
    twitter: "https://x.com/RAVITAMTA3",
    youtube: "https://www.youtube.com/@ravitamta.",
  };

  const responses = {
    english: {
      greeting: "Namaste! 🙏 Welcome to HAPIDA SKY. I can help you with:\n\n• Information about our innovations\n• Details about the founder Mr. Ravi Tamta\n• Product pricing and ordering\n• Contact information\n• Social media links\n\nWhat would you like to know?",
      founder: "**Ravi Tamta is the Founder and CEO of HAPIDA SKY PRIVATE LIMITED.**\n\nHe is a young entrepreneur based in Almora, Uttarakhand, known for his research work related to innovation in hilly areas and village life.\n\n**His innovations include:**\n• Mobile Chargeable Shoes\n• Smart Bamboo Stick\n• World's Fastest Electric Vehicle Charger\n• And many more!\n\n**Achievements:**\n• Felicitated by Honorable Chief Minister Mr. Trivendra Singh Rawat\n• Honored by Uttarakhand Forest Department\n• First Smart Bamboo Stick presented to Shri. Manoj Chandan (IFS, Chief Conservator of Forest)\n\n📱 Follow him on social media for updates!",
      smartStick: "🎋 **Smart Bamboo Stick** - Our Flagship Innovation!\n\nAdvanced features include:\n• 📱 Mobile charging capability\n• 🔦 Built-in torch/flashlight\n• 📞 Bluetooth calling\n• 🥾 Perfect for trekking and daily walks\n\n**Available Models & Prices:**\n• Bamboo Stick BS1 - ₹340\n• Bamboo Stick BS2 - ₹860\n• Smart Stick BSS1 - ₹1,540\n• Smart Stick BSS2 - ₹3,400 (On Sale!)\n• Smart Stick BSS3 - ₹5,300\n\nWould you like to order? I can connect you to WhatsApp!",
      evCharger: "⚡ **Electrolyte Pump - World's Fastest Electric Vehicle Charger!**\n\nThis groundbreaking innovation was inaugurated by:\n• Honorable Chief Minister Shri. Trivendra Singh Rawat\n• Honorable Minister Shri. Ajay Tamta\n\n📍 Location: Haldwani, Uttarakhand\n\nThis technology aims to revolutionize EV charging across India, making electric vehicles more practical for everyone!",
      shoes: "👟 **Mobile Chargeable Shoes**\n\nA revolutionary wearable technology!\n\n• Generates electricity while you walk\n• Can charge your mobile devices on the go\n• Perfect for trekkers and outdoor enthusiasts\n• Ideal for areas with limited electricity access\n\nPerfect for hilly regions where power supply can be unreliable!",
      products: "🌟 **HAPIDA Products & Innovations:**\n\n1. 🎋 **Smart Bamboo Stick** - with torch, mobile charging & Bluetooth\n   • BS1: ₹340 | BS2: ₹860\n   • BSS1: ₹1,540 | BSS2: ₹3,400 | BSS3: ₹5,300\n\n2. ⚡ **Electrolyte Pump** - World's fastest EV charger\n\n3. 👟 **Mobile Chargeable Shoes** - generate power while walking\n\n4. 🌲 **Pinepeat Machine** - agricultural innovation\n\n**We specialize in:**\n• 🏔️ Trekking equipment\n• 🎯 Adventure products\n• ✅ Safety standards certified\n• 🛠️ Custom products available\n\nWhich product interests you?",
      price: "💰 **Product Pricing:**\n\n**Bamboo Sticks:**\n• Bamboo Stick BS1 - ₹340\n• Bamboo Stick BS2 - ₹860\n\n**Smart Sticks:**\n• Smart Stick BSS1 - ₹1,540\n• Smart Stick BSS2 - ₹3,400 (3% OFF!)\n• Smart Stick BSS3 - ₹5,300\n\n📧 Email: info@hapida.in\n📞 Phone: +91-9410915009\n📍 Location: Kaflikhan, Almora, Uttarakhand\n\nWe also offer customization based on your requirements!",
      location: "📍 **HAPIDA SKY PRIVATE LIMITED**\n\n**Address:**\nKaflikhan, Almora, Uttarakhand\nIndia - 263623\n\n**Contact:**\n📞 Phone: +91-9410915009\n📧 Email: info@hapida.in\n\n**We are dedicated to:**\nEmpowering hilly areas and village life through science and technology!",
      custom: "🛠️ **Customization Available!**\n\nYes! We offer customized products according to your specific requirements:\n\n• Modified Smart Bamboo Sticks for specific needs\n• Custom adventure equipment\n• Specialized solutions for hilly terrain\n\n📧 Contact: info@hapida.in\n📞 Phone: +91-9410915009\n\nLet us know your requirements!",
      about: "🚀 **About HAPIDA SKY**\n\nHapida is a hub of innovation and creativity, dedicated to exploring groundbreaking ideas and revolutionary technologies.\n\n**Our Mission:**\nTo create solutions that elevate communities, empowering them to thrive through science and technology.\n\n**Our Focus:**\n• 🏔️ Solving challenges in hilly areas\n• 🌾 Improving village life\n• ⚡ Sustainable energy solutions\n• 🌱 Smart agricultural practices\n\n**Motto:** *Dare to Dream, Dare to Innovate with Hapida!*",
      testimonials: "⭐ **Customer Reviews:**\n\n**Neha** - Manager, Barclays:\n\"I am greatly satisfied with smart stick. Very useful for my trekking experiences. Highly recommend!\"\n\n**Abhay** - Doctor:\n\"I gifted smart stick to my grandfather. He is very glad to have it for early morning walks.\"\n\n**Priya** - GM, Hotel Lily:\n\"Using this stick daily as it is fully loaded with advanced features like mobile charging.\"\n\n**Raghav** - Executive, TCS:\n\"Bamboo smart stick is great innovation with torch and bluetooth calling features.\"",
      order: "🛒 **Ready to Order?**\n\nYou can order directly via WhatsApp!\n\n📱 Click here to connect: wa.me/919410915009\n\nOr contact us:\n📞 Phone: +91-9410915009\n📧 Email: info@hapida.in\n\nWe'll help you choose the right product for your needs!",
      social: "📱 **Follow Us on Social Media:**\n\n🔵 Facebook: facebook.com/RaviTamta\n📸 Instagram: @ravitamta.3\n🐦 Twitter/X: @RAVITAMTA3\n🎥 YouTube: @ravitamta\n\nStay updated with our latest innovations and news!",
      default: "Thank you for your interest in HAPIDA! I can help you with:\n\n• 🎋 Smart Bamboo Stick details\n• ⚡ Electrolyte Pump (World's Fastest EV Charger)\n• 👟 Mobile Chargeable Shoes\n• 👤 About Founder Mr. Ravi Tamta\n• 💰 Product prices\n• 📍 Contact & Location\n• 📱 Social media links\n• ⭐ Customer reviews\n\nWhat would you like to know?",
    },
    hinglish: {
      greeting: "Namaste! 🙏 HAPIDA SKY mein aapka swagat hai. Main aapki help kar sakta/sakti hoon:\n\n• Humare innovations ki jaankari\n• Founder Mr. Ravi Tamta ke baare mein\n• Product prices aur ordering\n• Contact information\n• Social media links\n\nAap kya jaanna chahte hain?",
      founder: "**Ravi Tamta HAPIDA SKY PRIVATE LIMITED ke Founder aur CEO hain.**\n\nWoh Almora, Uttarakhand se ek young entrepreneur hain, jo hilly areas aur village life mein innovation ke liye jaane jaate hain.\n\n**Unke innovations:**\n• Mobile Chargeable Shoes\n• Smart Bamboo Stick\n• World's Fastest Electric Vehicle Charger\n• Aur bahut kuch!\n\n**Achievements:**\n• Honorable CM Mr. Trivendra Singh Rawat dwara sammanit\n• Uttarakhand Forest Department dwara honored\n• First Smart Bamboo Stick Shri. Manoj Chandan (IFS) ko present kiya\n\n📱 Updates ke liye social media pe follow karein!",
      smartStick: "🎋 **Smart Bamboo Stick** - Humara Star Product!\n\nAdvanced features:\n• 📱 Mobile charging facility\n• 🔦 Built-in torch\n• 📞 Bluetooth calling\n• 🥾 Trekking aur daily walks ke liye perfect\n\n**Available Models & Prices:**\n• Bamboo Stick BS1 - ₹340\n• Bamboo Stick BS2 - ₹860\n• Smart Stick BSS1 - ₹1,540\n• Smart Stick BSS2 - ₹3,400 (Sale pe!)\n• Smart Stick BSS3 - ₹5,300\n\nOrder karna hai? WhatsApp pe connect karta/karti hoon!",
      evCharger: "⚡ **Electrolyte Pump - Duniya ka Sabse Fast EV Charger!**\n\nIs groundbreaking innovation ka inauguration hua:\n• Honorable CM Shri. Trivendra Singh Rawat\n• Honorable Minister Shri. Ajay Tamta\n\n📍 Location: Haldwani, Uttarakhand\n\nYeh technology poore India mein EV charging ko revolutionize karegi!",
      shoes: "👟 **Mobile Chargeable Shoes**\n\nEk revolutionary wearable technology!\n\n• Chalte hue electricity generate karta hai\n• Mobile devices on the go charge kar sakte ho\n• Trekkers aur outdoor enthusiasts ke liye perfect\n• Limited electricity wale areas ke liye ideal\n\nHilly regions ke liye bilkul sahi!",
      products: "🌟 **HAPIDA Products & Innovations:**\n\n1. 🎋 **Smart Bamboo Stick** - torch, mobile charging & Bluetooth ke saath\n   • BS1: ₹340 | BS2: ₹860\n   • BSS1: ₹1,540 | BSS2: ₹3,400 | BSS3: ₹5,300\n\n2. ⚡ **Electrolyte Pump** - Duniya ka fastest EV charger\n\n3. 👟 **Mobile Chargeable Shoes** - chalte hue power generate karo\n\n4. 🌲 **Pinepeat Machine** - agricultural innovation\n\n**Hum specialize karte hain:**\n• 🏔️ Trekking equipment\n• 🎯 Adventure products\n• ✅ Safety certified\n• 🛠️ Custom products available\n\nKaunsa product pasand aaya?",
      price: "💰 **Product Prices:**\n\n**Bamboo Sticks:**\n• Bamboo Stick BS1 - ₹340\n• Bamboo Stick BS2 - ₹860\n\n**Smart Sticks:**\n• Smart Stick BSS1 - ₹1,540\n• Smart Stick BSS2 - ₹3,400 (3% OFF!)\n• Smart Stick BSS3 - ₹5,300\n\n📧 Email: info@hapida.in\n📞 Phone: +91-9410915009\n📍 Location: Kaflikhan, Almora, Uttarakhand\n\nCustomization bhi available hai!",
      location: "📍 **HAPIDA SKY PRIVATE LIMITED**\n\n**Address:**\nKaflikhan, Almora, Uttarakhand\nIndia - 263623\n\n**Contact:**\n📞 Phone: +91-9410915009\n📧 Email: info@hapida.in\n\n**Humara mission:**\nScience aur technology se hilly areas aur village life ko empower karna!",
      custom: "🛠️ **Customization Available!**\n\nHaan! Hum aapki requirements ke according customized products offer karte hain:\n\n• Modified Smart Bamboo Sticks\n• Custom adventure equipment\n• Hilly terrain ke liye specialized solutions\n\n📧 Contact: info@hapida.in\n📞 Phone: +91-9410915009\n\nApni requirements batayein!",
      about: "🚀 **HAPIDA SKY Ke Baare Mein**\n\nHapida innovation aur creativity ka hub hai, jo groundbreaking ideas aur technologies explore karta hai.\n\n**Humara Mission:**\nScience aur technology se communities ko empower karna.\n\n**Humara Focus:**\n• 🏔️ Hilly areas ki challenges solve karna\n• 🌾 Village life improve karna\n• ⚡ Sustainable energy solutions\n• 🌱 Smart agricultural practices\n\n**Motto:** *Dare to Dream, Dare to Innovate with Hapida!*",
      testimonials: "⭐ **Customer Reviews:**\n\n**Neha** - Manager, Barclays:\n\"Smart stick se bahut satisfied hoon. Trekking ke liye bahut useful hai. Highly recommend!\"\n\n**Abhay** - Doctor:\n\"Apne grandfather ko gift diya. Woh bahut khush hain early morning walks ke liye.\"\n\n**Priya** - GM, Hotel Lily:\n\"Daily use kar rahi hoon, mobile charging jaise features ke saath loaded hai.\"\n\n**Raghav** - Executive, TCS:\n\"Bamboo smart stick great innovation hai torch aur bluetooth calling features ke saath.\"",
      order: "🛒 **Order Karna Hai?**\n\nWhatsApp pe directly order kar sakte ho!\n\n📱 Click karein: wa.me/919410915009\n\nYa contact karein:\n📞 Phone: +91-9410915009\n📧 Email: info@hapida.in\n\nHum aapko sahi product choose karne mein help karenge!",
      social: "📱 **Social Media Pe Follow Karein:**\n\n🔵 Facebook: facebook.com/RaviTamta\n📸 Instagram: @ravitamta.3\n🐦 Twitter/X: @RAVITAMTA3\n🎥 YouTube: @ravitamta\n\nLatest innovations aur news ke liye follow karein!",
      default: "HAPIDA mein interest ke liye dhanyavaad! Main help kar sakta/sakti hoon:\n\n• 🎋 Smart Bamboo Stick details\n• ⚡ Electrolyte Pump (Duniya ka Fastest EV Charger)\n• 👟 Mobile Chargeable Shoes\n• 👤 Founder Mr. Ravi Tamta ke baare mein\n• 💰 Product prices\n• 📍 Contact & Location\n• 📱 Social media links\n• ⭐ Customer reviews\n\nAap kya jaanna chahte hain?",
    },
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    const lang = responses[language];
    
    if (lowerMessage.includes("founder") || lowerMessage.includes("ravi") || lowerMessage.includes("who started") || lowerMessage.includes("ceo") || lowerMessage.includes("owner")) {
      return lang.founder;
    }
    
    if (lowerMessage.includes("smart stick") || lowerMessage.includes("bamboo stick") || lowerMessage.includes("walking stick") || lowerMessage.includes("bss") || lowerMessage.includes("bs1") || lowerMessage.includes("bs2")) {
      return lang.smartStick;
    }
    
    if (lowerMessage.includes("ev charger") || lowerMessage.includes("electrolyte") || lowerMessage.includes("electric vehicle") || lowerMessage.includes("charger") || lowerMessage.includes("fastest")) {
      return lang.evCharger;
    }
    
    if (lowerMessage.includes("shoes") || lowerMessage.includes("chargeable shoes") || lowerMessage.includes("mobile charging shoes")) {
      return lang.shoes;
    }
    
    if (lowerMessage.includes("product") || lowerMessage.includes("innovation") || lowerMessage.includes("what do you make") || lowerMessage.includes("all") || lowerMessage.includes("list")) {
      return lang.products;
    }
    
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much") || lowerMessage.includes("kitna") || lowerMessage.includes("rate")) {
      return lang.price;
    }
    
    if (lowerMessage.includes("location") || lowerMessage.includes("where") || lowerMessage.includes("address") || lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email") || lowerMessage.includes("kahan")) {
      return lang.location;
    }
    
    if (lowerMessage.includes("customiz") || lowerMessage.includes("custom")) {
      return lang.custom;
    }
    
    if (lowerMessage.includes("about") || lowerMessage.includes("company") || lowerMessage.includes("hapida") || lowerMessage.includes("mission") || lowerMessage.includes("journey")) {
      return lang.about;
    }
    
    if (lowerMessage.includes("review") || lowerMessage.includes("testimonial") || lowerMessage.includes("feedback") || lowerMessage.includes("customer")) {
      return lang.testimonials;
    }
    
    if (lowerMessage.includes("order") || lowerMessage.includes("buy") || lowerMessage.includes("purchase") || lowerMessage.includes("whatsapp") || lowerMessage.includes("kharidna")) {
      return lang.order;
    }
    
    if (lowerMessage.includes("social") || lowerMessage.includes("facebook") || lowerMessage.includes("instagram") || lowerMessage.includes("twitter") || lowerMessage.includes("youtube") || lowerMessage.includes("follow")) {
      return lang.social;
    }
    
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage.includes("namaste") || lowerMessage.includes("hii")) {
      return lang.greeting;
    }
    
    return lang.default;
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

  const handleLanguageChange = () => {
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
  };

  const openWhatsApp = () => {
    window.open("https://web.whatsapp.com/send?phone=919410915009&text=hii", "_blank");
  };

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
        <span className="text-xs font-medium text-foreground bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-border whitespace-nowrap">
          Chat with us
        </span>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] rounded-3xl overflow-hidden shadow-2xl transition-all duration-400 border border-border ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
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
            {/* Language Toggle */}
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
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 rounded-full text-xs font-medium text-white hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            <Facebook className="w-3 h-3" />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-medium text-white hover:from-purple-600 hover:to-pink-600 transition-colors whitespace-nowrap"
          >
            <Instagram className="w-3 h-3" />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-black rounded-full text-xs font-medium text-white hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            <Twitter className="w-3 h-3" />
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-red-600 rounded-full text-xs font-medium text-white hover:bg-red-700 transition-colors whitespace-nowrap"
          >
            <Youtube className="w-3 h-3" />
          </a>
        </div>

        {/* Language Indicator */}
        <div className="bg-white px-4 py-1.5 border-b border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            🌐 Language: <span className="font-medium text-foreground">{language === "english" ? "English" : "Hinglish"}</span>
          </span>
          <button
            onClick={handleLanguageChange}
            className="text-xs text-amber-600 hover:text-amber-700 font-medium"
          >
            Switch
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 h-[calc(100%-220px)] overflow-y-auto p-4 space-y-3 bg-white">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${
                message.role === "user" ? "flex-row-reverse" : ""
              } animate-fade-up`}
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
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
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
              placeholder={language === "english" ? "Ask about our innovations..." : "Humari innovations ke baare mein puchein..."}
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
    </>
  );
};

export default ChatBot;
