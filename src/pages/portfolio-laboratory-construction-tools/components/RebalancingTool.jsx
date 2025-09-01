import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RebalancingTool = ({ portfolio, onPortfolioChange }) => {
  const [targetAllocations, setTargetAllocations] = useState({});
  const [rebalanceMethod, setRebalanceMethod] = useState('percentage');
  const [showTaxImpact, setShowTaxImpact] = useState(false);

  // Initialize target allocations with current allocations
  React.useEffect(() => {
    const targets = {};
    portfolio?.forEach(asset => {
      targets[asset.symbol] = asset?.allocation;
    });
    setTargetAllocations(targets);
  }, [portfolio]);

  const calculateRebalanceNeeds = () => {
    return portfolio?.map(asset => {
      const currentAllocation = asset?.allocation;
      const targetAllocation = targetAllocations?.[asset?.symbol] || currentAllocation;
      const difference = targetAllocation - currentAllocation;
      const currentValue = (currentAllocation / 100) * 100000; // Mock portfolio value
      const targetValue = (targetAllocation / 100) * 100000;
      const dollarDifference = targetValue - currentValue;
      
      return {
        ...asset,
        targetAllocation,
        difference,
        dollarDifference,
        action: difference > 0.5 ? 'Buy' : difference < -0.5 ? 'Sell' : 'Hold',
        taxImpact: Math.abs(dollarDifference) * 0.15 // Mock 15% tax rate
      };
    });
  };

  const rebalanceData = calculateRebalanceNeeds();
  const totalRebalanceValue = rebalanceData?.reduce((sum, asset) => sum + Math.abs(asset?.dollarDifference), 0);
  const totalTaxImpact = rebalanceData?.reduce((sum, asset) => sum + (asset?.action === 'Sell' ? asset?.taxImpact : 0), 0);

  const handleTargetChange = (symbol, newTarget) => {
    setTargetAllocations(prev => ({
      ...prev,
      [symbol]: parseFloat(newTarget) || 0
    }));
  };

  const executeRebalance = () => {
    const rebalancedPortfolio = portfolio?.map(asset => ({
      ...asset,
      allocation: targetAllocations?.[asset?.symbol] || asset?.allocation,
      shares: Math.floor((targetAllocations?.[asset?.symbol] * 100000) / (100 * asset?.price))
    }));
    onPortfolioChange(rebalancedPortfolio);
  };

  const autoBalance = () => {
    const equalWeight = 100 / portfolio?.length;
    const newTargets = {};
    portfolio?.forEach(asset => {
      newTargets[asset.symbol] = equalWeight;
    });
    setTargetAllocations(newTargets);
  };

  const resetTargets = () => {
    const currentTargets = {};
    portfolio?.forEach(asset => {
      currentTargets[asset.symbol] = asset?.allocation;
    });
    setTargetAllocations(currentTargets);
  };

  if (portfolio?.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Rebalancing Tool</h3>
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <Icon name="Scale" size={48} className="text-text-secondary mb-4" />
          <p className="text-text-secondary">No portfolio to rebalance</p>
          <p className="text-sm text-text-secondary mt-1">Build a portfolio to use rebalancing tools</p>
        </div>
      </div>
    );
  }

  const totalTargetAllocation = Object.values(targetAllocations)?.reduce((sum, allocation) => sum + allocation, 0);

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">Rebalancing Tool</h3>
          <p className="text-text-secondary mt-1">Optimize your portfolio allocation</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" iconName="RotateCcw" onClick={resetTargets}>
            Reset
          </Button>
          <Button variant="outline" size="sm" iconName="Zap" onClick={autoBalance}>
            Auto Balance
          </Button>
        </div>
      </div>
      {/* Target Allocation Controls */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-text-primary">Target Allocations</h4>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-text-secondary">Total:</span>
            <span className={`font-medium ${totalTargetAllocation === 100 ? 'text-success' : totalTargetAllocation > 100 ? 'text-error' : 'text-warning'}`}>
              {totalTargetAllocation?.toFixed(1)}%
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {portfolio?.map((asset) => (
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
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-xs text-text-secondary">Current</p>
                  <p className="font-medium text-text-primary">{asset?.allocation?.toFixed(1)}%</p>
                </div>
                <Icon name="ArrowRight" size={16} className="text-text-secondary" />
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={targetAllocations?.[asset?.symbol] || 0}
                    onChange={(e) => handleTargetChange(asset?.symbol, e?.target?.value)}
                    className="w-16 px-2 py-1 text-sm border border-border rounded focus:outline-none focus:ring-1 focus:ring-brand-primary"
                  />
                  <span className="text-sm text-text-secondary">%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Rebalance Analysis */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-text-primary">Rebalance Analysis</h4>
          <button
            onClick={() => setShowTaxImpact(!showTaxImpact)}
            className="text-sm text-brand-primary hover:underline"
          >
            {showTaxImpact ? 'Hide' : 'Show'} Tax Impact
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 text-text-primary">Asset</th>
                <th className="text-center py-2 text-text-primary">Action</th>
                <th className="text-center py-2 text-text-primary">Difference</th>
                <th className="text-center py-2 text-text-primary">Dollar Amount</th>
                {showTaxImpact && <th className="text-center py-2 text-text-primary">Tax Impact</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rebalanceData?.map((asset) => (
                <tr key={asset?.symbol}>
                  <td className="py-3">
                    <div>
                      <span className="font-medium text-text-primary">{asset?.symbol}</span>
                      <p className="text-xs text-text-secondary">{asset?.name}</p>
                    </div>
                  </td>
                  <td className="py-3 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      asset?.action === 'Buy' ? 'bg-success/10 text-success' :
                      asset?.action === 'Sell'? 'bg-error/10 text-error' : 'bg-muted text-text-secondary'
                    }`}>
                      {asset?.action}
                    </span>
                  </td>
                  <td className="py-3 text-center">
                    <span className={`font-medium ${
                      asset?.difference > 0 ? 'text-success' :
                      asset?.difference < 0 ? 'text-error': 'text-text-secondary'
                    }`}>
                      {asset?.difference > 0 ? '+' : ''}{asset?.difference?.toFixed(1)}%
                    </span>
                  </td>
                  <td className="py-3 text-center">
                    <span className={`font-medium ${
                      asset?.dollarDifference > 0 ? 'text-success' :
                      asset?.dollarDifference < 0 ? 'text-error': 'text-text-secondary'
                    }`}>
                      {asset?.dollarDifference > 0 ? '+' : ''}${asset?.dollarDifference?.toFixed(0)}
                    </span>
                  </td>
                  {showTaxImpact && (
                    <td className="py-3 text-center">
                      <span className="text-text-secondary">
                        ${asset?.action === 'Sell' ? asset?.taxImpact?.toFixed(0) : '0'}
                      </span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Summary and Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-muted rounded-lg text-center">
          <p className="text-sm text-text-secondary">Total Rebalance</p>
          <p className="text-lg font-semibold text-text-primary">${totalRebalanceValue?.toFixed(0)}</p>
        </div>
        <div className="p-4 bg-muted rounded-lg text-center">
          <p className="text-sm text-text-secondary">Tax Impact</p>
          <p className="text-lg font-semibold text-error">${totalTaxImpact?.toFixed(0)}</p>
        </div>
        <div className="p-4 bg-muted rounded-lg text-center">
          <p className="text-sm text-text-secondary">Net Cost</p>
          <p className="text-lg font-semibold text-text-primary">${(totalRebalanceValue + totalTaxImpact)?.toFixed(0)}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm text-text-secondary">
          <p>Rebalancing will help maintain your target risk profile</p>
          <p>Consider tax implications before executing trades</p>
        </div>
        <Button
          variant="default"
          iconName="RefreshCw"
          iconPosition="left"
          disabled={totalTargetAllocation !== 100}
          onClick={executeRebalance}
        >
          Execute Rebalance
        </Button>
      </div>
      {totalTargetAllocation !== 100 && (
        <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="AlertTriangle" size={16} className="text-warning" />
            <p className="text-sm text-warning">
              Target allocations must total 100% to execute rebalance
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RebalancingTool;