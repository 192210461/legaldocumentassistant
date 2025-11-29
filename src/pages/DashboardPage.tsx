import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { AIChatWidget } from '../components/common/AIChatWidget';
import { UploadIcon, FileTextIcon, AlertTriangleIcon, TrendingUpIcon, ActivityIcon, DownloadIcon, EyeIcon } from 'lucide-react';
export function DashboardPage() {
  const navigate = useNavigate();
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600 text-lg">
            Welcome back! Here's an overview of your legal document analysis.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex justify-between items-center mb-10">
          <div className="flex space-x-4">
            <button onClick={() => navigate('/reports')} className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium">
              <FileTextIcon size={18} className="mr-2" />
              View All Reports
            </button>
            <button onClick={() => navigate('/upload-document')} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              <UploadIcon size={18} className="mr-2" />
              Upload Document
            </button>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-gray-500">
              Last updated: Today at 10:45 AM
            </span>
            <button className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
              Refresh
            </button>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-600 mb-1">
                  Documents Processed
                </h3>
                <p className="text-3xl font-bold text-gray-900 mb-1">187</p>
                <p className="text-xs text-gray-500">last month</p>
              </div>
              <div className="flex flex-col items-end">
                <FileTextIcon size={24} className="text-blue-600 mb-2" />
                <div className="flex items-center text-sm font-medium text-green-600">
                  <TrendingUpIcon size={16} className="mr-1" />
                  12%
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-600 mb-1">
                  Avg. Compliance Score
                </h3>
                <p className="text-3xl font-bold text-gray-900 mb-1">78%</p>
                <p className="text-xs text-gray-500">last month</p>
              </div>
              <div className="flex flex-col items-end">
                <TrendingUpIcon size={24} className="text-green-600 mb-2" />
                <div className="flex items-center text-sm font-medium text-green-600">
                  <TrendingUpIcon size={16} className="mr-1" />
                  5%
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-600 mb-1">
                  High-Risk Items
                </h3>
                <p className="text-3xl font-bold text-gray-900 mb-1">23</p>
                <p className="text-xs text-gray-500">last month</p>
              </div>
              <div className="flex flex-col items-end">
                <AlertTriangleIcon size={24} className="text-yellow-600 mb-2" />
                <div className="flex items-center text-sm font-medium text-red-600">
                  <TrendingUpIcon size={16} className="mr-1 rotate-180" />
                  8%
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-600 mb-1">
                  Team Activity
                </h3>
                <p className="text-3xl font-bold text-gray-900 mb-1">42</p>
                <p className="text-xs text-gray-500">last week</p>
              </div>
              <div className="flex flex-col items-end">
                <ActivityIcon size={24} className="text-purple-600 mb-2" />
                <div className="flex items-center text-sm font-medium text-green-600">
                  <TrendingUpIcon size={16} className="mr-1" />
                  15%
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Agents Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">AI Agents</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Clause Extraction
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Last document: NDA-Acme-Corp-2023.pdf
                  </p>
                  <p className="text-xs text-gray-500">
                    Today at 09:30 AM • 42 documents
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700 border border-gray-300">
                  Idle
                </span>
              </div>
              <button onClick={() => navigate('/agents/clause-extraction')} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                Open Agent
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Risk Detection
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Last document: Service-Agreement-XYZ-Inc.docx
                  </p>
                  <p className="text-xs text-gray-500">
                    Yesterday at 04:15 PM • 38 documents
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 border border-green-300">
                  Completed
                </span>
              </div>
              <button onClick={() => navigate('/agents/risk-detection')} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                Open Agent
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Drafting Agent
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Last document: Employment-Contract-Template.docx
                  </p>
                  <p className="text-xs text-gray-500">
                    In progress... • 21 documents
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 border border-blue-300">
                  Processing
                </span>
              </div>
              <button onClick={() => navigate('/agents/drafting')} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                Open Agent
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Summary Agent
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Last document: Master-Services-Agreement.pdf
                  </p>
                  <p className="text-xs text-gray-500">
                    3 days ago • 86 documents
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700 border border-gray-300">
                  Idle
                </span>
              </div>
              <button onClick={() => navigate('/agents/summary')} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                Open Agent
              </button>
            </div>
          </div>
        </motion.div>

        {/* Recent Reports Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Reports</h2>
            <button onClick={() => navigate('/reports')} className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    NDA-Acme-Corp-2023.pdf
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Clause Extraction
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>12 clauses</span>
                    <span>•</span>
                    <span>98% confidence</span>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 border border-green-300">
                  Completed
                </span>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => navigate('/agents/clause-extraction')} className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm flex-1">
                  <EyeIcon size={14} className="mr-2" />
                  View
                </button>
                <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex-1">
                  <DownloadIcon size={14} className="mr-2" />
                  Download
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Service-Agreement-XYZ-Inc.docx
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">Risk Detection</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>5 risks</span>
                    <span>•</span>
                    <span>Score: 68</span>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 border border-green-300">
                  Completed
                </span>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => navigate('/agents/risk-detection')} className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm flex-1">
                  <EyeIcon size={14} className="mr-2" />
                  View
                </button>
                <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex-1">
                  <DownloadIcon size={14} className="mr-2" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Recent Activity
            </h2>
            <button onClick={() => navigate('/export-history')} className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
              View Export History →
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr className="border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Document
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Agent
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      Employment-Contract-Template.docx
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Drafting Agent
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 border border-blue-300">
                        Processing
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      deep.user@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Today, 11:30 AM
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      Service-Agreement-XYZ-Inc.docx
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Risk Detection Agent
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 border border-green-300">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      deep.user@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Yesterday, 04:15 PM
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      NDA-Acme-Corp-2023.pdf
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Clause Extraction Agent
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 border border-green-300">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      sarah.legal@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Today, 09:30 AM
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AIChatWidget />
    </MainLayout>;
}