import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Icon from '../../../components/AppIcon';

const PortfolioAllocation = () => {
  const [viewMode, setViewMode] = useState('sector');

  const allocationData = {
    sector: [
      { name: 'Technology', value: 45, amount: 56630.29, color: '#1E3A8A' },
      { name: 'Healthcare', value: 20, amount: 25169.46, color: '#3B82F6' },
      { name: 'Financial Services', value: 15, amount: 18877.10, color: '#10B981' },
      { name: 'Consumer Goods', value: 12, amount: 15101.68, color: '#F59E0B' },
      { name: 'Energy', value: 5, amount: 6292.36, color: '#EF4444' },
      { name: 'Real Estate', value: 3, amount: 3775.42, color: '#8B5CF6' }
    ],
    assetType: [
      { name: 'Stocks', value: 70, amount: 88092.12, color: '#1E3A8A' },
      { name: 'ETFs', value: 20, amount: 25169.46, color: '#3B82F6' },
      { name: 'Bonds', value: 7, amount: 8809.21, color: '#10B981' },
      { name: 'Cash', value: 3, amount: 3775.42, color: '#F59E0B' }
    ]
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0]?.payload;
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-border">
          <p className="font-semibold text-text-primary">{data?.name}</p>
          <p className="text-sm text-text-secondary">
            {formatCurrency(data?.amount)} ({data?.value}%)
          </p>
        </div>
      );
    }
    return null;
  };

  const viewModes = [
    { id: 'sector', label: 'By Sector', icon: 'PieChart' },
    { id: 'assetType', label: 'By Asset Type', icon: 'BarChart3' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-text-primary">Portfolio Allocation</h3>
        <div className="flex items-center space-x-2">
          <div className="flex bg-muted rounded-lg p-1">
            {viewModes?.map((mode) => (
              <button
                key={mode?.id}
                onClick={() => setViewMode(mode?.id)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium transition-smooth ${
                  viewMode === mode?.id
                    ? 'bg-white text-brand-primary shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name={mode?.icon} size={14} />
                <span className="hidden sm:inline">{mode?.label}</span>
              </button>
            ))}
          </div>
          <button className="p-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth">
            <Icon name="Settings" size={18} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={allocationData?.[viewMode]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
              >
                {allocationData?.[viewMode]?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry?.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Allocation List */}
        <div className="space-y-3">
          {allocationData?.[viewMode]?.map((item, index) => (
            <div
              key={item?.name}
              className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-smooth"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item?.color }}
                ></div>
                <div>
                  <div className="font-medium text-text-primary">{item?.name}</div>
                  <div className="text-sm text-text-secondary">
                    {formatCurrency(item?.amount)}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-text-primary">{item?.value}%</div>
                <div className="w-16 bg-muted rounded-full h-2 mt-1">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${item?.value}%`,
                      backgroundColor: item?.color
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Summary Stats */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-text-primary">
              {allocationData?.[viewMode]?.length}
            </div>
            <div className="text-sm text-text-secondary">
              {viewMode === 'sector' ? 'Sectors' : 'Asset Types'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">
              {Math.max(...allocationData?.[viewMode]?.map(item => item?.value))}%
            </div>
            <div className="text-sm text-text-secondary">Largest Allocation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-primary">
              {(allocationData?.[viewMode]?.reduce((sum, item) => sum + item?.value, 0) / allocationData?.[viewMode]?.length)?.toFixed(1)}%
            </div>
            <div className="text-sm text-text-secondary">Average Allocation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-text-primary">
              {allocationData?.[viewMode]?.filter(item => item?.value >= 10)?.length}
            </div>
            <div className="text-sm text-text-secondary">Major Holdings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAllocation;