import React from 'react';
import Icon from '../../../components/AppIcon';

const MarketOverview = () => {
  const marketData = [
    {
      symbol: 'SPY',
      name: 'S&P 500 ETF',
      price: 445.67,
      change: 2.34,
      changePercent: 0.53,
      volume: '89.2M'
    },
    {
      symbol: 'QQQ',
      name: 'Nasdaq 100 ETF',
      price: 378.92,
      change: -1.45,
      changePercent: -0.38,
      volume: '45.7M'
    },
    {
      symbol: 'IWM',
      name: 'Russell 2000 ETF',
      price: 198.45,
      change: 0.87,
      changePercent: 0.44,
      volume: '32.1M'
    },
    {
      symbol: 'VIX',
      name: 'Volatility Index',
      price: 18.23,
      change: -0.45,
      changePercent: -2.41,
      volume: 'N/A'
    }
  ];

  const marketNews = [
    {
      id: 1,
      headline: "Fed Signals Potential Rate Cut in Q4 2024",
      source: "Reuters",
      time: "2 hours ago",
      impact: "bullish"
    },
    {
      id: 2,
      headline: "Tech Earnings Beat Expectations Across Sector",
      source: "Bloomberg",
      time: "4 hours ago",
      impact: "bullish"
    },
    {
      id: 3,
      headline: "Oil Prices Surge on Supply Chain Concerns",
      source: "CNBC",
      time: "6 hours ago",
      impact: "neutral"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Market Indices */}
      <div className="lg:col-span-2 bg-white rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-text-primary">Market Overview</h3>
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Clock" size={16} />
            <span>Last updated: 2:45 PM EST</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {marketData?.map((item) => (
            <div key={item?.symbol} className="p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-semibold text-text-primary">{item?.symbol}</div>
                  <div className="text-sm text-text-secondary">{item?.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-text-primary">${item?.price}</div>
                  <div className={`text-sm flex items-center space-x-1 ${
                    item?.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <Icon 
                      name={item?.change >= 0 ? 'ArrowUp' : 'ArrowDown'} 
                      size={12} 
                    />
                    <span>
                      {item?.change >= 0 ? '+' : ''}{item?.change} ({item?.change >= 0 ? '+' : ''}{item?.changePercent}%)
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-text-secondary">
                Volume: {item?.volume}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Market News */}
      <div className="bg-white rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-text-primary">Market News</h3>
          <Icon name="ExternalLink" size={16} className="text-text-secondary" />
        </div>
        
        <div className="space-y-4">
          {marketNews?.map((news) => (
            <div key={news?.id} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
              <div className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  news?.impact === 'bullish' ? 'bg-green-500' : 
                  news?.impact === 'bearish' ? 'bg-red-500' : 'bg-yellow-500'
                }`}></div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-text-primary mb-1 leading-tight">
                    {news?.headline}
                  </h4>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary">
                    <span>{news?.source}</span>
                    <span>•</span>
                    <span>{news?.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 text-sm text-brand-primary hover:text-brand-secondary transition-colors">
          View All News
        </button>
      </div>
    </div>
  );
};

export default MarketOverview;