import React from "react";
import Navbar from "../../components/ui/Navbar"; 
import InvestmentHero from "./components/Hero";
import InvestmentPlansSection from "./components/Plans";
import Footer from "components/ui/Footer";



const InvestmentPlansPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
           <Navbar />
           
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
