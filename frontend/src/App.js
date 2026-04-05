import React from "react";
import "./App.css";
import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import TeamSection from "./components/sections/TeamSection";
import StopApplyingSection from "./components/sections/StopApplyingSection";
import WhySection from "./components/sections/WhySection";
import ProductsSection from "./components/sections/ProductsSection";
import StatsSection from "./components/sections/StatsSection";
import HowItWorks from "./components/sections/HowItWorks";
import PricingSection from "./components/sections/PricingSection";
import TestimonialsAndFAQ from "./components/sections/TestimonialsAndFAQ";
import { MessageCircle } from "lucide-react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <TeamSection />
      <StopApplyingSection />
      <WhySection />
      <ProductsSection />
      <StatsSection />
      <HowItWorks />
      <PricingSection />
      <TestimonialsAndFAQ />
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919494286653?text=Hi%20Jobnexa%20I%E2%80%99d%20like%20more%20information%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-3 border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
      >
        <MessageCircle size={20} className="text-green-500" />
        <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">WhatsApp Us</span>
      </a>
    </div>
  );
}

export default App;
