import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import IntelligentDashboard from './pages/intelligent-dashboard';
import MarketExplorerResearchCenter from './pages/market-explorer-research-center';
import HomepageInvestmentIntelligencePlatform from './pages/homepage-investment-intelligence-platform';
import PortfolioLaboratory from './pages/portfolio-laboratory-construction-tools';
import TradingCommandCenter from './pages/trading-command-center-simulation';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomepageInvestmentIntelligencePlatform />} />
        <Route path="/intelligent-dashboard" element={<IntelligentDashboard />} />
        <Route path="/market-explorer-research-center" element={<MarketExplorerResearchCenter />} />
        <Route path="/homepage-investment-intelligence-platform" element={<HomepageInvestmentIntelligencePlatform />} />
        <Route path="/portfolio-laboratory-construction-tools" element={<PortfolioLaboratory />} />
        <Route path="/trading-command-center-simulation" element={<TradingCommandCenter />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
