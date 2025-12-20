import { ShoppingBag, ArrowRight, Sparkles, Star, Zap, Shield, Truck, Clock, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import smartStickBss1 from "@/assets/products/smart-stick-bss1.png";
import smartStickBss2 from "@/assets/products/smart-stick-bss2.jpg";
import smartStickBss3 from "@/assets/products/smart-stick-bss3.png";
import bambooStickBs1 from "@/assets/products/bamboo-stick-bs1.png";
import bambooStickBs2 from "@/assets/products/bamboo-stick-bs2.png";

const allProducts = [
  { id: 1, image: smartStickBss1, name: "Smart Stick BSS1", price: 1540, rating: 4.8, badge: "Bestseller" },
  { id: 2, image: smartStickBss2, name: "Smart Stick BSS-2", price: 3400, originalPrice: 3500, rating: 4.9, badge: "3% OFF" },
  { id: 3, image: smartStickBss3, name: "BSS3 Premium", price: 5300, rating: 5.0, badge: "Premium" },
  { id: 4, image: bambooStickBs2, name: "Bamboo Stick BS2", price: 860, rating: 4.6 },
  { id: 5, image: bambooStickBs1, name: "Bamboo Stick BS1", price: 340, rating: 4.5, badge: "Value Pick" },
];

const Shop = () => {
  const handleBuyNow = (productName: string, price: number) => {
    const message = encodeURIComponent(
      `Hello! I want to purchase "${productName}" (₹${price.toLocaleString('en-IN')}). Please provide me with the order details.`
    );
    window.open(`https://wa.me/919410915009?text=${message}`, "_blank");
  };

  return (
    <section id="shop" className="relative py-20 overflow-hidden bg-gradient-to-b from-amber-50 via-white to-orange-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            <Zap className="w-4 h-4" />
            Limited Time Offers - Shop Now!
            <Zap className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Shop Our <span className="text-gradient-gold">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted innovation from the hills of Uttarakhand. Each product is made with love and precision.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft">
            <Truck className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-medium">Free Shipping</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft">
            <Gift className="w-5 h-5 text-violet-600" />
            <span className="text-sm font-medium">Gift Wrapping</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft">
            <Clock className="w-5 h-5 text-red-600" />
            <span className="text-sm font-medium">Fast Delivery</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {allProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/50 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${
                    product.badge === "Premium" ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white" :
                    product.badge === "Bestseller" ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white" :
                    product.badge === "Value Pick" ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" :
                    "bg-gradient-to-r from-red-500 to-red-600 text-white"
                  }`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1 group-hover:text-amber-600 transition-colors truncate">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? "text-amber-400 fill-amber-400"
                          : "text-slate-200 fill-slate-200"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-foreground">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>

                {/* Buy Button */}
                <Button
                  variant="hero"
                  size="sm"
                  className="w-full gap-2 rounded-xl"
                  onClick={() => handleBuyNow(product.name, product.price)}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link to="/shop">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              View All Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur rounded-full px-6 py-3 shadow-soft">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              <span className="font-bold">500+</span> Happy Customers | <span className="font-bold">100%</span> Made in India 🇮🇳
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
