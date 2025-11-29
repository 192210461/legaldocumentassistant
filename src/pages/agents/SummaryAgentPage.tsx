import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../../components/layout/MainLayout';
import { BookOpenIcon, ArrowLeftIcon, DownloadIcon, ShareIcon, ClockIcon, CheckCircleIcon, FileTextIcon, DollarSignIcon, CalendarIcon, UsersIcon, AlertTriangleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function SummaryAgentPage() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsProcessing(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 250);
    return () => clearInterval(interval);
  }, []);
  const summary = {
    executiveSummary: 'This Master Services Agreement establishes a comprehensive framework for professional services between TechCorp Solutions Inc. and Global Enterprises Ltd. The agreement covers software development, consulting, and technical support services with a total contract value of $2.4M over 24 months. Key provisions include detailed payment terms, intellectual property rights, confidentiality obligations, and termination conditions.',
    keyPoints: [{
      category: 'Parties',
      icon: <UsersIcon size={20} className="text-blue-600" />,
      content: 'Service Provider: TechCorp Solutions Inc. | Client: Global Enterprises Ltd.'
    }, {
      category: 'Contract Value',
      icon: <DollarSignIcon size={20} className="text-green-600" />,
      content: '$2,400,000 total contract value | $100,000 monthly retainer + project-based fees'
    }, {
      category: 'Term',
      icon: <CalendarIcon size={20} className="text-purple-600" />,
      content: '24 months (January 1, 2024 - December 31, 2025) | Auto-renewal unless terminated with 90-day notice'
    }, {
      category: 'Services',
      icon: <FileTextIcon size={20} className="text-cyan-600" />,
      content: 'Custom software development, cloud infrastructure consulting, 24/7 technical support, security audits'
    }],
    obligations: {
      provider: ['Deliver services according to agreed specifications and timelines', 'Maintain professional liability insurance of $5M minimum', 'Provide monthly progress reports and quarterly business reviews', 'Ensure all work meets industry standards and best practices', 'Maintain confidentiality of all client information'],
      client: ['Pay invoices within 30 days of receipt', 'Provide necessary access to systems and information', 'Designate a primary point of contact for project coordination', 'Review and approve deliverables within 10 business days', 'Maintain confidentiality of provider methodologies']
    },
    financialTerms: [{
      term: 'Monthly Retainer',
      amount: '$100,000',
      description: 'Base fee for ongoing services and support'
    }, {
      term: 'Project Fees',
      amount: 'Variable',
      description: 'Based on scope, complexity, and resource requirements'
    }, {
      term: 'Payment Terms',
      amount: 'Net 30',
      description: 'Payment due within 30 days of invoice date'
    }, {
      term: 'Late Fees',
      amount: '1.5% monthly',
      description: 'Applied to overdue balances after 30 days'
    }],
    criticalDates: [{
      date: 'January 1, 2024',
      event: 'Contract Effective Date',
      importance: 'high'
    }, {
      date: 'March 31, 2024',
      event: 'First Quarterly Review',
      importance: 'medium'
    }, {
      date: 'October 3, 2025',
      event: 'Renewal Notice Deadline',
      importance: 'high'
    }, {
      date: 'December 31, 2025',
      event: 'Contract Expiration',
      importance: 'high'
    }],
    keyRisks: ['Unlimited liability exposure in indemnification clause', 'Broad IP assignment may include pre-existing technology', 'Short 60-day termination notice may be insufficient', 'No cap on late payment penalties']
  };
  const stats = {
    totalPages: 42,
    keyClauses: 18,
    criticalDates: 4,
    processingTime: '1m 52s'
  };
  if (isProcessing) {
    return <MainLayout backgroundColor="bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <button onClick={() => navigate('/agent-selection')} className="mb-6 flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeftIcon size={20} className="mr-2" />
              Back to Agent Selection
            </button>

            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-green-100 border border-green-300 mr-4">
                <BookOpenIcon size={32} className="text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Summary Agent
                </h1>
                <p className="text-gray-600">
                  Create concise summaries of complex legal documents
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Creating Summary
              </h2>
              <div className="flex items-center justify-center py-12">
                <div className="text-center max-w-md">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                      <circle cx="64" cy="64" r="56" stroke="#10B981" strokeWidth="8" fill="none" strokeDasharray={`${2 * Math.PI * 56}`} strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`} strokeLinecap="round" className="transition-all duration-300" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">
                        {progress}%
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-900 text-lg mb-2">
                    Analyzing and summarizing document...
                  </p>
                  <p className="text-gray-600 text-sm">
                    Extracting key information and critical details
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </MainLayout>;
  }
  return <MainLayout backgroundColor="bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <button onClick={() => navigate('/agent-selection')} className="mb-6 flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeftIcon size={20} className="mr-2" />
            Back to Agent Selection
          </button>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-green-100 border border-green-300 mr-4">
                <BookOpenIcon size={32} className="text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Document Summary Report
                </h1>
                <p className="text-gray-600">Master-Services-Agreement.pdf</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium">
                <ShareIcon size={18} className="mr-2" />
                Share
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                <DownloadIcon size={18} className="mr-2" />
                Download Summary
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Total Pages</span>
                <FileTextIcon size={20} className="text-green-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.totalPages}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Key Clauses</span>
                <CheckCircleIcon size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.keyClauses}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Critical Dates</span>
                <CalendarIcon size={20} className="text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.criticalDates}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Processing Time</span>
                <ClockIcon size={20} className="text-yellow-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.processingTime}
              </p>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Executive Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {summary.executiveSummary}
            </p>
          </div>

          {/* Key Points */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Points
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {summary.keyPoints.map((point, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    {point.icon}
                    <h3 className="font-semibold text-gray-900">
                      {point.category}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">{point.content}</p>
                </motion.div>)}
            </div>
          </div>

          {/* Obligations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Provider Obligations
              </h2>
              <ul className="space-y-3">
                {summary.obligations.provider.map((obligation, index) => <li key={index} className="flex items-start space-x-3">
                    <CheckCircleIcon size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{obligation}</span>
                  </li>)}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Client Obligations
              </h2>
              <ul className="space-y-3">
                {summary.obligations.client.map((obligation, index) => <li key={index} className="flex items-start space-x-3">
                    <CheckCircleIcon size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{obligation}</span>
                  </li>)}
              </ul>
            </div>
          </div>

          {/* Financial Terms */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Financial Terms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {summary.financialTerms.map((term, index) => <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{term.term}</h3>
                    <span className="text-green-600 font-bold text-lg">
                      {term.amount}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{term.description}</p>
                </div>)}
            </div>
          </div>

          {/* Critical Dates */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Critical Dates
            </h2>
            <div className="space-y-3">
              {summary.criticalDates.map((item, index) => <div key={index} className={`flex items-center justify-between p-4 rounded-lg border ${item.importance === 'high' ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'}`}>
                  <div className="flex items-center space-x-4">
                    <CalendarIcon size={20} className={item.importance === 'high' ? 'text-red-600' : 'text-yellow-600'} />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.event}
                      </p>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${item.importance === 'high' ? 'bg-red-100 text-red-700 border border-red-300' : 'bg-yellow-100 text-yellow-700 border border-yellow-300'}`}>
                    {item.importance.toUpperCase()}
                  </span>
                </div>)}
            </div>
          </div>

          {/* Key Risks */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Risks Identified
            </h2>
            <div className="space-y-3">
              {summary.keyRisks.map((risk, index) => <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertTriangleIcon size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-900">{risk}</p>
                </div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>;
}