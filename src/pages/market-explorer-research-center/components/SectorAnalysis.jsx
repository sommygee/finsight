import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SectorAnalysis = () => {
  const [viewMode, setViewMode] = useState('heatmap'); // 'heatmap' or 'performance'
  const [timeframe, setTimeframe] = useState('1d');

  const sectorData = [
    {
      name: 'Technology',
      symbol: 'XLK',
      change: 1.85,
      changePercent: 1.23,
      marketCap: '$1.8T',
      volume: '125M',
      topStocks: ['AAPL', 'MSFT', 'NVDA'],
      sentiment: 'bullish',
      size: 'large'
    },
    {
      name: 'Healthcare',
      symbol: 'XLV',
      change: 0.45,
      changePercent: 0.32,
      marketCap: '$1.2T',
      volume: '89M',
      topStocks: ['JNJ', 'PFE', 'UNH'],
      sentiment: 'neutral',
      size: 'large'
    },
    {
      name: 'Financials',
      symbol: 'XLF',
      change: -0.67,
      changePercent: -0.89,
      marketCap: '$950B',
      volume: '156M',
      topStocks: ['JPM', 'BAC', 'WFC'],
      sentiment: 'bearish',
      size: 'large'
    },
    {
      name: 'Energy',
      symbol: 'XLE',
      change: 2.34,
      changePercent: 3.12,
      marketCap: '$680B',
      volume: '234M',
      topStocks: ['XOM', 'CVX', 'COP'],
      sentiment: 'bullish',
      size: 'medium'
    },
    {
      name: 'Consumer Discretionary',
      symbol: 'XLY',
      change: -1.23,
      changePercent: -0.78,
      marketCap: '$1.1T',
      volume: '98M',
      topStocks: ['AMZN', 'TSLA', 'HD'],
      sentiment: 'neutral',
      size: 'large'
    },
    {
      name: 'Consumer Staples',
      symbol: 'XLP',
      change: 0.12,
      changePercent: 0.18,
      marketCap: '$720B',
      volume: '67M',
      topStocks: ['PG', 'KO', 'WMT'],
      sentiment: 'neutral',
      size: 'medium'
    },
    {
      name: 'Industrials',
      symbol: 'XLI',
      change: 0.89,
      changePercent: 0.65,
      marketCap: '$890B',
      volume: '112M',
      topStocks: ['BA', 'CAT', 'GE'],
      sentiment: 'bullish',
      size: 'medium'
    },
    {
      name: 'Materials',
      symbol: 'XLB',
      change: -0.34,
      changePercent: -0.45,
      marketCap: '$450B',
      volume: '78M',
      topStocks: ['LIN', 'APD', 'SHW'],
      sentiment: 'neutral',
      size: 'small'
    },
    {
      name: 'Utilities',
      symbol: 'XLU',
      change: -0.56,
      changePercent: -0.82,
      marketCap: '$380B',
      volume: '45M',
      topStocks: ['NEE', 'SO', 'DUK'],
      sentiment: 'bearish',
      size: 'small'
    },
    {
      name: 'Real Estate',
      symbol: 'XLRE',
      change: 0.23,
      changePercent: 0.34,
      marketCap: '$290B',
      volume: '34M',
      topStocks: ['AMT', 'PLD', 'CCI'],
      sentiment: 'neutral',
      size: 'small'
    },
    {
      name: 'Communication Services',
      symbol: 'XLC',
      change: 1.45,
      changePercent: 1.89,
      marketCap: '$1.3T',
      volume: '145M',
      topStocks: ['GOOGL', 'META', 'NFLX'],
      sentiment: 'bullish',
      size: 'large'
    }
  ];

  const timeframes = [
    { value: '1d', label: '1D' },
    { value: '1w', label: '1W' },
    { value: '1m', label: '1M' },
    { value: '3m', label: '3M' },
    { value: '6m', label: '6M' },
    { value: '1y', label: '1Y' }
  ];

  const getSectorColor = (changePercent, sentiment) => {
    if (changePercent > 1.5) return 'bg-green-500';
    if (changePercent > 0.5) return 'bg-green-400';
    if (changePercent > 0) return 'bg-green-300';
    if (changePercent > -0.5) return 'bg-red-300';
    if (changePercent > -1.5) return 'bg-red-400';
    return 'bg-red-500';
  };

  const getSectorSize = (size) => {
    switch (size) {
      case 'large': return 'col-span-2 row-span-2';
      case 'medium': return 'col-span-2 row-span-1';
      case 'small': return 'col-span-1 row-span-1';
      default: return 'col-span-1 row-span-1';
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

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'bullish': return 'text-green-600';
      case 'bearish': return 'text-red-600';
      case 'neutral': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
        <h2 className="text-xl font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="PieChart" size={24} className="text-brand-primary" />
          <span>Sector Analysis</span>
        </h2>
        
        <div className="flex items-center space-x-4">
          {/* View Mode Toggle */}
          <div className="flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => setViewMode('heatmap')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                viewMode === 'heatmap' ?'bg-white text-brand-primary shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="Grid3X3" size={16} className="inline mr-1" />
              Heatmap
            </button>
            <button
              onClick={() => setViewMode('performance')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                viewMode === 'performance'
                  ? 'bg-white text-brand-primary shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="BarChart3" size={16} className="inline mr-1" />
              Performance
            </button>
          </div>

          {/* Timeframe Selector */}
          <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
            {timeframes?.map(tf => (
              <button
                key={tf?.value}
                onClick={() => setTimeframe(tf?.value)}
                className={`px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${
                  timeframe === tf?.value
                    ? 'bg-white text-brand-primary shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {tf?.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      {viewMode === 'heatmap' ? (
        <div className="grid grid-cols-6 gap-2 h-96">
          {sectorData?.map(sector => (
            <div
              key={sector?.symbol}
              className={`${getSectorSize(sector?.size)} ${getSectorColor(sector?.changePercent, sector?.sentiment)} 
                         rounded-lg p-3 text-white cursor-pointer hover:opacity-90 transition-all duration-200 
                         flex flex-col justify-between relative overflow-hidden group`}
            >
              <div>
                <h3 className="font-semibold text-sm mb-1 leading-tight">{sector?.name}</h3>
                <p className="text-xs opacity-90">{sector?.symbol}</p>
              </div>
              
              <div className="mt-auto">
                <div className="text-lg font-bold">
                  {sector?.changePercent >= 0 ? '+' : ''}{sector?.changePercent?.toFixed(2)}%
                </div>
                <div className="text-xs opacity-90">
                  {sector?.change >= 0 ? '+' : ''}{sector?.change?.toFixed(2)}
                </div>
              </div>

              {/* Hover Details */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-3 flex flex-col justify-center">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">{sector?.name}</h4>
                  <div className="space-y-1 text-xs">
                    <div>Market Cap: {sector?.marketCap}</div>
                    <div>Volume: {sector?.volume}</div>
                    <div className="flex items-center justify-center space-x-1">
                      <Icon name={getSentimentIcon(sector?.sentiment)} size={12} />
                      <span className="capitalize">{sector?.sentiment}</span>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/20">
                    <div className="text-xs">Top Holdings:</div>
                    <div className="text-xs font-medium">{sector?.topStocks?.join(', ')}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {sectorData?.sort((a, b) => b?.changePercent - a?.changePercent)?.map(sector => (
              <div
                key={sector?.symbol}
                className="flex items-center justify-between p-4 bg-surface rounded-lg border border-border hover:border-brand-primary transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${getSectorColor(sector?.changePercent, sector?.sentiment)}`} />
                  <div>
                    <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                      {sector?.name}
                    </h3>
                    <p className="text-sm text-text-secondary">{sector?.symbol}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <div className={`font-semibold ${sector?.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {sector?.changePercent >= 0 ? '+' : ''}{sector?.changePercent?.toFixed(2)}%
                    </div>
                    <div className="text-sm text-text-secondary">
                      {sector?.change >= 0 ? '+' : ''}{sector?.change?.toFixed(2)}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-text-primary font-medium">{sector?.marketCap}</div>
                    <div className="text-xs text-text-secondary">Market Cap</div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-text-primary font-medium">{sector?.volume}</div>
                    <div className="text-xs text-text-secondary">Volume</div>
                  </div>

                  <div className={`flex items-center space-x-1 ${getSentimentColor(sector?.sentiment)}`}>
                    <Icon name={getSentimentIcon(sector?.sentiment)} size={16} />
                    <span className="text-sm font-medium capitalize">{sector?.sentiment}</span>
                  </div>

                  <Button variant="ghost" size="sm" iconName="ChevronRight" />
                </div>
              </div>
            ))}
        </div>
      )}
      {/* Legend for Heatmap */}
      {viewMode === 'heatmap' && (
        <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-text-secondary">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded" />
            <span>Strong Decline</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-300 rounded" />
            <span>Decline</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-300 rounded" />
            <span>Gain</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded" />
            <span>Strong Gain</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectorAnalysis;