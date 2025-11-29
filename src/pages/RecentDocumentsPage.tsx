import React from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../components/layout/MainLayout';
import { useNavigate } from 'react-router-dom';
import { FileTextIcon, DownloadIcon, EyeIcon, CalendarIcon, ClockIcon, ArrowLeftIcon } from 'lucide-react';
export function RecentDocumentsPage() {
  const navigate = useNavigate();
  const recentDocuments = [{
    id: 1,
    name: 'MANISH P Internship Application.pdf',
    size: '0.24 MB',
    uploadedBy: 'deep.user@example.com',
    uploadDate: 'Today, 11:30 AM',
    type: 'pdf',
    status: 'processing',
    agent: 'Clause Extraction'
  }, {
    id: 2,
    name: 'NDA-Acme-Corp-2023.pdf',
    size: '2.4 MB',
    uploadedBy: 'sarah.legal@example.com',
    uploadDate: 'Today, 09:30 AM',
    type: 'pdf',
    status: 'completed',
    agent: 'Clause Extraction'
  }, {
    id: 3,
    name: 'Service-Agreement-XYZ-Inc.docx',
    size: '3.1 MB',
    uploadedBy: 'deep.user@example.com',
    uploadDate: 'Yesterday, 04:15 PM',
    type: 'docx',
    status: 'completed',
    agent: 'Risk Detection'
  }, {
    id: 4,
    name: 'Employment-Contract-Template.docx',
    size: '1.8 MB',
    uploadedBy: 'deep.user@example.com',
    uploadDate: 'Yesterday, 02:20 PM',
    type: 'docx',
    status: 'completed',
    agent: 'Drafting Agent'
  }];
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
              Recent Documents
            </h1>
            <p className="text-gray-600 text-lg">
              Your most recently uploaded and processed documents
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Uploaded Today</span>
                <ClockIcon size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">2</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Processing</span>
                <FileTextIcon size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">1</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Completed</span>
                <FileTextIcon size={20} className="text-green-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">3</p>
            </div>
          </div>

          {/* Recent Documents List */}
          <div className="space-y-4">
            {recentDocuments.map((doc, index) => <motion.div key={doc.id} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <FileTextIcon size={24} className={doc.type === 'pdf' ? 'text-red-600' : 'text-blue-600'} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {doc.name}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${doc.status === 'completed' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-blue-100 text-blue-700 border border-blue-300'}`}>
                          {doc.status === 'completed' ? 'Completed' : 'Processing'}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500 mb-1">Agent</p>
                          <p className="text-gray-900">{doc.agent}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 mb-1">Upload Date</p>
                          <p className="text-gray-900 flex items-center">
                            <CalendarIcon size={14} className="mr-1" />
                            {doc.uploadDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 mb-1">Uploaded By</p>
                          <p className="text-gray-900">{doc.uploadedBy}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 mb-1">File Size</p>
                          <p className="text-gray-900">{doc.size}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button onClick={() => navigate('/reports')} className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm">
                      <EyeIcon size={14} className="mr-2" />
                      View
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                      <DownloadIcon size={14} className="mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </MainLayout>;
}