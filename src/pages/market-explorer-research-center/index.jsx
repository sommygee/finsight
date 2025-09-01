import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import SearchBar from './components/SearchBar';
import AdvancedFilters from './components/AdvancedFilters';
import TrendingAssets from './components/TrendingAssets';
import SectorAnalysis from './components/SectorAnalysis';
import ResearchCenter from './components/ResearchCenter';
import WatchlistManager from './components/WatchlistManager';
import SocialSentiment from './components/SocialSentiment';

const MarketExplorerResearchCenter = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleSearch = (searchData) => {
    console.log('Search performed:', searchData);
    // Handle search logic here
  };

  const handleFilterToggle = () => {
    setFiltersOpen(!filtersOpen);
  };

  const handleApplyFilters = (filters) => {
    console.log('Filters applied:', filters);
    // Handle filter application logic here
    setFiltersOpen(false);
  };

  const handleResetFilters = () => {
    console.log('Filters reset');
    // Handle filter reset logic here
  };

  const handleAssetClick = (asset) => {
    setSelectedAsset(asset);
    console.log('Asset selected:', asset);
    // Handle asset selection logic here
  };

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggleCollapse={handleToggleSidebar}
      />
      
      <main className={`transition-all duration-300 ${
        sidebarCollapsed ? 'ml-16' : 'ml-64'
      } pt-16`}>
        <div className="p-6 space-y-6">
          {/* Page Header */}
          <div className="bg-white rounded-xl border border-border p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-text-primary mb-2">
                Market Explorer & Research Center
              </h1>
              <p className="text-text-secondary">
                Discover investment opportunities with advanced filtering, real-time data, and comprehensive research tools
              </p>
            </div>

            {/* Search Section */}
            <SearchBar 
              onSearch={handleSearch}
              onFilterToggle={handleFilterToggle}
              isFilterOpen={filtersOpen}
            />

            {/* Advanced Filters */}
            <AdvancedFilters 
              isOpen={filtersOpen}
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Column - Main Content */}
            <div className="xl:col-span-2 space-y-6">
              {/* Trending Assets */}
              <TrendingAssets onAssetClick={handleAssetClick} />

              {/* Sector Analysis */}
              <SectorAnalysis />

              {/* Research Center */}
              <ResearchCenter />
            </div>

            {/* Right Column - Sidebar Content */}
            <div className="space-y-6">
              {/* Watchlist Manager */}
              <WatchlistManager />

              {/* Social Sentiment */}
              <SocialSentiment />
            </div>
          </div>

          {/* Market Insights Banner */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Unlock Advanced Market Insights
                </h3>
                <p className="text-white/90 mb-4">
                  Get access to professional-grade research reports, real-time alerts, and advanced charting tools
                </p>
                <div className="flex items-center space-x-4">
                  <button className="bg-white text-brand-primary px-6 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                    Upgrade to Pro
                  </button>
                  <button className="text-white border border-white/30 px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketExplorerResearchCenter;