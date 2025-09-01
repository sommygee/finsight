import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyStory = () => {
  const [activeStory, setActiveStory] = useState(0);

  const timeline = [
    {
      year: '2020',
      title: 'The Vision',
      description: 'Founded with the mission to democratize professional-grade investment tools for retail investors.',
      icon: 'Lightbulb',
      color: 'bg-blue-500'
    },
    {
      year: '2021',
      title: 'First Platform',
      description: 'Launched our MVP with basic portfolio tracking and AI-powered insights for beta users.',
      icon: 'Rocket',
      color: 'bg-green-500'
    },
    {
      year: '2022',
      title: 'Series A',
      description: 'Raised $15M Series A to expand our AI capabilities and grow our user base to 50K+ investors.',
      icon: 'TrendingUp',
      color: 'bg-purple-500'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to international markets and introduced advanced portfolio construction tools.',
      icon: 'Globe',
      color: 'bg-orange-500'
    },
    {
      year: '2024',
      title: 'AI Revolution',
      description: 'Launched next-generation AI advisory features, serving 250K+ active users worldwide.',
      icon: 'Brain',
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Clock" size={16} color="#1E40AF" />
            <span className="text-sm font-medium text-brand-primary">Our Journey</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            From Concept to Platform
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our story is one of continuous innovation and user-centric development, building the future of investment intelligence one milestone at a time.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
            
            <div className="flex justify-between items-center relative">
              {timeline?.map((item, index) => (
                <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => setActiveStory(index)}>
                  {/* Timeline Node */}
                  <div className={`w-12 h-12 rounded-full ${item?.color} flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform ${
                    activeStory === index ? 'ring-4 ring-white ring-opacity-50' : ''
                  }`}>
                    <Icon name={item?.icon} size={20} color="white" />
                  </div>
                  
                  {/* Year */}
                  <div className="text-sm font-bold text-gray-900 mb-2">{item?.year}</div>
                  
                  {/* Content Card */}
                  <div className={`bg-white rounded-lg p-4 border border-gray-200 shadow-sm max-w-48 transition-all duration-300 ${
                    activeStory === index ? 'shadow-lg border-brand-primary scale-105' : 'hover:shadow-md'
                  }`}>
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">{item?.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {timeline?.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className={`w-10 h-10 rounded-full ${item?.color} flex items-center justify-center flex-shrink-0`}>
                <Icon name={item?.icon} size={18} color="white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-bold text-gray-900">{item?.year}</span>
                  <span className="text-lg font-semibold text-gray-900">{item?.title}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Community Impact Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Heart" size={32} color="#1E40AF" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Empowering Individual Investors
            </h3>
            
            <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Every feature we build, every algorithm we develop, and every partnership we form is designed with one goal in mind: 
              giving individual investors the tools and insights they need to make confident, informed investment decisions. 
              Our community of investors drives us to continuously innovate and improve.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-brand-primary mb-1">$2.8B+</div>
                <div className="text-sm text-gray-600">Assets Under Management</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-primary mb-1">89%</div>
                <div className="text-sm text-gray-600">Users Report Better Decisions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-primary mb-1">24/7</div>
                <div className="text-sm text-gray-600">AI-Powered Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;