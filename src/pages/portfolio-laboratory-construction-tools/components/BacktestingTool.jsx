import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BacktestingTool = ({ portfolio }) => {
  const [backtestPeriod, setBacktestPeriod] = useState('1Y');
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState(null);

  const periods = [
    { label: '6M', value: '6M' },
    { label: '1Y', value: '1Y' },
    { label: '3Y', value: '3Y' },
    { label: '5Y', value: '5Y' }
  ];

  const generateBacktestData = () => {
    const months = backtestPeriod === '6M' ? 6 : backtestPeriod === '1Y' ? 12 : backtestPeriod === '3Y' ? 36 : 60;
    const data = [];
    let portfolioValue = 100000;
    let spyValue = 100000;
    
    for (let i = 0; i <= months; i++) {
      const date = new Date();
      date?.setMonth(date?.getMonth() - (months - i));
      
      // Simulate portfolio performance with some volatility
      const portfolioReturn = (Math.random() - 0.45) * 0.05 + 0.008; // Slightly positive bias
      const spyReturn = (Math.random() - 0.48) * 0.04 + 0.007; // Market return
      
      portfolioValue *= (1 + portfolioReturn);
      spyValue *= (1 + spyReturn);
      
      data?.push({
        date: date?.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
        portfolio: Math.round(portfolioValue),
        spy: Math.round(spyValue),
        portfolioReturn: ((portfolioValue - 100000) / 100000) * 100,
        spyReturn: ((spyValue - 100000) / 100000) * 100
      });
    }
    
    return data;
  };

  const runBacktest = async () => {
    if (portfolio?.length === 0) return;
    
    setIsRunning(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const backtestData = generateBacktestData();
    const finalData = backtestData?.[backtestData?.length - 1];
    
    const metrics = {
      totalReturn: finalData?.portfolioReturn,
      annualizedReturn: (finalData?.portfolioReturn / (backtestPeriod === '6M' ? 0.5 : backtestPeriod === '1Y' ? 1 : backtestPeriod === '3Y' ? 3 : 5)),
      volatility: Math.random() * 15 + 10, // Mock volatility
      sharpeRatio: Math.random() * 1.5 + 0.5, // Mock Sharpe ratio
      maxDrawdown: -(Math.random() * 15 + 5), // Mock max drawdown
      benchmarkReturn: finalData?.spyReturn,
      alpha: finalData?.portfolioReturn - finalData?.spyReturn,
      beta: Math.random() * 0.5 + 0.8 // Mock beta
    };
    
    setResults({
      data: backtestData,
      metrics
    });
    setIsRunning(false);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-white p-3 border border-border rounded-lg shadow-lg">
          <p className="font-medium text-text-primary mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {entry?.name === 'portfolio' ? 'Portfolio' : 'S&P 500'}: ${entry?.value?.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">Backtesting Tool</h3>
          <p className="text-text-secondary mt-1">Test your portfolio against historical market data</p>
        </div>
        <Icon name="BarChart3" size={24} className="text-brand-primary" />
      </div>
      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-text-primary">Period:</span>
          <div className="flex space-x-2">
            {periods?.map((period) => (
              <button
                key={period?.value}
                onClick={() => setBacktestPeriod(period?.value)}
                className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                  backtestPeriod === period?.value
                    ? 'bg-brand-primary text-white' :'bg-muted text-text-secondary hover:text-brand-primary'
                }`}
              >
                {period?.label}
              </button>
            ))}
          </div>
        </div>
        
        <Button
          variant="default"
          iconName="Play"
          iconPosition="left"
          loading={isRunning}
          disabled={portfolio?.length === 0 || isRunning}
          onClick={runBacktest}
        >
          {isRunning ? 'Running...' : 'Run Backtest'}
        </Button>
      </div>
      {portfolio?.length === 0 && (
        <div className="flex flex-col items-center justify-center h-64 text-center border-2 border-dashed border-border rounded-lg">
          <Icon name="TrendingUp" size={48} className="text-text-secondary mb-4" />
          <p className="text-text-secondary">No portfolio to backtest</p>
          <p className="text-sm text-text-secondary mt-1">Build a portfolio first to run backtesting</p>
        </div>
      )}
      {results && (
        <div className="space-y-6">
          {/* Performance Chart */}
          <div>
            <h4 className="font-medium text-text-primary mb-4">Performance Comparison</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={results?.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value) => `$${(value / 1000)?.toFixed(0)}K`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="portfolio"
                    stroke="#1E3A8A"
                    strokeWidth={2}
                    name="portfolio"
                  />
                  <Line
                    type="monotone"
                    dataKey="spy"
                    stroke="#6B7280"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="spy"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Metrics Grid */}
          <div>
            <h4 className="font-medium text-text-primary mb-4">Performance Metrics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-text-secondary">Total Return</p>
                <p className={`text-lg font-semibold ${results?.metrics?.totalReturn >= 0 ? 'text-success' : 'text-error'}`}>
                  {results?.metrics?.totalReturn >= 0 ? '+' : ''}{results?.metrics?.totalReturn?.toFixed(2)}%
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-text-secondary">Annualized Return</p>
                <p className={`text-lg font-semibold ${results?.metrics?.annualizedReturn >= 0 ? 'text-success' : 'text-error'}`}>
                  {results?.metrics?.annualizedReturn >= 0 ? '+' : ''}{results?.metrics?.annualizedReturn?.toFixed(2)}%
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-text-secondary">Volatility</p>
                <p className="text-lg font-semibold text-text-primary">{results?.metrics?.volatility?.toFixed(2)}%</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-text-secondary">Sharpe Ratio</p>
                <p className="text-lg font-semibold text-text-primary">{results?.metrics?.sharpeRatio?.toFixed(2)}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-text-secondary">Max Drawdown</p>
                <p className="text-lg font-semibold text-error">{results?.metrics?.maxDrawdown?.toFixed(2)}%</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-text-secondary">vs S&P 500</p>
                <p className={`text-lg font-semibold ${results?.metrics?.alpha >= 0 ? 'text-success' : 'text-error'}`}>
                  {results?.metrics?.alpha >= 0 ? '+' : ''}{results?.metrics?.alpha?.toFixed(2)}%
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-text-secondary">Beta</p>
                <p className="text-lg font-semibold text-text-primary">{results?.metrics?.beta?.toFixed(2)}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-text-secondary">Benchmark Return</p>
                <p className={`text-lg font-semibold ${results?.metrics?.benchmarkReturn >= 0 ? 'text-success' : 'text-error'}`}>
                  {results?.metrics?.benchmarkReturn >= 0 ? '+' : ''}{results?.metrics?.benchmarkReturn?.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>

          {/* Analysis Summary */}
          <div className="p-4 bg-brand-primary/5 rounded-lg border border-brand-primary/20">
            <div className="flex items-start space-x-3">
              <Icon name="TrendingUp" size={20} className="text-brand-primary mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary mb-2">Analysis Summary</h4>
                <p className="text-sm text-text-secondary">
                  {results?.metrics?.alpha >= 0 
                    ? `Your portfolio outperformed the S&P 500 by ${results?.metrics?.alpha?.toFixed(2)}% over the ${backtestPeriod} period.`
                    : `Your portfolio underperformed the S&P 500 by ${Math.abs(results?.metrics?.alpha)?.toFixed(2)}% over the ${backtestPeriod} period.`
                  }
                  {' '}The Sharpe ratio of {results?.metrics?.sharpeRatio?.toFixed(2)} indicates {results?.metrics?.sharpeRatio > 1 ? 'good' : 'moderate'} risk-adjusted returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BacktestingTool;