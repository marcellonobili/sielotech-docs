'use client'

import { ModeToggle } from "@/components/mode-toggle"
import { useState, useRef, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const apiSections = [
  { name: "Introduction", path: "/api/introduction" },
  { name: "Authentication", path: "/api/authentication" },
  { name: "Furigana", path: "/api/furigana" },
  { name: "TOS", path: "/api/tos" },
  { name: "Privacy", path: "/api/privacy" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef<HTMLElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }

    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)
    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [])

  return (
    <>
      <header 
        ref={headerRef}
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-400">SieloTech API docs</h1>
        </div>
        <ModeToggle />
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all ${isOpen ? "visible" : "invisible"}`}>
        <div 
          className={`fixed inset-0 bg-black/50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />
        
        <nav className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
          <div style={{ paddingTop: `${headerHeight}px` }} className="p-4 space-y-2">
            {apiSections.map((section) => {
              const isActive =
                pathname === section.path ||
                (pathname === "/" && section.path === "/") ||
                (pathname !== "/" && section.path !== "/" && pathname.startsWith(section.path))
              return (
                <Button
                  key={section.name}
                  variant="ghost"
                  className={`w-full justify-start ${
                    isActive
                      ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => {
                    router.push(section.path)
                    setIsOpen(false)
                  }}
                >
                  {section.name}
                </Button>
              )
            })}
          </div>
        </nav>
      </div>
    </>
  )
}
