import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Target" size={16} color="#1E40AF" />
            <span className="text-sm font-medium text-brand-primary">Our Mission</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Democratizing Investment 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-600">
              Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At FinSight, we believe that sophisticated investment tools and insights shouldn't be limited to institutional investors. 
            Our mission is to level the playing field by making professional-grade investment intelligence accessible to everyone, 
            empowering individual investors to make informed decisions with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Users" size={24} color="#1E40AF" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">For Everyone</h3>
            <p className="text-gray-600">
              Breaking down barriers to sophisticated investment tools, making them accessible to retail investors worldwide.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Brain" size={24} color="#059669" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-gray-600">
              Leveraging cutting-edge artificial intelligence to transform complex market data into clear, actionable insights.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Shield" size={24} color="#0891B2" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Trustworthy</h3>
            <p className="text-gray-600">
              Building trust through transparency, security, and educational resources that help users understand their investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;