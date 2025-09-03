import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BenefitsGrid = () => {
  const benefits = [
    {
      title: 'Learn & Grow',
      description: 'Master investment strategies through interactive courses, expert insights, and hands-on practice with our comprehensive learning platform.',
      icon: 'GraduationCap',
      features: [
        'Interactive Learning Modules',
        'Expert-Led Masterclasses',
        'Progress Tracking',
        'Certification Programs'
      ],
      link: '/market-explorer-research-center',
      buttonText: 'Start Learning',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Analyze & Decide',
      description: 'Make informed decisions with AI-powered analytics, real-time market data, and comprehensive research tools at your fingertips.',
      icon: 'BarChart3',
      features: [
        'AI-Driven Insights',
        'Real-Time Market Data',
        'Risk Assessment Tools',
        'Performance Analytics'
      ],
      link: '/market-explorer-research-center',
      buttonText: 'Explore Analytics',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Trade & Track',
      description: 'Execute strategies with confidence using our advanced trading simulator and comprehensive portfolio tracking tools.',
      icon: 'Activity',
      features: [
        'Paper Trading Platform',
        'Portfolio Optimization',
        'Performance Monitoring',
        'Goal Tracking'
      ],
      link: '/trading-command-center-simulation',
      buttonText: 'Start Trading',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Complete Investment Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From learning the basics to executing advanced strategies, FinSight provides everything you need to succeed in today's markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits?.map((benefit, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit?.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={benefit?.icon} size={32} color="white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit?.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{benefit?.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {benefit?.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Icon name="Check" size={12} color="#059669" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link to={benefit?.link} className="block">
                  <Button 
                    variant="outline" 
                    fullWidth 
                    iconName="ArrowRight" 
                    iconPosition="right"
                    className="group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300"
                  >
                    {benefit?.buttonText}
                  </Button>
                </Link>
              </div>

              {/* Background Decoration */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit?.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
<div className="text-center mt-16">
  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-white">
    <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Investment Approach?</h3>
    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
      Join thousands of investors who have already discovered the power of intelligent investing with FinSight.
    </p>
    <div className="flex justify-center">
      <Link to="/signup">
        <Button 
          variant="default" 
          size="lg" 
          className="bg-white text-brand-primary hover:bg-gray-100"
          iconName="Rocket" 
          iconPosition="left"
        >
          Get Started
        </Button>
      </Link>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default BenefitsGrid;
