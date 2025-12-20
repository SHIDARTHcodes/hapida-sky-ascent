import { lazy, Suspense, useEffect, memo } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Shop from "@/components/sections/Shop";

// Lazy load below-the-fold components for faster initial load
const About = lazy(() => import("@/components/sections/About"));
const Innovations = lazy(() => import("@/components/sections/Innovations"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const Footer = lazy(() => import("@/components/sections/Footer"));
const ChatBot = lazy(() => import("@/components/chat/ChatBot"));

// Simple loading skeleton
const SectionSkeleton = memo(() => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
  </div>
));

SectionSkeleton.displayName = "SectionSkeleton";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Shop />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Innovations />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    </div>
  );
};

export default memo(Index);
