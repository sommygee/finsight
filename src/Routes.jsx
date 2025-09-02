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
import NavigationLandingPage from './pages/navigation-landing-page';
import AboutUs from './pages/about-us';
import Home from './pages/home';
import ContactSupportHub from './pages/contact-support-hub';
import InvestmentPlansPage from "./pages/investment-plans";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-support-hub" element={<ContactSupportHub />} />
          <Route path="/blog" element={<NavigationLandingPage />} />
          <Route path="/navigation-landing-page" element={<NavigationLandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/intelligent-dashboard" element={<IntelligentDashboard />} />
          <Route path="/market-explorer-research-center" element={<MarketExplorerResearchCenter />} />
          <Route path="/homepage-investment-intelligence-platform" element={<HomepageInvestmentIntelligencePlatform />} />
          <Route path="/portfolio-laboratory-construction-tools" element={<PortfolioLaboratory />} />
          <Route path="/trading-command-center-simulation" element={<TradingCommandCenter />} />
          <Route path="/investment-plans" element={<InvestmentPlansPage />} />
          
          {/* Auth pages */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
