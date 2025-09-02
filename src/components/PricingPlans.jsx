// src/components/PricingPlans.jsx
import React from "react";
import { Link } from "react-router-dom";
import Icon from "./AppIcon";
import Button from "./ui/Button";

/**
 * PricingPlans
 * - 7-tier pricing grid styled to match the black/orange look
 * - props:
 *    heading?: string            -> section title (default: "Our best plans")
 *    ctaTo?: string              -> where "Invest now" sends users (default: "/login")
 *    showSectionPadding?: boolean-> add vertical padding for standalone pages
 */
const plans = [
  { name: "Starters", roi: "60.0 %", min: "50 USD", max: "999 USD", payout: "Every Day" },
  { name: "Basic", roi: "100.0 %", min: "1,000 USD", max: "9,999 USD", payout: "Every Day" },
  { name: "Silver", roi: "200.0 %", min: "10,000 USD", max: "49,999 USD", payout: "Every Day" },
  { name: "VIP", roi: "300.0 %", min: "50,000 USD", max: "99,999 USD", payout: "Every Day" },
  { name: "Premium", roi: "500.0 %", min: "100,000 USD", max: "499,999 USD", payout: "Every Day" },
  { name: "BIP MAX", roi: "700.0 %", min: "500,000 USD", max: "999,999 USD", payout: "Every Day" },
  { name: "Mine Room", roi: "900.0 %", min: "1,000,000 USD", max: "No Limit", payout: "Every Day" },
];

const Feature = ({ label, value }) => (
  <div className="flex items-center justify-between text-sm py-1.5">
    <div className="flex items-center gap-2">
      <Icon name="CheckCircle2" size={16} className="text-conversion-accent" />
      <span className="text-text-secondary">{label}</span>
    </div>
    <span className="font-medium text-foreground">{value}</span>
  </div>
);

export default function PricingPlans({
  heading = "Our best plans",
  ctaTo = "/login",
  showSectionPadding = true,
}) {
  return (
    <section className={showSectionPadding ? "py-14" : ""}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          <span className="text-conversion-accent">{heading}</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className="
                rounded-2xl border border-conversion-accent/70 bg-foreground/95 text-white
                shadow-lg overflow-hidden flex flex-col
              "
              style={{ backgroundColor: "#111827" }} // Tailwind slate-900 look
            >
              {/* Card header */}
              <div className="px-5 pt-5 pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-conversion-accent">{p.name}</h3>
                  <Icon name="Star" size={18} className="text-conversion-accent" />
                </div>
                <div className="mt-2 text-3xl font-extrabold">{p.roi}</div>
              </div>

              {/* Divider */}
              <div className="h-px bg-conversion-accent/40 mx-5" />

              {/* Features */}
              <div className="px-5 py-4 space-y-1">
                <Feature label="Minimum" value={p.min} />
                <Feature label="Maximum" value={p.max} />
                <Feature label="Capital Back" value="Yes" />
                <Feature label="Payout" value={p.payout} />
                <Feature label="Affiliate Bonus" value="Yes" />
                <Feature label="Fee" value="0%" />
              </div>

              {/* CTA */}
              <div className="px-5 pb-5 mt-auto">
                <Link to={ctaTo}>
                  <Button
                    variant="warning"
                    size="lg"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Invest now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
