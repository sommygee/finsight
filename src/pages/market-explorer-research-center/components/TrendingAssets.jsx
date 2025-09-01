import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrendingAssets = ({ onAssetClick }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Assets', icon: 'TrendingUp' },
    { id: 'stocks', label: 'Stocks', icon: 'BarChart3' },
    { id: 'etfs', label: 'ETFs', icon: 'PieChart' },
    { id: 'crypto', label: 'Crypto', icon: 'Coins' },
    { id: 'commodities', label: 'Commodities', icon: 'Wheat' }
  ];

  const trendingAssets = [
    {
      id: 1,
      symbol: 'AAPL',
      name: 'Apple Inc.',
      type: 'stocks',
      price: 175.43,
      change: 2.34,
      changePercent: 1.35,
      volume: '52.3M',
      marketCap: '$2.75T',
      sentiment: 'bullish',
      sentimentScore: 8.2,
      sector: 'Technology',
      learningConnection: 'Understanding Tech Valuations'
    },
    {
      id: 2,
      symbol: 'TSLA',
      name: 'Tesla, Inc.',
      type: 'stocks',
      price: 248.50,
      change: -5.67,
      changePercent: -2.23,
      volume: '89.1M',
      marketCap: '$789B',
      sentiment: 'neutral',
      sentimentScore: 6.1,
      sector: 'Consumer Discretionary',
      learningConnection: 'EV Market Analysis'
    },
    {
      id: 3,
      symbol: 'SPY',
      name: 'SPDR S&P 500 ETF',
      type: 'etfs',
      price: 445.67,
      change: 1.23,
      changePercent: 0.28,
      volume: '78.5M',
      marketCap: '$412B',
      sentiment: 'bullish',
      sentimentScore: 7.8,
      sector: 'Diversified',
      learningConnection: 'Index Fund Basics'
    },
    {
      id: 4,
      symbol: 'BTC',
      name: 'Bitcoin',
      type: 'crypto',
      price: 43250.00,
      change: 1250.00,
      changePercent: 2.98,
      volume: '$28.4B',
      marketCap: '$847B',
      sentiment: 'bullish',
      sentimentScore: 8.7,
      sector: 'Cryptocurrency',
      learningConnection: 'Crypto Fundamentals'
    },
    {
      id: 5,
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      type: 'stocks',
      price: 875.28,
      change: 12.45,
      changePercent: 1.44,
      volume: '45.2M',
      marketCap: '$2.16T',
      sentiment: 'bullish',
      sentimentScore: 9.1,
      sector: 'Technology',
      learningConnection: 'AI Investment Trends'
    },
    {
      id: 6,
      symbol: 'ETH',
      name: 'Ethereum',
      type: 'crypto',
      price: 2650.00,
      change: -45.30,
      changePercent: -1.68,
      volume: '$15.2B',
      marketCap: '$318B',
      sentiment: 'neutral',
      sentimentScore: 6.8,
      sector: 'Cryptocurrency',
      learningConnection: 'Smart Contracts Explained'
    },
    {
      id: 7,
      symbol: 'QQQ',
      name: 'Invesco QQQ Trust',
      type: 'etfs',
      price: 378.92,
      change: 2.15,
      changePercent: 0.57,
      volume: '42.1M',
      marketCap: '$198B',
      sentiment: 'bullish',
      sentimentScore: 7.5,
      sector: 'Technology',
      learningConnection: 'NASDAQ 100 Analysis'
    },
    {
      id: 8,
      symbol: 'GOLD',
      name: 'Gold Futures',
      type: 'commodities',
      price: 2045.60,
      change: -8.40,
      changePercent: -0.41,
      volume: '145K',
      marketCap: 'N/A',
      sentiment: 'bearish',
      sentimentScore: 4.2,
      sector: 'Commodities',
      learningConnection: 'Precious Metals Investing'
    }
  ];

  const filteredAssets = activeCategory === 'all' 
    ? trendingAssets 
    : trendingAssets?.filter(asset => asset?.type === activeCategory);

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'bullish': return 'text-green-600 bg-green-50';
      case 'bearish': return 'text-red-600 bg-red-50';
      case 'neutral': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'bullish': return 'TrendingUp';
      case 'bearish': return 'TrendingDown';
      case 'neutral': return 'Minus';
      default: return 'Minus';
    }
  };

  const formatPrice = (price, symbol) => {
    if (symbol === 'BTC' || symbol === 'ETH') {
      return `$${price?.toLocaleString()}`;
    }
    return `$${price?.toFixed(2)}`;
  };

  const formatVolume = (volume) => {
    if (typeof volume === 'string') return volume;
    return volume?.toLocaleString();
  };

  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="TrendingUp" size={24} className="text-brand-primary" />
          <span>Trending Assets</span>
        </h2>
        <Button variant="ghost" size="sm" iconName="RefreshCw">
          Refresh
        </Button>
      </div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-border">
        {categories?.map(category => (
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === category?.id
                ? 'bg-brand-primary text-white shadow-brand'
                : 'text-text-secondary hover:text-brand-primary hover:bg-muted'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredAssets?.map(asset => (
          <div
            key={asset?.id}
            onClick={() => onAssetClick(asset)}
            className="group bg-surface rounded-lg p-4 border border-border hover:border-brand-primary hover:shadow-brand transition-all duration-200 cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                    {asset?.symbol}
                  </h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getSentimentColor(asset?.sentiment)}`}>
                    <Icon name={getSentimentIcon(asset?.sentiment)} size={12} className="inline mr-1" />
                    {asset?.sentiment}
                  </span>
                </div>
                <p className="text-sm text-text-secondary truncate">{asset?.name}</p>
              </div>
              <Button variant="ghost" size="sm" iconName="Plus" className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Price & Change */}
            <div className="mb-3">
              <div className="text-lg font-bold text-text-primary">
                {formatPrice(asset?.price, asset?.symbol)}
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                asset?.change >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                <Icon 
                  name={asset?.change >= 0 ? 'ArrowUp' : 'ArrowDown'} 
                  size={12} 
                />
                <span>
                  {asset?.change >= 0 ? '+' : ''}{asset?.change?.toFixed(2)} ({asset?.changePercent >= 0 ? '+' : ''}{asset?.changePercent?.toFixed(2)}%)
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-xs">
                <span className="text-text-secondary">Volume:</span>
                <span className="text-text-primary font-medium">{formatVolume(asset?.volume)}</span>
              </div>
              {asset?.marketCap !== 'N/A' && (
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Market Cap:</span>
                  <span className="text-text-primary font-medium">{asset?.marketCap}</span>
                </div>
              )}
              <div className="flex justify-between text-xs">
                <span className="text-text-secondary">Sentiment:</span>
                <span className="text-text-primary font-medium">{asset?.sentimentScore}/10</span>
              </div>
            </div>

            {/* Learning Connection */}
            <div className="pt-3 border-t border-border">
              <div className="flex items-center space-x-2 text-xs text-brand-primary hover:text-brand-secondary transition-colors">
                <Icon name="BookOpen" size={12} />
                <span className="truncate">{asset?.learningConnection}</span>
                <Icon name="ExternalLink" size={10} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View All Button */}
      <div className="mt-6 text-center">
        <Button variant="outline" iconName="ArrowRight" iconPosition="right">
          View All {activeCategory === 'all' ? 'Assets' : categories?.find(c => c?.id === activeCategory)?.label}
        </Button>
      </div>
    </div>
  );
};

export default TrendingAssets;