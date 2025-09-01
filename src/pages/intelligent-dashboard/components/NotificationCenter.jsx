import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotificationCenter = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'market',
      title: 'AAPL Price Alert',
      message: 'Apple Inc. has reached your target price of $180.00',
      time: '5 minutes ago',
      read: false,
      priority: 'high',
      icon: 'Bell'
    },
    {
      id: 2,
      type: 'education',
      title: 'Course Completed',
      message: 'Congratulations! You completed "Risk Management Basics"',
      time: '2 hours ago',
      read: false,
      priority: 'medium',
      icon: 'BookOpen'
    },
    {
      id: 3,
      type: 'portfolio',
      title: 'Portfolio Rebalancing',
      message: 'Your portfolio allocation has shifted. Consider rebalancing.',
      time: '1 day ago',
      read: true,
      priority: 'medium',
      icon: 'PieChart'
    },
    {
      id: 4,
      type: 'community',
      title: 'New Discussion Reply',
      message: 'Sarah Johnson replied to your post about dividend investing',
      time: '2 days ago',
      read: true,
      priority: 'low',
      icon: 'MessageCircle'
    },
    {
      id: 5,
      type: 'market',
      title: 'Market Update',
      message: 'S&P 500 closed up 1.2% - your portfolio gained $1,247',
      time: '3 days ago',
      read: true,
      priority: 'medium',
      icon: 'TrendingUp'
    },
    {
      id: 6,
      type: 'system',
      title: 'Security Update',
      message: 'Your account security settings have been updated',
      time: '1 week ago',
      read: true,
      priority: 'high',
      icon: 'Shield'
    }
  ]);

  const tabs = [
    { id: 'all', label: 'All', count: notifications?.length },
    { id: 'unread', label: 'Unread', count: notifications?.filter(n => !n?.read)?.length },
    { id: 'market', label: 'Market', count: notifications?.filter(n => n?.type === 'market')?.length },
    { id: 'education', label: 'Learning', count: notifications?.filter(n => n?.type === 'education')?.length }
  ];

  const filteredNotifications = notifications?.filter(notification => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return !notification?.read;
    return notification?.type === activeTab;
  });

  const markAsRead = (notificationId) => {
    setNotifications(notifications?.map(notification =>
      notification?.id === notificationId
        ? { ...notification, read: true }
        : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications?.map(notification => ({ ...notification, read: true })));
  };

  const deleteNotification = (notificationId) => {
    setNotifications(notifications?.filter(notification => notification?.id !== notificationId));
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'text-error',
      medium: 'text-warning',
      low: 'text-text-secondary'
    };
    return colors?.[priority] || 'text-text-secondary';
  };

  const getTypeColor = (type) => {
    const colors = {
      market: 'bg-brand-primary/10 text-brand-primary',
      education: 'bg-brand-accent/10 text-brand-accent',
      portfolio: 'bg-warning/10 text-warning',
      community: 'bg-success/10 text-success',
      system: 'bg-error/10 text-error'
    };
    return colors?.[type] || 'bg-muted text-text-secondary';
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-text-primary">Notifications</h3>
        <div className="flex items-center space-x-2">
          {notifications?.filter(n => !n?.read)?.length > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead}>
              Mark All Read
            </Button>
          )}
          <button className="p-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-muted transition-smooth">
            <Icon name="Settings" size={18} />
          </button>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1 overflow-x-auto">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-smooth ${
              activeTab === tab?.id
                ? 'bg-white text-brand-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <span>{tab?.label}</span>
            {tab?.count > 0 && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === tab?.id
                  ? 'bg-brand-primary text-white' :'bg-text-secondary/20 text-text-secondary'
              }`}>
                {tab?.count}
              </span>
            )}
          </button>
        ))}
      </div>
      {/* Notifications List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {filteredNotifications?.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Bell" size={24} color="var(--color-text-secondary)" />
            </div>
            <h4 className="text-lg font-semibold text-text-primary mb-2">No Notifications</h4>
            <p className="text-text-secondary">
              {activeTab === 'unread' ? "You're all caught up! No unread notifications." :"No notifications in this category."}
            </p>
          </div>
        ) : (
          filteredNotifications?.map((notification) => (
            <div
              key={notification?.id}
              className={`relative p-4 rounded-lg border transition-all duration-200 hover:shadow-sm ${
                notification?.read
                  ? 'border-border bg-white' :'border-brand-primary/20 bg-brand-primary/5'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(notification?.type)}`}>
                  <Icon name={notification?.icon} size={18} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className={`font-semibold ${notification?.read ? 'text-text-primary' : 'text-brand-primary'}`}>
                      {notification?.title}
                    </h4>
                    {!notification?.read && (
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    )}
                    <div className={`w-1 h-1 rounded-full ${getPriorityColor(notification?.priority)}`}></div>
                  </div>
                  <p className="text-sm text-text-secondary mb-2 leading-relaxed">
                    {notification?.message}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary">{notification?.time}</span>
                    <div className="flex items-center space-x-2">
                      {!notification?.read && (
                        <button
                          onClick={() => markAsRead(notification?.id)}
                          className="text-xs text-brand-primary hover:text-brand-secondary transition-smooth"
                        >
                          Mark as read
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification?.id)}
                        className="p-1 rounded text-text-secondary hover:text-error hover:bg-error/10 transition-smooth"
                      >
                        <Icon name="Trash2" size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {filteredNotifications?.length > 0 && (
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-text-secondary">
              Showing {filteredNotifications?.length} of {notifications?.length} notifications
            </div>
            <Button variant="outline" size="sm" iconName="Archive">
              Archive All
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;