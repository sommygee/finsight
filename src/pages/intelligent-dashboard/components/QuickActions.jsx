import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = () => {
  const quickActions = [
    {
      title: 'Paper Trade',
      description: 'Practice trading with virtual money',
      icon: 'TrendingUp',
      color: 'bg-gradient-to-br from-success to-accent',
      link: '/trading-command-center-simulation',
      badge: 'Popular'
    },
    {
      title: 'Market Research',
      description: 'Explore stocks and market trends',
      icon: 'Search',
      color: 'bg-gradient-to-br from-brand-primary to-brand-secondary',
      link: '/market-explorer-research-center',
      badge: null
    },
    {
      title: 'Build Portfolio',
      description: 'Create and optimize your portfolio',
      icon: 'PieChart',
      color: 'bg-gradient-to-br from-warning to-conversion-accent',
      link: '/portfolio-laboratory-construction-tools',
      badge: 'New'
    },
    {
      title: 'Learning Center',
      description: 'Enhance your investment knowledge',
      icon: 'BookOpen',
      color: 'bg-gradient-to-br from-brand-accent to-success',
      link: '/learning-academy',
      badge: null
    }
  ];

  const recentActivities = [
    {
      action: 'Bought',
      asset: 'AAPL',
      shares: 10,
      price: 178.25,
      time: '2 hours ago',
      type: 'buy'
    },
    {
      action: 'Sold',
      asset: 'MSFT',
      shares: 5,
      price: 342.87,
      time: '1 day ago',
      type: 'sell'
    },
    {
      action: 'Added to Watchlist',
      asset: 'NVDA',
      shares: null,
      price: 456.78,
      time: '2 days ago',
      type: 'watchlist'
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })?.format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions Grid */}
      <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-text-primary">Quick Actions</h3>
          <button className="text-sm font-medium text-brand-primary hover:text-brand-secondary transition-smooth">
            Customize →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions?.map((action, index) => (
            <Link
              key={index}
              to={action?.link}
              className="group relative p-6 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: action?.color }}
            >
              {action?.badge && (
                <span className="absolute top-3 right-3 text-xs px-2 py-1 bg-white/20 rounded-full font-medium">
                  {action?.badge}
                </span>
              )}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Icon name={action?.icon} size={24} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{action?.title}</h4>
                  <p className="text-sm opacity-90">{action?.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-text-primary">Recent Activity</h3>
          <Button variant="ghost" size="sm" iconName="ExternalLink">
            View All
          </Button>
        </div>

        <div className="space-y-4">
          {recentActivities?.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activity?.type === 'buy' ? 'bg-success/10 text-success' :
                  activity?.type === 'sell'? 'bg-error/10 text-error' : 'bg-brand-primary/10 text-brand-primary'
                }`}>
                  <Icon 
                    name={
                      activity?.type === 'buy' ? 'ArrowUp' :
                      activity?.type === 'sell'? 'ArrowDown' : 'Eye'
                    } 
                    size={18} 
                  />
                </div>
                <div>
                  <div className="font-medium text-text-primary">
                    {activity?.action} {activity?.asset}
                    {activity?.shares && ` (${activity?.shares} shares)`}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {activity?.shares && `@ ${formatCurrency(activity?.price)} • `}{activity?.time}
                  </div>
                </div>
              </div>
              
              {activity?.shares && (
                <div className="text-right">
                  <div className="font-semibold text-text-primary">
                    {formatCurrency(activity?.price * activity?.shares)}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Total Value
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-text-secondary">
              Showing last 3 activities
            </div>
            <Button variant="outline" size="sm" iconName="Activity">
              View Trading History
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;