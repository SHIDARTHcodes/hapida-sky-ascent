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

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-surface relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Client <span className="text-gradient-gold">Reviews</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear what our satisfied customers have to say about HAPIDA innovations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group p-6 md:p-8 rounded-2xl glass hover:glass-gold transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              
              {/* Content */}
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border/30 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold">5+</div>
            <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold">100+</div>
            <div className="text-sm text-muted-foreground mt-1">Satisfied Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold">10+</div>
            <div className="text-sm text-muted-foreground mt-1">Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold">5★</div>
            <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
