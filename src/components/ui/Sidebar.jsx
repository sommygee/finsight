import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Sidebar = ({ isCollapsed = false, onToggleCollapse }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Dashboard',
      path: '/intelligent-dashboard',
      icon: 'BarChart3',
      description: 'Portfolio overview & insights'
    },
    {
      name: 'Market Explorer',
      path: '/market-explorer-research-center',
      icon: 'TrendingUp',
      description: 'Research & market analysis'
    },
    {
      name: 'Portfolio Lab',
      path: '/portfolio-laboratory-construction-tools',
      icon: 'PieChart',
      description: 'Build & optimize portfolios'
    },
    {
      name: 'Trading Center',
      path: '/trading-command-center-simulation',
      icon: 'Activity',
      description: 'Execute trades & simulations'
    }
  ];

  const quickActions = [
    { name: 'Watchlist', icon: 'Eye', count: 12 },
    { name: 'Alerts', icon: 'Bell', count: 3 },
    { name: 'Research', icon: 'BookOpen', count: 5 },
    { name: 'Reports', icon: 'FileText', count: 2 }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const shouldShowExpanded = !isCollapsed || isHovered;

  return (
    <aside 
      className={`fixed left-0 top-16 bottom-0 z-40 bg-white border-r border-border transition-all duration-300 ${
        shouldShowExpanded ? 'w-64' : 'w-16'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {shouldShowExpanded && (
            <h2 className="text-sm font-semibold text-text-primary">Navigation</h2>
          )}
          {onToggleCollapse && (
            <button
              onClick={onToggleCollapse}
              className="p-1.5 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth"
              aria-label="Toggle sidebar"
            >
              <Icon 
                name={isCollapsed ? "ChevronRight" : "ChevronLeft"} 
                size={16} 
              />
            </button>
          )}
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`group flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-smooth ${
                isActivePath(item?.path)
                  ? 'bg-brand-primary text-white shadow-brand'
                  : 'text-text-secondary hover:text-brand-primary hover:bg-muted'
              }`}
              title={!shouldShowExpanded ? item?.name : ''}
            >
              <Icon 
                name={item?.icon} 
                size={18} 
                color={isActivePath(item?.path) ? 'white' : 'currentColor'} 
              />
              {shouldShowExpanded && (
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{item?.name}</div>
                  <div className={`text-xs mt-0.5 ${
                    isActivePath(item?.path) 
                      ? 'text-white/80' :'text-text-secondary group-hover:text-text-primary'
                  }`}>
                    {item?.description}
                  </div>
                </div>
              )}
            </Link>
          ))}
        </nav>

        {/* Quick Actions */}
        {shouldShowExpanded && (
          <div className="p-4 border-t border-border">
            <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
              Quick Access
            </h3>
            <div className="space-y-1">
              {quickActions?.map((action) => (
                <button
                  key={action?.name}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth"
                >
                  <div className="flex items-center space-x-2">
                    <Icon name={action?.icon} size={16} />
                    <span>{action?.name}</span>
                  </div>
                  {action?.count > 0 && (
                    <span className="bg-brand-accent text-white text-xs px-2 py-0.5 rounded-full">
                      {action?.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* User Section */}
        <div className="p-4 border-t border-border">
          {shouldShowExpanded ? (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                <Icon name="User" size={16} color="white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-text-primary">John Doe</div>
                <div className="text-xs text-text-secondary">Premium Member</div>
              </div>
              <Button variant="ghost" size="sm" iconName="Settings" />
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                <Icon name="User" size={16} color="white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;