import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TradingHeader = ({ portfolioValue, dayChange, dayChangePercent, onViewChange, currentView }) => {
  const [isMarketOpen, setIsMarketOpen] = useState(true);

  const viewOptions = [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'watchlist', label: 'Watchlist', icon: 'Eye' },
    { id: 'orders', label: 'Orders', icon: 'FileText' },
    { id: 'positions', label: 'Positions', icon: 'PieChart' }
  ];

  return (
    <div className="bg-white border-b border-border p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Portfolio Summary */}
        <div className="flex items-center space-x-6">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Trading Center</h1>
            <div className="flex items-center space-x-2 mt-1">
              <div className={`w-2 h-2 rounded-full ${isMarketOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-sm text-text-secondary">
                {isMarketOpen ? 'Market Open' : 'Market Closed'}
              </span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-border"></div>
          
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
            <div>
              <div className="text-sm text-text-secondary">Portfolio Value</div>
              <div className="text-xl font-bold text-text-primary">
                ${portfolioValue?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
            </div>
            
            <div>
              <div className="text-sm text-text-secondary">Today's Change</div>
              <div className={`text-lg font-semibold flex items-center space-x-1 ${
                dayChange >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                <Icon 
                  name={dayChange >= 0 ? 'TrendingUp' : 'TrendingDown'} 
                  size={16} 
                />
                <span>
                  {dayChange >= 0 ? '+' : ''}${Math.abs(dayChange)?.toFixed(2)} 
                  ({dayChange >= 0 ? '+' : ''}{dayChangePercent?.toFixed(2)}%)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center space-x-2">
          <div className="flex bg-muted rounded-lg p-1">
            {viewOptions?.map((option) => (
              <button
                key={option?.id}
                onClick={() => onViewChange(option?.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  currentView === option?.id
                    ? 'bg-white text-brand-primary shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name={option?.icon} size={16} />
                <span className="hidden sm:inline">{option?.label}</span>
              </button>
            ))}
          </div>
          
          <Button variant="default" size="sm" iconName="Plus" iconPosition="left">
            New Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TradingHeader;