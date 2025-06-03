// Server component wrapper for ISR optimization
import { getBlogPosts } from '@/lib/blog'
import ClientHome from './ClientHome'

export default async function Home() {
  // Fetch blog posts server-side with ISR
  const { articles, error } = await getBlogPosts()

  return <ClientHome initialArticles={articles} initialError={error} />
}

// Add ISR revalidation
export const revalidate = 300 // Revalidate every 5 minutes
