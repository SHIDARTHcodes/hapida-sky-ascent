import { ShoppingBag, ArrowRight, Sparkles, Star, Zap, Gift, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import smartStickBss1 from "@/assets/products/smart-stick-bss1.png";
import smartStickBss2 from "@/assets/products/smart-stick-bss2.jpg";
import smartStickBss3 from "@/assets/products/smart-stick-bss3.png";

const featuredProducts = [
  { image: smartStickBss1, name: "Smart Stick BSS1", price: "₹1,540" },
  { image: smartStickBss2, name: "Smart Stick BSS-2", price: "₹3,400" },
  { image: smartStickBss3, name: "BSS3 Premium", price: "₹5,300" },
];

const Shop = () => {
  return (
    <section id="shop" className="relative py-0 overflow-hidden">
      {/* Attention-grabbing top banner */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-shimmer" />
        <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-white">
          <Zap className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-sm md:text-base tracking-wide">🎉 SPECIAL LAUNCH OFFERS - Shop Now & Get Exclusive Deals!</span>
          <Zap className="w-5 h-5 animate-pulse" />
        </div>
      </div>

      {/* Main Section */}
      <div className="relative py-20 md:py-28">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Multiple Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold animate-bounce">
                  <Zap className="w-4 h-4" />
                  Limited Time!
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/90 text-white rounded-full text-sm font-semibold animate-pulse">
                  <Gift className="w-4 h-4" />
                  Free Shipping
                </div>
              </div>
              
              {/* Heading */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Shop Our
                <span className="block text-yellow-200 drop-shadow-lg relative">
                  Innovation
                  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 20" fill="none">
                    <path d="M0 15 Q75 0 150 15 T300 15" stroke="#fef08a" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-lg leading-relaxed">
                Experience the future of walking sticks. Smart technology meets traditional craftsmanship from the hills of Uttarakhand.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
                <div className="text-center">
                  <p className="text-5xl font-bold text-yellow-200">5+</p>
                  <p className="text-white/80 text-sm">Products</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-yellow-200">100%</p>
                  <p className="text-white/80 text-sm">Handcrafted</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-yellow-200">500+</p>
                  <p className="text-white/80 text-sm">Happy Customers</p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/shop">
                  <Button 
                    size="lg" 
                    className="group bg-white text-amber-600 hover:bg-yellow-100 hover:text-amber-700 rounded-full px-12 py-8 text-xl font-bold shadow-2xl shadow-black/30 hover:shadow-black/40 transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
                  >
                    <ShoppingBag className="w-7 h-7 mr-3" />
                    Shop Now
                    <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10">
                <div className="flex items-center gap-2 text-white/90">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-medium">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Truck className="w-5 h-5" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  ))}
                  <span className="text-white/90 text-sm ml-2">5.0 Rating</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Product Showcase */}
            <div className="relative">
              {/* Main Product Card */}
              <div className="relative z-10">
                <Link to="/shop" className="block group">
                  <div className="bg-white backdrop-blur rounded-3xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-500 cursor-pointer border-4 border-yellow-300/50">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-amber-500 animate-spin" style={{ animationDuration: "3s" }} />
                        <span className="text-lg font-bold text-amber-600">Featured Products</span>
                      </div>
                      <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">HOT 🔥</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {featuredProducts.map((product, index) => (
                        <div key={index} className="text-center group/item">
                          <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden mb-3 group-hover/item:shadow-xl transition-all border-2 border-amber-100">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-contain p-2 group-hover/item:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <p className="text-sm font-semibold text-foreground truncate">{product.name}</p>
                          <p className="text-lg font-bold text-amber-600">{product.price}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t-2 border-amber-100 flex items-center justify-between">
                      <span className="text-muted-foreground font-medium">View all 5+ products</span>
                      <div className="flex items-center gap-2 text-amber-600 font-bold text-lg group-hover:gap-4 transition-all">
                        Shop Now <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-4 md:-right-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-2xl animate-bounce z-20 border-4 border-white">
                <span className="text-xs font-medium">Up to</span>
                <span className="text-3xl font-black">3%</span>
                <span className="text-xs font-medium">OFF</span>
              </div>
              
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl p-5 shadow-2xl z-20 border-2 border-green-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🇮🇳</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Made in India</p>
                    <p className="text-sm text-muted-foreground">Almora, Uttarakhand</p>
                  </div>
                </div>
              </div>

              {/* New floating element - Urgency */}
              <div className="absolute top-1/2 -left-4 md:-left-12 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-xl px-4 py-3 shadow-xl z-20 animate-pulse hidden lg:block">
                <p className="text-sm font-bold">⏰ Limited Stock!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom trust strip */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 py-4">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-8 text-amber-100">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">100% Authentic</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5" />
            <span className="text-sm font-medium">Pan India Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5" />
            <span className="text-sm font-medium">Gift Wrapping Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
