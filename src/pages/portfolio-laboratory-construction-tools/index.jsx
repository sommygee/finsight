import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PortfolioTemplates from './components/PortfolioTemplates';
import PortfolioBuilder from './components/PortfolioBuilder';
import AllocationChart from './components/AllocationChart';
import BacktestingTool from './components/BacktestingTool';
import RiskAnalysis from './components/RiskAnalysis';
import RebalancingTool from './components/RebalancingTool';
import AIRecommendations from './components/AIRecommendations';

const PortfolioLaboratory = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('builder');
  const [currentPortfolio, setCurrentPortfolio] = useState([]);
  const [chartViewType, setChartViewType] = useState('assets');

  const tabs = [
    { id: 'builder', name: 'Portfolio Builder', icon: 'PieChart' },
    { id: 'analysis', name: 'Risk Analysis', icon: 'Shield' },
    { id: 'backtest', name: 'Backtesting', icon: 'BarChart3' },
    { id: 'rebalance', name: 'Rebalancing', icon: 'Scale' },
    { id: 'ai', name: 'AI Insights', icon: 'Brain' }
  ];

  const handleTemplateSelect = (templateAssets) => {
    setCurrentPortfolio(templateAssets);
    setActiveTab('builder');
  };

  const handlePortfolioChange = (newPortfolio) => {
    setCurrentPortfolio(newPortfolio);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const portfolioValue = currentPortfolio?.reduce((sum, asset) => sum + (asset?.allocation * 1000), 0);
  const totalAllocation = currentPortfolio?.reduce((sum, asset) => sum + asset?.allocation, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar isCollapsed={sidebarCollapsed} onToggleCollapse={toggleSidebar} />
      <main className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'} pt-16`}>
        <div className="p-6">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-text-primary mb-2">Portfolio Laboratory</h1>
                <p className="text-text-secondary">Build, analyze, and optimize your investment portfolio with advanced tools</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-text-secondary">Portfolio Value</p>
                  <p className="text-xl font-bold text-text-primary">${portfolioValue?.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-text-secondary">Total Allocation</p>
                  <p className={`text-xl font-bold ${totalAllocation === 100 ? 'text-success' : totalAllocation > 100 ? 'text-error' : 'text-warning'}`}>
                    {totalAllocation?.toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Templates Section */}
          {currentPortfolio?.length === 0 && (
            <div className="mb-8">
              <PortfolioTemplates onTemplateSelect={handleTemplateSelect} />
            </div>
          )}

          {/* Main Content */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Column - Tools */}
            <div className="xl:col-span-2 space-y-6">
              {/* Tab Navigation */}
              <div className="bg-white rounded-lg border border-border p-1">
                <div className="flex space-x-1 overflow-x-auto">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                        activeTab === tab?.id
                          ? 'bg-brand-primary text-white shadow-brand'
                          : 'text-text-secondary hover:text-brand-primary hover:bg-muted'
                      }`}
                    >
                      <Icon name={tab?.icon} size={16} />
                      <span>{tab?.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div>
                {activeTab === 'builder' && (
                  <PortfolioBuilder
                    currentPortfolio={currentPortfolio}
                    onPortfolioChange={handlePortfolioChange}
                  />
                )}
                {activeTab === 'analysis' && (
                  <RiskAnalysis portfolio={currentPortfolio} />
                )}
                {activeTab === 'backtest' && (
                  <BacktestingTool portfolio={currentPortfolio} />
                )}
                {activeTab === 'rebalance' && (
                  <RebalancingTool
                    portfolio={currentPortfolio}
                    onPortfolioChange={handlePortfolioChange}
                  />
                )}
                {activeTab === 'ai' && (
                  <AIRecommendations 
                    portfolio={currentPortfolio}
                    userProfile={{}} 
                  />
                )}
              </div>
            </div>

            {/* Right Column - Visualization & Summary */}
            <div className="space-y-6">
              {/* Allocation Chart */}
              <AllocationChart
                portfolio={currentPortfolio}
                viewType={chartViewType}
                onViewTypeChange={setChartViewType}
              />

              {/* Portfolio Summary */}
              <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Portfolio Summary</h3>
                
                {currentPortfolio?.length === 0 ? (
                  <div className="text-center py-8">
                    <Icon name="PieChart" size={48} className="text-text-secondary mb-4 mx-auto" />
                    <p className="text-text-secondary">No assets in portfolio</p>
                    <p className="text-sm text-text-secondary mt-1">Start building your portfolio above</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <p className="text-sm text-text-secondary">Assets</p>
                        <p className="text-xl font-semibold text-text-primary">{currentPortfolio?.length}</p>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <p className="text-sm text-text-secondary">Sectors</p>
                        <p className="text-xl font-semibold text-text-primary">
                          {new Set(currentPortfolio.map(asset => asset.sector))?.size}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-text-primary">Top Holdings</h4>
                      {currentPortfolio?.sort((a, b) => b?.allocation - a?.allocation)?.slice(0, 5)?.map((asset, index) => (
                          <div key={asset?.symbol} className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-text-primary">{asset?.symbol}</span>
                              <span className="text-xs px-2 py-1 bg-brand-primary/10 text-brand-primary rounded-full">
                                {asset?.type}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-text-primary">
                              {asset?.allocation?.toFixed(1)}%
                            </span>
                          </div>
                        ))}
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        iconName="Download"
                        iconPosition="left"
                      >
                        Export Portfolio
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="Save"
                    iconPosition="left"
                    disabled={currentPortfolio?.length === 0}
                  >
                    Save Portfolio
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="Share"
                    iconPosition="left"
                    disabled={currentPortfolio?.length === 0}
                  >
                    Share Portfolio
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="Copy"
                    iconPosition="left"
                    disabled={currentPortfolio?.length === 0}
                  >
                    Clone Portfolio
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    fullWidth
                    iconName="Trash2"
                    iconPosition="left"
                    disabled={currentPortfolio?.length === 0}
                    onClick={() => setCurrentPortfolio([])}
                  >
                    Clear Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioLaboratory;