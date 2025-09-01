import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import TradingHeader from './components/TradingHeader';
import MarketOverview from './components/MarketOverview';
import WatchlistPanel from './components/WatchlistPanel';
import OrderEntry from './components/OrderEntry';
import TradingChart from './components/TradingChart';
import OrderHistory from './components/OrderHistory';
import PositionsPanel from './components/PositionsPanel';
import RiskManagement from './components/RiskManagement';

const TradingCommandCenter = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState('AAPL');

  // Mock portfolio data
  const portfolioData = {
    value: 125750.50,
    dayChange: 1245.75,
    dayChangePercent: 1.00
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const renderMainContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <MarketOverview />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <TradingChart symbol={selectedSymbol} />
              </div>
              <div>
                <OrderEntry />
              </div>
            </div>
            <WatchlistPanel />
          </div>
        );
      case 'watchlist':
        return (
          <div className="space-y-6">
            <WatchlistPanel />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <TradingChart symbol={selectedSymbol} />
              <OrderEntry />
            </div>
          </div>
        );
      case 'orders':
        return (
          <div className="space-y-6">
            <OrderHistory />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <OrderEntry />
              <RiskManagement />
            </div>
          </div>
        );
      case 'positions':
        return (
          <div className="space-y-6">
            <PositionsPanel />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <TradingChart symbol={selectedSymbol} />
              <RiskManagement />
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <MarketOverview />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <TradingChart symbol={selectedSymbol} />
              </div>
              <div>
                <OrderEntry />
              </div>
            </div>
            <WatchlistPanel />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggleCollapse={toggleSidebar} 
      />
      <main className={`transition-all duration-300 ${
        isSidebarCollapsed ? 'ml-16' : 'ml-64'
      } pt-16`}>
        <TradingHeader
          portfolioValue={portfolioData?.value}
          dayChange={portfolioData?.dayChange}
          dayChangePercent={portfolioData?.dayChangePercent}
          onViewChange={handleViewChange}
          currentView={currentView}
        />
        
        <div className="p-6">
          {renderMainContent()}
        </div>

        {/* Educational Footer */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              📚 Learning Resources
            </h3>
            <p className="text-text-secondary mb-4">
              Master trading strategies with our comprehensive educational content
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-border">
                <h4 className="font-semibold text-text-primary mb-2">Trading Basics</h4>
                <p className="text-text-secondary">
                  Learn fundamental concepts of stock trading, order types, and market mechanics
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-border">
                <h4 className="font-semibold text-text-primary mb-2">Risk Management</h4>
                <p className="text-text-secondary">
                  Understand position sizing, stop losses, and portfolio risk management strategies
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-border">
                <h4 className="font-semibold text-text-primary mb-2">Technical Analysis</h4>
                <p className="text-text-secondary">
                  Master chart patterns, indicators, and technical analysis for better trading decisions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 p-6 border-t border-border bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-sm text-text-secondary">
                © {new Date()?.getFullYear()} FinSight. All rights reserved. Paper trading for educational purposes only.
              </div>
              <div className="flex items-center space-x-6 text-sm text-text-secondary">
                <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-brand-primary transition-colors">Risk Disclosure</a>
                <a href="#" className="hover:text-brand-primary transition-colors">Support</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default TradingCommandCenter;