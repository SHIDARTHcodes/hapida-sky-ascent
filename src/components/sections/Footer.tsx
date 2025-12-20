import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import hapidaLogo from "@/assets/hapida-logo.png";

const Footer = () => {
  const socialLinks = [
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UCQ174TZvhoC4E7Q33BvFNyA", color: "hover:bg-red-500" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/hapida.in", color: "hover:bg-pink-500" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/hapida", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/hapida", color: "hover:bg-sky-500" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Innovations", href: "#innovations" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const innovations = [
    { name: "Smart Bamboo Stick", href: "#innovations" },
    { name: "Electrolyte Pump", href: "#innovations" },
    { name: "Mobile Chargeable Shoes", href: "#innovations" },
    { name: "Pinepeat Machine", href: "#innovations" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-surface-dark text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 pattern-dots" />
      </div>

      {/* Top wave */}
      <svg viewBox="0 0 1440 120" fill="none" className="w-full -mb-1">
        <path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#1a1f2e"/>
      </svg>

      <div className="pt-16 pb-8 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          {/* Main footer content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src={hapidaLogo} 
                  alt="HAPIDA SKY Private Limited" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Empowering hilly areas and village life through science and technology. 
                Dare to Dream, Dare to Innovate with HAPIDA.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-slate-300 ${social.color} transition-all duration-500 hover:scale-125 hover:rotate-6 hover:shadow-xl`}
                    style={{
                      animation: `float ${2 + index * 0.3}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`
                    }}
                    aria-label={social.name}
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-md ${social.color.replace('hover:', '')}`} />
                    
                    {/* Icon with pulse */}
                    <social.icon className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                    
                    {/* Floating particles */}
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 animate-ping" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Innovations */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-6 text-white">Our Innovations</h4>
              <ul className="space-y-3">
                {innovations.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-6 text-white">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-slate-400">
                    Almora, Uttarakhand
                    <br />
                    India
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <a
                    href="mailto:contact@hapida.in"
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    contact@hapida.in
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Partners/Acknowledgements */}
          <div className="py-10 border-t border-b border-slate-800 mb-8">
            <p className="text-center text-sm text-slate-500 mb-8 uppercase tracking-widest">Acknowledged by</p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <img src="https://hapida.in/wp-content/uploads/2024/03/UTDB-logo_1.png" alt="UTDB" className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://hapida.in/wp-content/uploads/2024/03/download.png" alt="Partner" className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://hapida.in/wp-content/uploads/2024/03/download-1.png" alt="Partner" className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} HAPIDA SKY PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-slate-500 hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-500 hover:text-amber-400 transition-colors">Terms of Service</a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white hover:bg-amber-600 hover:-translate-y-1 transition-all shadow-lg shadow-amber-500/30"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
