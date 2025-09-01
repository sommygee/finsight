import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import Icon from '../../../components/AppIcon';

const RiskAnalysis = ({ portfolio }) => {
  const [analysisType, setAnalysisType] = useState('overview');

  const calculateRiskMetrics = () => {
    if (portfolio?.length === 0) return null;

    // Mock risk calculations based on portfolio composition
    const totalAllocation = portfolio?.reduce((sum, asset) => sum + asset?.allocation, 0);
    
    // Sector concentration risk
    const sectorConcentration = portfolio?.reduce((acc, asset) => {
      acc[asset.sector] = (acc?.[asset?.sector] || 0) + asset?.allocation;
      return acc;
    }, {});

    const maxSectorConcentration = Math.max(...Object.values(sectorConcentration));
    
    // Asset type diversification
    const typeDistribution = portfolio?.reduce((acc, asset) => {
      acc[asset.type] = (acc?.[asset?.type] || 0) + asset?.allocation;
      return acc;
    }, {});

    // Calculate risk scores (0-100, lower is better)
    const concentrationRisk = Math.min(100, (maxSectorConcentration / totalAllocation) * 200);
    const diversificationRisk = Math.max(0, 100 - (Object.keys(sectorConcentration)?.length * 15));
    const volatilityRisk = Math.random() * 40 + 30; // Mock volatility risk
    const liquidityRisk = Math.random() * 30 + 10; // Mock liquidity risk
    const correlationRisk = Math.random() * 50 + 25; // Mock correlation risk

    const overallRisk = (concentrationRisk + diversificationRisk + volatilityRisk + liquidityRisk + correlationRisk) / 5;

    return {
      overallRisk,
      concentrationRisk,
      diversificationRisk,
      volatilityRisk,
      liquidityRisk,
      correlationRisk,
      sectorConcentration,
      typeDistribution,
      totalAllocation
    };
  };

  const riskMetrics = calculateRiskMetrics();

  const getRiskLevel = (score) => {
    if (score <= 30) return { level: 'Low', color: 'text-success', bgColor: 'bg-success/10' };
    if (score <= 60) return { level: 'Medium', color: 'text-warning', bgColor: 'bg-warning/10' };
    return { level: 'High', color: 'text-error', bgColor: 'bg-error/10' };
  };

  const radarData = riskMetrics ? [
    { subject: 'Concentration', value: 100 - riskMetrics?.concentrationRisk, fullMark: 100 },
    { subject: 'Diversification', value: 100 - riskMetrics?.diversificationRisk, fullMark: 100 },
    { subject: 'Volatility', value: 100 - riskMetrics?.volatilityRisk, fullMark: 100 },
    { subject: 'Liquidity', value: 100 - riskMetrics?.liquidityRisk, fullMark: 100 },
    { subject: 'Correlation', value: 100 - riskMetrics?.correlationRisk, fullMark: 100 }
  ] : [];

  const sectorRiskData = riskMetrics ? Object.entries(riskMetrics?.sectorConcentration)?.map(([sector, allocation]) => ({
    sector,
    allocation: (allocation / riskMetrics?.totalAllocation) * 100,
    risk: allocation > 30 ? 'High' : allocation > 15 ? 'Medium' : 'Low'
  })) : [];

  if (!riskMetrics) {
    return (
      <div className="bg-white rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Risk Analysis</h3>
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <Icon name="Shield" size={48} className="text-text-secondary mb-4" />
          <p className="text-text-secondary">No portfolio to analyze</p>
          <p className="text-sm text-text-secondary mt-1">Build a portfolio to see risk analysis</p>
        </div>
      </div>
    );
  }

  const overallRiskInfo = getRiskLevel(riskMetrics?.overallRisk);

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">Risk Analysis</h3>
          <p className="text-text-secondary mt-1">Comprehensive portfolio risk assessment</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setAnalysisType('overview')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              analysisType === 'overview' ?'bg-brand-primary text-white' :'bg-muted text-text-secondary hover:text-brand-primary'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setAnalysisType('detailed')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              analysisType === 'detailed' ?'bg-brand-primary text-white' :'bg-muted text-text-secondary hover:text-brand-primary'
            }`}
          >
            Detailed
          </button>
        </div>
      </div>
      {analysisType === 'overview' && (
        <div className="space-y-6">
          {/* Overall Risk Score */}
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${overallRiskInfo?.bgColor} mb-4`}>
              <Icon name="Shield" size={20} className={overallRiskInfo?.color} />
              <span className={`font-medium ${overallRiskInfo?.color}`}>
                {overallRiskInfo?.level} Risk Portfolio
              </span>
            </div>
            <p className="text-3xl font-bold text-text-primary mb-2">
              {(100 - riskMetrics?.overallRisk)?.toFixed(0)}/100
            </p>
            <p className="text-text-secondary">Risk-Adjusted Score</p>
          </div>

          {/* Risk Radar Chart */}
          <div>
            <h4 className="font-medium text-text-primary mb-4">Risk Profile</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Risk Score"
                    dataKey="value"
                    stroke="#1E3A8A"
                    fill="#1E3A8A"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Risk Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Target" size={16} className="text-brand-primary" />
                <span className="text-sm font-medium text-text-primary">Concentration</span>
              </div>
              <p className={`text-lg font-semibold ${getRiskLevel(riskMetrics?.concentrationRisk)?.color}`}>
                {getRiskLevel(riskMetrics?.concentrationRisk)?.level}
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Shuffle" size={16} className="text-brand-primary" />
                <span className="text-sm font-medium text-text-primary">Diversification</span>
              </div>
              <p className={`text-lg font-semibold ${getRiskLevel(riskMetrics?.diversificationRisk)?.color}`}>
                {getRiskLevel(riskMetrics?.diversificationRisk)?.level}
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Activity" size={16} className="text-brand-primary" />
                <span className="text-sm font-medium text-text-primary">Volatility</span>
              </div>
              <p className={`text-lg font-semibold ${getRiskLevel(riskMetrics?.volatilityRisk)?.color}`}>
                {getRiskLevel(riskMetrics?.volatilityRisk)?.level}
              </p>
            </div>
          </div>
        </div>
      )}
      {analysisType === 'detailed' && (
        <div className="space-y-6">
          {/* Sector Concentration */}
          <div>
            <h4 className="font-medium text-text-primary mb-4">Sector Concentration Risk</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sectorRiskData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="sector" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="allocation" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Risk Metrics Table */}
          <div>
            <h4 className="font-medium text-text-primary mb-4">Detailed Risk Metrics</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-text-primary">Risk Factor</th>
                    <th className="text-center py-2 text-text-primary">Score</th>
                    <th className="text-center py-2 text-text-primary">Level</th>
                    <th className="text-left py-2 text-text-primary">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 text-text-primary">Concentration Risk</td>
                    <td className="py-3 text-center font-medium">{(100 - riskMetrics?.concentrationRisk)?.toFixed(0)}</td>
                    <td className="py-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${getRiskLevel(riskMetrics?.concentrationRisk)?.bgColor} ${getRiskLevel(riskMetrics?.concentrationRisk)?.color}`}>
                        {getRiskLevel(riskMetrics?.concentrationRisk)?.level}
                      </span>
                    </td>
                    <td className="py-3 text-text-secondary">Risk from over-concentration in single assets</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-text-primary">Diversification Risk</td>
                    <td className="py-3 text-center font-medium">{(100 - riskMetrics?.diversificationRisk)?.toFixed(0)}</td>
                    <td className="py-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${getRiskLevel(riskMetrics?.diversificationRisk)?.bgColor} ${getRiskLevel(riskMetrics?.diversificationRisk)?.color}`}>
                        {getRiskLevel(riskMetrics?.diversificationRisk)?.level}
                      </span>
                    </td>
                    <td className="py-3 text-text-secondary">Risk from insufficient diversification</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-text-primary">Volatility Risk</td>
                    <td className="py-3 text-center font-medium">{(100 - riskMetrics?.volatilityRisk)?.toFixed(0)}</td>
                    <td className="py-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${getRiskLevel(riskMetrics?.volatilityRisk)?.bgColor} ${getRiskLevel(riskMetrics?.volatilityRisk)?.color}`}>
                        {getRiskLevel(riskMetrics?.volatilityRisk)?.level}
                      </span>
                    </td>
                    <td className="py-3 text-text-secondary">Risk from price volatility</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-text-primary">Liquidity Risk</td>
                    <td className="py-3 text-center font-medium">{(100 - riskMetrics?.liquidityRisk)?.toFixed(0)}</td>
                    <td className="py-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${getRiskLevel(riskMetrics?.liquidityRisk)?.bgColor} ${getRiskLevel(riskMetrics?.liquidityRisk)?.color}`}>
                        {getRiskLevel(riskMetrics?.liquidityRisk)?.level}
                      </span>
                    </td>
                    <td className="py-3 text-text-secondary">Risk from difficulty selling assets</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {/* Risk Recommendations */}
      <div className="mt-6 p-4 bg-brand-primary/5 rounded-lg border border-brand-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={20} className="text-brand-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-text-primary mb-2">Risk Management Recommendations</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              {riskMetrics?.concentrationRisk > 60 && (
                <li>• Consider reducing concentration in your largest holdings</li>
              )}
              {riskMetrics?.diversificationRisk > 60 && (
                <li>• Add assets from different sectors to improve diversification</li>
              )}
              {Object.keys(riskMetrics?.sectorConcentration)?.length < 3 && (
                <li>• Expand into additional sectors for better risk distribution</li>
              )}
              <li>• Regular rebalancing can help maintain your target risk profile</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysis;