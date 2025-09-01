import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PlatformPreview = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 1,
      x: '25%',
      y: '30%',
      title: 'AI-Driven Insights',
      description: 'Get personalized investment recommendations powered by advanced machine learning algorithms.',
      icon: 'Brain'
    },
    {
      id: 2,
      x: '65%',
      y: '25%',
      title: 'Portfolio Analytics',
      description: 'Comprehensive performance tracking with risk analysis and optimization suggestions.',
      icon: 'PieChart'
    },
    {
      id: 3,
      x: '45%',
      y: '60%',
      title: 'Market Opportunities',
      description: 'Real-time alerts for trending stocks, market movements, and investment opportunities.',
      icon: 'Target'
    },
    {
      id: 4,
      x: '75%',
      y: '70%',
      title: 'Risk Management',
      description: 'Advanced tools to monitor and manage portfolio risk with automated alerts.',
      icon: 'Shield'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Experience the Future of Investing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intuitive platform combines powerful analytics with user-friendly design, making professional-grade investment tools accessible to everyone.
          </p>
        </div>

        <div className="relative">
          {/* Platform Screenshot */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-sm text-gray-600">FinSight Dashboard</div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
                alt="FinSight Dashboard Interface"
                className="w-full h-96 object-cover"
              />
              
              {/* Blur overlay for privacy */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
              
              {/* Interactive Hotspots */}
              {hotspots?.map((hotspot) => (
                <div key={hotspot?.id}>
                  <button
                    className="absolute w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 animate-pulse"
                    style={{ left: hotspot?.x, top: hotspot?.y }}
                    onMouseEnter={() => setActiveHotspot(hotspot?.id)}
                    onMouseLeave={() => setActiveHotspot(null)}
                  >
                    <Icon name="Plus" size={16} color="white" />
                  </button>
                  
                  {/* Hotspot Tooltip */}
                  {activeHotspot === hotspot?.id && (
                    <div 
                      className="absolute z-10 bg-white rounded-lg shadow-xl p-4 w-64 border border-gray-200"
                      style={{ 
                        left: hotspot?.x, 
                        top: `calc(${hotspot?.y} + 40px)`,
                        transform: 'translateX(-50%)'
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={hotspot?.icon} size={16} color="var(--color-brand-primary)" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{hotspot?.title}</h4>
                          <p className="text-sm text-gray-600">{hotspot?.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {hotspots?.map((feature) => (
              <div key={feature?.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature?.icon} size={24} color="white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature?.title}</h3>
                <p className="text-gray-600 text-sm">{feature?.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Link to="/intelligent-dashboard">
              <Button 
                variant="default" 
                size="lg" 
                iconName="ArrowRight" 
                iconPosition="right"
                className="shadow-lg"
              >
                Try the Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;