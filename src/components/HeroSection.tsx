'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import WaveIcon from './WaveIcon'

export default function HeroSection() {  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-to-br from-white via-primary-25/20 to-primary-50/30 dark:from-gray-900/50 dark:via-gray-900/30 dark:to-gray-800/40 overflow-hidden transition-colors duration-300">      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] -z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #9b2c2c 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-primary-100/30 to-transparent dark:from-primary-900/20 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-primary-75/25 to-transparent dark:from-primary-800/15 dark:to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-4xl text-center relative z-10">{/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}              className="inline-block px-4 py-2 bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-700"
            >
              Available for any opportunities
            </motion.div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              <span className="block">                <span className="text-gray-600 dark:text-gray-300">Hi, I&apos;m</span>{' '}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                    Wahyu Putra
                  </span>
                </span>
              </span>
              <span className="block mt-2">
                <span className="text-gray-900 dark:text-white">DevOps</span>{' '}
                <span className="relative">
                  <span className="relative z-10">Engineer</span>
                  <span className="absolute inset-0 -left-2 top-1 z-0 block h-[38px] w-full rotate-[-1deg] bg-gradient-to-r from-primary-200/60 to-primary-300/60 dark:from-primary-800/60 dark:to-primary-700/60 sm:h-[54px] lg:h-[60px]"></span>
                </span>
              </span>
            </h1>
          </motion.div>          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl lg:mt-12"
          >            I craft{' '}
            <span className="relative">
              <span className="font-semibold text-gray-900 dark:text-white">scalable infrastructure solutions</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500"></span>
            </span>
            {' '}using modern technologies like{' '}
            <span className="relative">
              <span className="font-medium text-primary-600 dark:text-primary-400">Docker, Kubernetes & Linux</span>
              <span className="absolute left-0 top-8 hidden text-sm text-gray-500 dark:text-gray-400 lg:block">
                <WaveIcon className="w-20 h-4 text-primary-300 dark:text-primary-600" />
              </span>
            </span>
            . Let&apos;s build something amazing together.
          </motion.p><motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="group inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus-outline transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              View My Work
              <ArrowDownIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </motion.button>              <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="inline-flex items-center px-8 py-3 border border-primary-200 dark:border-primary-700 text-base font-medium rounded-xl text-primary-700 dark:text-primary-300 bg-white dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-gray-700 focus-outline transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              Get In Touch            </motion.a>
          </motion.div>        </motion.div>
        
      </div>
      
      {/* Scroll indicator - positioned at bottom of hero section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary-300 dark:border-primary-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary-500 dark:bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
