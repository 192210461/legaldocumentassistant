import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../../components/layout/MainLayout';
import { FileTextIcon, ArrowLeftIcon, CheckCircleIcon, DownloadIcon, ShareIcon, ClockIcon, TagIcon, AlertCircleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function ClauseExtractionPage() {
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
    }, 300);
    return () => clearInterval(interval);
  }, []);
  const extractedClauses = [{
    id: 1,
    category: 'Payment Terms',
    title: 'Payment Schedule',
    content: 'The Client shall pay the Contractor within thirty (30) days of receipt of invoice. Payment shall be made via wire transfer to the account specified by the Contractor.',
    confidence: 98,
    location: 'Section 3.1, Page 4',
    tags: ['Payment', 'Invoice', 'Timeline'],
    risk: 'low'
  }, {
    id: 2,
    category: 'Confidentiality',
    title: 'Non-Disclosure Obligation',
    content: 'Both parties agree to maintain confidentiality of all proprietary information disclosed during the term of this agreement and for a period of five (5) years thereafter.',
    confidence: 95,
    location: 'Section 7.2, Page 12',
    tags: ['Confidential', 'Proprietary', 'Duration'],
    risk: 'low'
  }, {
    id: 3,
    category: 'Termination',
    title: 'Termination for Convenience',
    content: 'Either party may terminate this agreement with sixty (60) days written notice. Upon termination, all outstanding payments shall become immediately due.',
    confidence: 92,
    location: 'Section 9.1, Page 15',
    tags: ['Termination', 'Notice Period', 'Payment'],
    risk: 'medium'
  }, {
    id: 4,
    category: 'Liability',
    title: 'Limitation of Liability',
    content: 'In no event shall either party be liable for any indirect, incidental, special, or consequential damages exceeding the total fees paid under this agreement.',
    confidence: 96,
    location: 'Section 11.3, Page 18',
    tags: ['Liability', 'Damages', 'Cap'],
    risk: 'medium'
  }, {
    id: 5,
    category: 'Intellectual Property',
    title: 'IP Ownership',
    content: 'All intellectual property rights in deliverables created under this agreement shall vest in the Client upon full payment of all fees.',
    confidence: 94,
    location: 'Section 5.4, Page 8',
    tags: ['IP Rights', 'Ownership', 'Deliverables'],
    risk: 'low'
  }, {
    id: 6,
    category: 'Indemnification',
    title: 'Mutual Indemnification',
    content: 'Each party shall indemnify and hold harmless the other party from any claims arising from breach of this agreement or negligent acts.',
    confidence: 91,
    location: 'Section 10.2, Page 17',
    tags: ['Indemnity', 'Claims', 'Breach'],
    risk: 'high'
  }];
  const stats = {
    totalClauses: 6,
    categories: 6,
    avgConfidence: 94,
    processingTime: '2m 34s'
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
              <div className="p-3 rounded-lg bg-blue-100 border border-blue-300 mr-4">
                <FileTextIcon size={32} className="text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Clause Extraction Agent
                </h1>
                <p className="text-gray-600">
                  Extract and categorize contract clauses with structured
                  metadata
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Analysis in Progress
              </h2>
              <div className="flex items-center justify-center py-12">
                <div className="text-center max-w-md">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                      <circle cx="64" cy="64" r="56" stroke="#3B82F6" strokeWidth="8" fill="none" strokeDasharray={`${2 * Math.PI * 56}`} strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`} strokeLinecap="round" className="transition-all duration-300" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">
                        {progress}%
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-900 text-lg mb-2">
                    Analyzing your document...
                  </p>
                  <p className="text-gray-600 text-sm">
                    Extracting clauses and categorizing content
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
          {/* Header */}
          <button onClick={() => navigate('/agent-selection')} className="mb-6 flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeftIcon size={20} className="mr-2" />
            Back to Agent Selection
          </button>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-blue-100 border border-blue-300 mr-4">
                <FileTextIcon size={32} className="text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Clause Extraction Report
                </h1>
                <p className="text-gray-600">NDA-Acme-Corp-2023.pdf</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium">
                <ShareIcon size={18} className="mr-2" />
                Share
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                <DownloadIcon size={18} className="mr-2" />
                Download Report
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Total Clauses</span>
                <FileTextIcon size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.totalClauses}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Categories</span>
                <TagIcon size={20} className="text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.categories}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Avg. Confidence</span>
                <CheckCircleIcon size={20} className="text-green-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.avgConfidence}%
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

          {/* Extracted Clauses */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Extracted Clauses
            </h2>
            <div className="space-y-6">
              {extractedClauses.map((clause, index) => <motion.div key={clause.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full border border-blue-300">
                          {clause.category}
                        </span>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${clause.risk === 'low' ? 'bg-green-100 text-green-700 border border-green-300' : clause.risk === 'medium' ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' : 'bg-red-100 text-red-700 border border-red-300'}`}>
                          {clause.risk.toUpperCase()} RISK
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {clause.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">
                        Confidence
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        {clause.confidence}%
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {clause.content}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">
                        📍 {clause.location}
                      </span>
                      <div className="flex space-x-2">
                        {clause.tags.map((tag, idx) => <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded border border-gray-200">
                            {tag}
                          </span>)}
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>

          {/* Summary Section */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Analysis Summary
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon size={20} className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium">
                    Successfully extracted {stats.totalClauses} clauses
                  </p>
                  <p className="text-gray-600 text-sm">
                    All major contract sections have been identified and
                    categorized
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircleIcon size={20} className="text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium">
                    1 high-risk clause identified
                  </p>
                  <p className="text-gray-600 text-sm">
                    Review the indemnification clause for potential liability
                    concerns
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium">
                    High confidence extraction
                  </p>
                  <p className="text-gray-600 text-sm">
                    Average confidence score of {stats.avgConfidence}% across
                    all clauses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>;
}