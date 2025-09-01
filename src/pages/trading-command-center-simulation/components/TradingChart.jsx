import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TradingChart = ({ symbol = 'AAPL' }) => {
  const [timeframe, setTimeframe] = useState('1D');
  const [chartType, setChartType] = useState('candlestick');
  const [showIndicators, setShowIndicators] = useState(false);

  const timeframes = ['1m', '5m', '15m', '1H', '4H', '1D', '1W', '1M'];
  const chartTypes = [
    { value: 'candlestick', label: 'Candlestick', icon: 'BarChart3' },
    { value: 'line', label: 'Line', icon: 'TrendingUp' },
    { value: 'area', label: 'Area', icon: 'Activity' }
  ];

  const indicators = [
    { id: 'sma', name: 'Simple Moving Average', active: true },
    { id: 'ema', name: 'Exponential Moving Average', active: false },
    { id: 'rsi', name: 'RSI', active: true },
    { id: 'macd', name: 'MACD', active: false },
    { id: 'bollinger', name: 'Bollinger Bands', active: false }
  ];

  // Mock chart data - in real app, this would come from TradingView or similar
  const mockPrice = 189.45;
  const mockChange = 2.34;
  const mockChangePercent = 1.25;

  return (
    <div className="bg-white rounded-lg border border-border">
      {/* Chart Header */}
      <div className="p-4 border-b border-border">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-lg font-semibold text-text-primary">{symbol}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-text-primary">
                  ${mockPrice?.toFixed(2)}
                </span>
                <div className={`flex items-center space-x-1 ${
                  mockChange >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  <Icon 
                    name={mockChange >= 0 ? 'ArrowUp' : 'ArrowDown'} 
                    size={16} 
                  />
                  <span className="font-medium">
                    {mockChange >= 0 ? '+' : ''}{mockChange?.toFixed(2)} ({mockChange >= 0 ? '+' : ''}{mockChangePercent?.toFixed(2)}%)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Timeframe Selector */}
            <div className="flex bg-muted rounded-lg p-1">
              {timeframes?.map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-smooth ${
                    timeframe === tf
                      ? 'bg-white text-brand-primary shadow-sm'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>

            {/* Chart Controls */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowIndicators(!showIndicators)}
                iconName="Settings"
              >
                Indicators
              </Button>
              <Button variant="ghost" size="sm" iconName="Maximize2">
                Fullscreen
              </Button>
            </div>
          </div>
        </div>

        {/* Chart Type Selector */}
        <div className="flex items-center space-x-2 mt-4">
          {chartTypes?.map((type) => (
            <button
              key={type?.value}
              onClick={() => setChartType(type?.value)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
                chartType === type?.value
                  ? 'bg-brand-primary text-white' :'text-text-secondary hover:text-text-primary hover:bg-muted'
              }`}
            >
              <Icon name={type?.icon} size={16} />
              <span>{type?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Chart Container */}
      <div className="relative">
        <div className="h-96 lg:h-[500px] flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10">
          {/* Mock TradingView Chart Placeholder */}
          <div className="text-center">
            <Icon name="TrendingUp" size={48} className="text-brand-primary mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-text-primary mb-2">Interactive Chart</h4>
            <p className="text-text-secondary max-w-md">
              In a real application, this would display a TradingView widget or similar charting library 
              with real-time price data, technical indicators, and drawing tools.
            </p>
            <div className="mt-4 p-4 bg-white rounded-lg border border-border inline-block">
              <div className="text-sm text-text-secondary mb-2">Sample Chart Features:</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Real-time data</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Technical indicators</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Drawing tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Multiple timeframes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Overlay */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 border border-border max-w-xs">
          <div className="flex items-start space-x-2">
            <Icon name="Lightbulb" size={16} className="text-yellow-600 mt-0.5" />
            <div>
              <h5 className="text-sm font-semibold text-text-primary">Chart Tip</h5>
              <p className="text-xs text-text-secondary mt-1">
                Use multiple timeframes to confirm trends. Look for support and resistance levels to plan entry and exit points.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Indicators Panel */}
      {showIndicators && (
        <div className="p-4 border-t border-border bg-muted/30">
          <h4 className="text-sm font-semibold text-text-primary mb-3">Technical Indicators</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {indicators?.map((indicator) => (
              <div
                key={indicator?.id}
                className={`p-3 rounded-lg border transition-smooth cursor-pointer ${
                  indicator?.active
                    ? 'bg-brand-primary/10 border-brand-primary text-brand-primary' :'bg-white border-border text-text-secondary hover:border-brand-primary/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{indicator?.name}</span>
                  <div className={`w-2 h-2 rounded-full ${
                    indicator?.active ? 'bg-brand-primary' : 'bg-text-secondary/30'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TradingChart;