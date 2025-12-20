import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UCQ174TZvhoC4E7Q33BvFNyA" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/hapida.in" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/hapida" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/hapida" },
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
    { name: "Electrolyte Pump (EV Charger)", href: "#innovations" },
    { name: "Mobile Chargeable Shoes", href: "#innovations" },
    { name: "Pinepeat Machine", href: "#innovations" },
  ];

  return (
    <footer id="contact" className="bg-surface pt-20 pb-8 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-light via-primary to-gold-dark flex items-center justify-center font-serif text-2xl font-bold text-primary-foreground">
                H
              </div>
              <div>
                <span className="text-xl font-serif font-semibold text-foreground">
                  HAPIDA <span className="text-gradient-gold">SKY</span>
                </span>
                <p className="text-xs text-muted-foreground">Private Limited</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              Empowering hilly areas and village life through science and technology. 
              Dare to Dream, Dare to Innovate with HAPIDA.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Innovations */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Our Innovations</h4>
            <ul className="space-y-3">
              {innovations.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Almora, Uttarakhand
                  <br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@hapida.in"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  contact@hapida.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners/Acknowledgements */}
        <div className="py-8 border-t border-b border-border/30 mb-8">
          <p className="text-center text-sm text-muted-foreground mb-6">Acknowledged by</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <img src="https://hapida.in/wp-content/uploads/2024/03/UTDB-logo_1.png" alt="UTDB" className="h-12 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="https://hapida.in/wp-content/uploads/2024/03/download.png" alt="Partner" className="h-12 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="https://hapida.in/wp-content/uploads/2024/03/download-1.png" alt="Partner" className="h-12 object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HAPIDA SKY PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
