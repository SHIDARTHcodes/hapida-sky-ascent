import { Award, Target, Mountain, Zap, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.15
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const features = [{
    icon: Target,
    title: "Trekking Products",
    description: "Premium products designed specifically for trek enthusiasts exploring the Himalayas."
  }, {
    icon: Mountain,
    title: "Adventure Gear",
    description: "Most innovations by Hapida are related to adventure activities and outdoor exploration."
  }, {
    icon: Award,
    title: "Safety Standards",
    description: "We follow strict safety standards for all the products we innovate and manufacture."
  }, {
    icon: Zap,
    title: "Customisation",
    description: "Customised products are available according to client's specific requirements."
  }];
  const achievements = ["Honored by CM Trivendra Singh Rawat", "Recognized by Uttarakhand Forest Department", "National Innovation Foundation participant", "Multiple patents pending"];
  return <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-100/50 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-sm font-bold text-amber-600 uppercase tracking-widest mb-4 px-4 py-2 bg-amber-50 rounded-full">
            About HAPIDA
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Our <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            HAPIDA is a hub of innovation and creativity, dedicated to exploring groundbreaking 
            ideas and revolutionary technologies that shape the future of hilly areas and villages.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Founder Section */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated hover-lift">
                <img src="https://hapida.in/wp-content/uploads/2024/03/IMG_4905-836x1024.jpg" alt="Mr. Ravi Tamta - Founder of HAPIDA" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Founder & CEO</span>
                  <h3 className="text-white font-serif text-3xl font-bold mt-1">Mr. Ravi Tamta</h3>
                </div>
              </div>
              
              {/* Floating achievement card */}
              <div className="absolute -right-4 md:-right-8 top-8 glass p-5 rounded-2xl shadow-elevated animate-float max-w-[200px]">
                <Award className="w-4 h-4 text-amber-500 mb-2" />
                
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-amber-200 rounded-3xl" />
            </div>
          </div>

          {/* Founder Info */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="inline-block text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">
              The Visionary
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Innovating for a <span className="text-gradient-gold">Better Tomorrow</span>
            </h3>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                <span className="text-foreground font-medium">Ravi Tamta is the Founder and CEO of HAPIDA SKY PRIVATE LIMITED</span>, a young entrepreneur based in <span className="text-foreground font-medium">Almora, Uttarakhand</span>, known for his research 
                work related to innovation in hilly areas and village life.
              </p>
              <p>
                His innovations include <span className="text-foreground font-medium">Mobile Chargeable Shoes</span>, 
                <span className="text-foreground font-medium"> Smart Bamboo Stick</span>, and the 
                <span className="text-foreground font-medium"> World's Fastest Electric Vehicle Charger</span> — 
                and the count is still going on.
              </p>
            </div>
            
            {/* Achievements list */}
            <div className="mt-8 space-y-3">
              {achievements.map((achievement, index) => <div key={achievement} className="flex items-center gap-3 text-foreground" style={{
              animationDelay: `${500 + index * 100}ms`
            }}>
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="font-medium">{achievement}</span>
                </div>)}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 hover-lift">
                <div className="text-3xl font-serif font-bold text-gradient-gold">Almora</div>
                <div className="text-sm text-muted-foreground mt-1">Based in Uttarakhand</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 hover-lift">
                <div className="text-3xl font-serif font-bold text-gradient-gold">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Patents & Innovations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <div key={feature.title} className={`group p-8 rounded-3xl bg-white border border-border hover:border-amber-200 shadow-soft hover:shadow-elevated transition-all duration-500 hover-lift card-shine ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: `${600 + index * 100}ms`
        }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-amber-600" />
              </div>
              <h4 className="font-serif text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default About;