import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../components/layout/MainLayout';
import { useNavigate } from 'react-router-dom';
import { FileTextIcon, DownloadIcon, EyeIcon, CalendarIcon, FilterIcon, SearchIcon, TrashIcon, FolderIcon } from 'lucide-react';
export function MyDocumentsPage() {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const documents = [{
    id: 1,
    name: 'MANISH P Internship Application.pdf',
    size: '0.24 MB',
    uploadedBy: 'deep.user@example.com',
    uploadDate: '11/21/2025',
    type: 'pdf',
    status: 'analyzed',
    agents: ['clause-extraction', 'risk-detection']
  }, {
    id: 2,
    name: 'NDA-Acme-Corp-2023.pdf',
    size: '2.4 MB',
    uploadedBy: 'sarah.legal@example.com',
    uploadDate: '11/20/2025',
    type: 'pdf',
    status: 'analyzed',
    agents: ['clause-extraction']
  }, {
    id: 3,
    name: 'Service-Agreement-XYZ-Inc.docx',
    size: '3.1 MB',
    uploadedBy: 'deep.user@example.com',
    uploadDate: '11/19/2025',
    type: 'docx',
    status: 'analyzed',
    agents: ['risk-detection']
  }, {
    id: 4,
    name: 'Employment-Contract-Template.docx',
    size: '1.8 MB',
    uploadedBy: 'deep.user@example.com',
    uploadDate: '11/21/2025',
    type: 'docx',
    status: 'processing',
    agents: ['drafting']
  }, {
    id: 5,
    name: 'Master-Services-Agreement.pdf',
    size: '4.2 MB',
    uploadedBy: 'john.doe@example.com',
    uploadDate: '11/18/2025',
    type: 'pdf',
    status: 'analyzed',
    agents: ['summary']
  }];
  const filteredDocuments = documents.filter(doc => {
    const matchesType = filterType === 'all' || doc.type === filterType;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.uploadedBy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });
  const stats = {
    total: documents.length,
    pdf: documents.filter(d => d.type === 'pdf').length,
    docx: documents.filter(d => d.type === 'docx').length,
    analyzed: documents.filter(d => d.status === 'analyzed').length
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
              My Documents
            </h1>
            <p className="text-gray-600 text-lg">
              Manage and access all your uploaded documents
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Total Documents</span>
                <FileTextIcon size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">PDF Files</span>
                <FileTextIcon size={20} className="text-red-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stats.pdf}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">DOCX Files</span>
                <FileTextIcon size={20} className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stats.docx}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Analyzed</span>
                <FolderIcon size={20} className="text-green-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.analyzed}
              </p>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <FilterIcon size={20} className="text-gray-600" />
                <div className="flex space-x-2">
                  <button onClick={() => setFilterType('all')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterType === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    All
                  </button>
                  <button onClick={() => setFilterType('pdf')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterType === 'pdf' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    PDF
                  </button>
                  <button onClick={() => setFilterType('docx')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterType === 'docx' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    DOCX
                  </button>
                </div>
              </div>
              <div className="relative flex-1 max-w-md">
                <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search documents..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc, index) => <motion.div key={doc.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.05
          }} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <FileTextIcon size={24} className={doc.type === 'pdf' ? 'text-red-600' : 'text-blue-600'} />
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${doc.status === 'analyzed' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-blue-100 text-blue-700 border border-blue-300'}`}>
                    {doc.status === 'analyzed' ? 'Analyzed' : 'Processing'}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {doc.name}
                </h3>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <CalendarIcon size={14} className="mr-2" />
                    <span>{doc.uploadDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{doc.size}</span>
                    <span className="text-gray-500">{doc.uploadedBy}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button onClick={() => navigate('/reports')} className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm flex-1">
                    <EyeIcon size={14} className="mr-2" />
                    View
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex-1">
                    <DownloadIcon size={14} className="mr-2" />
                    Download
                  </button>
                  <button className="bg-red-100 text-red-700 border border-red-300 font-semibold py-2 px-3 rounded-lg text-sm hover:bg-red-200 transition-colors">
                    <TrashIcon size={14} />
                  </button>
                </div>
              </motion.div>)}
          </div>

          {filteredDocuments.length === 0 && <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-12 text-center">
              <FileTextIcon size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No documents found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters or search query
              </p>
            </div>}
        </motion.div>
      </div>
    </MainLayout>;
}