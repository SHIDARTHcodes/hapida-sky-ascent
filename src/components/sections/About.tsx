import { Award, Target, Mountain, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Target,
      title: "Trekking Products",
      description: "Premium products designed specifically for trek enthusiasts exploring the Himalayas.",
    },
    {
      icon: Mountain,
      title: "Adventure Gear",
      description: "Most innovations by Hapida are related to adventure activities and outdoor exploration.",
    },
    {
      icon: Award,
      title: "Safety Standards",
      description: "We follow strict safety standards for all the products we innovate and manufacture.",
    },
    {
      icon: Zap,
      title: "Customisation",
      description: "Customised products are available according to client's specific requirements.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-surface relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            About HAPIDA
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            HAPIDA is a hub of innovation and creativity, dedicated to exploring groundbreaking 
            ideas and revolutionary technologies that shape the future of hilly areas and villages.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Founder Section */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-surface-elevated to-surface overflow-hidden border border-border/50">
                <img 
                  src="https://hapida.in/wp-content/uploads/2024/03/IMG_4905-836x1024.jpg"
                  alt="Mr. Ravi Tamta - Founder of HAPIDA"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl" />
              
              {/* Achievement badge */}
              <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Honored by</p>
                    <p className="text-xs text-muted-foreground">CM Trivendra Singh Rawat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Info */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Founder
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mt-2 mb-4">
              Mr. <span className="text-gradient-gold">Ravi Tamta</span>
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A young entrepreneur based in Almora, Uttarakhand, known for his research 
                work related to innovation in hilly areas and village life.
              </p>
              <p>
                His innovations include <span className="text-foreground font-medium">Mobile Chargeable Shoes</span>, 
                <span className="text-foreground font-medium"> Smart Bamboo Stick</span>, and the 
                <span className="text-foreground font-medium"> World's Fastest Electric Vehicle Charger</span> - 
                and the count is still going on.
              </p>
              <p>
                We believe in the power of science and technology to transcend boundaries 
                and transform lives, particularly in hilly areas and villages.
              </p>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 rounded-xl glass">
                <div className="text-2xl font-serif font-bold text-gradient-gold">Almora</div>
                <div className="text-sm text-muted-foreground">Based in Uttarakhand</div>
              </div>
              <div className="p-4 rounded-xl glass">
                <div className="text-2xl font-serif font-bold text-gradient-gold">10+</div>
                <div className="text-sm text-muted-foreground">Patents & Innovations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-6 rounded-2xl glass hover:glass-gold transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-serif text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
