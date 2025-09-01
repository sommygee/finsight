import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RiskManagement = () => {
  const [selectedTool, setSelectedTool] = useState('position-sizing');

  const riskMetrics = {
    portfolioValue: 100000,
    totalRisk: 2.5,
    maxDrawdown: 8.2,
    sharpeRatio: 1.45,
    beta: 1.12,
    var95: 2850,
    diversificationScore: 78
  };

  const riskTools = [
    {
      id: 'position-sizing',
      name: 'Position Sizing',
      icon: 'Calculator',
      description: 'Calculate optimal position sizes based on risk tolerance'
    },
    {
      id: 'stop-loss',
      name: 'Stop Loss Calculator',
      icon: 'Shield',
      description: 'Set appropriate stop-loss levels for your trades'
    },
    {
      id: 'portfolio-heat',
      name: 'Portfolio Heat Map',
      icon: 'Activity',
      description: 'Visualize concentration risk across positions'
    },
    {
      id: 'correlation',
      name: 'Correlation Analysis',
      icon: 'GitBranch',
      description: 'Analyze correlations between your holdings'
    }
  ];

  const positionSizingData = {
    accountSize: 100000,
    riskPerTrade: 2,
    stopLossPercent: 5,
    entryPrice: 189.45,
    stopLossPrice: 180.00
  };

  const correlationData = [
    { symbol1: 'AAPL', symbol2: 'MSFT', correlation: 0.72, risk: 'Medium' },
    { symbol1: 'AAPL', symbol2: 'GOOGL', correlation: 0.68, risk: 'Medium' },
    { symbol1: 'MSFT', symbol2: 'GOOGL', correlation: 0.75, risk: 'High' },
    { symbol1: 'TSLA', symbol2: 'AMZN', correlation: 0.45, risk: 'Low' }
  ];

  const portfolioHeatData = [
    { symbol: 'AAPL', allocation: 35.2, risk: 'Medium', sector: 'Technology' },
    { symbol: 'MSFT', allocation: 28.7, risk: 'Low', sector: 'Technology' },
    { symbol: 'GOOGL', allocation: 15.8, risk: 'Medium', sector: 'Technology' },
    { symbol: 'TSLA', allocation: 12.3, risk: 'High', sector: 'Consumer Discretionary' },
    { symbol: 'AMZN', allocation: 8.0, risk: 'Medium', sector: 'Consumer Discretionary' }
  ];

  const getRiskColor = (risk) => {
    const colors = {
      'Low': 'text-green-600 bg-green-50',
      'Medium': 'text-yellow-600 bg-yellow-50',
      'High': 'text-red-600 bg-red-50'
    };
    return colors?.[risk] || 'text-gray-600 bg-gray-50';
  };

  const calculatePositionSize = () => {
    const riskAmount = (positionSizingData?.accountSize * positionSizingData?.riskPerTrade) / 100;
    const riskPerShare = positionSizingData?.entryPrice - positionSizingData?.stopLossPrice;
    const shares = Math.floor(riskAmount / riskPerShare);
    const positionValue = shares * positionSizingData?.entryPrice;
    
    return { shares, positionValue, riskAmount };
  };

  const renderPositionSizing = () => {
    const { shares, positionValue, riskAmount } = calculatePositionSize();
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text-primary">Input Parameters</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-text-secondary">Account Size:</span>
                <span className="text-sm font-medium text-text-primary">
                  ${positionSizingData?.accountSize?.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-text-secondary">Risk per Trade:</span>
                <span className="text-sm font-medium text-text-primary">
                  {positionSizingData?.riskPerTrade}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-text-secondary">Entry Price:</span>
                <span className="text-sm font-medium text-text-primary">
                  ${positionSizingData?.entryPrice}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-text-secondary">Stop Loss Price:</span>
                <span className="text-sm font-medium text-text-primary">
                  ${positionSizingData?.stopLossPrice}
                </span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text-primary">Calculated Results</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-text-secondary">Recommended Shares:</span>
                <span className="text-sm font-bold text-brand-primary">{shares}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-text-secondary">Position Value:</span>
                <span className="text-sm font-medium text-text-primary">
                  ${positionValue?.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-text-secondary">Risk Amount:</span>
                <span className="text-sm font-medium text-red-600">
                  ${riskAmount?.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-text-secondary">Risk per Share:</span>
                <span className="text-sm font-medium text-text-primary">
                  ${(positionSizingData?.entryPrice - positionSizingData?.stopLossPrice)?.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={16} className="text-blue-600 mt-0.5" />
            <div>
              <h5 className="text-sm font-semibold text-blue-800">Position Sizing Tip</h5>
              <p className="text-sm text-blue-700 mt-1">
                This calculation ensures you never risk more than {positionSizingData?.riskPerTrade}% of your account on a single trade. 
                Adjust your stop loss and position size accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPortfolioHeat = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {portfolioHeatData?.map((item) => (
          <div key={item?.symbol} className="p-4 border border-border rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-semibold text-text-primary">{item?.symbol}</h4>
                <p className="text-sm text-text-secondary">{item?.sector}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(item?.risk)}`}>
                {item?.risk} Risk
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Allocation</span>
                <span className="font-medium text-text-primary">{item?.allocation}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    item?.risk === 'High' ? 'bg-red-500' : 
                    item?.risk === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${(item?.allocation / 40) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={16} className="text-yellow-600 mt-0.5" />
          <div>
            <h5 className="text-sm font-semibold text-yellow-800">Concentration Warning</h5>
            <p className="text-sm text-yellow-700 mt-1">
              Your portfolio has high concentration in Technology sector (79.7%). Consider diversifying across sectors to reduce risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCorrelationAnalysis = () => (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-text-secondary">Asset Pair</th>
              <th className="text-center p-4 text-sm font-medium text-text-secondary">Correlation</th>
              <th className="text-center p-4 text-sm font-medium text-text-secondary">Risk Level</th>
              <th className="text-left p-4 text-sm font-medium text-text-secondary">Interpretation</th>
            </tr>
          </thead>
          <tbody>
            {correlationData?.map((item, index) => (
              <tr key={index} className="border-b border-border">
                <td className="p-4">
                  <span className="font-medium text-text-primary">
                    {item?.symbol1} - {item?.symbol2}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="font-mono text-text-primary">{item?.correlation}</span>
                </td>
                <td className="p-4 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(item?.risk)}`}>
                    {item?.risk}
                  </span>
                </td>
                <td className="p-4 text-sm text-text-secondary">
                  {item?.correlation > 0.7 ? 'Strong positive correlation - high diversification risk' :
                   item?.correlation > 0.5 ? 'Moderate correlation - some diversification benefit': 'Low correlation - good diversification'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5" />
          <div>
            <h5 className="text-sm font-semibold text-green-800">Diversification Insight</h5>
            <p className="text-sm text-green-700 mt-1">
              TSLA and AMZN show low correlation (0.45), providing good diversification benefits. 
              Consider reducing exposure to highly correlated tech stocks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg border border-border">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Risk Management</h3>
            <p className="text-sm text-text-secondary mt-1">
              Monitor and manage your portfolio risk with professional tools
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <span className="text-text-secondary">Risk Score: </span>
              <span className={`font-semibold ${
                riskMetrics?.totalRisk <= 2 ? 'text-green-600' : 
                riskMetrics?.totalRisk <= 4 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {riskMetrics?.totalRisk}%
              </span>
            </div>
            <Button variant="ghost" size="sm" iconName="Settings">
              Settings
            </Button>
          </div>
        </div>
      </div>
      {/* Risk Metrics Overview */}
      <div className="p-6 border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <div className="text-center">
            <div className="text-sm text-text-secondary">Portfolio Value</div>
            <div className="text-lg font-bold text-text-primary">
              ${riskMetrics?.portfolioValue?.toLocaleString()}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-text-secondary">Total Risk</div>
            <div className="text-lg font-bold text-yellow-600">{riskMetrics?.totalRisk}%</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-text-secondary">Max Drawdown</div>
            <div className="text-lg font-bold text-red-600">{riskMetrics?.maxDrawdown}%</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-text-secondary">Sharpe Ratio</div>
            <div className="text-lg font-bold text-green-600">{riskMetrics?.sharpeRatio}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-text-secondary">Beta</div>
            <div className="text-lg font-bold text-text-primary">{riskMetrics?.beta}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-text-secondary">VaR (95%)</div>
            <div className="text-lg font-bold text-red-600">${riskMetrics?.var95}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-text-secondary">Diversification</div>
            <div className="text-lg font-bold text-blue-600">{riskMetrics?.diversificationScore}</div>
          </div>
        </div>
      </div>
      {/* Risk Tools Navigation */}
      <div className="p-6 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {riskTools?.map((tool) => (
            <button
              key={tool?.id}
              onClick={() => setSelectedTool(tool?.id)}
              className={`p-4 rounded-lg border text-left transition-smooth ${
                selectedTool === tool?.id
                  ? 'border-brand-primary bg-brand-primary/5 text-brand-primary' :'border-border hover:border-brand-primary/50 text-text-secondary hover:text-text-primary'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Icon name={tool?.icon} size={20} />
                <span className="font-medium">{tool?.name}</span>
              </div>
              <p className="text-sm opacity-80">{tool?.description}</p>
            </button>
          ))}
        </div>
      </div>
      {/* Risk Tool Content */}
      <div className="p-6">
        {selectedTool === 'position-sizing' && renderPositionSizing()}
        {selectedTool === 'portfolio-heat' && renderPortfolioHeat()}
        {selectedTool === 'correlation' && renderCorrelationAnalysis()}
        {selectedTool === 'stop-loss' && (
          <div className="text-center py-12">
            <Icon name="Shield" size={48} className="text-text-secondary mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-text-primary mb-2">Stop Loss Calculator</h4>
            <p className="text-text-secondary">
              Advanced stop loss calculation tools coming soon. Set intelligent stop losses based on volatility and support levels.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RiskManagement;