import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import PortfolioOverview from './components/PortfolioOverview';
import MarketWatchlist from './components/MarketWatchlist';
import AIInsights from './components/AIInsights';
import PortfolioAllocation from './components/PortfolioAllocation';
import QuickActions from './components/QuickActions';
import NotificationCenter from './components/NotificationCenter';
import PerformanceChart from './components/PerformanceChart';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const IntelligentDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userName] = useState('John');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime?.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggleCollapse={toggleSidebar}
      />
      
      <main className={`pt-16 transition-all duration-300 ${
        sidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <div className="p-6 space-y-6">
          {/* Welcome Header */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl p-6 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  {getGreeting()}, {userName}! 👋
                </h1>
                <p className="text-white/90 text-lg">
                  Welcome to your investment command center
                </p>
                <div className="flex items-center space-x-4 mt-3 text-sm text-white/80">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={16} color="white" />
                    <span>{formatTime(currentTime)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={16} color="white" />
                    <span>{formatDate(currentTime)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span>Markets Open</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center space-x-3">
                <Button variant="ghost" size="sm" className="text-white border-white/20 hover:bg-white/10">
                  <Icon name="Settings" size={16} className="mr-2" />
                  Customize Dashboard
                </Button>
                <Button variant="outline" size="sm" className="bg-white text-brand-primary border-white hover:bg-white/90">
                  <Icon name="Plus" size={16} className="mr-2" />
                  New Position
                </Button>
              </div>
            </div>
          </div>

          {/* Portfolio Overview */}
          <PortfolioOverview />

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Column - Charts and Performance */}
            <div className="xl:col-span-2 space-y-6">
              <PerformanceChart />
              <PortfolioAllocation />
            </div>

            {/* Right Column - Watchlist and Insights */}
            <div className="space-y-6">
              <MarketWatchlist />
              <AIInsights />
            </div>
          </div>

          {/* Secondary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <QuickActions />
            <NotificationCenter />
          </div>

          {/* Market Status Bar */}
          <div className="bg-white rounded-xl shadow-subtle border border-border p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="font-medium text-text-primary">Market Status: Open</span>
                </div>
                <div className="text-sm text-text-secondary">
                  Next close: 4:00 PM EST
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-text-secondary">S&P 500:</span>
                  <span className="font-semibold text-success">+1.2%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-text-secondary">NASDAQ:</span>
                  <span className="font-semibold text-success">+0.8%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-text-secondary">DOW:</span>
                  <span className="font-semibold text-error">-0.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IntelligentDashboard;