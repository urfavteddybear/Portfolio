'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: "SaaS Dashboard Platform",
    description: "A comprehensive dashboard platform for managing business analytics, user management, and real-time data visualization. Built with modern technologies for scalability and performance.",
    image: "/api/placeholder/600x400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Content Generator",
    description: "An intelligent content generation platform that leverages AI to create blog posts, social media content, and marketing copy. Features real-time collaboration and export capabilities.",
    image: "/api/placeholder/600x400",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Express", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Real Estate Marketplace",
    description: "A modern real estate platform connecting buyers, sellers, and agents. Features advanced search, virtual tours, and integrated communication tools.",
    image: "/api/placeholder/600x400",
    technologies: ["Vue.js", "Laravel", "MySQL", "Stripe", "Google Maps API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Productivity Mobile App",
    description: "A cross-platform mobile application for task management and productivity tracking with offline support and cloud synchronization.",
    image: "/api/placeholder/600x400",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-4">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}              className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ${
                project.featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''
              }`}
            >
              {/* Project image */}
              <div className={`relative overflow-hidden ${project.featured ? 'h-64 md:h-full' : 'h-64'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20 z-10" />
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <CodeBracketIcon className="h-20 w-20 text-gray-400" />
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeBracketIcon className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 md:p-8 flex flex-col justify-center">                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>                {/* Action buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500 focus-outline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus-outline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                    <CodeBracketIcon className="ml-2 h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
