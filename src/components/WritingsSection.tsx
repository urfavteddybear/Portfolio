'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const articles = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure large React applications using TypeScript, proper component architecture, and state management patterns.",
    date: "2024-05-15",
    readTime: "8 min read",
    category: "React",
    url: "#",
    featured: true
  },
  {
    id: 2,
    title: "The Complete Guide to Next.js App Router",
    excerpt: "A comprehensive guide to the new App Router in Next.js 13+, covering file-based routing, layouts, and server components.",
    date: "2024-04-22",
    readTime: "12 min read",
    category: "Next.js",
    url: "#",
    featured: true
  },
  {
    id: 3,
    title: "Modern CSS Techniques for Better UX",
    excerpt: "Explore modern CSS features like Container Queries, CSS Grid, and custom properties to create better user experiences.",
    date: "2024-03-18",
    readTime: "6 min read",
    category: "CSS",
    url: "#",
    featured: false
  },
  {
    id: 4,
    title: "API Design Best Practices with Node.js",
    excerpt: "Learn how to design robust, scalable APIs using Node.js, Express, and modern development practices.",
    date: "2024-02-28",
    readTime: "10 min read",
    category: "Backend",
    url: "#",
    featured: false
  }
]

export default function WritingsSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  return (
    <section id="writing" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-4">
            Latest Writing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Thoughts, tutorials, and insights about web development, technology, and the industry.
          </p>
        </motion.div>

        {/* Articles grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${
                article.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >              <motion.div
                whileHover={{ y: -5 }}
                className="h-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Category and featured badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 border border-primary-200 dark:border-primary-700">
                    {article.category}
                  </span>
                  {article.featured && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700">
                      Featured
                    </span>
                  )}
                </div>                {/* Article title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  <a 
                    href={article.url}
                    className="focus-outline rounded-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                    <span className="absolute inset-0" aria-hidden="true" />
                  </a>
                </h3>                {/* Article excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Article meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* View all articles link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >          <motion.a
            href="https://blog.wahyuputra.biz.id/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-primary-600 dark:border-primary-500 text-base font-medium rounded-full text-primary-600 dark:text-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white focus-outline transition-all duration-200"
          >
            View All Articles
            <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
