import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wahyu Putra - DevOps Engineer',
  description: 'A clean minimalist portfolio showcasing my work as a full stack developer',
  keywords: ['portfolio', 'developer', 'full stack', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Wahyu Putra - DevOps Engineer',
    description: 'A clean minimalist portfolio showcasing my work as a full stack developer',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wahyu Putra - DevOps Engineer',
    description: 'A clean minimalist portfolio showcasing my work as a full stack developer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
