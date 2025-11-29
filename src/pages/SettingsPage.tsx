import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../components/layout/MainLayout';
import { UserIcon, LockIcon, BellIcon, GlobeIcon, BrainCircuitIcon, ShieldIcon, PaletteIcon, SaveIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
export function SettingsPage() {
  const {
    user
  } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [settings, setSettings] = useState({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || 'User',
    notifications: {
      email: true,
      push: false,
      weekly: true
    },
    language: 'English',
    aiDepth: 'balanced',
    aiTone: 'professional',
    aiConfidence: 75,
    theme: 'dark',
    retention: '90'
  });
  const tabs = [{
    id: 'profile',
    label: 'Profile',
    icon: <UserIcon size={18} />
  }, {
    id: 'security',
    label: 'Security',
    icon: <LockIcon size={18} />
  }, {
    id: 'notifications',
    label: 'Notifications',
    icon: <BellIcon size={18} />
  }, {
    id: 'language',
    label: 'Language',
    icon: <GlobeIcon size={18} />
  }, {
    id: 'ai',
    label: 'AI Preferences',
    icon: <BrainCircuitIcon size={18} />
  }, {
    id: 'privacy',
    label: 'Privacy',
    icon: <ShieldIcon size={18} />
  }, {
    id: 'appearance',
    label: 'Appearance',
    icon: <PaletteIcon size={18} />
  }];
  const handleSave = () => {
    console.log('Settings saved:', settings);
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600 mb-8">
            Manage your account preferences and application settings
          </p>

          <div className="grid grid-cols-12 gap-6">
            {/* Sidebar Navigation */}
            <div className="col-span-12 lg:col-span-3">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-2">
                <nav className="space-y-1">
                  {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}>
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>)}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="col-span-12 lg:col-span-9">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                {activeTab === 'profile' && <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.3
              }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Profile Information
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input type="text" value={settings.name} onChange={e => setSettings({
                      ...settings,
                      name: e.target.value
                    })} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input type="email" value={settings.email} onChange={e => setSettings({
                      ...settings,
                      email: e.target.value
                    })} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Role
                        </label>
                        <select value={settings.role} onChange={e => setSettings({
                      ...settings,
                      role: e.target.value
                    })} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600">
                          <option value="Admin">Admin</option>
                          <option value="User">User</option>
                          <option value="Auditor">Auditor</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>}

                {activeTab === 'security' && <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.3
              }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Security Settings
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm New Password
                        </label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                      </div>
                    </div>
                  </motion.div>}

                {activeTab === 'notifications' && <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.3
              }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Notification Preferences
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div>
                          <p className="text-gray-900 font-medium">
                            Email Notifications
                          </p>
                          <p className="text-sm text-gray-600">
                            Receive email updates about your documents
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked={settings.notifications.email} onChange={e => setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          email: e.target.checked
                        }
                      })} className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div>
                          <p className="text-gray-900 font-medium">
                            Push Notifications
                          </p>
                          <p className="text-sm text-gray-600">
                            Get push notifications in your browser
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked={settings.notifications.push} onChange={e => setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          push: e.target.checked
                        }
                      })} className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div>
                          <p className="text-gray-900 font-medium">
                            Weekly Summary
                          </p>
                          <p className="text-sm text-gray-600">
                            Receive a weekly summary of your activity
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked={settings.notifications.weekly} onChange={e => setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          weekly: e.target.checked
                        }
                      })} className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </motion.div>}

                {activeTab === 'language' && <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.3
              }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Language & Region
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Display Language
                        </label>
                        <select value={settings.language} onChange={e => setSettings({
                      ...settings,
                      language: e.target.value
                    })} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600">
                          <option value="English">English</option>
                          <option value="Hindi">Hindi</option>
                          <option value="Tamil">Tamil</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>}

                {activeTab === 'ai' && <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.3
              }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      AI Agent Preferences
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Analysis Depth
                        </label>
                        <select value={settings.aiDepth} onChange={e => setSettings({
                      ...settings,
                      aiDepth: e.target.value
                    })} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600">
                          <option value="quick">Quick</option>
                          <option value="balanced">Balanced</option>
                          <option value="thorough">Thorough</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Output Tone
                        </label>
                        <select value={settings.aiTone} onChange={e => setSettings({
                      ...settings,
                      aiTone: e.target.value
                    })} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600">
                          <option value="professional">Professional</option>
                          <option value="casual">Casual</option>
                          <option value="technical">Technical</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confidence Threshold: {settings.aiConfidence}%
                        </label>
                        <input type="range" min="0" max="100" value={settings.aiConfidence} onChange={e => setSettings({
                      ...settings,
                      aiConfidence: parseInt(e.target.value)
                    })} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                      </div>
                    </div>
                  </motion.div>}

                {activeTab === 'privacy' && <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.3
              }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Privacy & Data Retention
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Document Retention Period
                        </label>
                        <select value={settings.retention} onChange={e => setSettings({
                      ...settings,
                      retention: e.target.value
                    })} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600">
                          <option value="30">30 days</option>
                          <option value="90">90 days</option>
                          <option value="180">180 days</option>
                          <option value="365">1 year</option>
                          <option value="forever">Forever</option>
                        </select>
                      </div>
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          Documents will be automatically deleted after the
                          retention period expires.
                        </p>
                      </div>
                    </div>
                  </motion.div>}

                {activeTab === 'appearance' && <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.3
              }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Appearance
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Theme Mode
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <button onClick={() => setSettings({
                        ...settings,
                        theme: 'dark'
                      })} className={`p-4 rounded-lg border-2 transition-colors ${settings.theme === 'dark' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                            <div className="text-gray-900 font-medium">
                              Dark
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              Previous theme
                            </div>
                          </button>
                          <button onClick={() => setSettings({
                        ...settings,
                        theme: 'light'
                      })} className={`p-4 rounded-lg border-2 transition-colors ${settings.theme === 'light' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                            <div className="text-gray-900 font-medium">
                              Light
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              Current theme
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>}

                {/* Save Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button onClick={handleSave} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    <SaveIcon size={18} className="mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>;
}