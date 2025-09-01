import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MarketWatchlist = () => {
  const [selectedTab, setSelectedTab] = useState('stocks');

  const watchlistData = {
    stocks: [
      {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 178.25,
        change: 2.45,
        changePercent: 1.39,
        volume: '52.3M'
      },
      {
        symbol: 'MSFT',
        name: 'Microsoft Corp.',
        price: 342.87,
        change: -1.23,
        changePercent: -0.36,
        volume: '28.7M'
      },
      {
        symbol: 'GOOGL',
        name: 'Alphabet Inc.',
        price: 125.64,
        change: 3.21,
        changePercent: 2.62,
        volume: '31.2M'
      },
      {
        symbol: 'TSLA',
        name: 'Tesla Inc.',
        price: 248.92,
        change: -5.67,
        changePercent: -2.23,
        volume: '89.4M'
      },
      {
        symbol: 'NVDA',
        name: 'NVIDIA Corp.',
        price: 456.78,
        change: 12.34,
        changePercent: 2.78,
        volume: '45.6M'
      }
    ],
    crypto: [
      {
        symbol: 'BTC',
        name: 'Bitcoin',
        price: 43250.00,
        change: 1250.00,
        changePercent: 2.98,
        volume: '$2.1B'
      },
      {
        symbol: 'ETH',
        name: 'Ethereum',
        price: 2650.75,
        change: -45.25,
        changePercent: -1.68,
        volume: '$1.3B'
      },
      {
        symbol: 'ADA',
        name: 'Cardano',
        price: 0.485,
        change: 0.023,
        changePercent: 4.98,
        volume: '$234M'
      }
    ]
  };

  const formatCurrency = (amount, isCrypto = false) => {
    if (isCrypto && amount < 1) {
      return `$${amount?.toFixed(3)}`;
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })?.format(amount);
  };

  const tabs = [
    { id: 'stocks', label: 'Stocks', icon: 'TrendingUp' },
    { id: 'crypto', label: 'Crypto', icon: 'Bitcoin' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-text-primary">Market Watchlist</h3>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth">
            <Icon name="Plus" size={18} />
          </button>
          <button className="p-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth">
            <Icon name="Settings" size={18} />
          </button>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setSelectedTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
              selectedTab === tab?.id
                ? 'bg-white text-brand-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Watchlist Items */}
      <div className="space-y-3">
        {watchlistData?.[selectedTab]?.map((item, index) => (
          <div
            key={item?.symbol}
            className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{item?.symbol?.slice(0, 2)}</span>
              </div>
              <div>
                <div className="font-semibold text-text-primary">{item?.symbol}</div>
                <div className="text-sm text-text-secondary">{item?.name}</div>
              </div>
            </div>

            <div className="text-right">
              <div className="font-semibold text-text-primary">
                {formatCurrency(item?.price, selectedTab === 'crypto')}
              </div>
              <div className={`text-sm flex items-center justify-end space-x-1 ${
                item?.change >= 0 ? 'text-success' : 'text-error'
              }`}>
                <Icon 
                  name={item?.change >= 0 ? "ArrowUp" : "ArrowDown"} 
                  size={12} 
                />
                <span>
                  {item?.change >= 0 ? '+' : ''}{item?.changePercent}%
                </span>
              </div>
            </div>

            <div className="text-right min-w-[80px]">
              <div className="text-sm text-text-secondary">Volume</div>
              <div className="text-sm font-medium text-text-primary">{item?.volume}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full py-2 text-sm font-medium text-brand-primary hover:text-brand-secondary transition-smooth">
          View All Markets →
        </button>
      </div>
    </div>
  );
};

export default MarketWatchlist;