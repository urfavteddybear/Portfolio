'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

interface BlogPost {
  id: string
  title: string
  date: string
  description: string
  tags: string[]
}

interface BlogApiResponse {
  success: boolean
  count: number
  posts: BlogPost[]
}

interface Article {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  url: string
  featured: boolean
}

interface WritingsSectionProps {
  initialArticles?: Article[]
  initialError?: string | null
}

// Function to get primary category from tags
const getPrimaryCategory = (tags: string[]): string => {
  const categoryMap: { [key: string]: string } = {
    'react': 'React',
    'nextjs': 'Next.js',
    'javascript': 'JavaScript',
    'typescript': 'TypeScript',
    'css': 'CSS',
    'design': 'Design',
    'ui': 'UI/UX',
    'ux': 'UI/UX',
    'backend': 'Backend',
    'frontend': 'Frontend',
    'devops': 'DevOps',
    'docker': 'DevOps',
    'kubernetes': 'DevOps',
    'linux': 'Linux',
    'tutorial': 'Tutorial',
    'guide': 'Guide'
  }

  for (const tag of tags) {
    const category = categoryMap[tag.toLowerCase()]
    if (category) return category
  }
  
  // Return capitalized first tag if no mapping found
  return tags[0] ? tags[0].charAt(0).toUpperCase() + tags[0].slice(1) : 'Blog'
}

// Function to transform blog post to article format
const transformBlogPost = (post: BlogPost, index: number): Article => ({
  id: post.id,
  title: post.title,
  excerpt: post.description,
  date: post.date,
  category: getPrimaryCategory(post.tags),
  url: `https://blog.wahyuputra.biz.id/posts/${post.id}`,
  featured: index < 2 // Mark first 2 posts as featured
})

export default function WritingsSection({ 
  initialArticles = [], 
  initialError = null 
}: WritingsSectionProps = {}) {
  const [articles, setArticles] = useState<Article[]>(initialArticles)
  const [loading, setLoading] = useState(!initialArticles.length)
  const [error, setError] = useState<string | null>(initialError)  // Fetch blog posts from API (with ISR optimization)
  useEffect(() => {
    // Skip fetching if we already have initial data
    if (initialArticles.length > 0) {
      return
    }

    const fetchBlogPosts = async () => {
      try {
        setLoading(true)
        
        // Use our internal API route with ISR optimization
        const response = await fetch('/api/blog', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          next: { revalidate: 300 }, // Client-side cache for 5 minutes
        })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data: BlogApiResponse = await response.json()
        
        if (data.success && data.posts) {
          // Take top 4 posts and transform them
          const transformedArticles = data.posts
            .slice(0, 4)
            .map((post, index) => transformBlogPost(post, index))
          
          setArticles(transformedArticles)
          setError(null) // Clear any previous errors
        } else {
          throw new Error('Invalid API response format')
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err)
        setError(`Failed to load blog posts: ${err instanceof Error ? err.message : 'Unknown error'}`)
          // Fallback to static content if API fails
        setArticles([
          {
            id: 'fallback-1',
            title: "DevOps Best Practices for Modern Applications",
            excerpt: "Exploring containerization, orchestration, and CI/CD pipelines for scalable infrastructure solutions.",
            date: "2024-12-01",
            category: "DevOps",
            url: "https://blog.wahyuputra.biz.id/",
            featured: true
          },
          {
            id: 'fallback-2',
            title: "Linux Server Administration Guide",
            excerpt: "A comprehensive guide to managing Linux servers, security hardening, and performance optimization.",
            date: "2024-11-15",
            category: "Linux",
            url: "https://blog.wahyuputra.biz.id/",
            featured: true
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [initialArticles.length])

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
        </motion.div>        {/* Articles grid */}
        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Loading skeleton */}
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`group relative ${
                  index < 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 animate-pulse">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                    {index < 2 && (
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
                    )}
                  </div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 mb-4">{error}</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Showing fallback content while blog API is unavailable.
            </p>
          </div>
        ) : (
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
              >
                <motion.div
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
                  </div>

                  {/* Article title */}
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
                  </h3>

                  {/* Article excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>                  {/* Article meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {formatDate(article.date)}
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
        )}

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
