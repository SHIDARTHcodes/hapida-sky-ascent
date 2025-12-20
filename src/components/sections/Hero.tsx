import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const Hero = () => {
  const fullText = "HAPIDA SKY PRIVATE LIMITED is a hub of innovation dedicated to transforming village life with groundbreaking technologies. From Smart Bamboo Sticks to the World's Fastest EV Charger — we dare to innovate.";
  
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, fullText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-[15%] w-72 h-72 bg-gradient-to-br from-amber-200/40 to-amber-400/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-gradient-to-br from-amber-300/30 to-orange-200/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial opacity-50" />
      
      {/* Decorative shapes */}
      <div className="absolute top-32 right-[20%] w-20 h-20 border-2 border-amber-300/30 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-32 left-[15%] w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-500/10 rounded-full animate-float-reverse" />
      <div className="absolute top-1/2 right-[8%] w-32 h-32 border border-amber-200/40 rounded-full animate-morph" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-soft border border-amber-100 mb-8 animate-fade-down">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-foreground">
              Innovation Hub from Uttarakhand
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 animate-fade-up delay-100">
            Empowering{" "}
            <span className="relative">
              <span className="text-gradient-gold">Hilly Areas</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 2 100 2 150 6C200 10 250 10 298 2" stroke="url(#gold-gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gold-gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#f59e0b"/>
                    <stop offset="1" stopColor="#d97706"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            <span className="animate-fade-up delay-200">Through Technology</span>
          </h1>

          {/* Subheading with typewriter effect */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up delay-300 min-h-[120px]">
            {displayedText.split(/(HAPIDA SKY PRIVATE LIMITED|Smart Bamboo Sticks|World's Fastest EV Charger)/).map((part, index) => {
              if (part === "HAPIDA SKY PRIVATE LIMITED" || part === "Smart Bamboo Sticks" || part === "World's Fastest EV Charger") {
                return <span key={index} className="text-foreground font-semibold text-gradient-gold">{part}</span>;
              }
              return <span key={index}>{part}</span>;
            })}
            {isTyping && (
              <span className="inline-block w-0.5 h-5 bg-amber-500 ml-1 animate-pulse" />
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-400">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#innovations">
                Explore Innovations
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="hero-dark" size="xl" asChild>
              <a href="#about">Meet the Founder</a>
            </Button>
          </div>

          {/* Stats - moved up */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 mt-10 pt-8 border-t border-amber-200/50 animate-fade-up delay-500">
            {[
              { value: "10+", label: "Innovations" },
              { value: "5+", label: "Years Research" },
              { value: "100%", label: "Made in India" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gradient-gold group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
