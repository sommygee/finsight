import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialSentiment = () => {
  const [activeFilter, setActiveFilter] = useState('trending');
  const [timeframe, setTimeframe] = useState('24h');

  const filters = [
    { id: 'trending', label: 'Trending', icon: 'TrendingUp' },
    { id: 'bullish', label: 'Most Bullish', icon: 'ArrowUp' },
    { id: 'bearish', label: 'Most Bearish', icon: 'ArrowDown' },
    { id: 'discussed', label: 'Most Discussed', icon: 'MessageCircle' }
  ];

  const timeframes = [
    { value: '1h', label: '1H' },
    { value: '24h', label: '24H' },
    { value: '7d', label: '7D' },
    { value: '30d', label: '30D' }
  ];

  const sentimentData = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      sentiment: 'bullish',
      sentimentScore: 8.2,
      mentions: 15420,
      change: 12,
      discussions: [
        {
          platform: 'Reddit',
          mentions: 8500,
          sentiment: 'bullish',
          topPost: 'Apple\'s AI integration showing strong potential for Q1 earnings'
        },
        {
          platform: 'Twitter',
          mentions: 4200,
          sentiment: 'bullish',
          topPost: 'AAPL breaking resistance levels, technical analysis looks strong'
        },
        {
          platform: 'Discord',
          mentions: 2720,
          sentiment: 'neutral',
          topPost: 'Mixed opinions on Apple\'s latest product announcements'
        }
      ]
    },
    {
      symbol: 'TSLA',
      name: 'Tesla, Inc.',
      sentiment: 'neutral',
      sentimentScore: 6.1,
      mentions: 12890,
      change: -5,
      discussions: [
        {
          platform: 'Reddit',
          mentions: 7200,
          sentiment: 'neutral',
          topPost: 'Tesla delivery numbers mixed, waiting for guidance update'
        },
        {
          platform: 'Twitter',
          mentions: 3890,
          sentiment: 'bearish',
          topPost: 'Concerns about Tesla\'s market share in EV space'
        },
        {
          platform: 'Discord',
          mentions: 1800,
          sentiment: 'bullish',
          topPost: 'Long-term Tesla bull case remains intact despite volatility'
        }
      ]
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      sentiment: 'bullish',
      sentimentScore: 9.1,
      mentions: 18750,
      change: 25,
      discussions: [
        {
          platform: 'Reddit',
          mentions: 11200,
          sentiment: 'bullish',
          topPost: 'NVIDIA\'s AI chip demand continues to exceed expectations'
        },
        {
          platform: 'Twitter',
          mentions: 5100,
          sentiment: 'bullish',
          topPost: 'NVDA earnings preview: AI revolution driving massive growth'
        },
        {
          platform: 'Discord',
          mentions: 2450,
          sentiment: 'bullish',
          topPost: 'Technical analysis shows NVDA ready for next leg up'
        }
      ]
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      sentiment: 'bullish',
      sentimentScore: 8.7,
      mentions: 24500,
      change: 18,
      discussions: [
        {
          platform: 'Reddit',
          mentions: 14200,
          sentiment: 'bullish',
          topPost: 'Bitcoin ETF inflows continue to drive institutional adoption'
        },
        {
          platform: 'Twitter',
          mentions: 7800,
          sentiment: 'bullish',
          topPost: 'BTC breaking key resistance, next target $50K'
        },
        {
          platform: 'Discord',
          mentions: 2500,
          sentiment: 'neutral',
          topPost: 'Mixed signals on Bitcoin short-term direction'
        }
      ]
    },
    {
      symbol: 'AMC',
      name: 'AMC Entertainment',
      sentiment: 'bearish',
      sentimentScore: 3.8,
      mentions: 8900,
      change: -15,
      discussions: [
        {
          platform: 'Reddit',
          mentions: 5200,
          sentiment: 'bearish',
          topPost: 'AMC fundamentals continue to deteriorate, debt concerns'
        },
        {
          platform: 'Twitter',
          mentions: 2400,
          sentiment: 'bearish',
          topPost: 'Movie theater industry facing ongoing challenges'
        },
        {
          platform: 'Discord',
          mentions: 1300,
          sentiment: 'neutral',
          topPost: 'AMC squeeze potential vs fundamental analysis debate'
        }
      ]
    }
  ];

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

  const getPlatformIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case 'reddit': return 'MessageSquare';
      case 'twitter': return 'Twitter';
      case 'discord': return 'MessageCircle';
      default: return 'MessageSquare';
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform?.toLowerCase()) {
      case 'reddit': return 'text-orange-600';
      case 'twitter': return 'text-blue-600';
      case 'discord': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const formatMentions = (mentions) => {
    if (mentions >= 1000) {
      return `${(mentions / 1000)?.toFixed(1)}K`;
    }
    return mentions?.toString();
  };

  const getSentimentScoreColor = (score) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
        <h2 className="text-xl font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="MessageCircle" size={24} className="text-brand-primary" />
          <span>Social Sentiment</span>
        </h2>
        
        <div className="flex items-center space-x-4">
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
          
          <Button variant="ghost" size="sm" iconName="RefreshCw">
            Refresh
          </Button>
        </div>
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-border">
        {filters?.map(filter => (
          <button
            key={filter?.id}
            onClick={() => setActiveFilter(filter?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeFilter === filter?.id
                ? 'bg-brand-primary text-white shadow-brand'
                : 'text-text-secondary hover:text-brand-primary hover:bg-muted'
            }`}
          >
            <Icon name={filter?.icon} size={16} />
            <span>{filter?.label}</span>
          </button>
        ))}
      </div>
      {/* Sentiment Cards */}
      <div className="space-y-4">
        {sentimentData?.map(asset => (
          <div
            key={asset?.symbol}
            className="bg-surface rounded-lg p-4 border border-border hover:border-brand-primary transition-all duration-200 cursor-pointer group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{asset?.symbol?.slice(0, 2)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                    {asset?.symbol}
                  </h3>
                  <p className="text-sm text-text-secondary">{asset?.name}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className={`text-lg font-bold ${getSentimentScoreColor(asset?.sentimentScore)}`}>
                    {asset?.sentimentScore}/10
                  </div>
                  <div className="text-xs text-text-secondary">Sentiment Score</div>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-bold text-text-primary">
                    {formatMentions(asset?.mentions)}
                  </div>
                  <div className="text-xs text-text-secondary">Mentions</div>
                </div>
                
                <div className="text-right">
                  <div className={`text-lg font-bold flex items-center space-x-1 ${
                    asset?.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <Icon name={asset?.change >= 0 ? 'ArrowUp' : 'ArrowDown'} size={16} />
                    <span>{asset?.change >= 0 ? '+' : ''}{asset?.change}%</span>
                  </div>
                  <div className="text-xs text-text-secondary">Change ({timeframe})</div>
                </div>
              </div>
            </div>

            {/* Overall Sentiment */}
            <div className="flex items-center justify-between mb-4 p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSentimentColor(asset?.sentiment)}`}>
                  <Icon name={getSentimentIcon(asset?.sentiment)} size={14} className="inline mr-1" />
                  {asset?.sentiment?.charAt(0)?.toUpperCase() + asset?.sentiment?.slice(1)}
                </span>
                <span className="text-sm text-text-secondary">Overall Sentiment</span>
              </div>
              <Button variant="ghost" size="sm" iconName="TrendingUp">
                View Chart
              </Button>
            </div>

            {/* Platform Breakdown */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-text-primary">Platform Breakdown</h4>
              {asset?.discussions?.map((discussion, index) => (
                <div key={index} className="flex items-start justify-between p-3 bg-white rounded-lg border border-border">
                  <div className="flex items-start space-x-3 flex-1">
                    <Icon 
                      name={getPlatformIcon(discussion?.platform)} 
                      size={20} 
                      className={getPlatformColor(discussion?.platform)} 
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-text-primary">{discussion?.platform}</span>
                        <span className="text-sm text-text-secondary">
                          {formatMentions(discussion?.mentions)} mentions
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getSentimentColor(discussion?.sentiment)}`}>
                          {discussion?.sentiment}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary italic">
                        "{discussion?.topPost}"
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" iconName="ExternalLink" />
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" iconName="Bell">
                  Set Alert
                </Button>
                <Button variant="ghost" size="sm" iconName="Plus">
                  Add to Watchlist
                </Button>
              </div>
              <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Sentiment Legend */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-text-secondary">Bullish (8.0+)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="text-text-secondary">Neutral (5.0-7.9)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="text-text-secondary">Bearish (&lt;5.0)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSentiment;