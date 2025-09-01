import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import Icon from '../../../components/AppIcon';

const PerformanceChart = () => {
  const [timeframe, setTimeframe] = useState('1M');
  const [chartType, setChartType] = useState('line');

  const performanceData = {
    '1D': [
      { time: '9:30', portfolio: 125000, benchmark: 124800, timestamp: '09:30 AM' },
      { time: '10:00', portfolio: 125200, benchmark: 124900, timestamp: '10:00 AM' },
      { time: '10:30', portfolio: 125100, benchmark: 124850, timestamp: '10:30 AM' },
      { time: '11:00', portfolio: 125400, benchmark: 125000, timestamp: '11:00 AM' },
      { time: '11:30', portfolio: 125600, benchmark: 125100, timestamp: '11:30 AM' },
      { time: '12:00', portfolio: 125500, benchmark: 125050, timestamp: '12:00 PM' },
      { time: '12:30', portfolio: 125700, benchmark: 125200, timestamp: '12:30 PM' },
      { time: '1:00', portfolio: 125800, benchmark: 125300, timestamp: '01:00 PM' },
      { time: '1:30', portfolio: 125900, benchmark: 125400, timestamp: '01:30 PM' },
      { time: '2:00', portfolio: 125847, benchmark: 125350, timestamp: '02:00 PM' }
    ],
    '1W': [
      { time: 'Mon', portfolio: 123500, benchmark: 123200, timestamp: 'Monday' },
      { time: 'Tue', portfolio: 124200, benchmark: 123800, timestamp: 'Tuesday' },
      { time: 'Wed', portfolio: 124800, benchmark: 124400, timestamp: 'Wednesday' },
      { time: 'Thu', portfolio: 125200, benchmark: 124900, timestamp: 'Thursday' },
      { time: 'Fri', portfolio: 125847, benchmark: 125350, timestamp: 'Friday' }
    ],
    '1M': [
      { time: 'Week 1', portfolio: 120000, benchmark: 119800, timestamp: 'Aug 1-7' },
      { time: 'Week 2', portfolio: 122000, benchmark: 121500, timestamp: 'Aug 8-14' },
      { time: 'Week 3', portfolio: 123500, benchmark: 123000, timestamp: 'Aug 15-21' },
      { time: 'Week 4', portfolio: 125847, benchmark: 125350, timestamp: 'Aug 22-28' }
    ],
    '3M': [
      { time: 'Jun', portfolio: 115000, benchmark: 114500, timestamp: 'June 2024' },
      { time: 'Jul', portfolio: 118000, benchmark: 117200, timestamp: 'July 2024' },
      { time: 'Aug', portfolio: 125847, benchmark: 125350, timestamp: 'August 2024' }
    ],
    '1Y': [
      { time: 'Sep 23', portfolio: 100000, benchmark: 100000, timestamp: 'Sep 2023' },
      { time: 'Dec 23', portfolio: 105000, benchmark: 103500, timestamp: 'Dec 2023' },
      { time: 'Mar 24', portfolio: 110000, benchmark: 108000, timestamp: 'Mar 2024' },
      { time: 'Jun 24', portfolio: 115000, benchmark: 114500, timestamp: 'Jun 2024' },
      { time: 'Aug 24', portfolio: 125847, benchmark: 125350, timestamp: 'Aug 2024' }
    ]
  };

  const timeframes = [
    { id: '1D', label: '1D' },
    { id: '1W', label: '1W' },
    { id: '1M', label: '1M' },
    { id: '3M', label: '3M' },
    { id: '1Y', label: '1Y' }
  ];

  const chartTypes = [
    { id: 'line', label: 'Line', icon: 'TrendingUp' },
    { id: 'area', label: 'Area', icon: 'BarChart3' }
  ];

  const currentData = performanceData?.[timeframe];
  const latestValue = currentData?.[currentData?.length - 1];
  const firstValue = currentData?.[0];
  const totalReturn = latestValue?.portfolio - firstValue?.portfolio;
  const totalReturnPercent = ((totalReturn / firstValue?.portfolio) * 100);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(value);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      const portfolioValue = payload?.find(p => p?.dataKey === 'portfolio')?.value;
      const benchmarkValue = payload?.find(p => p?.dataKey === 'benchmark')?.value;
      const dataPoint = currentData?.find(d => d?.time === label);
      
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-border">
          <p className="font-semibold text-text-primary mb-2">{dataPoint?.timestamp}</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-brand-primary rounded-full"></div>
                <span className="text-sm text-text-secondary">Portfolio</span>
              </div>
              <span className="font-medium text-text-primary">{formatCurrency(portfolioValue)}</span>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-text-secondary rounded-full"></div>
                <span className="text-sm text-text-secondary">S&P 500</span>
              </div>
              <span className="font-medium text-text-primary">{formatCurrency(benchmarkValue)}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
        <div>
          <h3 className="text-xl font-bold text-text-primary">Performance Chart</h3>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-text-primary">
                {formatCurrency(latestValue?.portfolio)}
              </span>
              <span className={`text-sm font-medium ${totalReturn >= 0 ? 'text-success' : 'text-error'}`}>
                {totalReturn >= 0 ? '+' : ''}{formatCurrency(totalReturn)} ({totalReturn >= 0 ? '+' : ''}{totalReturnPercent?.toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Chart Type Toggle */}
          <div className="flex bg-muted rounded-lg p-1">
            {chartTypes?.map((type) => (
              <button
                key={type?.id}
                onClick={() => setChartType(type?.id)}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-md text-sm font-medium transition-smooth ${
                  chartType === type?.id
                    ? 'bg-white text-brand-primary shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name={type?.icon} size={14} />
                <span className="hidden sm:inline">{type?.label}</span>
              </button>
            ))}
          </div>

          {/* Timeframe Selector */}
          <div className="flex bg-muted rounded-lg p-1">
            {timeframes?.map((tf) => (
              <button
                key={tf?.id}
                onClick={() => setTimeframe(tf?.id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-smooth ${
                  timeframe === tf?.id
                    ? 'bg-white text-brand-primary shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {tf?.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Chart */}
      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'area' ? (
            <AreaChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="time" 
                stroke="#6B7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#6B7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatCurrency}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="portfolio"
                stroke="#1E3A8A"
                fill="#1E3A8A"
                fillOpacity={0.1}
                strokeWidth={3}
              />
              <Area
                type="monotone"
                dataKey="benchmark"
                stroke="#6B7280"
                fill="#6B7280"
                fillOpacity={0.05}
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </AreaChart>
          ) : (
            <LineChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="time" 
                stroke="#6B7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#6B7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatCurrency}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="portfolio"
                stroke="#1E3A8A"
                strokeWidth={3}
                dot={{ fill: '#1E3A8A', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#1E3A8A', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="benchmark"
                stroke="#6B7280"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#6B7280', strokeWidth: 2, r: 3 }}
                activeDot={{ r: 5, stroke: '#6B7280', strokeWidth: 2 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
      {/* Legend and Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-brand-primary rounded-full"></div>
            <span className="text-sm font-medium text-text-primary">Your Portfolio</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-1 bg-text-secondary rounded-full"></div>
            <span className="text-sm font-medium text-text-secondary">S&P 500 Benchmark</span>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <div className="text-center">
            <div className="font-semibold text-text-primary">
              {((latestValue?.portfolio - latestValue?.benchmark) / latestValue?.benchmark * 100)?.toFixed(2)}%
            </div>
            <div className="text-text-secondary">vs Benchmark</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-success">
              {Math.max(...currentData?.map(d => d?.portfolio)) === latestValue?.portfolio ? 'ATH' : formatCurrency(Math.max(...currentData?.map(d => d?.portfolio)))}
            </div>
            <div className="text-text-secondary">High</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-text-primary">
              {formatCurrency(Math.min(...currentData?.map(d => d?.portfolio)))}
            </div>
            <div className="text-text-secondary">Low</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;