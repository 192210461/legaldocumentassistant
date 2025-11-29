import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../components/layout/MainLayout';
import { useNavigate } from 'react-router-dom';
import { FileTextIcon, DownloadIcon, EyeIcon, CalendarIcon, FilterIcon, SearchIcon, TrendingUpIcon, CheckCircleIcon } from 'lucide-react';
export function ReportsPage() {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const reports = [{
    id: 1,
    title: 'NDA-Acme-Corp-2023.pdf',
    agent: 'Clause Extraction',
    status: 'completed',
    date: 'Today, 09:30 AM',
    user: 'sarah.legal@example.com',
    clauses: 12,
    confidence: 98,
    type: 'clause-extraction'
  }, {
    id: 2,
    title: 'Service-Agreement-XYZ-Inc.docx',
    agent: 'Risk Detection',
    status: 'completed',
    date: 'Yesterday, 04:15 PM',
    user: 'deep.user@example.com',
    risks: 5,
    riskScore: 68,
    type: 'risk-detection'
  }, {
    id: 3,
    title: 'Employment-Contract-Template.docx',
    agent: 'Drafting Agent',
    status: 'processing',
    date: 'Today, 11:30 AM',
    user: 'deep.user@example.com',
    improvements: 5,
    type: 'drafting'
  }, {
    id: 4,
    title: 'Master-Services-Agreement.pdf',
    agent: 'Summary Agent',
    status: 'completed',
    date: '3 days ago',
    user: 'john.doe@example.com',
    pages: 42,
    type: 'summary'
  }, {
    id: 5,
    title: 'Partnership-Agreement-2024.pdf',
    agent: 'Clause Extraction',
    status: 'completed',
    date: '5 days ago',
    user: 'deep.user@example.com',
    clauses: 18,
    confidence: 95,
    type: 'clause-extraction'
  }, {
    id: 6,
    title: 'Vendor-Contract-ABC-Corp.docx',
    agent: 'Risk Detection',
    status: 'completed',
    date: '1 week ago',
    user: 'sarah.legal@example.com',
    risks: 8,
    riskScore: 72,
    type: 'risk-detection'
  }];
  const filteredReports = reports.filter(report => {
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus;
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) || report.agent.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });
  const stats = {
    total: reports.length,
    completed: reports.filter(r => r.status === 'completed').length,
    processing: reports.filter(r => r.status === 'processing').length,
    thisWeek: 4
  };
  const handleViewReport = (report: any) => {
    navigate(`/agents/${report.type}`);
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
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              All Reports
            </h1>
            <p className="text-gray-600 text-lg">
              View and manage all your document analysis reports
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Total Reports</span>
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
                <TrendingUpIcon size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.processing}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">This Week</span>
                <CalendarIcon size={20} className="text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.thisWeek}
              </p>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <FilterIcon size={20} className="text-gray-600" />
                <div className="flex space-x-2">
                  <button onClick={() => setFilterStatus('all')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    All
                  </button>
                  <button onClick={() => setFilterStatus('completed')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    Completed
                  </button>
                  <button onClick={() => setFilterStatus('processing')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === 'processing' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    Processing
                  </button>
                </div>
              </div>
              <div className="relative flex-1 max-w-md">
                <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search reports..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
              </div>
            </div>
          </div>

          {/* Reports List */}
          <div className="space-y-4">
            {filteredReports.map((report, index) => <motion.div key={report.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.05
          }} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <FileTextIcon size={20} className="text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {report.title}
                      </h3>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${report.status === 'completed' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-blue-100 text-blue-700 border border-blue-300'}`}>
                        {report.status === 'completed' ? 'Completed' : 'Processing'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <span className="flex items-center">
                        <CalendarIcon size={14} className="mr-1" />
                        {report.date}
                      </span>
                      <span>{report.agent}</span>
                      <span>{report.user}</span>
                    </div>
                    <div className="flex items-center space-x-4 mt-3">
                      {report.clauses && <span className="text-sm text-gray-700">
                          {report.clauses} clauses • {report.confidence}%
                          confidence
                        </span>}
                      {report.risks !== undefined && <span className="text-sm text-gray-700">
                          {report.risks} risks • Score: {report.riskScore}
                        </span>}
                      {report.improvements && <span className="text-sm text-gray-700">
                          {report.improvements} improvements
                        </span>}
                      {report.pages && <span className="text-sm text-gray-700">
                          {report.pages} pages summarized
                        </span>}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={() => handleViewReport(report)} className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm">
                      <EyeIcon size={16} className="mr-2" />
                      View
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                      <DownloadIcon size={16} className="mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>)}
          </div>

          {filteredReports.length === 0 && <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-12 text-center">
              <FileTextIcon size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No reports found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters or search query
              </p>
            </div>}
        </motion.div>
      </div>
    </MainLayout>;
}