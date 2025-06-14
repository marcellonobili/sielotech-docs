import { JetBrains_Mono } from 'next/font/google'
import React from 'react'

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
}

export function CodeBlock({ children, className = '' }: CodeBlockProps) {
  return (
    <pre className={`mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-x-auto ${className}`}>
      <code className={`${jetbrainsMono.className} text-sm text-gray-800 dark:text-gray-200`}>
        {children}
      </code>
    </pre>
  )
}
