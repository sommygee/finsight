import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const AdvancedFilters = ({ isOpen, onApplyFilters, onResetFilters }) => {
  const [filters, setFilters] = useState({
    assetType: [],
    sector: '',
    marketCap: '',
    priceRange: { min: '', max: '' },
    performance: '',
    esgRating: '',
    dividend: false,
    volume: ''
  });

  const assetTypeOptions = [
    { value: 'stocks', label: 'Stocks' },
    { value: 'etfs', label: 'ETFs' },
    { value: 'crypto', label: 'Cryptocurrency' },
    { value: 'bonds', label: 'Bonds' },
    { value: 'commodities', label: 'Commodities' }
  ];

  const sectorOptions = [
    { value: '', label: 'All Sectors' },
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'financials', label: 'Financials' },
    { value: 'energy', label: 'Energy' },
    { value: 'consumer-discretionary', label: 'Consumer Discretionary' },
    { value: 'consumer-staples', label: 'Consumer Staples' },
    { value: 'industrials', label: 'Industrials' },
    { value: 'materials', label: 'Materials' },
    { value: 'utilities', label: 'Utilities' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'communication', label: 'Communication Services' }
  ];

  const marketCapOptions = [
    { value: '', label: 'All Market Caps' },
    { value: 'mega', label: 'Mega Cap ($200B+)' },
    { value: 'large', label: 'Large Cap ($10B - $200B)' },
    { value: 'mid', label: 'Mid Cap ($2B - $10B)' },
    { value: 'small', label: 'Small Cap ($300M - $2B)' },
    { value: 'micro', label: 'Micro Cap (Under $300M)' }
  ];

  const performanceOptions = [
    { value: '', label: 'All Performance' },
    { value: '1d', label: 'Today' },
    { value: '1w', label: 'This Week' },
    { value: '1m', label: 'This Month' },
    { value: '3m', label: 'Last 3 Months' },
    { value: '6m', label: 'Last 6 Months' },
    { value: '1y', label: 'This Year' }
  ];

  const esgOptions = [
    { value: '', label: 'All ESG Ratings' },
    { value: 'aaa', label: 'AAA (Leader)' },
    { value: 'aa', label: 'AA (Leader)' },
    { value: 'a', label: 'A (Average)' },
    { value: 'bbb', label: 'BBB (Average)' },
    { value: 'bb', label: 'BB (Laggard)' },
    { value: 'b', label: 'B (Laggard)' },
    { value: 'ccc', label: 'CCC (Laggard)' }
  ];

  const volumeOptions = [
    { value: '', label: 'All Volumes' },
    { value: 'high', label: 'High Volume (Above Average)' },
    { value: 'medium', label: 'Medium Volume (Average)' },
    { value: 'low', label: 'Low Volume (Below Average)' }
  ];

  const handleAssetTypeChange = (assetType, checked) => {
    setFilters(prev => ({
      ...prev,
      assetType: checked 
        ? [...prev?.assetType, assetType]
        : prev?.assetType?.filter(type => type !== assetType)
    }));
  };

  const handleInputChange = (field, value) => {
    if (field?.includes('.')) {
      const [parent, child] = field?.split('.');
      setFilters(prev => ({
        ...prev,
        [parent]: {
          ...prev?.[parent],
          [child]: value
        }
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      assetType: [],
      sector: '',
      marketCap: '',
      priceRange: { min: '', max: '' },
      performance: '',
      esgRating: '',
      dividend: false,
      volume: ''
    };
    setFilters(resetFilters);
    onResetFilters();
  };

  if (!isOpen) return null;

  return (
    <div className="bg-white border border-border rounded-xl p-6 mt-4 animate-slide-down">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="SlidersHorizontal" size={20} className="text-brand-primary" />
          <span>Advanced Filters</span>
        </h3>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={handleResetFilters}>
            Reset All
          </Button>
          <Button variant="default" size="sm" onClick={handleApplyFilters}>
            Apply Filters
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Asset Type */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-text-primary">Asset Type</label>
          <div className="space-y-2">
            {assetTypeOptions?.map(option => (
              <Checkbox
                key={option?.value}
                label={option?.label}
                checked={filters?.assetType?.includes(option?.value)}
                onChange={(e) => handleAssetTypeChange(option?.value, e?.target?.checked)}
              />
            ))}
          </div>
        </div>

        {/* Sector */}
        <div>
          <Select
            label="Sector"
            options={sectorOptions}
            value={filters?.sector}
            onChange={(value) => handleInputChange('sector', value)}
            placeholder="Select sector"
          />
        </div>

        {/* Market Cap */}
        <div>
          <Select
            label="Market Cap"
            options={marketCapOptions}
            value={filters?.marketCap}
            onChange={(value) => handleInputChange('marketCap', value)}
            placeholder="Select market cap"
          />
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-text-primary">Price Range</label>
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              placeholder="Min ($)"
              value={filters?.priceRange?.min}
              onChange={(e) => handleInputChange('priceRange.min', e?.target?.value)}
            />
            <span className="text-text-secondary">to</span>
            <Input
              type="number"
              placeholder="Max ($)"
              value={filters?.priceRange?.max}
              onChange={(e) => handleInputChange('priceRange.max', e?.target?.value)}
            />
          </div>
        </div>

        {/* Performance */}
        <div>
          <Select
            label="Performance Period"
            options={performanceOptions}
            value={filters?.performance}
            onChange={(value) => handleInputChange('performance', value)}
            placeholder="Select period"
          />
        </div>

        {/* ESG Rating */}
        <div>
          <Select
            label="ESG Rating"
            options={esgOptions}
            value={filters?.esgRating}
            onChange={(value) => handleInputChange('esgRating', value)}
            placeholder="Select ESG rating"
          />
        </div>

        {/* Volume */}
        <div>
          <Select
            label="Trading Volume"
            options={volumeOptions}
            value={filters?.volume}
            onChange={(value) => handleInputChange('volume', value)}
            placeholder="Select volume"
          />
        </div>

        {/* Dividend */}
        <div className="flex items-center space-x-2 pt-6">
          <Checkbox
            label="Dividend Paying Only"
            checked={filters?.dividend}
            onChange={(e) => handleInputChange('dividend', e?.target?.checked)}
          />
        </div>
      </div>
      {/* Quick Filter Presets */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="text-sm font-medium text-text-primary mb-3">Quick Presets</h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => {
            setFilters(prev => ({ ...prev, assetType: ['stocks'], marketCap: 'large', esgRating: 'aa' }));
          }}>
            Large Cap ESG Leaders
          </Button>
          <Button variant="outline" size="sm" onClick={() => {
            setFilters(prev => ({ ...prev, assetType: ['stocks'], dividend: true, sector: 'utilities' }));
          }}>
            Dividend Stocks
          </Button>
          <Button variant="outline" size="sm" onClick={() => {
            setFilters(prev => ({ ...prev, assetType: ['crypto'], volume: 'high' }));
          }}>
            High Volume Crypto
          </Button>
          <Button variant="outline" size="sm" onClick={() => {
            setFilters(prev => ({ ...prev, assetType: ['etfs'], sector: 'technology' }));
          }}>
            Tech ETFs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilters;