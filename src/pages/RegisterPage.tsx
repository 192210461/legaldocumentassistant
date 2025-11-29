import React from 'react';
import { motion } from 'framer-motion';
import { RegisterForm } from '../components/auth/RegisterForm';
export function RegisterPage() {
  return <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative bg-gray-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-blue to-navy opacity-90 z-0"></div>
      {/* Placeholder for the background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay z-0">
        {/* This is where you would add the background image */}
        {/* Replace this comment with an actual image when available */}
      </div>
      {/* Animated particles */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none" initial={{
      opacity: 0
    }} animate={{
      opacity: 0.7
    }} transition={{
      duration: 1
    }}>
        {/* This would be where animated particles are rendered */}
        {/* For now, we'll use a placeholder */}
      </motion.div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10 relative">
        <motion.div initial={{
        y: -20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.5
      }} className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">DeepLex</h1>
          <p className="text-blue-200 max-w-md mx-auto">
            Illuminate Legal Risk with Deep Intelligence
          </p>
        </motion.div>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10 relative px-4 sm:px-0">
        <RegisterForm />
      </div>
    </div>;
}