import React, { useMemo, useState, Children, createElement } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../components/layout/MainLayout';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, FileTextIcon, AlertTriangleIcon, TrendingUpIcon, TrendingDownIcon, DownloadIcon, ClockIcon, BarChart3Icon, PieChartIcon, ActivityIcon } from 'lucide-react';
type TimePeriod = '7d' | '30d' | '90d';
export function AnalyticsPage() {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('30d');
  const [isExporting, setIsExporting] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  // Dynamic data based on time period
  const analyticsData = useMemo(() => {
    const data = {
      '7d': {
        totalDocuments: 24,
        documentsChange: 8,
        avgRiskScore: 71,
        riskScoreChange: -3,
        highRiskCases: 5,
        highRiskChange: -2,
        avgProcessingTime: '2.1m',
        processingTimeChange: -10,
        riskDistribution: [{
          label: 'High Risk',
          value: 5,
          percentage: 20.8,
          color: '#EF4444'
        }, {
          label: 'Medium Risk',
          value: 11,
          percentage: 45.8,
          color: '#F59E0B'
        }, {
          label: 'Low Risk',
          value: 8,
          percentage: 33.4,
          color: '#10B981'
        }],
        trendData: [{
          month: 'Day 1',
          score: 74
        }, {
          month: 'Day 2',
          score: 72
        }, {
          month: 'Day 3',
          score: 73
        }, {
          month: 'Day 4',
          score: 71
        }, {
          month: 'Day 5',
          score: 70
        }, {
          month: 'Day 6',
          score: 72
        }, {
          month: 'Day 7',
          score: 71
        }],
        topRisks: [{
          clause: 'Unlimited Liability',
          count: 5
        }, {
          clause: 'Broad IP Assignment',
          count: 4
        }, {
          clause: 'Short Termination',
          count: 3
        }, {
          clause: 'Vague Payment Terms',
          count: 2
        }, {
          clause: 'Standard Confidentiality',
          count: 2
        }],
        agentUsage: [{
          name: 'Clause Extraction',
          runs: 12,
          avgTime: '2m 10s'
        }, {
          name: 'Risk Detection',
          runs: 10,
          avgTime: '2m 55s'
        }, {
          name: 'Summary Agent',
          runs: 14,
          avgTime: '1m 48s'
        }, {
          name: 'Drafting Agent',
          runs: 8,
          avgTime: '3m 40s'
        }]
      },
      '30d': {
        totalDocuments: 187,
        documentsChange: 12,
        avgRiskScore: 68,
        riskScoreChange: -5,
        highRiskCases: 23,
        highRiskChange: -8,
        avgProcessingTime: '2.4m',
        processingTimeChange: -15,
        riskDistribution: [{
          label: 'High Risk',
          value: 23,
          percentage: 22.8,
          color: '#EF4444'
        }, {
          label: 'Medium Risk',
          value: 46,
          percentage: 45.6,
          color: '#F59E0B'
        }, {
          label: 'Low Risk',
          value: 32,
          percentage: 31.6,
          color: '#10B981'
        }],
        trendData: [{
          month: 'Week 1',
          score: 72
        }, {
          month: 'Week 2',
          score: 70
        }, {
          month: 'Week 3',
          score: 69
        }, {
          month: 'Week 4',
          score: 68
        }],
        topRisks: [{
          clause: 'Unlimited Liability',
          count: 23
        }, {
          clause: 'Broad IP Assignment',
          count: 19
        }, {
          clause: 'Short Termination',
          count: 15
        }, {
          clause: 'Vague Payment Terms',
          count: 12
        }, {
          clause: 'Standard Confidentiality',
          count: 8
        }],
        agentUsage: [{
          name: 'Clause Extraction',
          runs: 98,
          avgTime: '2m 15s'
        }, {
          name: 'Risk Detection',
          runs: 86,
          avgTime: '3m 05s'
        }, {
          name: 'Summary Agent',
          runs: 94,
          avgTime: '1m 52s'
        }, {
          name: 'Drafting Agent',
          runs: 64,
          avgTime: '3m 45s'
        }]
      },
      '90d': {
        totalDocuments: 542,
        documentsChange: 18,
        avgRiskScore: 65,
        riskScoreChange: -8,
        highRiskCases: 68,
        highRiskChange: -12,
        avgProcessingTime: '2.6m',
        processingTimeChange: -20,
        riskDistribution: [{
          label: 'High Risk',
          value: 68,
          percentage: 21.5,
          color: '#EF4444'
        }, {
          label: 'Medium Risk',
          value: 142,
          percentage: 44.8,
          color: '#F59E0B'
        }, {
          label: 'Low Risk',
          value: 107,
          percentage: 33.7,
          color: '#10B981'
        }],
        trendData: [{
          month: 'Jan',
          score: 72
        }, {
          month: 'Feb',
          score: 68
        }, {
          month: 'Mar',
          score: 65
        }, {
          month: 'Apr',
          score: 70
        }, {
          month: 'May',
          score: 66
        }, {
          month: 'Jun',
          score: 63
        }],
        topRisks: [{
          clause: 'Unlimited Liability',
          count: 68
        }, {
          clause: 'Broad IP Assignment',
          count: 54
        }, {
          clause: 'Short Termination',
          count: 42
        }, {
          clause: 'Vague Payment Terms',
          count: 35
        }, {
          clause: 'Standard Confidentiality',
          count: 28
        }],
        agentUsage: [{
          name: 'Clause Extraction',
          runs: 284,
          avgTime: '2m 18s'
        }, {
          name: 'Risk Detection',
          runs: 256,
          avgTime: '3m 08s'
        }, {
          name: 'Summary Agent',
          runs: 298,
          avgTime: '1m 55s'
        }, {
          name: 'Drafting Agent',
          runs: 186,
          avgTime: '3m 48s'
        }]
      }
    };
    return data[selectedPeriod];
  }, [selectedPeriod]);
  const kpiData = [{
    title: 'Total Documents',
    value: analyticsData.totalDocuments,
    change: {
      value: analyticsData.documentsChange,
      type: 'increase' as const
    },
    period: 'vs last period',
    icon: <FileTextIcon size={24} className="text-blue-600" />
  }, {
    title: 'Average Risk Score',
    value: analyticsData.avgRiskScore,
    change: {
      value: Math.abs(analyticsData.riskScoreChange),
      type: 'decrease' as const
    },
    period: 'vs last period',
    icon: <TrendingUpIcon size={24} className="text-green-600" />
  }, {
    title: 'High-Risk Cases',
    value: analyticsData.highRiskCases,
    change: {
      value: Math.abs(analyticsData.highRiskChange),
      type: 'decrease' as const
    },
    period: selectedPeriod === '7d' ? 'last 7 days' : selectedPeriod === '30d' ? 'last 30 days' : 'last 90 days',
    icon: <AlertTriangleIcon size={24} className="text-yellow-600" />
  }, {
    title: 'Processing Time',
    value: analyticsData.avgProcessingTime,
    change: {
      value: Math.abs(analyticsData.processingTimeChange),
      type: 'decrease' as const
    },
    period: 'average',
    icon: <ClockIcon size={24} className="text-purple-600" />
  }];
  const maxRiskCount = Math.max(...analyticsData.topRisks.map(r => r.count));
  // Calculate chart dimensions and scales
  const chartWidth = 600;
  const chartHeight = 200;
  const padding = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 50
  };
  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;
  const trendData = analyticsData.trendData;
  const maxScore = Math.max(...trendData.map(d => d.score));
  const minScore = Math.min(...trendData.map(d => d.score));
  const scoreRange = maxScore - minScore || 10;
  // Create line path
  const linePath = trendData.map((point, i) => {
    const x = padding.left + i / (trendData.length - 1) * innerWidth;
    const y = padding.top + innerHeight - (point.score - minScore) / scoreRange * innerHeight;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
  // Create area path for gradient fill
  const areaPath = `${linePath} L ${padding.left + innerWidth} ${padding.top + innerHeight} L ${padding.left} ${padding.top + innerHeight} Z`;
  const handleExport = async () => {
    setIsExporting(true);
    try {
      const csvData = [['DeepLex Analytics Report'], [`Period: ${selectedPeriod === '7d' ? '7 Days' : selectedPeriod === '30d' ? '30 Days' : '90 Days'}`], [''], ['Key Metrics'], ['Metric', 'Value', 'Change'], ...kpiData.map(kpi => [kpi.title, kpi.value.toString(), `${kpi.change.type === 'increase' ? '+' : '-'}${kpi.change.value}%`]), [''], ['Risk Distribution'], ['Category', 'Count', 'Percentage'], ...analyticsData.riskDistribution.map(risk => [risk.label, risk.value.toString(), `${risk.percentage.toFixed(1)}%`]), [''], ['Top Risk Clauses'], ['Clause Type', 'Count'], ...analyticsData.topRisks.map(risk => [risk.clause, risk.count.toString()]), [''], ['Agent Performance'], ['Agent', 'Runs', 'Avg Time'], ...analyticsData.agentUsage.map(agent => [agent.name, agent.runs.toString(), agent.avgTime])];
      const csvContent = csvData.map(row => row.join(',')).join('\n');
      const blob = new Blob([csvContent], {
        type: 'text/csv;charset=utf-8;'
      });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `deeplex-analytics-${selectedPeriod}-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        alert('Analytics data exported successfully!');
      }, 100);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to export data. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <MainLayout backgroundColor="bg-white">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-10">
          <button onClick={() => navigate('/dashboard')} className="mb-4 flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeftIcon size={20} className="mr-2" />
            <span>Back to Dashboard</span>
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Analytics
              </h1>
              <p className="text-gray-600 text-lg">
                Performance metrics and insights across all AI agents
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-white border border-gray-200 rounded-lg p-1 flex shadow-sm">
                {(['7d', '30d', '90d'] as const).map(period => <button key={period} onClick={() => setSelectedPeriod(period)} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${selectedPeriod === period ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}>
                    {period === '7d' ? '7 Days' : period === '30d' ? '30 Days' : '90 Days'}
                  </button>)}
              </div>
              <button onClick={handleExport} disabled={isExporting} className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium">
                <DownloadIcon size={18} className="mr-2" />
                {isExporting ? 'Exporting...' : 'Export'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpiData.map((kpi, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1,
          duration: 0.4
        }} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-600 mb-1">
                    {kpi.title}
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    {kpi.value}
                  </p>
                  <p className="text-xs text-gray-500">{kpi.period}</p>
                </div>
                <div className="flex flex-col items-end">
                  {kpi.icon}
                  <div className={`flex items-center text-sm font-medium mt-2 ${kpi.change.type === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                    {kpi.change.type === 'increase' ? <TrendingUpIcon size={16} className="mr-1" /> : <TrendingDownIcon size={16} className="mr-1" />}
                    {kpi.change.value}%
                  </div>
                </div>
              </div>
            </motion.div>)}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Risk Distribution */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Risk Distribution
              </h3>
              <PieChartIcon size={20} className="text-gray-600" />
            </div>

            <div className="space-y-4">
              {analyticsData.riskDistribution.map((item, index) => <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{
                    backgroundColor: item.color
                  }} />
                      <span className="text-sm font-medium text-gray-900">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {item.value}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div className="h-full rounded-full" style={{
                  backgroundColor: item.color
                }} initial={{
                  width: 0
                }} animate={{
                  width: `${item.percentage}%`
                }} transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.6
                }} />
                  </div>
                </div>)}
            </div>
          </motion.div>

          {/* Risk Trend Line Chart */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Risk Score Trend
              </h3>
              <BarChart3Icon size={20} className="text-gray-600" />
            </div>

            <div className="relative">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto" style={{
              maxHeight: '250px'
            }}>
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map(i => <line key={i} x1={padding.left} y1={padding.top + i * innerHeight / 4} x2={padding.left + innerWidth} y2={padding.top + i * innerHeight / 4} stroke="#E5E7EB" strokeWidth="1" />)}

                {/* Y-axis labels */}
                {[0, 1, 2, 3, 4].map(i => {
                const value = Math.round(maxScore - i * scoreRange / 4);
                return <text key={i} x={padding.left - 10} y={padding.top + i * innerHeight / 4 + 5} textAnchor="end" fontSize="12" fill="#6B7280">
                      {value}
                    </text>;
              })}

                {/* Area gradient fill */}
                <defs>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <motion.path d={areaPath} fill="url(#areaGradient)" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.6,
                duration: 0.6
              }} />

                {/* Line path */}
                <motion.path d={linePath} fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{
                pathLength: 0
              }} animate={{
                pathLength: 1
              }} transition={{
                delay: 0.6,
                duration: 1.2,
                ease: 'easeInOut'
              }} />

                {/* Data points */}
                {trendData.map((point, i) => {
                const x = padding.left + i / (trendData.length - 1) * innerWidth;
                const y = padding.top + innerHeight - (point.score - minScore) / scoreRange * innerHeight;
                return <g key={i}>
                      <motion.circle cx={x} cy={y} r="6" fill="white" stroke="#3B82F6" strokeWidth="3" initial={{
                    scale: 0
                  }} animate={{
                    scale: 1
                  }} transition={{
                    delay: 0.8 + i * 0.1,
                    duration: 0.3
                  }} onMouseEnter={() => setHoveredPoint(i)} onMouseLeave={() => setHoveredPoint(null)} className="cursor-pointer" />
                      {hoveredPoint === i && <g>
                          <rect x={x - 25} y={y - 35} width="50" height="25" rx="4" fill="#1F2937" />
                          <text x={x} y={y - 18} textAnchor="middle" fontSize="12" fill="white" fontWeight="600">
                            {point.score}
                          </text>
                        </g>}
                    </g>;
              })}

                {/* X-axis labels */}
                {trendData.map((point, i) => {
                const x = padding.left + i / (trendData.length - 1) * innerWidth;
                return <text key={i} x={x} y={chartHeight - 10} textAnchor="middle" fontSize="12" fill="#6B7280">
                      {point.month}
                    </text>;
              })}
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Risk Clauses */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Top Risk Clauses
              </h3>
              <AlertTriangleIcon size={20} className="text-gray-600" />
            </div>

            <div className="space-y-4">
              {analyticsData.topRisks.map((risk, index) => <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      {risk.clause}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {risk.count}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-red-500 rounded-full" initial={{
                  width: 0
                }} animate={{
                  width: `${risk.count / maxRiskCount * 100}%`
                }} transition={{
                  delay: 0.7 + index * 0.1,
                  duration: 0.5
                }} />
                  </div>
                </div>)}
            </div>
          </motion.div>

          {/* Agent Usage */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Agent Performance
              </h3>
              <ActivityIcon size={20} className="text-gray-600" />
            </div>

            <div className="space-y-4">
              {analyticsData.agentUsage.map((agent, index) => <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        {agent.name}
                      </p>
                      <div className="flex items-center space-x-4">
                        <span className="text-xs text-gray-600 flex items-center">
                          <FileTextIcon size={12} className="mr-1" />
                          {agent.runs} runs
                        </span>
                        <span className="text-xs text-gray-600 flex items-center">
                          <ClockIcon size={12} className="mr-1" />
                          {agent.avgTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </MainLayout>;
}