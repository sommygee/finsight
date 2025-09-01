import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OrderHistory = () => {
  const [filter, setFilter] = useState('all');
  const [timeRange, setTimeRange] = useState('7d');

  const filterOptions = [
    { value: 'all', label: 'All Orders' },
    { value: 'filled', label: 'Filled' },
    { value: 'pending', label: 'Pending' },
    { value: 'cancelled', label: 'Cancelled' }
  ];

  const timeRangeOptions = [
    { value: '1d', label: 'Today' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' }
  ];

  const orders = [
    {
      id: 'ORD-001',
      symbol: 'AAPL',
      side: 'buy',
      type: 'market',
      quantity: 100,
      price: 189.45,
      filled: 100,
      status: 'filled',
      timestamp: new Date(Date.now() - 3600000),
      pnl: 234.50
    },
    {
      id: 'ORD-002',
      symbol: 'MSFT',
      side: 'sell',
      type: 'limit',
      quantity: 50,
      price: 380.00,
      filled: 0,
      status: 'pending',
      timestamp: new Date(Date.now() - 1800000),
      pnl: null
    },
    {
      id: 'ORD-003',
      symbol: 'GOOGL',
      side: 'buy',
      type: 'stop_limit',
      quantity: 25,
      price: 142.00,
      filled: 25,
      status: 'filled',
      timestamp: new Date(Date.now() - 7200000),
      pnl: -87.25
    },
    {
      id: 'ORD-004',
      symbol: 'TSLA',
      side: 'sell',
      type: 'market',
      quantity: 75,
      price: 248.91,
      filled: 0,
      status: 'cancelled',
      timestamp: new Date(Date.now() - 10800000),
      pnl: null
    },
    {
      id: 'ORD-005',
      symbol: 'AMZN',
      side: 'buy',
      type: 'limit',
      quantity: 30,
      price: 145.23,
      filled: 15,
      status: 'partial',
      timestamp: new Date(Date.now() - 14400000),
      pnl: 45.75
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      filled: 'text-green-600 bg-green-50',
      pending: 'text-yellow-600 bg-yellow-50',
      cancelled: 'text-red-600 bg-red-50',
      partial: 'text-blue-600 bg-blue-50'
    };
    return colors?.[status] || 'text-gray-600 bg-gray-50';
  };

  const getStatusIcon = (status) => {
    const icons = {
      filled: 'CheckCircle',
      pending: 'Clock',
      cancelled: 'XCircle',
      partial: 'AlertCircle'
    };
    return icons?.[status] || 'Circle';
  };

  const filteredOrders = orders?.filter(order => {
    if (filter === 'all') return true;
    return order?.status === filter;
  });

  return (
    <div className="bg-white rounded-lg border border-border">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <h3 className="text-lg font-semibold text-text-primary">Order History</h3>
          
          <div className="flex items-center space-x-4">
            {/* Filter Buttons */}
            <div className="flex bg-muted rounded-lg p-1">
              {filterOptions?.map((option) => (
                <button
                  key={option?.value}
                  onClick={() => setFilter(option?.value)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                    filter === option?.value
                      ? 'bg-white text-brand-primary shadow-sm'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {option?.label}
                </button>
              ))}
            </div>

            {/* Time Range */}
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e?.target?.value)}
              className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {timeRangeOptions?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>

            <Button variant="ghost" size="sm" iconName="Download">
              Export
            </Button>
          </div>
        </div>
      </div>
      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-text-secondary">Order ID</th>
              <th className="text-left p-4 text-sm font-medium text-text-secondary">Symbol</th>
              <th className="text-center p-4 text-sm font-medium text-text-secondary">Side</th>
              <th className="text-center p-4 text-sm font-medium text-text-secondary">Type</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary">Quantity</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary">Price</th>
              <th className="text-center p-4 text-sm font-medium text-text-secondary">Status</th>
              <th className="text-right p-4 text-sm font-medium text-text-secondary hidden lg:table-cell">P&L</th>
              <th className="text-left p-4 text-sm font-medium text-text-secondary">Time</th>
              <th className="text-center p-4 text-sm font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders?.map((order) => (
              <tr key={order?.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <span className="font-mono text-sm text-text-primary">{order?.id}</span>
                </td>
                <td className="p-4">
                  <span className="font-semibold text-text-primary">{order?.symbol}</span>
                </td>
                <td className="p-4 text-center">
                  <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                    order?.side === 'buy' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
                  }`}>
                    <Icon 
                      name={order?.side === 'buy' ? 'ArrowUp' : 'ArrowDown'} 
                      size={12} 
                    />
                    <span>{order?.side?.toUpperCase()}</span>
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-sm text-text-secondary capitalize">
                    {order?.type?.replace('_', ' ')}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="text-sm">
                    <div className="font-medium text-text-primary">{order?.quantity}</div>
                    {order?.filled < order?.quantity && order?.status !== 'cancelled' && (
                      <div className="text-xs text-text-secondary">
                        Filled: {order?.filled}
                      </div>
                    )}
                  </div>
                </td>
                <td className="p-4 text-right">
                  <span className="font-medium text-text-primary">
                    ${order?.price?.toFixed(2)}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order?.status)}`}>
                    <Icon name={getStatusIcon(order?.status)} size={12} />
                    <span className="capitalize">{order?.status}</span>
                  </span>
                </td>
                <td className="p-4 text-right hidden lg:table-cell">
                  {order?.pnl !== null ? (
                    <span className={`font-medium ${order?.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {order?.pnl >= 0 ? '+' : ''}${order?.pnl?.toFixed(2)}
                    </span>
                  ) : (
                    <span className="text-text-secondary">-</span>
                  )}
                </td>
                <td className="p-4">
                  <div className="text-sm">
                    <div className="text-text-primary">
                      {order?.timestamp?.toLocaleDateString()}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {order?.timestamp?.toLocaleTimeString()}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-1.5 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth">
                      <Icon name="Eye" size={16} />
                    </button>
                    {order?.status === 'pending' && (
                      <button className="p-1.5 rounded-lg text-text-secondary hover:text-red-600 hover:bg-red-50 transition-smooth">
                        <Icon name="X" size={16} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Summary Footer */}
      <div className="p-4 border-t border-border bg-muted/30">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-text-secondary">
            Showing {filteredOrders?.length} of {orders?.length} orders
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-text-secondary">Filled: {orders?.filter(o => o?.status === 'filled')?.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-text-secondary">Pending: {orders?.filter(o => o?.status === 'pending')?.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-text-secondary">Cancelled: {orders?.filter(o => o?.status === 'cancelled')?.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;