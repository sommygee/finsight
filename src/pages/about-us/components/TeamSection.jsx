import React from 'react';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO & Founder',
      expertise: 'Former Goldman Sachs VP, 15+ years in fintech',
      image: '/api/placeholder/150/150',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Chen',
      role: 'CTO',
      expertise: 'Ex-Google AI researcher, ML infrastructure expert',
      image: '/api/placeholder/150/150',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Head of Product',
      expertise: 'Former Robinhood PM, UX design specialist',
      image: '/api/placeholder/150/150',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'James Thompson',
      role: 'Chief Investment Officer',
      expertise: '20+ years portfolio management, CFA charterholder',
      image: '/api/placeholder/150/150',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={16} color="#1E40AF" />
            <span className="text-sm font-medium text-brand-primary">Our Team</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet the Visionaries
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our leadership team combines decades of experience in finance, technology, and product development to build the future of investment intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers?.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 text-center">
              {/* Profile Image Placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="User" size={32} color="white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member?.name}
              </h3>
              
              <p className="text-sm font-medium text-brand-primary mb-2">
                {member?.role}
              </p>
              
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                {member?.expertise}
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a 
                  href={member?.linkedin} 
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"
                >
                  <Icon name="Linkedin" size={14} />
                </a>
                <a 
                  href={member?.twitter}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"
                >
                  <Icon name="Twitter" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Careers CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Briefcase" size={24} color="#1E40AF" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Join Our Mission
            </h3>
            
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals who share our passion for democratizing investment intelligence.
            </p>
            
            <button className="bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-brand-primary/90 transition-colors font-medium">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;