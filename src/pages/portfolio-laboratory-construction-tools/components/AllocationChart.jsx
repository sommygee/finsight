import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Icon from '../../../components/AppIcon';

const AllocationChart = ({ portfolio, viewType, onViewTypeChange }) => {
  const COLORS = ['#1E3A8A', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#06B6D4'];

  const chartData = portfolio?.map((asset, index) => ({
    name: asset?.symbol,
    fullName: asset?.name,
    value: asset?.allocation,
    color: COLORS?.[index % COLORS?.length],
    sector: asset?.sector,
    type: asset?.type
  }));

  const sectorData = portfolio?.reduce((acc, asset) => {
    const existing = acc?.find(item => item?.sector === asset?.sector);
    if (existing) {
      existing.value += asset?.allocation;
    } else {
      acc?.push({
        sector: asset?.sector,
        value: asset?.allocation,
        color: COLORS?.[acc?.length % COLORS?.length]
      });
    }
    return acc;
  }, []);

  const typeData = portfolio?.reduce((acc, asset) => {
    const existing = acc?.find(item => item?.type === asset?.type);
    if (existing) {
      existing.value += asset?.allocation;
    } else {
      acc?.push({
        type: asset?.type,
        value: asset?.allocation,
        color: COLORS?.[acc?.length % COLORS?.length]
      });
    }
    return acc;
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0]?.payload;
      return (
        <div className="bg-white p-3 border border-border rounded-lg shadow-lg">
          <p className="font-medium text-text-primary">{data?.fullName || data?.sector || data?.type}</p>
          <p className="text-sm text-text-secondary">
            Allocation: <span className="font-medium text-brand-primary">{data?.value?.toFixed(1)}%</span>
          </p>
          {data?.sector && <p className="text-xs text-text-secondary">Sector: {data?.sector}</p>}
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    switch (viewType) {
      case 'assets':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value?.toFixed(1)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry?.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'sectors':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sectorData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sector" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'types':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={typeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ type, value }) => `${type} ${value?.toFixed(1)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {typeData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry?.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  if (portfolio?.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Portfolio Allocation</h3>
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <Icon name="PieChart" size={48} className="text-text-secondary mb-4" />
          <p className="text-text-secondary">No assets in portfolio</p>
          <p className="text-sm text-text-secondary mt-1">Add assets to see allocation visualization</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Portfolio Allocation</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onViewTypeChange('assets')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              viewType === 'assets' ?'bg-brand-primary text-white' :'bg-muted text-text-secondary hover:text-brand-primary'
            }`}
          >
            Assets
          </button>
          <button
            onClick={() => onViewTypeChange('sectors')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              viewType === 'sectors' ?'bg-brand-primary text-white' :'bg-muted text-text-secondary hover:text-brand-primary'
            }`}
          >
            Sectors
          </button>
          <button
            onClick={() => onViewTypeChange('types')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              viewType === 'types' ?'bg-brand-primary text-white' :'bg-muted text-text-secondary hover:text-brand-primary'
            }`}
          >
            Types
          </button>
        </div>
      </div>
      {renderChart()}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-3 bg-muted rounded-lg">
          <p className="text-sm text-text-secondary">Total Assets</p>
          <p className="text-lg font-semibold text-text-primary">{portfolio?.length}</p>
        </div>
        <div className="text-center p-3 bg-muted rounded-lg">
          <p className="text-sm text-text-secondary">Total Allocation</p>
          <p className="text-lg font-semibold text-text-primary">
            {portfolio?.reduce((sum, asset) => sum + asset?.allocation, 0)?.toFixed(1)}%
          </p>
        </div>
        <div className="text-center p-3 bg-muted rounded-lg">
          <p className="text-sm text-text-secondary">Sectors</p>
          <p className="text-lg font-semibold text-text-primary">{sectorData?.length}</p>
        </div>
        <div className="text-center p-3 bg-muted rounded-lg">
          <p className="text-sm text-text-secondary">Asset Types</p>
          <p className="text-lg font-semibold text-text-primary">{typeData?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default AllocationChart;