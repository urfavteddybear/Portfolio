'use client'

import { useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import WorkExperienceSection from '@/components/WorkExperienceSection'
import WritingsSection from '@/components/WritingsSection'
import ContactSection from '@/components/ContactSection'

interface Article {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  url: string
  featured: boolean
}

interface ClientHomeProps {
  initialArticles: Article[]
  initialError: string | null
}

export default function ClientHome({ initialArticles, initialError }: ClientHomeProps) {
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
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      {/* Animated background pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5 dark:from-blue-500/5 dark:to-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-500/5 via-transparent to-primary-500/5 dark:from-indigo-500/5 dark:to-slate-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-purple-400/10 dark:from-blue-500/10 dark:to-slate-700/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-400/10 to-primary-400/10 dark:from-slate-600/10 dark:to-slate-700/10 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <WorkExperienceSection />
        <WritingsSection 
          initialArticles={initialArticles} 
          initialError={initialError} 
        />
        <ContactSection />
      </main>
    </div>
  )
}
