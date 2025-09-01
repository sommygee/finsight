import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ValuesGrid = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  const values = [
    {
      id: 1,
      icon: 'Lightbulb',
      title: 'Innovation',
      description: 'Continuously pushing boundaries to deliver cutting-edge investment solutions.',
      color: 'bg-yellow-500/10 text-yellow-600',
      iconColor: '#EAB308'
    },
    {
      id: 2,
      icon: 'Heart',
      title: 'User-Centric',
      description: 'Putting our users first in every product decision and feature development.',
      color: 'bg-red-500/10 text-red-600',
      iconColor: '#DC2626'
    },
    {
      id: 3,
      icon: 'Eye',
      title: 'Transparency',
      description: 'Maintaining clear communication about risks, fees, and investment strategies.',
      color: 'bg-blue-500/10 text-blue-600',
      iconColor: '#2563EB'
    },
    {
      id: 4,
      icon: 'GraduationCap',
      title: 'Education',
      description: 'Empowering users through comprehensive financial education and resources.',
      color: 'bg-purple-500/10 text-purple-600',
      iconColor: '#7C3AED'
    },
    {
      id: 5,
      icon: 'Zap',
      title: 'Excellence',
      description: 'Striving for the highest quality in every aspect of our platform and service.',
      color: 'bg-orange-500/10 text-orange-600',
      iconColor: '#EA580C'
    },
    {
      id: 6,
      icon: 'Globe',
      title: 'Accessibility',
      description: 'Making sophisticated investment tools available to users around the world.',
      color: 'bg-green-500/10 text-green-600',
      iconColor: '#16A34A'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Star" size={16} color="#1E40AF" />
            <span className="text-sm font-medium text-brand-primary">Our Values</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Drives Us Forward
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our core values shape every decision we make and guide us in building a platform that truly serves our users' needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values?.map((value) => (
            <div
              key={value?.id}
              onMouseEnter={() => setHoveredValue(value?.id)}
              onMouseLeave={() => setHoveredValue(null)}
              className={`relative bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300 cursor-pointer ${
                hoveredValue === value?.id ? 'transform -translate-y-1' : ''
              }`}
            >
              <div className={`w-12 h-12 ${value?.color?.split(' ')?.[0]} rounded-lg flex items-center justify-center mb-4`}>
                <Icon name={value?.icon} size={24} color={value?.iconColor} />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value?.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {value?.description}
              </p>

              {hoveredValue === value?.id && (
                <div className="absolute inset-0 border-2 border-brand-primary/30 rounded-xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;