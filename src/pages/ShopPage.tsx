import { ShoppingCart, Star, Sparkles, ArrowLeft, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

import smartStickBss1 from "@/assets/products/smart-stick-bss1.png";
import smartStickBss2 from "@/assets/products/smart-stick-bss2.jpg";
import smartStickBss3 from "@/assets/products/smart-stick-bss3.png";
import bambooStickBs1 from "@/assets/products/bamboo-stick-bs1.png";
import bambooStickBs2 from "@/assets/products/bamboo-stick-bs2.png";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  badge?: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Smart Stick BSS1",
    category: "Bamboo Smart Stick",
    price: 1540,
    image: smartStickBss1,
    rating: 4.8,
    description: "Smart walking stick with torch & mobile charging",
  },
  {
    id: 2,
    name: "Bamboo Stick BS2",
    category: "Bamboo Smart Stick",
    price: 860,
    image: bambooStickBs2,
    rating: 4.6,
    description: "Classic bamboo stick with modern features",
  },
  {
    id: 3,
    name: "Bamboo Stick BS1",
    category: "Bamboo Smart Stick",
    price: 340,
    image: bambooStickBs1,
    rating: 4.5,
    description: "Essential bamboo walking stick",
  },
  {
    id: 4,
    name: "Smart Stick (BSS-2)",
    category: "Bamboo Smart Stick",
    price: 3400,
    originalPrice: 3500,
    image: smartStickBss2,
    rating: 4.9,
    badge: "3% OFF",
    description: "Advanced smart stick with Bluetooth calling",
  },
  {
    id: 5,
    name: "Bamboo Smart Stick BSS3",
    category: "Bamboo Smart Stick",
    price: 5300,
    image: smartStickBss3,
    rating: 5.0,
    badge: "Premium",
    description: "Premium all-in-one smart trekking companion",
  },
];

const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleBuyNow = (productName: string, price: number) => {
    const message = encodeURIComponent(
      `Hello! I want to purchase "${productName}" (₹${price.toLocaleString('en-IN')}). Please provide me with the order details.`
    );
    window.open(`https://wa.me/919410915009?text=${message}`, "_blank");
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 py-12 relative">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
                <span className="text-white/90 font-medium">HAPIDA Innovation Store</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-3">
                Shop Our Products
              </h1>
              <p className="text-lg text-white/80 max-w-xl">
                Discover innovation crafted for the hills. Each product is designed with love in Uttarakhand.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white shadow-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        {/* Stats Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 p-6 bg-white rounded-2xl shadow-soft border border-border/50">
          <div className="flex items-center gap-8">
            <div>
              <p className="text-3xl font-bold text-amber-600">{filteredProducts.length}</p>
              <p className="text-sm text-muted-foreground">Products</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-3xl font-bold text-green-600">100%</p>
              <p className="text-sm text-muted-foreground">Made in India</p>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <p className="text-3xl font-bold text-violet-600">5★</p>
              <p className="text-sm text-muted-foreground">Top Rated</p>
            </div>
          </div>
          <Button variant="outline" className="gap-2 rounded-full">
            <Filter className="w-4 h-4" />
            All Products
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/50 animate-fade-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-50 to-amber-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                    {product.badge}
                  </span>
                )}
                {/* Quick Buy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                  <Button
                    variant="hero"
                    className="gap-2 rounded-full px-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    onClick={() => handleBuyNow(product.name, product.price)}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase mb-2">
                  {product.category}
                </p>

                {/* Name */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-amber-400 fill-amber-400"
                          : "text-slate-200 fill-slate-200"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    ({product.rating})
                  </span>
                </div>

                {/* Price & Buy */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <span className="text-3xl font-bold text-foreground">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  <Button
                    variant="hero"
                    size="icon"
                    className="rounded-full w-12 h-12"
                    onClick={() => handleBuyNow(product.name, product.price)}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100 rounded-3xl p-12 border border-amber-200">
          <Sparkles className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Need Something Custom?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We create customized products according to your specific requirements. Contact us to discuss your needs.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="rounded-full px-10"
            onClick={() => window.open("https://wa.me/919410915009?text=Hello! I'm interested in a customized product. Please share the details.", "_blank")}
          >
            Request Custom Order
          </Button>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-medium">
            🌿 All products are handcrafted in Almora, Uttarakhand • 🇮🇳 Proudly Made in India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
