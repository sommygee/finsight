import React from "react";

const InvestmentHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Explore Our Investment Plans
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Choose the right plan to start your investment journey with FinSight.
          We provide flexible options designed to help you grow your wealth.
        </p>
        <a
          href="#plans"
          className="inline-block px-8 py-3 bg-white text-brand-primary font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default InvestmentHero;
