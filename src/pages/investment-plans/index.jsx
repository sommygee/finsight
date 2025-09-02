import React from "react";
import InvestmentHero from "./Hero";
import InvestmentPlansSection from "./Plans";
import Footer from "components/ui/Footer";

const InvestmentPlansPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <InvestmentHero />
      <InvestmentPlansSection />
      <Footer />
    </div>
  );
};

export default InvestmentPlansPage;
