import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PortfolioTemplates = ({ onTemplateSelect }) => {
  const templates = [
    {
      id: 'growth',
      name: 'Growth Portfolio',
      description: 'High-growth potential stocks and growth-oriented ETFs',
      riskLevel: 'High',
      expectedReturn: '8-12%',
      icon: 'TrendingUp',
      color: 'text-success',
      bgColor: 'bg-success/10',
      assets: [
        { symbol: 'AAPL', name: 'Apple Inc.', allocation: 15, type: 'Stock', sector: 'Technology', price: 175.43 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', allocation: 15, type: 'Stock', sector: 'Technology', price: 142.56 },
        { symbol: 'MSFT', name: 'Microsoft Corp.', allocation: 15, type: 'Stock', sector: 'Technology', price: 378.85 },
        { symbol: 'TSLA', name: 'Tesla Inc.', allocation: 10, type: 'Stock', sector: 'Consumer Cyclical', price: 248.42 },
        { symbol: 'NVDA', name: 'NVIDIA Corp.', allocation: 15, type: 'Stock', sector: 'Technology', price: 875.28 },
        { symbol: 'QQQ', name: 'Invesco QQQ Trust', allocation: 20, type: 'ETF', sector: 'Technology', price: 378.92 },
        { symbol: 'VUG', name: 'Vanguard Growth ETF', allocation: 10, type: 'ETF', sector: 'Growth', price: 298.45 }
      ]
    },
    {
      id: 'income',
      name: 'Income Portfolio',
      description: 'Dividend-paying stocks and bond ETFs for steady income',
      riskLevel: 'Low',
      expectedReturn: '4-6%',
      icon: 'DollarSign',
      color: 'text-brand-primary',
      bgColor: 'bg-brand-primary/10',
      assets: [
        { symbol: 'VYM', name: 'Vanguard High Dividend Yield', allocation: 25, type: 'ETF', sector: 'Dividend', price: 108.32 },
        { symbol: 'BND', name: 'Vanguard Total Bond Market', allocation: 30, type: 'Bond ETF', sector: 'Fixed Income', price: 78.45 },
        { symbol: 'SCHD', name: 'Schwab US Dividend Equity', allocation: 20, type: 'ETF', sector: 'Dividend', price: 78.92 },
        { symbol: 'JNJ', name: 'Johnson & Johnson', allocation: 10, type: 'Stock', sector: 'Healthcare', price: 162.45 },
        { symbol: 'PG', name: 'Procter & Gamble', allocation: 10, type: 'Stock', sector: 'Consumer Staples', price: 158.73 },
        { symbol: 'KO', name: 'Coca-Cola', allocation: 5, type: 'Stock', sector: 'Consumer Staples', price: 59.82 }
      ]
    },
    {
      id: 'balanced',
      name: 'Balanced Portfolio',
      description: 'Mix of growth and income investments for moderate risk',
      riskLevel: 'Medium',
      expectedReturn: '6-8%',
      icon: 'Scale',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      assets: [
        { symbol: 'SPY', name: 'SPDR S&P 500 ETF', allocation: 40, type: 'ETF', sector: 'Diversified', price: 445.67 },
        { symbol: 'BND', name: 'Vanguard Total Bond Market', allocation: 25, type: 'Bond ETF', sector: 'Fixed Income', price: 78.45 },
        { symbol: 'VTI', name: 'Vanguard Total Stock Market', allocation: 20, type: 'ETF', sector: 'Diversified', price: 234.56 },
        { symbol: 'VXUS', name: 'Vanguard Total International', allocation: 10, type: 'ETF', sector: 'International', price: 58.92 },
        { symbol: 'VNQ', name: 'Vanguard Real Estate ETF', allocation: 5, type: 'REIT ETF', sector: 'Real Estate', price: 89.34 }
      ]
    },
    {
      id: 'esg',
      name: 'ESG Portfolio',
      description: 'Environmentally and socially responsible investments',
      riskLevel: 'Medium',
      expectedReturn: '5-8%',
      icon: 'Leaf',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      assets: [
        { symbol: 'ESG', name: 'FlexShares STOXX US ESG', allocation: 30, type: 'ETF', sector: 'ESG', price: 98.45 },
        { symbol: 'ESGD', name: 'iShares MSCI EAFE ESG', allocation: 20, type: 'ETF', sector: 'ESG International', price: 68.92 },
        { symbol: 'ICLN', name: 'iShares Global Clean Energy', allocation: 15, type: 'ETF', sector: 'Clean Energy', price: 18.73 },
        { symbol: 'TSLA', name: 'Tesla Inc.', allocation: 10, type: 'Stock', sector: 'Electric Vehicles', price: 248.42 },
        { symbol: 'NEE', name: 'NextEra Energy', allocation: 10, type: 'Stock', sector: 'Renewable Energy', price: 58.92 },
        { symbol: 'MSFT', name: 'Microsoft Corp.', allocation: 10, type: 'Stock', sector: 'Technology', price: 378.85 },
        { symbol: 'JNJ', name: 'Johnson & Johnson', allocation: 5, type: 'Stock', sector: 'Healthcare', price: 162.45 }
      ]
    }
  ];

  const handleTemplateSelect = (template) => {
    const portfolioAssets = template?.assets?.map(asset => ({
      ...asset,
      shares: Math.floor((asset?.allocation * 100000) / (100 * asset?.price))
    }));
    onTemplateSelect(portfolioAssets);
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">Portfolio Templates</h2>
          <p className="text-text-secondary mt-1">Start with a pre-built portfolio strategy</p>
        </div>
        <Icon name="Sparkles" size={24} className="text-brand-primary" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates?.map((template) => (
          <div key={template?.id} className="border border-border rounded-lg p-4 hover:shadow-subtle transition-all duration-200">
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-lg ${template?.bgColor}`}>
                <Icon name={template?.icon} size={20} className={template?.color} />
              </div>
              <div className="text-right">
                <span className="text-xs px-2 py-1 bg-muted text-text-secondary rounded-full">
                  {template?.riskLevel} Risk
                </span>
              </div>
            </div>

            <h3 className="font-semibold text-text-primary mb-2">{template?.name}</h3>
            <p className="text-sm text-text-secondary mb-3 line-clamp-2">{template?.description}</p>

            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs text-text-secondary">Expected Return</span>
                <p className="font-medium text-text-primary">{template?.expectedReturn}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-text-secondary">Assets</span>
                <p className="font-medium text-text-primary">{template?.assets?.length}</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {template?.assets?.slice(0, 4)?.map((asset, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-muted text-text-secondary rounded">
                    {asset?.symbol}
                  </span>
                ))}
                {template?.assets?.length > 4 && (
                  <span className="text-xs px-2 py-1 bg-muted text-text-secondary rounded">
                    +{template?.assets?.length - 4} more
                  </span>
                )}
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              fullWidth
              iconName="Plus"
              iconPosition="left"
              onClick={() => handleTemplateSelect(template)}
            >
              Use Template
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-brand-primary/5 rounded-lg border border-brand-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} className="text-brand-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-text-primary mb-1">Pro Tip</h4>
            <p className="text-sm text-text-secondary">
              Templates are starting points that you can customize. Adjust allocations based on your risk tolerance and investment goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTemplates;