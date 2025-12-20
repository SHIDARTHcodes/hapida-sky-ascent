import { memo } from "react";
import { ShoppingBag, ArrowRight, Sparkles, Star, Zap } from "lucide-react";
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
    <section id="shop" className="relative py-24 overflow-hidden">
      {/* Simplified Background for faster rendering */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Limited Time Offers Available!
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Shop Our
              <span className="block text-yellow-200 drop-shadow-lg">Innovation</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Experience the future of walking sticks. Smart technology meets traditional craftsmanship from Uttarakhand.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-200">5+</p>
                <p className="text-white/80 text-sm">Products</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-200">100%</p>
                <p className="text-white/80 text-sm">Handcrafted</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-200">500+</p>
                <p className="text-white/80 text-sm">Happy Customers</p>
              </div>
            </div>
            
            <Link to="/shop">
              <Button 
                size="lg" 
                className="group bg-white text-amber-600 hover:bg-yellow-100 hover:text-amber-700 rounded-full px-10 py-7 text-lg font-bold shadow-2xl shadow-black/20 hover:shadow-black/30 transition-all duration-300 hover:scale-105"
              >
                <ShoppingBag className="w-6 h-6 mr-3" />
                Explore Shop
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                ))}
              </div>
              <span className="text-white/90 font-medium">Rated 5.0 by customers</span>
            </div>
          </div>
          
          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="relative z-10">
              <Link to="/shop" className="block group">
                <div className="bg-white/95 backdrop-blur rounded-3xl p-6 shadow-2xl transform group-hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold text-amber-600">Featured Products</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {featuredProducts.map((product, index) => (
                      <div key={index} className="text-center group/item">
                        <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden mb-3 group-hover/item:shadow-lg transition-shadow">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-contain p-2 group-hover/item:scale-110 transition-transform duration-300"
                            loading="eager"
                            decoding="async"
                          />
                        </div>
                        <p className="text-xs font-medium text-foreground truncate">{product.name}</p>
                        <p className="text-sm font-bold text-amber-600">{product.price}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">View all products</span>
                    <div className="flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
                      Shop Now <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-red-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl z-20">
              <span className="text-xs">Up to</span>
              <span className="text-2xl font-bold">3%</span>
              <span className="text-xs">OFF</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🇮🇳</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Made in India</p>
                  <p className="text-xs text-muted-foreground">Almora, Uttarakhand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Shop);
