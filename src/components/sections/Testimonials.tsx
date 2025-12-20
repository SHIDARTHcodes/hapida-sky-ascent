import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

const Testimonials = () => {
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

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Abhay",
      role: "Doctor",
      content: "I gifted smart stick to my grandfather. He is very glad to have it. He is using it for early morning walks.",
      image: "https://hapida.in/wp-content/uploads/2024/03/vecteezy_man-avatar-vector-icon_6487917.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya",
      role: "GM, Hotel Lily",
      content: "I am using this stick as a daily routine as it is fully loaded with advanced features such as mobile charging.",
      image: "https://hapida.in/wp-content/uploads/2024/03/2289_SkVNQSBGQU1PIDEwMjgtMTE2-scaled.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Raghav",
      role: "Executive, TCS",
      content: "Bamboo smart stick is a great innovation with all the essential features such as torch and Bluetooth calling.",
      image: "https://hapida.in/wp-content/uploads/2024/03/pngwing.com-4.png",
      rating: 5,
    },
    {
      id: 4,
      name: "Neha",
      role: "Manager, Barclays",
      content: "I am greatly satisfied with smart stick. Very useful for my trekking experiences. I would highly recommend this.",
      image: "https://hapida.in/wp-content/uploads/2024/03/2289_SkVNQSBGQU1PIDEwMjgtMTEz-scaled.jpg",
      rating: 5,
    },
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Satisfied Customers" },
    { value: "10+", label: "Innovations" },
    { value: "5★", label: "Average Rating" },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pattern-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial opacity-40" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-sm font-bold text-amber-600 uppercase tracking-widest mb-4 px-4 py-2 bg-amber-50 rounded-full">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Client <span className="text-gradient-gold">Reviews</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Hear what our satisfied customers have to say about HAPIDA innovations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group p-8 md:p-10 rounded-3xl bg-white border border-border hover:border-amber-200 shadow-soft hover:shadow-elevated transition-all duration-500 hover-lift relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Quote decoration */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <Quote className="w-8 h-8 text-amber-400" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 font-medium">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-amber-200 shadow-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">{testimonial.name}</h4>
                  <p className="text-amber-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 hover-lift"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
