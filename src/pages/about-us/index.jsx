import React from 'react';
import Navigation from '../navigation-landing-page/components/Navigation';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import CompanyStory from './components/CompanyStory';
import ValuesGrid from './components/ValuesGrid';
import StatsSection from './components/StatsSection';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <Navigation />
      
      {/* About Us Content */}
      <div className="pt-16">
        {/* Mission Section */}
        <MissionSection />
        
        {/* Core Values Grid */}
        <ValuesGrid />
        
        {/* Company Statistics */}
        <StatsSection />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Company Story Timeline */}
        <CompanyStory />
      </div>
    </div>
  );
};

export default AboutUs;