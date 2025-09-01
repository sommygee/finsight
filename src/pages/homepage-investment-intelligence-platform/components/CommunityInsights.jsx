import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityInsights = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [currentPost, setCurrentPost] = useState(0);

  const discussions = [
    {
      id: 1,
      author: "Alex Thompson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      title: "Tesla\'s Q4 earnings - What to expect?",
      content: "With Tesla's Q4 earnings coming up, I'm analyzing their production numbers and market expansion. The energy storage segment looks particularly promising...",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      tags: ["TSLA", "Earnings", "Analysis"],
      trending: true
    },
    {
      id: 2,
      author: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      title: "Diversification strategy for 2024",
      content: "I've been rebalancing my portfolio for the new year. Here's my approach to sector allocation and geographic diversification...",
      timestamp: "4 hours ago",
      likes: 18,
      comments: 12,
      tags: ["Portfolio", "Strategy", "Diversification"],
      trending: false
    },
    {
      id: 3,
      author: "Michael Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      title: "AI stocks: Bubble or opportunity?",
      content: "The AI sector has seen massive gains, but are we in a bubble? Let's discuss the fundamentals behind these valuations...",
      timestamp: "6 hours ago",
      likes: 31,
      comments: 15,
      tags: ["AI", "Technology", "Valuation"],
      trending: true
    }
  ];

  const trendingTopics = [
    { topic: "Q4 Earnings Season", posts: 156, growth: "+23%" },
    { topic: "Fed Rate Decisions", posts: 89, growth: "+18%" },
    { topic: "Tech Stock Analysis", posts: 234, growth: "+15%" },
    { topic: "ESG Investing", posts: 67, growth: "+12%" },
    { topic: "Crypto Market", posts: 145, growth: "+8%" }
  ];

  const expertInsights = [
    {
      id: 1,
      expert: "Dr. Jennifer Walsh",
      role: "Chief Market Strategist",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      insight: "Market volatility presents opportunities for long-term investors. Focus on quality companies with strong fundamentals.",
      timestamp: "1 hour ago",
      likes: 67
    },
    {
      id: 2,
      expert: "Robert Kim",
      role: "Portfolio Manager",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      insight: "Emerging markets are showing resilience. Consider increasing allocation to international equities for 2024.",
      timestamp: "3 hours ago",
      likes: 45
    }
  ];

  const communityStats = [
    { label: "Active Members", value: "125K+", icon: "Users" },
    { label: "Daily Discussions", value: "2.5K", icon: "MessageCircle" },
    { label: "Expert Contributors", value: "500+", icon: "Award" },
    { label: "Success Stories", value: "10K+", icon: "TrendingUp" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPost((prev) => (prev + 1) % discussions?.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join the Conversation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow investors, share insights, and learn from a community of successful traders and financial experts.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityStats?.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={24} color="var(--color-brand-primary)" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat?.value}</div>
              <div className="text-gray-600 text-sm">{stat?.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => setActiveTab('discussions')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'discussions' ?'bg-white text-brand-primary shadow-sm' :'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon name="MessageCircle" size={16} className="inline mr-2" />
                Discussions
              </button>
              <button
                onClick={() => setActiveTab('insights')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'insights' ?'bg-white text-brand-primary shadow-sm' :'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon name="Lightbulb" size={16} className="inline mr-2" />
                Expert Insights
              </button>
            </div>

            {/* Discussions Tab */}
            {activeTab === 'discussions' && (
              <div className="space-y-6">
                {discussions?.map((discussion, index) => (
                  <div 
                    key={discussion?.id} 
                    className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 ${
                      index === currentPost ? 'ring-2 ring-brand-primary/20' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <Image
                        src={discussion?.avatar}
                        alt={discussion?.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{discussion?.author}</h4>
                          <span className="text-gray-500 text-sm">•</span>
                          <span className="text-gray-500 text-sm">{discussion?.timestamp}</span>
                          {discussion?.trending && (
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                              Trending
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{discussion?.title}</h3>
                        <p className="text-gray-600 mb-4">{discussion?.content}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {discussion?.tags?.map((tag, tagIndex) => (
                              <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Icon name="Heart" size={16} />
                              <span className="text-sm">{discussion?.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Icon name="MessageCircle" size={16} />
                              <span className="text-sm">{discussion?.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Expert Insights Tab */}
            {activeTab === 'insights' && (
              <div className="space-y-6">
                {expertInsights?.map((insight) => (
                  <div key={insight?.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <Image
                        src={insight?.avatar}
                        alt={insight?.expert}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{insight?.expert}</h4>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                            Expert
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{insight?.role}</p>
                        <p className="text-gray-800 mb-4 italic">"{insight?.insight}"</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-sm">{insight?.timestamp}</span>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <Icon name="Heart" size={16} />
                            <span className="text-sm">{insight?.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {trendingTopics?.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{topic?.topic}</div>
                      <div className="text-sm text-gray-500">{topic?.posts} posts</div>
                    </div>
                    <span className="text-emerald-600 text-sm font-medium">{topic?.growth}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Join Community CTA */}
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Join the Community</h3>
              <p className="text-blue-100 text-sm mb-4">
                Connect with 125K+ investors and get exclusive insights from market experts.
              </p>
              <Link to="/intelligent-dashboard">
                <Button 
                  variant="default" 
                  fullWidth 
                  className="bg-white text-brand-primary hover:bg-gray-100"
                  iconName="Users" 
                  iconPosition="left"
                >
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityInsights;