import type { Metadata } from "next"
import { JetBrains_Mono, Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProviderWrapper } from "@/components/theme-provider-wrapper"
import React from 'react'

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SieloTech API Documentation",
  description: "Documentation for the SieloTech API",
  icons: {
    icon: "/assets/favicon.svg",
    shortcut: "/assets/favicon.svg",
    apple: "/assets/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProviderWrapper>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
