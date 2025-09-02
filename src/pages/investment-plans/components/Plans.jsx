import React from "react";
import PricingPlans from "components/PricingPlans";

const InvestmentPlansSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-brand-primary">
        Our Investment Plans
      </h2>
      <PricingPlans showSectionPadding={false} />
    </section>
  );
};

export default InvestmentPlansSection;
