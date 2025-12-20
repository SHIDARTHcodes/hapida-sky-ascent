import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Smartphone, TreePine, ArrowRight } from "lucide-react";

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
      description:
        "Fully loaded with advanced features including mobile charging, torch, and Bluetooth calling capabilities.",
      image:
        "https://hapida.in/wp-content/uploads/2024/03/smart_bambo_stick.jpeg",
      icon: TreePine,
    },
    {
      id: 2,
      name: "Electrolyte Pump",
      category: "EV Technology",
      description:
        "World's fastest electric vehicle charger, inaugurated by Honorable CM at Haldwani, Uttarakhand.",
      image:
        "https://hapida.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-26-at-10.04.29-PM-2-1024x682.jpeg",
      icon: Zap,
      featured: true,
    },
    {
      id: 3,
      name: "Mobile Chargeable Shoes",
      category: "Wearable Tech",
      description:
        "Revolutionary footwear that generates power while walking to charge your mobile devices on the go.",
      image:
        "https://hapida.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-26-at-10.04.29-PM-1024x682.jpeg",
      icon: Smartphone,
    },
    {
      id: 4,
      name: "Pinepeat Machine",
      category: "Agricultural Innovation",
      description:
        "Innovative machinery designed to support agricultural practices in hilly terrains.",
      image: "https://hapida.in/wp-content/uploads/2025/12/IMG_0792.jpg",
      icon: TreePine,
    },
  ];

  return (
    <section
      id="innovations"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Innovations
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Groundbreaking <span className="text-gradient-gold">Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover revolutionary innovations designed to transform village life
            and empower communities in hilly areas across India.
          </p>
        </div>

        {/* Featured Innovation */}
        {innovations.filter(i => i.featured).map((innovation, index) => (
          <div
            key={innovation.id}
            className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 rounded-3xl glass-gold">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img
                  src={innovation.image}
                  alt={innovation.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Featured Innovation
                </div>
              </div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <innovation.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {innovation.category}
                </span>
                <h3 className="font-serif text-3xl font-bold mt-2 mb-4">{innovation.name}</h3>
                <p className="text-muted-foreground text-lg mb-6">{innovation.description}</p>
                <Button variant="hero" className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Other Innovations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {innovations.filter(i => !i.featured).map((innovation, index) => (
            <div
              key={innovation.id}
              className={`group relative rounded-2xl overflow-hidden bg-surface border border-border/50 hover:border-primary/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Innovation Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={innovation.image}
                  alt={innovation.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-surface/80 backdrop-blur flex items-center justify-center">
                  <innovation.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Innovation Info */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {innovation.category}
                </span>
                <h3 className="font-serif text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {innovation.name}
                </h3>
                <p className="text-sm text-muted-foreground">{innovation.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button variant="hero-outline" size="lg" className="group">
            View All Innovations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Innovations;
