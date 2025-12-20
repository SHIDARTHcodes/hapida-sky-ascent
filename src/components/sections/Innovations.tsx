import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Smartphone, TreePine, ArrowRight, Star } from "lucide-react";

interface Innovation {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  icon: React.ElementType;
  featured?: boolean;
}

const Innovations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const innovations: Innovation[] = [
    {
      id: 1,
      name: "Smart Bamboo Stick",
      category: "Trekking & Adventure",
      description: "Fully loaded with advanced features including mobile charging, torch, and Bluetooth calling capabilities.",
      image: "https://hapida.in/wp-content/uploads/2024/03/smart_bambo_stick.jpeg",
      icon: TreePine,
    },
    {
      id: 2,
      name: "Electrolyte Pump",
      category: "EV Technology",
      description: "World's fastest electric vehicle charger, inaugurated by Honorable CM at Haldwani, Uttarakhand.",
      image: "https://hapida.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-26-at-10.04.29-PM-2-1024x682.jpeg",
      icon: Zap,
      featured: true,
    },
    {
      id: 3,
      name: "Mobile Chargeable Shoes",
      category: "Wearable Tech",
      description: "Revolutionary footwear that generates power while walking to charge your mobile devices on the go.",
      image: "https://hapida.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-26-at-10.04.29-PM-1024x682.jpeg",
      icon: Smartphone,
    },
    {
      id: 4,
      name: "Pinepeat Machine",
      category: "Agricultural Innovation",
      description: "Innovative machinery designed to support agricultural practices in hilly terrains.",
      image: "https://hapida.in/wp-content/uploads/2025/12/IMG_0792.jpg",
      icon: TreePine,
    },
  ];

  return (
    <section
      id="innovations"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/40 to-transparent rounded-full blur-3xl" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 left-[10%] w-16 h-16 border-2 border-amber-200/50 rounded-full animate-float" />
      <div className="absolute bottom-40 right-[15%] w-12 h-12 bg-amber-200/30 rounded-lg rotate-45 animate-float-reverse" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-sm font-bold text-amber-600 uppercase tracking-widest mb-4 px-4 py-2 bg-amber-50 rounded-full">
            Our Innovations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Groundbreaking <span className="text-gradient-gold">Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Discover revolutionary innovations designed to transform village life 
            and empower communities in hilly areas across India.
          </p>
        </div>

        {/* Featured Innovation */}
        {innovations.filter(i => i.featured).map((innovation) => (
          <div
            key={innovation.id}
            className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-surface-dark to-slate-900 shadow-elevated overflow-hidden relative">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-500/20 blur-[100px]" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={innovation.image}
                  alt={innovation.name}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider">
                  <Star className="w-3 h-3 fill-white" />
                  Featured
                </div>
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-8 shadow-lg shadow-amber-500/30">
                  <innovation.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">
                  {innovation.category}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-5 text-white">{innovation.name}</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">{innovation.description}</p>
                <Button variant="hero" size="lg" className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Other Innovations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.filter(i => !i.featured).map((innovation, index) => (
            <div
              key={innovation.id}
              className={`group relative rounded-3xl overflow-hidden bg-white border border-border hover:border-amber-200 shadow-soft hover:shadow-elevated transition-all duration-500 hover-lift card-shine ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Innovation Image */}
              <div className="relative aspect-[4/3] overflow-hidden image-shine">
                <img
                  src={innovation.image}
                  alt={innovation.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <innovation.icon className="w-6 h-6 text-amber-600" />
                </div>

                {/* Category badge on image */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                    {innovation.category}
                  </span>
                </div>
              </div>

              {/* Innovation Info */}
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 group-hover:text-amber-600 transition-colors">
                  {innovation.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{innovation.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button variant="hero-outline" size="xl" className="group">
            View All Innovations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Innovations;
