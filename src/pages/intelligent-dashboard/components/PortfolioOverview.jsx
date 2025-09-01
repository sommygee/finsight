import React from 'react';
import Icon from '../../../components/AppIcon';

const PortfolioOverview = () => {
  const portfolioData = {
    totalValue: 125847.32,
    dailyChange: 2847.65,
    dailyChangePercent: 2.31,
    goalProgress: 68,
    targetAmount: 185000
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })?.format(amount);
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Portfolio Overview</h2>
          <p className="text-sm text-text-secondary mt-1">Your investment performance at a glance</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth">
            <Icon name="RefreshCw" size={18} />
          </button>
          <button className="p-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth">
            <Icon name="Settings" size={18} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Portfolio Value */}
        <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <Icon name="DollarSign" size={24} color="white" />
            <span className="text-sm opacity-80">Total Value</span>
          </div>
          <div className="text-3xl font-bold mb-1">
            {formatCurrency(portfolioData?.totalValue)}
          </div>
          <div className="text-sm opacity-90">
            Available for investment
          </div>
        </div>

        {/* Daily Change */}
        <div className="bg-white border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <Icon 
              name={portfolioData?.dailyChange >= 0 ? "TrendingUp" : "TrendingDown"} 
              size={24} 
              color={portfolioData?.dailyChange >= 0 ? "var(--color-success)" : "var(--color-error)"} 
            />
            <span className="text-sm text-text-secondary">Today's Change</span>
          </div>
          <div className={`text-2xl font-bold mb-1 ${
            portfolioData?.dailyChange >= 0 ? 'text-success' : 'text-error'
          }`}>
            {portfolioData?.dailyChange >= 0 ? '+' : ''}{formatCurrency(portfolioData?.dailyChange)}
          </div>
          <div className={`text-sm ${
            portfolioData?.dailyChange >= 0 ? 'text-success' : 'text-error'
          }`}>
            {portfolioData?.dailyChange >= 0 ? '+' : ''}{portfolioData?.dailyChangePercent}%
          </div>
        </div>

        {/* Goal Progress */}
        <div className="bg-white border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <Icon name="Target" size={24} color="var(--color-brand-accent)" />
            <span className="text-sm text-text-secondary">Goal Progress</span>
          </div>
          <div className="text-2xl font-bold text-text-primary mb-2">
            {portfolioData?.goalProgress}%
          </div>
          <div className="w-full bg-muted rounded-full h-2 mb-2">
            <div 
              className="bg-brand-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${portfolioData?.goalProgress}%` }}
            ></div>
          </div>
          <div className="text-sm text-text-secondary">
            Target: {formatCurrency(portfolioData?.targetAmount)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;