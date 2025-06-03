import { NextRequest, NextResponse } from 'next/server'

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

export async function GET(request: NextRequest) {
  try {
    const response = await fetch('https://blog.wahyuputra.biz.id/api/posts', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Portfolio-Site/1.0',
      },
      next: { revalidate: 300 }, // ISR: Revalidate every 5 minutes
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: BlogApiResponse = await response.json()

    if (!data.success || !data.posts) {
      throw new Error('Invalid API response format')
    }

    // Return the data with ISR headers
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
      },
    })

  } catch (error) {
    console.error('Error in blog API route:', error)
    
    // Return fallback data
    const fallbackData: BlogApiResponse = {
      success: true,
      count: 4,
      posts: [
        {
          id: 'fallback-1',
          title: 'DevOps Best Practices for Modern Applications',
          date: '2024-12-01',
          description: 'Exploring containerization, orchestration, and CI/CD pipelines for scalable infrastructure solutions.',
          tags: ['devops', 'docker', 'kubernetes', 'infrastructure']
        },
        {
          id: 'fallback-2',
          title: 'Linux Server Administration Guide',
          date: '2024-11-15',
          description: 'A comprehensive guide to managing Linux servers, security hardening, and performance optimization.',
          tags: ['linux', 'server', 'administration', 'security']
        },
        {
          id: 'fallback-3',
          title: 'Docker Container Security Best Practices',
          date: '2024-10-20',
          description: 'Learn how to secure Docker containers in production environments with proven security practices.',
          tags: ['docker', 'security', 'containers', 'best-practices']
        },
        {
          id: 'fallback-4',
          title: 'Kubernetes Cluster Management Essentials',
          date: '2024-09-15',
          description: 'Essential techniques for managing and monitoring Kubernetes clusters in production.',
          tags: ['kubernetes', 'cluster', 'management', 'monitoring']
        }
      ]
    }

    return NextResponse.json(fallbackData, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
    })
  }
}
