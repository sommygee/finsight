import React from "react";
import { useNavigate } from "react-router-dom";

// Temporary auth simulation
const isAuthenticated = false; // 🔒 Change to true to test logged-in flow

const plans = [
  { name: "Starters", roi: "60.0%", min: "50 USD", max: "999 USD", payout: "Every Day" },
  { name: "Basic", roi: "100.0%", min: "1,000 USD", max: "9,999 USD", payout: "Every Day" },
  { name: "Silver", roi: "200.0%", min: "10,000 USD", max: "49,999 USD", payout: "Every Day" },
  { name: "VIP", roi: "300.0%", min: "50,000 USD", max: "99,999 USD", payout: "Every Day" },
  { name: "Premium", roi: "500.0%", min: "100,000 USD", max: "499,999 USD", payout: "Every Day" },
  { name: "BIP MAX", roi: "700.0%", min: "500,000 USD", max: "999,999 USD", payout: "Every Day" },
  { name: "Mine Room", roi: "900.0%", min: "1,000,000 USD", max: "No Limit", payout: "Every Day" },
];

const InvestmentPlansSection = () => {
  const navigate = useNavigate();

  const handleInvestNow = () => {
    if (isAuthenticated) {
      navigate("/intelligent-dashboard"); // If logged in → dashboard
    } else {
      navigate("/signup"); // If not logged in → signup
    }
  };

  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brand-primary mb-12">
          Our Pricing Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>

              <ul className="text-gray-700 space-y-2 mb-6 text-left">
                <li>📈 ROI: <span className="font-semibold">{plan.roi}</span></li>
                <li>💵 Minimum: <span className="font-semibold">{plan.min}</span></li>
                <li>💰 Maximum: <span className="font-semibold">{plan.max}</span></li>
                <li>⏱ Payout: <span className="font-semibold">{plan.payout}</span></li>
              </ul>

              <button
                onClick={handleInvestNow}
                className="mt-auto inline-block px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition"
              >
                Invest Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlansSection;
