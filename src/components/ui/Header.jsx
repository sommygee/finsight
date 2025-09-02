import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Dashboard',
      path: '/intelligent-dashboard',
      icon: 'BarChart3'
    },
    {
      name: 'Market Explorer',
      path: '/market-explorer-research-center',
      icon: 'TrendingUp'
    },
    {
      name: 'Portfolio Lab',
      path: '/portfolio-laboratory-construction-tools',
      icon: 'PieChart'
    },
    {
      name: 'Trading Center',
      path: '/trading-command-center-simulation',
      icon: 'Activity'
    },
    {
    name: 'Investment Plans',
    path: '/investment-plans',
    icon: 'DollarSign' 
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link 
          to="/homepage-investment-intelligence-platform" 
          className="flex items-center space-x-2 transition-smooth hover:opacity-80"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
            <Icon name="TrendingUp" size={20} color="white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-brand-primary">FinSight</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                isActivePath(item?.path)
                  ? 'bg-brand-primary text-white shadow-brand'
                  : 'text-text-secondary hover:text-brand-primary hover:bg-muted'
              }`}
            >
              <Icon 
                name={item?.icon} 
                size={16} 
                color={isActivePath(item?.path) ? 'white' : 'currentColor'} 
              />
              <span>{item?.name}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button variant="ghost" size="sm" iconName="Bell" iconPosition="left">
            Alerts
          </Button>
          <Button variant="ghost" size="sm" iconName="User" iconPosition="left">
            Profile
          </Button>
          <Button variant="default" size="sm" iconName="Plus" iconPosition="left">
            New Position
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth"
          aria-label="Toggle mobile menu"
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-slide-up">
          <nav className="px-6 py-4 space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                  isActivePath(item?.path)
                    ? 'bg-brand-primary text-white shadow-brand'
                    : 'text-text-secondary hover:text-brand-primary hover:bg-muted'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={18} 
                  color={isActivePath(item?.path) ? 'white' : 'currentColor'} 
                />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Actions */}
          <div className="px-6 py-4 border-t border-border space-y-2">
            <Button variant="ghost" size="sm" fullWidth iconName="Bell" iconPosition="left">
              Alerts
            </Button>
            <Button variant="ghost" size="sm" fullWidth iconName="User" iconPosition="left">
              Profile
            </Button>
            <Button variant="default" size="sm" fullWidth iconName="Plus" iconPosition="left">
              New Position
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;