import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AIRecommendations = ({ portfolio, userProfile }) => {
  const [recommendationType, setRecommendationType] = useState('optimization');
  const [isGenerating, setIsGenerating] = useState(false);
  const [recommendations, setRecommendations] = useState(null);

  const mockUserProfile = {
    riskTolerance: 'Moderate',
    investmentGoal: 'Long-term Growth',
    timeHorizon: '10+ years',
    experience: 'Intermediate',
    age: 35,
    income: '$75,000 - $100,000'
  };

  const generateRecommendations = async () => {
    setIsGenerating(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const mockRecommendations = {
      optimization: {
        title: 'Portfolio Optimization Suggestions',
        insights: [
          {
            type: 'rebalance',
            priority: 'High',
            title: 'Reduce Technology Concentration',
            description: 'Your portfolio has 65% allocation in technology sector. Consider reducing to 40-45% for better diversification.',
            impact: '+2.3% risk-adjusted return',
            action: 'Sell 15% of tech holdings',
            icon: 'Target'
          },
          {
            type: 'add',
            priority: 'Medium',
            title: 'Add International Exposure',
            description: 'Consider adding 15-20% international diversification through VXUS or similar broad international ETF.',
            impact: '+1.8% diversification benefit',
            action: 'Add VXUS (15% allocation)',
            icon: 'Globe'
          },
          {
            type: 'defensive',
            priority: 'Medium',
            title: 'Include Defensive Assets',
            description: 'Add 10-15% bonds or REITs to reduce portfolio volatility during market downturns.',
            impact: '-12% portfolio volatility',
            action: 'Add BND or VNQ',
            icon: 'Shield'
          }
        ],
        marketInsights: [
          'Current market conditions favor value over growth stocks',
          'Rising interest rates may impact bond performance',
          'Emerging markets showing strong momentum'
        ]
      },
      opportunities: {
        title: 'Investment Opportunities',
        insights: [
          {
            type: 'sector',
            priority: 'High',
            title: 'Healthcare Sector Opportunity',
            description: 'Healthcare sector is undervalued with strong fundamentals. Consider XLV or individual healthcare stocks.',
            impact: 'Potential 15-20% upside',
            action: 'Add XLV (10% allocation)',
            icon: 'Heart'
          },
          {
            type: 'trend',
            priority: 'Medium',
            title: 'Clean Energy Growth',
            description: 'Clean energy sector showing strong growth potential. ICLN offers diversified exposure.',
            impact: 'High growth potential',
            action: 'Consider ICLN (5% allocation)',
            icon: 'Zap'
          },
          {
            type: 'value',
            priority: 'Low',
            title: 'Value Stock Opportunity',
            description: 'Value stocks are trading at attractive multiples. VTV provides broad value exposure.',
            impact: 'Defensive positioning',
            action: 'Add VTV (8% allocation)',
            icon: 'DollarSign'
          }
        ],
        marketInsights: [
          'AI and automation driving tech innovation',
          'Infrastructure spending boosting materials sector',
          'Consumer discretionary showing resilience'
        ]
      },
      riskManagement: {
        title: 'Risk Management Recommendations',
        insights: [
          {
            type: 'hedge',
            priority: 'High',
            title: 'Add Market Hedge',
            description: 'Consider adding inverse ETFs or put options to hedge against market downturns.',
            impact: 'Downside protection',
            action: 'Add SH or VIX exposure',
            icon: 'TrendingDown'
          },
          {
            type: 'correlation',
            priority: 'Medium',
            title: 'Reduce Asset Correlation',
            description: 'Your holdings have high correlation. Add commodities or REITs for diversification.',
            impact: 'Lower correlation risk',
            action: 'Add GLD or VNQ',
            icon: 'Shuffle'
          },
          {
            type: 'volatility',
            priority: 'Medium',
            title: 'Manage Volatility',
            description: 'Consider low-volatility ETFs to reduce portfolio swings while maintaining returns.',
            impact: '-25% volatility reduction',
            action: 'Add USMV or SPLV',
            icon: 'Activity'
          }
        ],
        marketInsights: [
          'Market volatility expected to remain elevated',
          'Geopolitical risks affecting global markets',
          'Interest rate uncertainty creating bond volatility'
        ]
      }
    };
    
    setRecommendations(mockRecommendations?.[recommendationType]);
    setIsGenerating(false);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-error bg-error/10';
      case 'Medium': return 'text-warning bg-warning/10';
      case 'Low': return 'text-success bg-success/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary flex items-center space-x-2">
            <Icon name="Brain" size={20} className="text-brand-primary" />
            <span>AI-Powered Recommendations</span>
          </h3>
          <p className="text-text-secondary mt-1">Personalized insights based on your portfolio and goals</p>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={recommendationType}
            onChange={(e) => setRecommendationType(e?.target?.value)}
            className="px-3 py-1 text-sm border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-primary"
          >
            <option value="optimization">Optimization</option>
            <option value="opportunities">Opportunities</option>
            <option value="riskManagement">Risk Management</option>
          </select>
          <Button
            variant="default"
            size="sm"
            iconName="Sparkles"
            iconPosition="left"
            loading={isGenerating}
            onClick={generateRecommendations}
          >
            {isGenerating ? 'Analyzing...' : 'Generate'}
          </Button>
        </div>
      </div>
      {/* User Profile Summary */}
      <div className="mb-6 p-4 bg-brand-primary/5 rounded-lg border border-brand-primary/20">
        <h4 className="font-medium text-text-primary mb-3">Your Investment Profile</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-text-secondary">Risk Tolerance:</span>
            <p className="font-medium text-text-primary">{mockUserProfile?.riskTolerance}</p>
          </div>
          <div>
            <span className="text-text-secondary">Goal:</span>
            <p className="font-medium text-text-primary">{mockUserProfile?.investmentGoal}</p>
          </div>
          <div>
            <span className="text-text-secondary">Time Horizon:</span>
            <p className="font-medium text-text-primary">{mockUserProfile?.timeHorizon}</p>
          </div>
          <div>
            <span className="text-text-secondary">Experience:</span>
            <p className="font-medium text-text-primary">{mockUserProfile?.experience}</p>
          </div>
          <div>
            <span className="text-text-secondary">Age:</span>
            <p className="font-medium text-text-primary">{mockUserProfile?.age}</p>
          </div>
          <div>
            <span className="text-text-secondary">Income:</span>
            <p className="font-medium text-text-primary">{mockUserProfile?.income}</p>
          </div>
        </div>
      </div>
      {!recommendations && !isGenerating && (
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <Icon name="Brain" size={48} className="text-text-secondary mb-4" />
          <p className="text-text-secondary mb-2">AI recommendations ready</p>
          <p className="text-sm text-text-secondary">Click "Generate" to get personalized portfolio insights</p>
        </div>
      )}
      {isGenerating && (
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mb-4"></div>
          <p className="text-text-primary mb-2">Analyzing your portfolio...</p>
          <p className="text-sm text-text-secondary">Our AI is processing market data and your preferences</p>
        </div>
      )}
      {recommendations && (
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-text-primary mb-4">{recommendations?.title}</h4>
            <div className="space-y-4">
              {recommendations?.insights?.map((insight, index) => (
                <div key={index} className="border border-border rounded-lg p-4 hover:shadow-subtle transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-brand-primary/10 rounded-lg">
                      <Icon name={insight?.icon} size={20} className="text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h5 className="font-medium text-text-primary">{insight?.title}</h5>
                        <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(insight?.priority)}`}>
                          {insight?.priority}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary mb-3">{insight?.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div>
                            <span className="text-xs text-text-secondary">Expected Impact:</span>
                            <p className="text-sm font-medium text-success">{insight?.impact}</p>
                          </div>
                          <div>
                            <span className="text-xs text-text-secondary">Recommended Action:</span>
                            <p className="text-sm font-medium text-text-primary">{insight?.action}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" iconName="Plus">
                          Apply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Insights */}
          <div className="p-4 bg-muted rounded-lg">
            <h5 className="font-medium text-text-primary mb-3 flex items-center space-x-2">
              <Icon name="TrendingUp" size={16} className="text-brand-primary" />
              <span>Current Market Insights</span>
            </h5>
            <ul className="space-y-2">
              {recommendations?.marketInsights?.map((insight, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                  <Icon name="ChevronRight" size={14} className="text-brand-primary mt-0.5" />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Confidence Score */}
          <div className="flex items-center justify-between p-4 bg-success/5 border border-success/20 rounded-lg">
            <div>
              <h5 className="font-medium text-text-primary">AI Confidence Score</h5>
              <p className="text-sm text-text-secondary">Based on market analysis and your profile</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-success">87%</p>
              <p className="text-xs text-text-secondary">High Confidence</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIRecommendations;