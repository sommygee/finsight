import React from "react";
import Header from "../../components/ui/Header";
import InvestmentHero from "./components/Hero";
import InvestmentPlansSection from "./components/Plans";


const InvestmentPlansPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <main className="flex-grow">
        <InvestmentHero />
        <InvestmentPlansSection />
      </main>

    </div>
  );
};

export default InvestmentPlansPage;
