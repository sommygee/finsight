import React from "react";
import NewsletterForm from "components/ui/NewsletterForm";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-brand-primary mb-6">
              About Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At <span className="font-semibold">FinSight</span>, we empower investors with 
              the tools, insights, and confidence needed to make smarter investment decisions. 
              Our platform combines advanced analytics with a user-friendly experience.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With AI-driven insights, real-time data, and expert guidance, we're bridging the 
              gap between professional investors and everyday individuals. Whether you're a 
              beginner or an experienced trader, FinSight is designed to grow with you.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-4 rounded-xl bg-gray-50 border">
                <h4 className="font-semibold text-gray-900 mb-2">🚀 Innovation</h4>
                <p className="text-gray-600 text-sm">
                  Cutting-edge AI tools designed to give you an edge in the market.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border">
                <h4 className="font-semibold text-gray-900 mb-2">🤝 Trust</h4>
                <p className="text-gray-600 text-sm">
                  Transparency and reliability at the heart of everything we do.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border">
                <h4 className="font-semibold text-gray-900 mb-2">📊 Insights</h4>
                <p className="text-gray-600 text-sm">
                  Real-time analytics and guidance tailored to your goals.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border">
                <h4 className="font-semibold text-gray-900 mb-2">🌍 Community</h4>
                <p className="text-gray-600 text-sm">
                  Join thousands of investors sharing knowledge and strategies.
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                📩 Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest market insights, expert strategies, 
                and FinSight platform news delivered straight to your inbox.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Image / Illustration */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
              alt="About FinSight"
              className="rounded-2xl shadow-lg border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
