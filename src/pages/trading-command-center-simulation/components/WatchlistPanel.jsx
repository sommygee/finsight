import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WatchlistPanel = () => {
  const [selectedWatchlist, setSelectedWatchlist] = useState('default');
  
  const watchlists = [
    { id: 'default', name: 'My Watchlist', count: 12 },
    { id: 'tech', name: 'Tech Stocks', count: 8 },
    { id: 'dividend', name: 'Dividend Plays', count: 15 },
    { id: 'crypto', name: 'Crypto ETFs', count: 6 }
  ];

  const watchlistData = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 189.45,
      change: 2.34,
      changePercent: 1.25,
      volume: '45.2M',
      marketCap: '2.95T',
      pe: 28.5,
      alerts: 2
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 378.92,
      change: -1.45,
      changePercent: -0.38,
      volume: '23.7M',
      marketCap: '2.81T',
      pe: 32.1,
      alerts: 0
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 142.67,
      change: 0.87,
      changePercent: 0.61,
      volume: '18.9M',
      marketCap: '1.78T',
      pe: 25.4,
      alerts: 1
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 145.23,
      change: -2.11,
      changePercent: -1.43,
      volume: '31.4M',
      marketCap: '1.51T',
      pe: 45.2,
      alerts: 3
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 248.91,
      change: 5.67,
      changePercent: 2.33,
      volume: '67.8M',
      marketCap: '791B',
      pe: 62.8,
      alerts: 1
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-border">
      {/* Watchlist Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-text-primary">Watchlists</h3>
          <Button variant="ghost" size="sm" iconName="Plus">
            Add Symbol
          </Button>
        </div>
        
        {/* Watchlist Tabs */}
        <div className="flex space-x-1 bg-muted rounded-lg p-1">
          {watchlists?.map((list) => (
            <button
              key={list?.id}
              onClick={() => setSelectedWatchlist(list?.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                selectedWatchlist === list?.id
                  ? 'bg-white text-brand-primary shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <span>{list?.name}</span>
              <span className="text-xs bg-text-secondary/20 px-1.5 py-0.5 rounded-full">
                {list?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Watchlist Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-text-secondary">Symbol</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary">Price</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary">Change</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary hidden md:table-cell">Volume</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary hidden lg:table-cell">P/E</th>
              <th className="text-center p-4 text-sm font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchlistData?.map((stock, index) => (
              <tr key={stock?.symbol} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-semibold text-text-primary">{stock?.symbol}</div>
                      <div className="text-sm text-text-secondary truncate max-w-32">
                        {stock?.name}
                      </div>
                    </div>
                    {stock?.alerts > 0 && (
                      <div className="flex items-center space-x-1">
                        <Icon name="Bell" size={14} className="text-warning" />
                        <span className="text-xs text-warning">{stock?.alerts}</span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="p-4 text-right">
                  <div className="font-semibold text-text-primary">
                    ${stock?.price?.toFixed(2)}
                  </div>
                </td>
                <td className="p-4 text-right">
                  <div className={`flex items-center justify-end space-x-1 ${
                    stock?.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <Icon 
                      name={stock?.change >= 0 ? 'ArrowUp' : 'ArrowDown'} 
                      size={12} 
                    />
                    <div>
                      <div className="font-medium">
                        {stock?.change >= 0 ? '+' : ''}{stock?.change?.toFixed(2)}
                      </div>
                      <div className="text-xs">
                        ({stock?.change >= 0 ? '+' : ''}{stock?.changePercent?.toFixed(2)}%)
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-right text-sm text-text-secondary hidden md:table-cell">
                  {stock?.volume}
                </td>
                <td className="p-4 text-right text-sm text-text-secondary hidden lg:table-cell">
                  {stock?.pe}
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-1.5 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth">
                      <Icon name="TrendingUp" size={16} />
                    </button>
                    <button className="p-1.5 rounded-lg text-text-secondary hover:text-green-600 hover:bg-green-50 transition-smooth">
                      <Icon name="ShoppingCart" size={16} />
                    </button>
                    <button className="p-1.5 rounded-lg text-text-secondary hover:text-red-600 hover:bg-red-50 transition-smooth">
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Watchlist Footer */}
      <div className="p-4 border-t border-border bg-muted/30">
        <div className="flex items-center justify-between text-sm text-text-secondary">
          <span>Showing {watchlistData?.length} of {watchlists?.find(w => w?.id === selectedWatchlist)?.count} symbols</span>
          <div className="flex items-center space-x-2">
            <span>Auto-refresh:</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>ON</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchlistPanel;