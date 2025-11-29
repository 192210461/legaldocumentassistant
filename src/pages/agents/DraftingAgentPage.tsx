import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../../components/layout/MainLayout';
import { PenToolIcon, ArrowLeftIcon, DownloadIcon, ShareIcon, ClockIcon, CheckCircleIcon, LightbulbIcon, FileTextIcon, AlertCircleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function DraftingAgentPage() {
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
    }, 400);
    return () => clearInterval(interval);
  }, []);
  const improvements = [{
    id: 1,
    section: 'Payment Terms',
    original: 'Payment shall be made within a reasonable time after invoice receipt.',
    improved: 'The Client shall remit payment within thirty (30) calendar days from the date of invoice receipt. Payment shall be made via wire transfer or ACH to the account specified in writing by the Contractor.',
    reasoning: 'Replaced vague "reasonable time" with specific 30-day timeframe. Added clear payment methods to prevent disputes.',
    impact: 'high',
    confidence: 96
  }, {
    id: 2,
    section: 'Termination Clause',
    original: 'Either party can terminate this agreement at any time.',
    improved: 'Either party may terminate this Agreement upon sixty (60) days prior written notice to the other party. Upon termination, all outstanding payments shall become immediately due and payable, and both parties shall return or destroy all Confidential Information within fifteen (15) days.',
    reasoning: 'Added notice period, payment obligations upon termination, and confidentiality requirements for proper contract closure.',
    impact: 'high',
    confidence: 94
  }, {
    id: 3,
    section: 'Liability Limitation',
    original: 'Neither party shall be liable for any damages arising from this agreement.',
    improved: 'Except in cases of gross negligence or willful misconduct, neither party shall be liable for any indirect, incidental, special, or consequential damages arising out of or related to this Agreement. The total aggregate liability of either party shall not exceed the total fees paid under this Agreement in the twelve (12) months preceding the claim.',
    reasoning: 'Added exceptions for gross negligence, specified types of excluded damages, and included a liability cap for financial predictability.',
    impact: 'high',
    confidence: 95
  }, {
    id: 4,
    section: 'Intellectual Property',
    original: 'All work product belongs to the client.',
    improved: 'Upon full payment of all fees due hereunder, all right, title, and interest in and to the Work Product, including all intellectual property rights therein, shall vest exclusively in the Client. The Contractor hereby assigns and agrees to assign all such rights to the Client and shall execute any documents reasonably necessary to effect such assignment.',
    reasoning: 'Clarified IP transfer timing (upon payment), added comprehensive assignment language, and included execution requirements for proper documentation.',
    impact: 'medium',
    confidence: 93
  }, {
    id: 5,
    section: 'Confidentiality',
    original: 'Both parties agree to keep information confidential.',
    improved: 'Each party agrees to maintain in strict confidence all Confidential Information disclosed by the other party, using the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care. This obligation shall survive for a period of five (5) years following the termination or expiration of this Agreement.',
    reasoning: 'Added standard of care requirement, defined protection level, and specified survival period for confidentiality obligations.',
    impact: 'medium',
    confidence: 92
  }];
  const stats = {
    totalImprovements: 5,
    sectionsReviewed: 12,
    avgConfidence: 94,
    processingTime: '3m 45s'
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
              <div className="p-3 rounded-lg bg-purple-100 border border-purple-300 mr-4">
                <PenToolIcon size={32} className="text-purple-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Drafting Agent
                </h1>
                <p className="text-gray-600">
                  Generate and improve contract language with AI assistance
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Drafting Improvements
              </h2>
              <div className="flex items-center justify-center py-12">
                <div className="text-center max-w-md">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                      <circle cx="64" cy="64" r="56" stroke="#9333EA" strokeWidth="8" fill="none" strokeDasharray={`${2 * Math.PI * 56}`} strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`} strokeLinecap="round" className="transition-all duration-300" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-600">
                        {progress}%
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-900 text-lg mb-2">
                    Analyzing and improving contract language...
                  </p>
                  <p className="text-gray-600 text-sm">
                    Generating enhanced clauses and recommendations
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
              <div className="p-3 rounded-lg bg-purple-100 border border-purple-300 mr-4">
                <PenToolIcon size={32} className="text-purple-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Drafting Improvements Report
                </h1>
                <p className="text-gray-600">
                  Employment-Contract-Template.docx
                </p>
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
                <span className="text-gray-600 text-sm">Improvements</span>
                <LightbulbIcon size={20} className="text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.totalImprovements}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Sections Reviewed</span>
                <FileTextIcon size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.sectionsReviewed}
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

          {/* Improvements */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Suggested Improvements
            </h2>
            <div className="space-y-6">
              {improvements.map((item, index) => <motion.div key={item.id} initial={{
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
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full border border-purple-300">
                          {item.section}
                        </span>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${item.impact === 'high' ? 'bg-red-100 text-red-700 border border-red-300' : 'bg-yellow-100 text-yellow-700 border border-yellow-300'}`}>
                          {item.impact.toUpperCase()} IMPACT
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">
                        Confidence
                      </div>
                      <div className="text-2xl font-bold text-purple-600">
                        {item.confidence}%
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-xs font-semibold text-red-700 mb-2">
                        ORIGINAL
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {item.original}
                      </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-xs font-semibold text-green-700 mb-2">
                        IMPROVED
                      </p>
                      <p className="text-gray-900 leading-relaxed">
                        {item.improved}
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-xs font-semibold text-blue-700 mb-2">
                        💡 REASONING
                      </p>
                      <p className="text-gray-700">{item.reasoning}</p>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>

          {/* Summary */}
          <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Drafting Summary
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon size={20} className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium">
                    {stats.totalImprovements} improvements identified
                  </p>
                  <p className="text-gray-600 text-sm">
                    Enhanced clarity, specificity, and legal enforceability
                    across key sections
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircleIcon size={20} className="text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium">
                    3 high-impact improvements recommended
                  </p>
                  <p className="text-gray-600 text-sm">
                    Payment terms, termination clause, and liability limitation
                    require immediate attention
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <LightbulbIcon size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium">
                    All improvements maintain legal compliance
                  </p>
                  <p className="text-gray-600 text-sm">
                    Suggested changes follow industry best practices and legal
                    standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>;
}