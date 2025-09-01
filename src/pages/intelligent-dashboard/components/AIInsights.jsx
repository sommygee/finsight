import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AIInsights = () => {
  const [dismissedInsights, setDismissedInsights] = useState([]);

  const insights = [
    {
      id: 1,
      type: 'rebalancing',
      title: 'Portfolio Rebalancing Opportunity',
      message: `Your technology allocation has grown to 45% of your portfolio. Consider rebalancing to maintain your target 35% allocation for optimal risk management.`,
      priority: 'high',
      action: 'Rebalance Now',
      icon: 'PieChart',
      color: 'warning'
    },
    {
      id: 2,
      type: 'learning',
      title: 'New Learning Module Available',
      message: `Based on your recent trading activity, we recommend the "Options Trading Fundamentals" course to enhance your investment strategies.`,
      priority: 'medium',
      action: 'Start Learning',
      icon: 'BookOpen',
      color: 'accent'
    },
    {
      id: 3,
      type: 'opportunity',
      title: 'Market Opportunity Detected',
      message: `The healthcare sector is showing strong momentum with 3 of your watchlist stocks up 5%+ this week. Consider reviewing your healthcare allocation.`,
      priority: 'medium',
      action: 'Explore Sector',
      icon: 'TrendingUp',
      color: 'success'
    },
    {
      id: 4,
      type: 'risk',
      title: 'Risk Assessment Update',
      message: `Your portfolio's beta has increased to 1.3. This suggests higher volatility than the market. Review your risk tolerance settings.`,priority: 'high',action: 'Review Risk',icon: 'Shield',color: 'error'
    }
  ];

  const visibleInsights = insights?.filter(insight => !dismissedInsights?.includes(insight?.id));

  const dismissInsight = (insightId) => {
    setDismissedInsights([...dismissedInsights, insightId]);
  };

  const getColorClasses = (color) => {
    const colorMap = {
      warning: 'bg-warning/10 border-warning/20 text-warning',
      accent: 'bg-accent/10 border-accent/20 text-accent',
      success: 'bg-success/10 border-success/20 text-success',
      error: 'bg-error/10 border-error/20 text-error'
    };
    return colorMap?.[color] || 'bg-brand-primary/10 border-brand-primary/20 text-brand-primary';
  };

  const getPriorityBadge = (priority) => {
    const priorityMap = {
      high: 'bg-error text-white',
      medium: 'bg-warning text-white',
      low: 'bg-success text-white'
    };
    return priorityMap?.[priority] || 'bg-muted text-text-secondary';
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-lg flex items-center justify-center">
            <Icon name="Brain" size={18} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-text-primary">AI Insights</h3>
            <p className="text-sm text-text-secondary">Personalized recommendations for your portfolio</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs px-2 py-1 bg-brand-accent/10 text-brand-accent rounded-full font-medium">
            {visibleInsights?.length} Active
          </span>
          <button className="p-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth">
            <Icon name="RefreshCw" size={18} />
          </button>
        </div>
      </div>
      {visibleInsights?.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={24} color="var(--color-success)" />
          </div>
          <h4 className="text-lg font-semibold text-text-primary mb-2">All Caught Up!</h4>
          <p className="text-text-secondary">No new insights at the moment. Check back later for personalized recommendations.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {visibleInsights?.map((insight) => (
            <div
              key={insight?.id}
              className={`relative p-5 rounded-lg border-2 ${getColorClasses(insight?.color)} transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(insight?.color)}`}>
                    <Icon name={insight?.icon} size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-text-primary">{insight?.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityBadge(insight?.priority)}`}>
                        {insight?.priority?.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {insight?.message}
                    </p>
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-brand-primary text-white rounded-lg text-sm font-medium hover:bg-brand-primary/90 transition-smooth">
                        {insight?.action}
                      </button>
                      <button className="text-sm text-text-secondary hover:text-text-primary transition-smooth">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => dismissInsight(insight?.id)}
                  className="p-1 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/50 transition-smooth"
                  aria-label="Dismiss insight"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="text-sm text-text-secondary">
            Insights powered by AI analysis of your portfolio and market trends
          </div>
          <button className="text-sm font-medium text-brand-primary hover:text-brand-secondary transition-smooth">
            View All Insights →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;