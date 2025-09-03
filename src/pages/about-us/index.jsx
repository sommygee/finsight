import React from 'react';
import Navbar from "../../components/ui/Navbar"; 
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import CompanyStory from './components/CompanyStory';
import ValuesGrid from './components/ValuesGrid';
import StatsSection from './components/StatsSection';
import Footer from "components/ui/Footer";
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
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
       {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;