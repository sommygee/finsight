import React from "react";
import Navbar from "../../components/ui/Navbar";
import HeroSection from "./components/HeroSection";
import MarketTicker from "../homepage-investment-intelligence-platform/components/MarketTicker";
import PlatformPreview from "../homepage-investment-intelligence-platform/components/PlatformPreview";
import BenefitsGrid from "../homepage-investment-intelligence-platform/components/BenefitsGrid";
import InvestmentPlansSection from "../investment-plans/components/Plans";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "components/ui/Footer";


const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Live Market Ticker */}
      <MarketTicker />

      {/* Platform Preview */}
      <PlatformPreview />

      {/* Benefits Grid */}
      <BenefitsGrid />

      {/* Pricing Plans */}
      <section id="pricing">
        <InvestmentPlansSection />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
