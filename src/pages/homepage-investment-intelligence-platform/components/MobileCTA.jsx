import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "Smart Portfolio Tracking",
      description: "Monitor your investments with real-time updates and AI-powered insights.",
      icon: "PieChart",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Market Intelligence",
      description: "Get instant access to market data, trends, and expert analysis.",
      icon: "TrendingUp",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Learning on the Go",
      description: "Access investment courses and tutorials anytime, anywhere.",
      icon: "BookOpen",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Paper Trading",
      description: "Practice trading strategies risk-free with our simulation platform.",
      icon: "Activity",
      color: "from-purple-500 to-pink-600"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement?.scrollHeight;
      
      // Show CTA when user scrolls past 50% of the page
      if (scrollTop > windowHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mobile Feature Cards Section */}
      <section className="py-16 bg-gray-50 lg:hidden">
        <div className="max-w-sm mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Invest Smarter on Mobile
            </h2>
            <p className="text-gray-600">
              Take control of your financial future with our mobile-optimized platform.
            </p>
          </div>

          {/* Swipeable Feature Cards */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentFeature * 100}%)` }}
            >
              {features?.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${feature?.color} rounded-2xl p-6 text-white`}>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <Icon name={feature?.icon} size={24} color="white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature?.title}</h3>
                    <p className="text-white/90 text-sm">{feature?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {features?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentFeature ? 'bg-brand-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="space-y-3 mt-8">
            <Link to="/intelligent-dashboard" className="block">
              <Button 
                variant="default" 
                size="lg" 
                fullWidth 
                iconName="Smartphone" 
                iconPosition="left"
              >
                Start Investing Now
              </Button>
            </Link>
            <Link to="/market-explorer-research-center" className="block">
              <Button 
                variant="outline" 
                size="lg" 
                fullWidth 
                iconName="Play" 
                iconPosition="left"
              >
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Sticky Mobile CTA */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
          <div className="bg-white border-t border-gray-200 p-4 shadow-lg">
            <div className="flex space-x-3">
              <Link to="/market-explorer-research-center" className="flex-1">
                <Button 
                  variant="outline" 
                  fullWidth 
                  iconName="Play" 
                  iconPosition="left"
                  className="text-sm"
                >
                  Demo
                </Button>
              </Link>
              <Link to="/intelligent-dashboard" className="flex-2">
                <Button 
                  variant="default" 
                  fullWidth 
                  iconName="ArrowRight" 
                  iconPosition="right"
                  className="text-sm flex-grow"
                >
                  Get Started Free
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicator */}
            <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
              <Icon name="Shield" size={12} className="mr-1" />
              <span>Secure • No Credit Card Required</span>
            </div>
          </div>
        </div>
      )}
      {/* Mobile App Download Section */}
      <section className="py-16 bg-gradient-to-r from-brand-primary to-brand-secondary lg:hidden">
        <div className="max-w-sm mx-auto px-6 text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="Smartphone" size={32} color="white" />
          </div>
          
          <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
          <p className="text-blue-100 mb-6">
            Get notified when our mobile app launches with exclusive features for on-the-go investing.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span>iOS App</span>
              <span className="bg-white/20 px-2 py-1 rounded-full">Q2 2024</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-1 mt-2">
              <div className="bg-white h-1 rounded-full w-3/4"></div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span>Android App</span>
              <span className="bg-white/20 px-2 py-1 rounded-full">Q2 2024</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-1 mt-2">
              <div className="bg-white h-1 rounded-full w-2/3"></div>
            </div>
          </div>
          
          <Button 
            variant="default" 
            fullWidth 
            className="bg-white text-brand-primary hover:bg-gray-100"
            iconName="Bell" 
            iconPosition="left"
          >
            Notify Me
          </Button>
        </div>
      </section>
    </>
  );
};

export default MobileCTA;