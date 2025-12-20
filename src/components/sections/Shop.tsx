import { ShoppingCart, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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
}

const products: Product[] = [
  {
    id: 1,
    name: "Smart Stick BSS1",
    category: "Bamboo Smart Stick",
    price: 1540,
    image: smartStickBss1,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Bamboo Stick BS2",
    category: "Bamboo Smart Stick",
    price: 860,
    image: bambooStickBs2,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Bamboo Stick BS1",
    category: "Bamboo Smart Stick",
    price: 340,
    image: bambooStickBs1,
    rating: 4.5,
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
  },
  {
    id: 5,
    name: "Bamboo Smart Stick BSS3",
    category: "Bamboo Smart Stick",
    price: 5300,
    image: smartStickBss3,
    rating: 5.0,
    badge: "Premium",
  },
];

const Shop = () => {
  const handleBuyNow = (productName: string, price: number) => {
    const message = encodeURIComponent(
      `Hello! I want to purchase "${productName}" (₹${price.toLocaleString('en-IN')}). Please provide me with the order details.`
    );
    window.open(`https://wa.me/919410915009?text=${message}`, "_blank");
  };

  return (
    <section id="shop" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Shop Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of smart bamboo products designed for modern living and adventure
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/50 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-slate-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {product.badge}
                  </span>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category */}
                <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase mb-2">
                  {product.category}
                </p>

                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
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

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-foreground">
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
                  className="w-full gap-2 rounded-xl"
                  onClick={() => handleBuyNow(product.name, product.price)}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Need a customized product? Contact us for special orders
          </p>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            onClick={() => window.open("https://wa.me/919410915009?text=Hello! I'm interested in a customized product. Please share the details.", "_blank")}
          >
            Request Custom Order
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
