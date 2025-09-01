import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';

const NavigationLandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
    </div>
  );
};

export default NavigationLandingPage;