'use client'

import { useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import WorkExperienceSection from '@/components/WorkExperienceSection'
import WritingsSection from '@/components/WritingsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Initialize intersection observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])
  return (
    <main className="relative min-h-screen transition-colors duration-300">      {/* Enhanced Background with Multiple Layers */}
      <div className="fixed inset-0 -z-20">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-25/50 to-primary-75/40 dark:from-gray-900 dark:via-slate-900/95 dark:to-slate-800/90" />
        
        {/* Large floating gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-primary-100/30 via-primary-75/20 to-transparent dark:from-blue-500/15 dark:via-slate-600/8 dark:to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/4 -right-60 w-[800px] h-[800px] bg-gradient-radial from-primary-200/25 via-primary-100/15 to-transparent dark:from-indigo-500/10 dark:via-slate-500/5 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[900px] h-[900px] bg-gradient-radial from-primary-100/20 via-primary-75/10 to-transparent dark:from-blue-600/12 dark:via-slate-700/6 dark:to-transparent rounded-full blur-3xl" />
        
        {/* Medium floating elements */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-conic from-primary-100/15 via-transparent to-primary-75/10 dark:from-slate-500/8 dark:via-transparent dark:to-blue-500/6 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-primary-100/20 to-transparent dark:from-indigo-400/8 dark:to-transparent rounded-full blur-2xl" />
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-25/10 via-transparent to-white/50 dark:from-slate-900/15 dark:via-transparent dark:to-gray-800/30" />
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-20 dark:opacity-8" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, rgb(185 28 28 / 0.15) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }} />
      </div>

      <Navbar />
      
      <div className="relative overflow-hidden">
        <HeroSection />
        <ProjectsSection />
        <WorkExperienceSection />
        <WritingsSection />
          {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  )
}
