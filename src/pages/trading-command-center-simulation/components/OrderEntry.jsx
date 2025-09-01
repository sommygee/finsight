import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const OrderEntry = () => {
  const [orderType, setOrderType] = useState('market');
  const [side, setSide] = useState('buy');
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [stopPrice, setStopPrice] = useState('');
  const [timeInForce, setTimeInForce] = useState('day');

  const orderTypes = [
    { value: 'market', label: 'Market Order' },
    { value: 'limit', label: 'Limit Order' },
    { value: 'stop', label: 'Stop Order' },
    { value: 'stop_limit', label: 'Stop Limit Order' }
  ];

  const timeInForceOptions = [
    { value: 'day', label: 'Day' },
    { value: 'gtc', label: 'Good Till Canceled' },
    { value: 'ioc', label: 'Immediate or Cancel' },
    { value: 'fok', label: 'Fill or Kill' }
  ];

  const handleSubmitOrder = () => {
    // Mock order submission
    console.log('Order submitted:', {
      symbol,
      side,
      orderType,
      quantity,
      price,
      stopPrice,
      timeInForce
    });
  };

  const getOrderTypeDescription = (type) => {
    const descriptions = {
      market: "Execute immediately at current market price",
      limit: "Execute only at specified price or better",
      stop: "Trigger market order when stop price is reached",
      stop_limit: "Trigger limit order when stop price is reached"
    };
    return descriptions?.[type];
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Place Order</h3>
        <div className="flex items-center space-x-2">
          <Icon name="Shield" size={16} className="text-green-600" />
          <span className="text-sm text-green-600 font-medium">Paper Trading</span>
        </div>
      </div>
      <div className="space-y-6">
        {/* Buy/Sell Toggle */}
        <div className="flex bg-muted rounded-lg p-1">
          <button
            onClick={() => setSide('buy')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-smooth ${
              side === 'buy' ?'bg-green-600 text-white shadow-sm' :'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon name="TrendingUp" size={16} className="inline mr-2" />
            Buy
          </button>
          <button
            onClick={() => setSide('sell')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-smooth ${
              side === 'sell' ?'bg-red-600 text-white shadow-sm' :'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon name="TrendingDown" size={16} className="inline mr-2" />
            Sell
          </button>
        </div>

        {/* Symbol Input */}
        <Input
          label="Symbol"
          type="text"
          placeholder="e.g., AAPL"
          value={symbol}
          onChange={(e) => setSymbol(e?.target?.value?.toUpperCase())}
          description="Enter the stock symbol you want to trade"
        />

        {/* Order Type */}
        <Select
          label="Order Type"
          options={orderTypes}
          value={orderType}
          onChange={setOrderType}
          description={getOrderTypeDescription(orderType)}
        />

        {/* Quantity */}
        <Input
          label="Quantity"
          type="number"
          placeholder="Number of shares"
          value={quantity}
          onChange={(e) => setQuantity(e?.target?.value)}
          description="Number of shares to trade"
        />

        {/* Price Fields */}
        {(orderType === 'limit' || orderType === 'stop_limit') && (
          <Input
            label="Limit Price"
            type="number"
            placeholder="0.00"
            value={price}
            onChange={(e) => setPrice(e?.target?.value)}
            description="Maximum price for buy orders, minimum for sell orders"
          />
        )}

        {(orderType === 'stop' || orderType === 'stop_limit') && (
          <Input
            label="Stop Price"
            type="number"
            placeholder="0.00"
            value={stopPrice}
            onChange={(e) => setStopPrice(e?.target?.value)}
            description="Price that triggers the order"
          />
        )}

        {/* Time in Force */}
        <Select
          label="Time in Force"
          options={timeInForceOptions}
          value={timeInForce}
          onChange={setTimeInForce}
          description="How long the order remains active"
        />

        {/* Order Summary */}
        {symbol && quantity && (
          <div className="bg-muted rounded-lg p-4">
            <h4 className="text-sm font-semibold text-text-primary mb-3">Order Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Action:</span>
                <span className={`font-medium ${side === 'buy' ? 'text-green-600' : 'text-red-600'}`}>
                  {side?.toUpperCase()} {quantity} shares of {symbol}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Order Type:</span>
                <span className="text-text-primary">{orderTypes?.find(o => o?.value === orderType)?.label}</span>
              </div>
              {price && (
                <div className="flex justify-between">
                  <span className="text-text-secondary">Limit Price:</span>
                  <span className="text-text-primary">${price}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-text-secondary">Estimated Value:</span>
                <span className="font-medium text-text-primary">
                  ${(parseFloat(quantity || 0) * parseFloat(price || 150))?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Risk Warning */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="AlertTriangle" size={16} className="text-yellow-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-yellow-800">Educational Trading</h4>
              <p className="text-sm text-yellow-700 mt-1">
                This is a paper trading simulation. No real money is involved. Use this to practice and learn trading strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          variant="default"
          fullWidth
          onClick={handleSubmitOrder}
          disabled={!symbol || !quantity}
          iconName="Send"
          iconPosition="left"
        >
          Place {side === 'buy' ? 'Buy' : 'Sell'} Order
        </Button>
      </div>
    </div>
  );
};

export default OrderEntry;