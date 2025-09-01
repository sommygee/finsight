import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const MarketTicker = () => {
  const [tickerData, setTickerData] = useState([]);
  
  const mockStocks = [
    { symbol: "AAPL", price: 175.43, change: 2.15, changePercent: 1.24 },
    { symbol: "GOOGL", price: 2847.52, change: -15.23, changePercent: -0.53 },
    { symbol: "MSFT", price: 338.11, change: 4.67, changePercent: 1.40 },
    { symbol: "TSLA", price: 248.50, change: 8.92, changePercent: 3.72 },
    { symbol: "AMZN", price: 3127.45, change: -12.34, changePercent: -0.39 },
    { symbol: "NVDA", price: 421.38, change: 15.67, changePercent: 3.86 },
    { symbol: "BTC", price: 43250.00, change: 1250.00, changePercent: 2.98 },
    { symbol: "ETH", price: 2650.75, change: -45.25, changePercent: -1.68 }
  ];

  useEffect(() => {
    setTickerData(mockStocks);
    
    const interval = setInterval(() => {
      setTickerData(prev => prev?.map(stock => ({
        ...stock,
        price: stock?.price + (Math.random() - 0.5) * 2,
        change: stock?.change + (Math.random() - 0.5) * 0.5,
        changePercent: stock?.changePercent + (Math.random() - 0.5) * 0.1
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border-b border-border py-4 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll space-x-8" style={{
          animation: 'scroll 60s linear infinite'
        }}>
          {[...tickerData, ...tickerData]?.map((stock, index) => (
            <div key={`${stock?.symbol}-${index}`} className="flex items-center space-x-3 whitespace-nowrap">
              <span className="font-semibold text-gray-800">{stock?.symbol}</span>
              <span className="text-lg font-bold text-gray-900">
                ${stock?.price?.toFixed(2)}
              </span>
              <div className={`flex items-center space-x-1 ${
                stock?.change >= 0 ? 'text-emerald-600' : 'text-red-600'
              }`}>
                <Icon 
                  name={stock?.change >= 0 ? 'TrendingUp' : 'TrendingDown'} 
                  size={14} 
                />
                <span className="text-sm font-medium">
                  {stock?.change >= 0 ? '+' : ''}{stock?.change?.toFixed(2)}
                </span>
                <span className="text-sm">
                  ({stock?.changePercent >= 0 ? '+' : ''}{stock?.changePercent?.toFixed(2)}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarketTicker;