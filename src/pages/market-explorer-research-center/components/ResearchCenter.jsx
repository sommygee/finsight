import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResearchCenter = () => {
  const [activeTab, setActiveTab] = useState('news');

  const tabs = [
    { id: 'news', label: 'Market News', icon: 'Newspaper' },
    { id: 'earnings', label: 'Earnings Calendar', icon: 'Calendar' },
    { id: 'economic', label: 'Economic Indicators', icon: 'TrendingUp' },
    { id: 'analysis', label: 'Research Reports', icon: 'FileText' }
  ];

  const newsData = [
    {
      id: 1,
      title: 'Federal Reserve Signals Potential Rate Cut in Q2 2025',
      summary: 'Fed officials hint at monetary policy adjustments amid cooling inflation data and economic indicators.',
      source: 'Financial Times',
      time: '2 hours ago',
      category: 'Monetary Policy',
      impact: 'high',
      relatedAssets: ['SPY', 'TLT', 'USD']
    },
    {
      id: 2,
      title: 'Tech Earnings Season Kicks Off with Strong AI Revenue Growth',
      summary: 'Major technology companies report robust AI-driven revenue increases, boosting sector sentiment.',
      source: 'Reuters',
      time: '4 hours ago',
      category: 'Earnings',
      impact: 'high',
      relatedAssets: ['AAPL', 'MSFT', 'GOOGL', 'NVDA']
    },
    {
      id: 3,
      title: 'Energy Sector Rallies on Geopolitical Tensions',
      summary: 'Oil prices surge as supply concerns drive energy stocks higher across global markets.',
      source: 'Bloomberg',
      time: '6 hours ago',
      category: 'Commodities',
      impact: 'medium',
      relatedAssets: ['XLE', 'XOM', 'CVX']
    },
    {
      id: 4,
      title: 'Cryptocurrency Market Shows Signs of Institutional Adoption',
      summary: 'Major financial institutions announce expanded crypto services, driving market optimism.',
      source: 'CoinDesk',
      time: '8 hours ago',
      category: 'Cryptocurrency',
      impact: 'medium',
      relatedAssets: ['BTC', 'ETH']
    }
  ];

  const earningsData = [
    {
      date: '2025-01-02',
      symbol: 'AAPL',
      company: 'Apple Inc.',
      time: 'After Market Close',
      estimate: '$2.18',
      previous: '$2.10',
      importance: 'high'
    },
    {
      date: '2025-01-02',
      symbol: 'MSFT',
      company: 'Microsoft Corporation',
      time: 'After Market Close',
      estimate: '$2.78',
      previous: '$2.69',
      importance: 'high'
    },
    {
      date: '2025-01-03',
      symbol: 'GOOGL',
      company: 'Alphabet Inc.',
      time: 'After Market Close',
      estimate: '$1.45',
      previous: '$1.38',
      importance: 'high'
    },
    {
      date: '2025-01-03',
      symbol: 'TSLA',
      company: 'Tesla, Inc.',
      time: 'After Market Close',
      estimate: '$0.85',
      previous: '$0.78',
      importance: 'medium'
    },
    {
      date: '2025-01-04',
      symbol: 'AMZN',
      company: 'Amazon.com Inc.',
      time: 'After Market Close',
      estimate: '$0.98',
      previous: '$0.94',
      importance: 'high'
    }
  ];

  const economicData = [
    {
      indicator: 'Consumer Price Index (CPI)',
      current: '3.2%',
      previous: '3.4%',
      forecast: '3.1%',
      releaseDate: '2025-01-15',
      impact: 'high',
      trend: 'down'
    },
    {
      indicator: 'Non-Farm Payrolls',
      current: '199K',
      previous: '150K',
      forecast: '180K',
      releaseDate: '2025-01-03',
      impact: 'high',
      trend: 'up'
    },
    {
      indicator: 'GDP Growth Rate',
      current: '2.8%',
      previous: '2.4%',
      forecast: '2.6%',
      releaseDate: '2025-01-25',
      impact: 'high',
      trend: 'up'
    },
    {
      indicator: 'Federal Funds Rate',
      current: '5.25%',
      previous: '5.50%',
      forecast: '5.00%',
      releaseDate: '2025-01-31',
      impact: 'high',
      trend: 'down'
    }
  ];

  const analysisData = [
    {
      id: 1,
      title: 'Q1 2025 Market Outlook: Navigating Rate Cuts and AI Growth',
      analyst: 'Sarah Chen, CFA',
      firm: 'FinSight Research',
      date: '2025-01-01',
      rating: 'Overweight',
      target: 'S&P 500: 4,800',
      summary: 'Comprehensive analysis of market conditions heading into Q1 2025, focusing on monetary policy impacts and technology sector opportunities.',
      tags: ['Market Outlook', 'Technology', 'Monetary Policy']
    },
    {
      id: 2,
      title: 'Electric Vehicle Sector Deep Dive: Beyond Tesla',
      analyst: 'Michael Rodriguez',
      firm: 'FinSight Research',
      date: '2024-12-30',
      rating: 'Neutral',
      target: 'EV Sector: Mixed',
      summary: 'In-depth analysis of the evolving electric vehicle landscape, examining emerging competitors and market dynamics.',
      tags: ['Electric Vehicles', 'Automotive', 'Clean Energy']
    },
    {
      id: 3,
      title: 'Healthcare Innovation: Biotech Investment Opportunities',
      analyst: 'Dr. Emily Watson',
      firm: 'FinSight Research',
      date: '2024-12-28',
      rating: 'Overweight',
      target: 'XBI: $95',
      summary: 'Analysis of breakthrough therapies and biotech companies positioned for significant growth in 2025.',
      tags: ['Healthcare', 'Biotechnology', 'Innovation']
    }
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const renderNewsTab = () => (
    <div className="space-y-4">
      {newsData?.map(news => (
        <div key={news?.id} className="bg-surface rounded-lg p-4 border border-border hover:border-brand-primary transition-all duration-200 cursor-pointer group">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors mb-2">
                {news?.title}
              </h3>
              <p className="text-sm text-text-secondary mb-3">{news?.summary}</p>
              <div className="flex items-center space-x-4 text-xs text-text-secondary">
                <span className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} />
                  <span>{news?.time}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Building" size={12} />
                  <span>{news?.source}</span>
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(news?.impact)}`}>
                  {news?.impact} impact
                </span>
              </div>
            </div>
            <Button variant="ghost" size="sm" iconName="ExternalLink" />
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-text-secondary">Related Assets:</span>
              <div className="flex items-center space-x-1">
                {news?.relatedAssets?.map(asset => (
                  <span key={asset} className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded font-medium">
                    {asset}
                  </span>
                ))}
              </div>
            </div>
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded">
              {news?.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderEarningsTab = () => (
    <div className="space-y-4">
      {earningsData?.map((earning, index) => (
        <div key={`${earning?.symbol}-${index}`} className="bg-surface rounded-lg p-4 border border-border hover:border-brand-primary transition-all duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-sm font-semibold text-text-primary">{formatDate(earning?.date)}</div>
                <div className="text-xs text-text-secondary">{earning?.time}</div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">{earning?.symbol}</h3>
                <p className="text-sm text-text-secondary">{earning?.company}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-sm font-semibold text-text-primary">{earning?.estimate}</div>
                <div className="text-xs text-text-secondary">Estimate</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-text-primary">{earning?.previous}</div>
                <div className="text-xs text-text-secondary">Previous</div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                earning?.importance === 'high' ?'text-red-600 bg-red-50' :'text-yellow-600 bg-yellow-50'
              }`}>
                {earning?.importance} importance
              </span>
              <Button variant="ghost" size="sm" iconName="Bell">
                Alert
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderEconomicTab = () => (
    <div className="space-y-4">
      {economicData?.map((indicator, index) => (
        <div key={index} className="bg-surface rounded-lg p-4 border border-border hover:border-brand-primary transition-all duration-200">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-text-primary mb-1">{indicator?.indicator}</h3>
              <p className="text-sm text-text-secondary">Release: {formatDate(indicator?.releaseDate)}</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className={`text-lg font-bold flex items-center space-x-1 ${getTrendColor(indicator?.trend)}`}>
                  <span>{indicator?.current}</span>
                  <Icon name={getTrendIcon(indicator?.trend)} size={16} />
                </div>
                <div className="text-xs text-text-secondary">Current</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-text-primary">{indicator?.previous}</div>
                <div className="text-xs text-text-secondary">Previous</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-text-primary">{indicator?.forecast}</div>
                <div className="text-xs text-text-secondary">Forecast</div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(indicator?.impact)}`}>
                {indicator?.impact} impact
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAnalysisTab = () => (
    <div className="space-y-4">
      {analysisData?.map(report => (
        <div key={report?.id} className="bg-surface rounded-lg p-4 border border-border hover:border-brand-primary transition-all duration-200 cursor-pointer group">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors mb-2">
                {report?.title}
              </h3>
              <p className="text-sm text-text-secondary mb-3">{report?.summary}</p>
              <div className="flex items-center space-x-4 text-xs text-text-secondary mb-3">
                <span className="flex items-center space-x-1">
                  <Icon name="User" size={12} />
                  <span>{report?.analyst}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Building" size={12} />
                  <span>{report?.firm}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Calendar" size={12} />
                  <span>{formatDate(report?.date)}</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {report?.tags?.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-muted text-text-secondary text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right ml-4">
              <div className="mb-2">
                <span className="px-3 py-1 bg-brand-primary text-white text-xs rounded-full font-medium">
                  {report?.rating}
                </span>
              </div>
              <div className="text-sm font-semibold text-text-primary">{report?.target}</div>
              <Button variant="ghost" size="sm" iconName="Download" className="mt-2">
                Download
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'news': return renderNewsTab();
      case 'earnings': return renderEarningsTab();
      case 'economic': return renderEconomicTab();
      case 'analysis': return renderAnalysisTab();
      default: return renderNewsTab();
    }
  };

  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="BookOpen" size={24} className="text-brand-primary" />
          <span>Research Center</span>
        </h2>
        <Button variant="ghost" size="sm" iconName="Settings">
          Customize
        </Button>
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-border">
        {tabs?.map(tab => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab?.id
                ? 'bg-brand-primary text-white shadow-brand'
                : 'text-text-secondary hover:text-brand-primary hover:bg-muted'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default ResearchCenter;