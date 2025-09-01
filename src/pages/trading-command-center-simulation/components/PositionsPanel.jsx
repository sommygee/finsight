import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PositionsPanel = () => {
  const [viewMode, setViewMode] = useState('current');

  const positions = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      quantity: 100,
      avgPrice: 185.20,
      currentPrice: 189.45,
      marketValue: 18945.00,
      unrealizedPnL: 425.00,
      unrealizedPnLPercent: 2.30,
      dayChange: 234.50,
      dayChangePercent: 1.25,
      sector: 'Technology'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      quantity: 50,
      avgPrice: 375.80,
      currentPrice: 378.92,
      marketValue: 18946.00,
      unrealizedPnL: 156.00,
      unrealizedPnLPercent: 0.83,
      dayChange: -72.50,
      dayChangePercent: -0.38,
      sector: 'Technology'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      quantity: 25,
      avgPrice: 145.50,
      currentPrice: 142.67,
      marketValue: 3566.75,
      unrealizedPnL: -70.75,
      unrealizedPnLPercent: -1.95,
      dayChange: 21.75,
      dayChangePercent: 0.61,
      sector: 'Technology'
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      quantity: 30,
      avgPrice: 245.60,
      currentPrice: 248.91,
      marketValue: 7467.30,
      unrealizedPnL: 99.30,
      unrealizedPnLPercent: 1.35,
      dayChange: 170.10,
      dayChangePercent: 2.33,
      sector: 'Consumer Discretionary'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      quantity: 40,
      avgPrice: 148.75,
      currentPrice: 145.23,
      marketValue: 5809.20,
      unrealizedPnL: -140.80,
      unrealizedPnLPercent: -2.37,
      dayChange: -84.40,
      dayChangePercent: -1.43,
      sector: 'Consumer Discretionary'
    }
  ];

  const totalMarketValue = positions?.reduce((sum, pos) => sum + pos?.marketValue, 0);
  const totalUnrealizedPnL = positions?.reduce((sum, pos) => sum + pos?.unrealizedPnL, 0);
  const totalDayChange = positions?.reduce((sum, pos) => sum + pos?.dayChange, 0);

  const getSectorColor = (sector) => {
    const colors = {
      'Technology': 'bg-blue-100 text-blue-800',
      'Consumer Discretionary': 'bg-purple-100 text-purple-800',
      'Healthcare': 'bg-green-100 text-green-800',
      'Financial': 'bg-yellow-100 text-yellow-800'
    };
    return colors?.[sector] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg border border-border">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Positions</h3>
            <div className="flex items-center space-x-6 mt-2">
              <div className="text-sm">
                <span className="text-text-secondary">Total Value: </span>
                <span className="font-semibold text-text-primary">
                  ${totalMarketValue?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="text-sm">
                <span className="text-text-secondary">Total P&L: </span>
                <span className={`font-semibold ${totalUnrealizedPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {totalUnrealizedPnL >= 0 ? '+' : ''}${totalUnrealizedPnL?.toFixed(2)}
                </span>
              </div>
              <div className="text-sm">
                <span className="text-text-secondary">Day Change: </span>
                <span className={`font-semibold ${totalDayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {totalDayChange >= 0 ? '+' : ''}${totalDayChange?.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex bg-muted rounded-lg p-1">
              <button
                onClick={() => setViewMode('current')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  viewMode === 'current' ?'bg-white text-brand-primary shadow-sm' :'text-text-secondary hover:text-text-primary'
                }`}
              >
                Current
              </button>
              <button
                onClick={() => setViewMode('closed')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  viewMode === 'closed' ?'bg-white text-brand-primary shadow-sm' :'text-text-secondary hover:text-text-primary'
                }`}
              >
                Closed
              </button>
            </div>
            <Button variant="ghost" size="sm" iconName="Download">
              Export
            </Button>
          </div>
        </div>
      </div>
      {/* Positions Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-text-secondary">Symbol</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary">Quantity</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary">Avg Price</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary">Current Price</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary">Market Value</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary">Unrealized P&L</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary">Day Change</th>
              <th className="text-center p-4 text-sm font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {positions?.map((position) => (
              <tr key={position?.symbol} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-semibold text-text-primary">{position?.symbol}</div>
                      <div className="text-sm text-text-secondary truncate max-w-32">
                        {position?.name}
                      </div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getSectorColor(position?.sector)}`}>
                        {position?.sector}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <span className="font-medium text-text-primary">{position?.quantity}</span>
                </td>
                <td className="p-4 text-right">
                  <span className="text-text-primary">${position?.avgPrice?.toFixed(2)}</span>
                </td>
                <td className="p-4 text-right">
                  <span className="font-medium text-text-primary">${position?.currentPrice?.toFixed(2)}</span>
                </td>
                <td className="p-4 text-right">
                  <span className="font-semibold text-text-primary">
                    ${position?.marketValue?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className={`${position?.unrealizedPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    <div className="font-semibold">
                      {position?.unrealizedPnL >= 0 ? '+' : ''}${Math.abs(position?.unrealizedPnL)?.toFixed(2)}
                    </div>
                    <div className="text-sm">
                      ({position?.unrealizedPnL >= 0 ? '+' : ''}{position?.unrealizedPnLPercent?.toFixed(2)}%)
                    </div>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <div className={`flex items-center justify-end space-x-1 ${
                    position?.dayChange >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <Icon 
                      name={position?.dayChange >= 0 ? 'ArrowUp' : 'ArrowDown'} 
                      size={12} 
                    />
                    <div>
                      <div className="font-medium">
                        {position?.dayChange >= 0 ? '+' : ''}${Math.abs(position?.dayChange)?.toFixed(2)}
                      </div>
                      <div className="text-sm">
                        ({position?.dayChange >= 0 ? '+' : ''}{position?.dayChangePercent?.toFixed(2)}%)
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-1.5 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth">
                      <Icon name="TrendingUp" size={16} />
                    </button>
                    <button className="p-1.5 rounded-lg text-text-secondary hover:text-red-600 hover:bg-red-50 transition-smooth">
                      <Icon name="Minus" size={16} />
                    </button>
                    <button className="p-1.5 rounded-lg text-text-secondary hover:text-green-600 hover:bg-green-50 transition-smooth">
                      <Icon name="Plus" size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Position Allocation Chart */}
      <div className="p-6 border-t border-border">
        <h4 className="text-sm font-semibold text-text-primary mb-4">Portfolio Allocation</h4>
        <div className="space-y-3">
          {positions?.map((position) => {
            const allocation = (position?.marketValue / totalMarketValue) * 100;
            return (
              <div key={position?.symbol} className="flex items-center space-x-3">
                <div className="w-16 text-sm font-medium text-text-primary">
                  {position?.symbol}
                </div>
                <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300"
                    style={{ width: `${allocation}%` }}
                  ></div>
                </div>
                <div className="w-12 text-sm text-text-secondary text-right">
                  {allocation?.toFixed(1)}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PositionsPanel;