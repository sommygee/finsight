import React from 'react';
import HeroSection from './components/HeroSection';
import MarketTicker from './components/MarketTicker';
import PlatformPreview from './components/PlatformPreview';
import BenefitsGrid from './components/BenefitsGrid';
import SocialProof from './components/SocialProof';
import EducationalPreview from './components/EducationalPreview';
import CommunityInsights from './components/CommunityInsights';
import MobileCTA from './components/MobileCTA';

const HomepageInvestmentIntelligencePlatform = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Dynamic Background */}
      <HeroSection />
      
      {/* Live Market Ticker */}
      <MarketTicker />
      
      {/* Platform Preview with Interactive Hotspots */}
      <PlatformPreview />
      
      {/* Three-Column Benefits Grid */}
      <BenefitsGrid />
      
      {/* Social Proof with User Metrics */}
      <SocialProof />
      
      {/* Educational Preview with Rotating Courses */}
      <EducationalPreview />
      
      {/* Community Insights Feed */}
      <CommunityInsights />
      
      {/* Mobile-Optimized CTA Section */}
      <MobileCTA />
    </div>
  );
};

export default HomepageInvestmentIntelligencePlatform;