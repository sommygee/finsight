import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentDataPoint, setCurrentDataPoint] = useState(0);
  
  const dataPoints = [
    { label: "Active Portfolios", value: "500K+", trend: "up" },
    { label: "User Satisfaction", value: "95%", trend: "up" },
    { label: "Market Coverage", value: "15K+", trend: "stable" },
    { label: "Daily Insights", value: "1M+", trend: "up" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDataPoint((prev) => (prev + 1) % dataPoints?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-primary via-blue-900 to-brand-secondary overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-transparent animate-pulse-subtle"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl animate-float"></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Icon name="TrendingUp" size={16} color="white" />
              <span className="text-sm font-medium">Next-Gen Investment Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Invest with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Transform your financial future with AI-powered investment insights and professional-grade tools. 
              Make smarter decisions with data-driven intelligence and expert guidance at your fingertips.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/signup">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-white text-brand-primary hover:bg-gray-100 shadow-lg"
                  iconName="ArrowRight" 
                  iconPosition="right"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Dynamic Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {dataPoints?.map((point, index) => (
                <div 
                  key={point?.label}
                  className={`text-center transition-all duration-500 ${
                    index === currentDataPoint ? 'scale-110 opacity-100' : 'opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold">{point?.value}</span>
                    <Icon 
                      name={point?.trend === 'up' ? 'TrendingUp' : 'Minus'} 
                      size={16} 
                      color={point?.trend === 'up' ? '#10B981' : '#6B7280'} 
                      className="ml-1"
                    />
                  </div>
                  <p className="text-sm text-blue-200">{point?.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Portfolio Overview</h3>
                  <div className="flex items-center space-x-2 text-emerald-600">
                    <Icon name="TrendingUp" size={16} />
                    <span className="text-sm font-medium">+12.5%</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Value</span>
                    <span className="text-2xl font-bold text-gray-800">$127,450</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-brand-primary to-emerald-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-500">Stocks</div>
                      <div className="font-semibold text-gray-800">65%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Bonds</div>
                      <div className="font-semibold text-gray-800">25%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Crypto</div>
                      <div className="font-semibold text-gray-800">10%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
