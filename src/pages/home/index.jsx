import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import HeroSection from './components/HeroSection';
import MarketTicker from '../homepage-investment-intelligence-platform/components/MarketTicker';
import PlatformPreview from '../homepage-investment-intelligence-platform/components/PlatformPreview';
import BenefitsGrid from '../homepage-investment-intelligence-platform/components/BenefitsGrid';
import InvestmentPlansSection from '../investment-plans/components/Plans';
import Footer from 'components/ui/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={24} color="#1e40af" />
              <span className="text-xl font-bold text-gray-900">FinSight</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-brand-primary font-medium transition-colors">
                Home
              </Link>
              <a href="#about" className="text-gray-700 hover:text-brand-primary font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-brand-primary font-medium transition-colors">
                Contact
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-brand-primary font-medium transition-colors">
                Investment Plans
              </a>
              <Link to="/blog" className="text-gray-700 hover:text-brand-primary font-medium transition-colors">
                Blog
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-brand-primary">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="default" size="sm" className="bg-brand-primary hover:bg-brand-primary/90">
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section (updated separately: removed demo button, changed Get Started wording) */}
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
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-6">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <span className="font-semibold">FinSight</span>, we empower investors with the tools, insights, 
            and confidence needed to make smarter investment decisions. 
            Our platform combines advanced analytics with a user-friendly experience.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With AI-driven insights, real-time data, and expert guidance, 
            we’re bridging the gap between professional investors and everyday individuals. 
            Whether you're a beginner or an experienced trader, FinSight is designed to grow with you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have questions? Our support team is here to help. 
            Whether it’s about our services, your account, or partnership opportunities, 
            we’re just a click away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact-support-hub" 
              className="inline-block px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition"
            >
              Get in Touch
            </Link>
            <a 
              href="mailto:support@finsight.com" 
              className="inline-block px-6 py-3 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
