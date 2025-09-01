import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PortfolioBuilder = ({ onPortfolioChange, currentPortfolio }) => {
  const [draggedAsset, setDraggedAsset] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const availableAssets = [
    { symbol: 'AAPL', name: 'Apple Inc.', type: 'Stock', sector: 'Technology', price: 175.43 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', type: 'Stock', sector: 'Technology', price: 142.56 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', type: 'Stock', sector: 'Technology', price: 378.85 },
    { symbol: 'TSLA', name: 'Tesla Inc.', type: 'Stock', sector: 'Consumer Cyclical', price: 248.42 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', type: 'Stock', sector: 'Technology', price: 875.28 },
    { symbol: 'SPY', name: 'SPDR S&P 500 ETF', type: 'ETF', sector: 'Diversified', price: 445.67 },
    { symbol: 'QQQ', name: 'Invesco QQQ Trust', type: 'ETF', sector: 'Technology', price: 378.92 },
    { symbol: 'VTI', name: 'Vanguard Total Stock Market', type: 'ETF', sector: 'Diversified', price: 234.56 },
    { symbol: 'BND', name: 'Vanguard Total Bond Market', type: 'Bond ETF', sector: 'Fixed Income', price: 78.45 },
    { symbol: 'GLD', name: 'SPDR Gold Shares', type: 'Commodity ETF', sector: 'Precious Metals', price: 189.23 }
  ];

  const filteredAssets = availableAssets?.filter(asset =>
    asset?.symbol?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    asset?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const handleDragStart = (e, asset) => {
    setDraggedAsset(asset);
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDragOver = (e) => {
    e?.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e) => {
    e?.preventDefault();
    if (draggedAsset) {
      const existingAsset = currentPortfolio?.find(item => item?.symbol === draggedAsset?.symbol);
      if (!existingAsset) {
        const newAsset = {
          ...draggedAsset,
          allocation: 5,
          shares: Math.floor((5 * 100000) / (100 * draggedAsset?.price))
        };
        onPortfolioChange([...currentPortfolio, newAsset]);
      }
      setDraggedAsset(null);
    }
  };

  const handleAllocationChange = (symbol, newAllocation) => {
    const updatedPortfolio = currentPortfolio?.map(asset =>
      asset?.symbol === symbol
        ? {
            ...asset,
            allocation: newAllocation,
            shares: Math.floor((newAllocation * 100000) / (100 * asset?.price))
          }
        : asset
    );
    onPortfolioChange(updatedPortfolio);
  };

  const removeAsset = (symbol) => {
    const updatedPortfolio = currentPortfolio?.filter(asset => asset?.symbol !== symbol);
    onPortfolioChange(updatedPortfolio);
  };

  const totalAllocation = currentPortfolio?.reduce((sum, asset) => sum + asset?.allocation, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Asset Library */}
      <div className="bg-white rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-text-primary">Asset Library</h3>
          <div className="relative">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
            <input
              type="text"
              placeholder="Search assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          {filteredAssets?.map((asset) => (
            <div
              key={asset?.symbol}
              draggable
              onDragStart={(e) => handleDragStart(e, asset)}
              className="flex items-center justify-between p-3 border border-border rounded-lg cursor-grab hover:bg-muted transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-text-primary">{asset?.symbol}</span>
                  <span className="text-xs px-2 py-1 bg-brand-primary/10 text-brand-primary rounded-full">
                    {asset?.type}
                  </span>
                </div>
                <p className="text-sm text-text-secondary truncate">{asset?.name}</p>
                <p className="text-xs text-text-secondary">{asset?.sector}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-text-primary">${asset?.price?.toFixed(2)}</p>
                <Icon name="GripVertical" size={16} className="text-text-secondary mx-auto mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Portfolio Builder */}
      <div className="bg-white rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-text-primary">Portfolio Builder</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-text-secondary">Total:</span>
            <span className={`font-medium ${totalAllocation === 100 ? 'text-success' : totalAllocation > 100 ? 'text-error' : 'text-warning'}`}>
              {totalAllocation?.toFixed(1)}%
            </span>
          </div>
        </div>

        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="min-h-64 border-2 border-dashed border-border rounded-lg p-4"
        >
          {currentPortfolio?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Icon name="PieChart" size={48} className="text-text-secondary mb-4" />
              <p className="text-text-secondary mb-2">Drag assets here to build your portfolio</p>
              <p className="text-sm text-text-secondary">Start by dragging stocks, ETFs, or bonds from the library</p>
            </div>
          ) : (
            <div className="space-y-3">
              {currentPortfolio?.map((asset) => (
                <div key={asset?.symbol} className="flex items-center space-x-4 p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-text-primary">{asset?.symbol}</span>
                      <span className="text-xs px-2 py-1 bg-brand-primary/10 text-brand-primary rounded-full">
                        {asset?.type}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">{asset?.name}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={asset?.allocation}
                      onChange={(e) => handleAllocationChange(asset?.symbol, parseFloat(e?.target?.value) || 0)}
                      className="w-16 px-2 py-1 text-sm border border-border rounded focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    />
                    <span className="text-sm text-text-secondary">%</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="X"
                      onClick={() => removeAsset(asset?.symbol)}
                      className="text-error hover:text-error hover:bg-error/10"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {currentPortfolio?.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">Portfolio Value (Mock)</span>
              <span className="font-medium text-text-primary">$100,000</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioBuilder;