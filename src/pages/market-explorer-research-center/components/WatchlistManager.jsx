import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const WatchlistManager = () => {
  const [watchlists, setWatchlists] = useState([
    {
      id: 1,
      name: 'Tech Giants',
      assets: [
        { symbol: 'AAPL', name: 'Apple Inc.', price: 175.43, change: 2.34, changePercent: 1.35, alert: true },
        { symbol: 'MSFT', name: 'Microsoft Corporation', price: 338.11, change: -1.23, changePercent: -0.36, alert: false },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 138.21, change: 0.89, changePercent: 0.65, alert: true },
        { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 875.28, change: 12.45, changePercent: 1.44, alert: true }
      ],
      isDefault: true
    },
    {
      id: 2,
      name: 'Dividend Champions',
      assets: [
        { symbol: 'JNJ', name: 'Johnson & Johnson', price: 158.92, change: 0.45, changePercent: 0.28, alert: false },
        { symbol: 'PG', name: 'Procter & Gamble', price: 145.67, change: -0.23, changePercent: -0.16, alert: false },
        { symbol: 'KO', name: 'The Coca-Cola Company', price: 58.34, change: 0.12, changePercent: 0.21, alert: true }
      ],
      isDefault: false
    },
    {
      id: 3,
      name: 'Crypto Watch',
      assets: [
        { symbol: 'BTC', name: 'Bitcoin', price: 43250.00, change: 1250.00, changePercent: 2.98, alert: true },
        { symbol: 'ETH', name: 'Ethereum', price: 2650.00, change: -45.30, changePercent: -1.68, alert: false }
      ],
      isDefault: false
    }
  ]);

  const [activeWatchlist, setActiveWatchlist] = useState(1);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newWatchlistName, setNewWatchlistName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const currentWatchlist = watchlists?.find(w => w?.id === activeWatchlist);

  const handleCreateWatchlist = () => {
    if (newWatchlistName?.trim()) {
      const newWatchlist = {
        id: Date.now(),
        name: newWatchlistName?.trim(),
        assets: [],
        isDefault: false
      };
      setWatchlists([...watchlists, newWatchlist]);
      setNewWatchlistName('');
      setShowAddForm(false);
      setActiveWatchlist(newWatchlist?.id);
    }
  };

  const handleDeleteWatchlist = (watchlistId) => {
    const watchlist = watchlists?.find(w => w?.id === watchlistId);
    if (watchlist && !watchlist?.isDefault) {
      setWatchlists(watchlists?.filter(w => w?.id !== watchlistId));
      if (activeWatchlist === watchlistId) {
        setActiveWatchlist(watchlists?.[0]?.id);
      }
    }
  };

  const handleRemoveAsset = (watchlistId, assetSymbol) => {
    setWatchlists(watchlists?.map(w => 
      w?.id === watchlistId 
        ? { ...w, assets: w?.assets?.filter(a => a?.symbol !== assetSymbol) }
        : w
    ));
  };

  const handleToggleAlert = (watchlistId, assetSymbol) => {
    setWatchlists(watchlists?.map(w => 
      w?.id === watchlistId 
        ? { 
            ...w, 
            assets: w?.assets?.map(a => 
              a?.symbol === assetSymbol 
                ? { ...a, alert: !a?.alert }
                : a
            )
          }
        : w
    ));
  };

  const formatPrice = (price, symbol) => {
    if (symbol === 'BTC' || symbol === 'ETH') {
      return `$${price?.toLocaleString()}`;
    }
    return `$${price?.toFixed(2)}`;
  };

  const filteredAssets = currentWatchlist?.assets?.filter(asset =>
    asset?.symbol?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    asset?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  ) || [];

  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="Eye" size={24} className="text-brand-primary" />
          <span>Watchlists</span>
        </h2>
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            iconName="Plus"
            onClick={() => setShowAddForm(true)}
          >
            New List
          </Button>
          <Button variant="ghost" size="sm" iconName="Settings">
            Manage
          </Button>
        </div>
      </div>
      {/* Watchlist Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {watchlists?.map(watchlist => (
          <div key={watchlist?.id} className="relative group">
            <button
              onClick={() => setActiveWatchlist(watchlist?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeWatchlist === watchlist?.id
                  ? 'bg-brand-primary text-white shadow-brand'
                  : 'text-text-secondary hover:text-brand-primary hover:bg-muted'
              }`}
            >
              <span>{watchlist?.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeWatchlist === watchlist?.id
                  ? 'bg-white/20 text-white' :'bg-muted text-text-secondary'
              }`}>
                {watchlist?.assets?.length}
              </span>
            </button>
            {!watchlist?.isDefault && (
              <button
                onClick={() => handleDeleteWatchlist(watchlist?.id)}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
              >
                <Icon name="X" size={12} />
              </button>
            )}
          </div>
        ))}
      </div>
      {/* Add Watchlist Form */}
      {showAddForm && (
        <div className="bg-muted rounded-lg p-4 mb-4">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Enter watchlist name"
              value={newWatchlistName}
              onChange={(e) => setNewWatchlistName(e?.target?.value)}
              onKeyPress={(e) => e?.key === 'Enter' && handleCreateWatchlist()}
              className="flex-1"
            />
            <Button variant="default" size="sm" onClick={handleCreateWatchlist}>
              Create
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              iconName="X"
              onClick={() => {
                setShowAddForm(false);
                setNewWatchlistName('');
              }}
            />
          </div>
        </div>
      )}
      {/* Search */}
      <div className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="Search" size={16} className="text-text-secondary" />
          </div>
          <input
            type="text"
            placeholder="Search assets in watchlist..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>
      {/* Assets List */}
      {currentWatchlist && (
        <div className="space-y-2">
          {filteredAssets?.length > 0 ? (
            filteredAssets?.map(asset => (
              <div
                key={asset?.symbol}
                className="flex items-center justify-between p-3 bg-surface rounded-lg border border-border hover:border-brand-primary transition-all duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{asset?.symbol?.slice(0, 2)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                      {asset?.symbol}
                    </h3>
                    <p className="text-sm text-text-secondary truncate max-w-48">{asset?.name}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold text-text-primary">
                      {formatPrice(asset?.price, asset?.symbol)}
                    </div>
                    <div className={`text-sm flex items-center space-x-1 ${
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

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleToggleAlert(currentWatchlist?.id, asset?.symbol)}
                      className={`p-2 rounded-lg transition-all duration-200 ${
                        asset?.alert
                          ? 'text-brand-primary bg-brand-primary/10 hover:bg-brand-primary/20' :'text-text-secondary hover:text-brand-primary hover:bg-muted'
                      }`}
                      title={asset?.alert ? 'Disable alerts' : 'Enable alerts'}
                    >
                      <Icon name={asset?.alert ? 'Bell' : 'BellOff'} size={16} />
                    </button>
                    
                    <Button variant="ghost" size="sm" iconName="TrendingUp">
                      Chart
                    </Button>
                    
                    <button
                      onClick={() => handleRemoveAsset(currentWatchlist?.id, asset?.symbol)}
                      className="p-2 rounded-lg text-text-secondary hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                      title="Remove from watchlist"
                    >
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <Icon name="Eye" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {searchTerm ? 'No matching assets found' : 'No assets in this watchlist'}
              </h3>
              <p className="text-text-secondary mb-4">
                {searchTerm 
                  ? 'Try adjusting your search terms' :'Start building your watchlist by adding assets you want to track'
                }
              </p>
              {!searchTerm && (
                <Button variant="default" iconName="Plus">
                  Add Assets
                </Button>
              )}
            </div>
          )}
        </div>
      )}
      {/* Quick Stats */}
      {currentWatchlist && currentWatchlist?.assets?.length > 0 && (
        <div className="mt-6 pt-4 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-text-primary">{currentWatchlist?.assets?.length}</div>
              <div className="text-sm text-text-secondary">Total Assets</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">
                {currentWatchlist?.assets?.filter(a => a?.change > 0)?.length}
              </div>
              <div className="text-sm text-text-secondary">Gainers</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-red-600">
                {currentWatchlist?.assets?.filter(a => a?.change < 0)?.length}
              </div>
              <div className="text-sm text-text-secondary">Losers</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-brand-primary">
                {currentWatchlist?.assets?.filter(a => a?.alert)?.length}
              </div>
              <div className="text-sm text-text-secondary">Alerts Active</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchlistManager;