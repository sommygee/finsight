import React from "react";
import Navigation from '../navigation-landing-page/components/Navigation';
import InvestmentHero from "./components/Hero";
import InvestmentPlansSection from "./components/Plans";
import Footer from "components/ui/Footer";



const InvestmentPlansPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
           <Navigation />
           
      {/* Hero Section */}
      <main className="flex-grow">
        <InvestmentHero />
        <InvestmentPlansSection />
      </main>
        {/* Footer */}
        <Footer />
    </div>
  );
};

export default InvestmentPlansPage;
