import React from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../components/layout/MainLayout';
import { useNavigate } from 'react-router-dom';
import { DownloadIcon, FileTextIcon, CalendarIcon, CheckCircleIcon, ClockIcon, XCircleIcon, ArrowLeftIcon } from 'lucide-react';
export function ExportHistoryPage() {
  const navigate = useNavigate();
  const exports = [{
    id: 1,
    fileName: 'NDA-Acme-Corp-2023-Report.pdf',
    originalDocument: 'NDA-Acme-Corp-2023.pdf',
    agent: 'Clause Extraction',
    exportDate: 'Today, 10:15 AM',
    status: 'completed',
    fileSize: '2.4 MB',
    format: 'PDF'
  }, {
    id: 2,
    fileName: 'Service-Agreement-Risk-Analysis.pdf',
    originalDocument: 'Service-Agreement-XYZ-Inc.docx',
    agent: 'Risk Detection',
    exportDate: 'Yesterday, 05:30 PM',
    status: 'completed',
    fileSize: '3.1 MB',
    format: 'PDF'
  }, {
    id: 3,
    fileName: 'Employment-Contract-Improvements.docx',
    originalDocument: 'Employment-Contract-Template.docx',
    agent: 'Drafting Agent',
    exportDate: 'Today, 11:45 AM',
    status: 'processing',
    fileSize: '1.8 MB',
    format: 'DOCX'
  }, {
    id: 4,
    fileName: 'Master-Services-Agreement-Summary.pdf',
    originalDocument: 'Master-Services-Agreement.pdf',
    agent: 'Summary Agent',
    exportDate: '3 days ago',
    status: 'completed',
    fileSize: '1.2 MB',
    format: 'PDF'
  }, {
    id: 5,
    fileName: 'Partnership-Agreement-Clauses.pdf',
    originalDocument: 'Partnership-Agreement-2024.pdf',
    agent: 'Clause Extraction',
    exportDate: '5 days ago',
    status: 'completed',
    fileSize: '2.8 MB',
    format: 'PDF'
  }, {
    id: 6,
    fileName: 'Vendor-Contract-Risk-Report.pdf',
    originalDocument: 'Vendor-Contract-ABC-Corp.docx',
    agent: 'Risk Detection',
    exportDate: '1 week ago',
    status: 'failed',
    fileSize: '0 MB',
    format: 'PDF'
  }];
  const stats = {
    total: exports.length,
    completed: exports.filter(e => e.status === 'completed').length,
    processing: exports.filter(e => e.status === 'processing').length,
    failed: exports.filter(e => e.status === 'failed').length
  };
  const handleDownload = (exportItem: any) => {
    console.log('Downloading:', exportItem.fileName);
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon size={20} className="text-green-600" />;
      case 'processing':
        return <ClockIcon size={20} className="text-blue-600" />;
      case 'failed':
        return <XCircleIcon size={20} className="text-red-600" />;
      default:
        return null;
    }
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 border border-green-300">
            Completed
          </span>;
      case 'processing':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 border border-blue-300">
            Processing
          </span>;
      case 'failed':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700 border border-red-300">
            Failed
          </span>;
      default:
        return null;
    }
  };
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
          {/* Back Button */}
          <button onClick={() => navigate('/dashboard')} className="mb-6 flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeftIcon size={20} className="mr-2" />
            Back to Dashboard
          </button>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Export History
            </h1>
            <p className="text-gray-600 text-lg">
              View and download all your exported reports
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Total Exports</span>
                <FileTextIcon size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Completed</span>
                <CheckCircleIcon size={20} className="text-green-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.completed}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Processing</span>
                <ClockIcon size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.processing}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Failed</span>
                <XCircleIcon size={20} className="text-red-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stats.failed}</p>
            </div>
          </div>

          {/* Export History List */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Recent Exports
            </h2>
            <div className="space-y-4">
              {exports.map((exportItem, index) => <motion.div key={exportItem.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.05
            }} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        {getStatusIcon(exportItem.status)}
                        <h3 className="text-lg font-semibold text-gray-900">
                          {exportItem.fileName}
                        </h3>
                        {getStatusBadge(exportItem.status)}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500 mb-1">
                            Original Document
                          </p>
                          <p className="text-gray-900">
                            {exportItem.originalDocument}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 mb-1">Agent Used</p>
                          <p className="text-gray-900">{exportItem.agent}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 mb-1">Export Date</p>
                          <p className="text-gray-900 flex items-center">
                            <CalendarIcon size={14} className="mr-1" />
                            {exportItem.exportDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 mb-1">File Size</p>
                          <p className="text-gray-900">
                            {exportItem.fileSize} • {exportItem.format}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      {exportItem.status === 'completed' && <button onClick={() => handleDownload(exportItem)} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                          <DownloadIcon size={16} className="mr-2" />
                          Download
                        </button>}
                      {exportItem.status === 'processing' && <button disabled className="flex items-center px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium text-sm">
                          <ClockIcon size={16} className="mr-2" />
                          Processing
                        </button>}
                      {exportItem.status === 'failed' && <button className="flex items-center px-4 py-2 bg-red-100 text-red-700 border border-red-300 rounded-lg hover:bg-red-200 transition-colors font-medium text-sm">
                          <XCircleIcon size={16} className="mr-2" />
                          Retry
                        </button>}
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>;
}