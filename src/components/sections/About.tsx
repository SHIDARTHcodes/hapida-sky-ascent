import { Award, Target, Users, Zap } from "lucide-react";
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
      title: "Our Mission",
      description: "To deliver exceptional products that exceed customer expectations with uncompromising quality.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Building lasting relationships through personalized service and genuine care for our customers.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Every product is carefully selected to meet the highest standards of quality and craftsmanship.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving to bring you the latest trends and cutting-edge products in the market.",
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
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Building <span className="text-gradient-gold">Excellence</span> Together
          </h2>
          <p className="text-muted-foreground text-lg">
            HAPIDA SKY PRIVATE LIMITED is committed to transforming your shopping experience 
            with premium products, exceptional service, and unwavering dedication to quality.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Founder Section */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-surface-elevated to-surface overflow-hidden border border-border/50">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gold-light via-primary to-gold-dark flex items-center justify-center mb-6">
                      <span className="text-5xl font-serif font-bold text-primary-foreground">F</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Founder Name</h3>
                    <p className="text-primary font-medium mb-4">Founder & CEO</p>
                    <p className="text-muted-foreground text-sm">
                      A visionary leader with a passion for excellence and innovation in the e-commerce industry. 
                      Dedicated to building a brand that stands for quality and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl" />
            </div>
          </div>

          {/* Company Story */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              Our <span className="text-gradient-gold">Story</span>
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a vision to revolutionize the e-commerce landscape, HAPIDA SKY 
                PRIVATE LIMITED has grown from a small startup to a trusted name in premium retail.
              </p>
              <p>
                Our journey began with a simple belief: every customer deserves access to 
                exceptional products backed by outstanding service. Today, we continue to 
                uphold these values while expanding our reach and offerings.
              </p>
              <p>
                We take pride in our carefully curated selection, ensuring each product 
                meets our rigorous standards before reaching our customers.
              </p>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 rounded-xl glass">
                <div className="text-2xl font-serif font-bold text-gradient-gold">5+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="p-4 rounded-xl glass">
                <div className="text-2xl font-serif font-bold text-gradient-gold">50+</div>
                <div className="text-sm text-muted-foreground">Product Categories</div>
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
