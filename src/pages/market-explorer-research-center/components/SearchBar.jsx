import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, onFilterToggle, isFilterOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);

  const mockSuggestions = [
    { type: 'stock', symbol: 'AAPL', name: 'Apple Inc.', price: '$175.43' },
    { type: 'stock', symbol: 'MSFT', name: 'Microsoft Corporation', price: '$338.11' },
    { type: 'stock', symbol: 'GOOGL', name: 'Alphabet Inc.', price: '$138.21' },
    { type: 'etf', symbol: 'SPY', name: 'SPDR S&P 500 ETF Trust', price: '$445.67' },
    { type: 'crypto', symbol: 'BTC', name: 'Bitcoin', price: '$43,250.00' },
    { type: 'crypto', symbol: 'ETH', name: 'Ethereum', price: '$2,650.00' },
    { type: 'education', name: 'Understanding Market Volatility', category: 'Learning Module' },
    { type: 'education', name: 'Options Trading Basics', category: 'Course' }
  ];

  useEffect(() => {
    if (searchTerm?.length > 1) {
      const filtered = mockSuggestions?.filter(item =>
        item?.symbol?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
      setSuggestions(filtered?.slice(0, 8));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setSelectedIndex(-1);
  }, [searchTerm]);

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e?.key) {
      case 'ArrowDown':
        e?.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions?.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e?.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e?.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(suggestions?.[selectedIndex]);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion?.symbol || suggestion?.name);
    setShowSuggestions(false);
    onSearch(suggestion);
  };

  const handleSearch = () => {
    if (searchTerm?.trim()) {
      onSearch({ term: searchTerm });
      setShowSuggestions(false);
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'stock': return 'TrendingUp';
      case 'etf': return 'PieChart';
      case 'crypto': return 'Coins';
      case 'education': return 'BookOpen';
      default: return 'Search';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'stock': return 'text-blue-600';
      case 'etf': return 'text-green-600';
      case 'crypto': return 'text-orange-600';
      case 'education': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon name="Search" size={20} className="text-text-secondary" />
        </div>
        <input
          ref={searchRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchTerm?.length > 1 && setShowSuggestions(true)}
          placeholder="Search stocks, ETFs, crypto, or educational content..."
          className="w-full pl-12 pr-24 py-4 bg-white border border-border rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
        />
        <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-4">
          <Button
            variant="ghost"
            size="sm"
            iconName="SlidersHorizontal"
            onClick={onFilterToggle}
            className={`${isFilterOpen ? 'text-brand-primary bg-brand-primary/10' : 'text-text-secondary'}`}
          >
            Filters
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="Search"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions?.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
          {suggestions?.map((suggestion, index) => (
            <button
              key={`${suggestion?.type}-${suggestion?.symbol || suggestion?.name}-${index}`}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full px-4 py-3 text-left hover:bg-muted transition-colors duration-150 flex items-center justify-between ${
                index === selectedIndex ? 'bg-muted' : ''
              } ${index === 0 ? 'rounded-t-xl' : ''} ${
                index === suggestions?.length - 1 ? 'rounded-b-xl' : 'border-b border-border'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon 
                  name={getTypeIcon(suggestion?.type)} 
                  size={16} 
                  className={getTypeColor(suggestion?.type)} 
                />
                <div>
                  <div className="font-medium text-text-primary">
                    {suggestion?.symbol ? (
                      <span>
                        <span className="font-bold">{suggestion?.symbol}</span> - {suggestion?.name}
                      </span>
                    ) : (
                      suggestion?.name
                    )}
                  </div>
                  {suggestion?.category && (
                    <div className="text-xs text-text-secondary">{suggestion?.category}</div>
                  )}
                </div>
              </div>
              {suggestion?.price && (
                <div className="text-sm font-medium text-text-primary">
                  {suggestion?.price}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;