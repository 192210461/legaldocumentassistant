import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../../components/layout/MainLayout';
import { AlertTriangleIcon, ArrowLeftIcon, DownloadIcon, ShareIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function RiskDetectionPage() {
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
  const risks = [{
    id: 1,
    severity: 'high',
    title: 'Unlimited Liability Exposure',
    description: 'The indemnification clause contains no cap on liability, exposing the company to potentially unlimited financial risk.',
    location: 'Section 10.2, Page 17',
    recommendation: 'Add a liability cap equal to the total contract value or annual fees.',
    impact: 'Financial'
  }, {
    id: 2,
    severity: 'high',
    title: 'Broad IP Assignment',
    description: 'IP assignment clause is overly broad and may include pre-existing intellectual property.',
    location: 'Section 5.4, Page 8',
    recommendation: 'Clarify that only IP created specifically for this project is assigned.',
    impact: 'Legal'
  }, {
    id: 3,
    severity: 'medium',
    title: 'Short Termination Notice',
    description: 'The 60-day termination notice period may be insufficient for project transition.',
    location: 'Section 9.1, Page 15',
    recommendation: 'Negotiate for 90-day notice period with transition assistance clause.',
    impact: 'Operational'
  }, {
    id: 4,
    severity: 'medium',
    title: 'Vague Payment Terms',
    description: 'Payment terms lack specific milestones and deliverable acceptance criteria.',
    location: 'Section 3.1, Page 4',
    recommendation: 'Define clear milestones with acceptance criteria for each payment.',
    impact: 'Financial'
  }, {
    id: 5,
    severity: 'low',
    title: 'Standard Confidentiality Period',
    description: 'Five-year confidentiality period is standard but may be insufficient for highly sensitive information.',
    location: 'Section 7.2, Page 12',
    recommendation: 'Consider extending to 7-10 years for trade secrets.',
    impact: 'Compliance'
  }];
  const riskScore = 68;
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
              <div className="p-3 rounded-lg bg-red-100 border border-red-300 mr-4">
                <AlertTriangleIcon size={32} className="text-red-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Risk Detection Agent
                </h1>
                <p className="text-gray-600">
                  Identify legal risks and compliance issues within contracts
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Risk Analysis in Progress
              </h2>
              <div className="flex items-center justify-center py-12">
                <div className="text-center max-w-md">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                      <circle cx="64" cy="64" r="56" stroke="#EF4444" strokeWidth="8" fill="none" strokeDasharray={`${2 * Math.PI * 56}`} strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`} strokeLinecap="round" className="transition-all duration-300" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-red-600">
                        {progress}%
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-900 text-lg mb-2">
                    Scanning for potential risks...
                  </p>
                  <p className="text-gray-600 text-sm">
                    Analyzing contract for legal and compliance issues
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
              <div className="p-3 rounded-lg bg-red-100 border border-red-300 mr-4">
                <AlertTriangleIcon size={32} className="text-red-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Risk Detection Report
                </h1>
                <p className="text-gray-600">Service-Agreement-XYZ-Inc.docx</p>
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

          {/* Risk Score */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Overall Risk Score
                </h2>
                <p className="text-gray-600">
                  Based on {risks.length} identified risks
                </p>
              </div>
              <div className="text-center">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                    <circle cx="64" cy="64" r="56" stroke="#EF4444" strokeWidth="8" fill="none" strokeDasharray={`${2 * Math.PI * 56}`} strokeDashoffset={`${2 * Math.PI * 56 * (1 - riskScore / 100)}`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-red-600">
                      {riskScore}
                    </span>
                    <span className="text-xs text-gray-600">MODERATE</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-3xl font-bold text-red-600">2</p>
                <p className="text-sm text-gray-600">High Risk</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-3xl font-bold text-yellow-600">2</p>
                <p className="text-sm text-gray-600">Medium Risk</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-3xl font-bold text-green-600">1</p>
                <p className="text-sm text-gray-600">Low Risk</p>
              </div>
            </div>
          </div>

          {/* Risk Items */}
          <div className="space-y-6">
            {risks.map((risk, index) => <motion.div key={risk.id} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`p-2 rounded-lg ${risk.severity === 'high' ? 'bg-red-100 border border-red-300' : risk.severity === 'medium' ? 'bg-yellow-100 border border-yellow-300' : 'bg-green-100 border border-green-300'}`}>
                      <AlertTriangleIcon size={24} className={risk.severity === 'high' ? 'text-red-600' : risk.severity === 'medium' ? 'text-yellow-600' : 'text-green-600'} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {risk.title}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${risk.severity === 'high' ? 'bg-red-100 text-red-700 border border-red-300' : risk.severity === 'medium' ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' : 'bg-green-100 text-green-700 border border-green-300'}`}>
                          {risk.severity.toUpperCase()}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200">
                          {risk.impact}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{risk.description}</p>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-3">
                        <p className="text-sm text-gray-600 mb-1">
                          📍 Location
                        </p>
                        <p className="text-gray-900">{risk.location}</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-700 mb-1">
                          💡 Recommendation
                        </p>
                        <p className="text-gray-900">{risk.recommendation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </MainLayout>;
}