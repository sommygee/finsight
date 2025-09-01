import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    users: 0,
    portfolios: 0,
    satisfaction: 0,
    markets: 0
  });

  const stats = [
    {
      key: 'users',
      label: 'Active Users',
      value: 250000,
      suffix: '+',
      icon: 'Users',
      color: '#1E40AF'
    },
    {
      key: 'portfolios',
      label: 'Portfolios Managed',
      value: 500000,
      suffix: '+',
      icon: 'PieChart',
      color: '#059669'
    },
    {
      key: 'satisfaction',
      label: 'User Satisfaction',
      value: 95,
      suffix: '%',
      icon: 'Star',
      color: '#EAB308'
    },
    {
      key: 'markets',
      label: 'Global Markets',
      value: 15,
      suffix: '+',
      icon: 'Globe',
      color: '#DC2626'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      stats?.forEach((stat) => {
        let startTime = null;
        const duration = 2000; // 2 seconds
        
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
          const currentValue = Math.floor(progress * stat?.value);
          setCounters(prev => ({
            ...prev,
            [stat?.key]: currentValue
          }));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer?.observe(element);
    }

    return () => {
      if (element) {
        observer?.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="BarChart3" size={16} color="white" />
            <span className="text-sm font-medium text-white">Our Impact</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted by Investors Worldwide
          </h2>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our platform continues to grow, helping investors make smarter decisions every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat) => (
            <div key={stat?.key} className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={28} color="white" />
              </div>
              
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {counters?.[stat?.key]?.toLocaleString()}{stat?.suffix}
              </div>
              
              <p className="text-blue-100 text-sm font-medium">
                {stat?.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-center space-x-2 text-white mb-2">
              <Icon name="TrendingUp" size={20} />
              <span className="text-lg font-semibold">Growing Every Day</span>
            </div>
            <p className="text-blue-100 text-sm">
              Join thousands of investors who trust FinSight for their investment intelligence needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;