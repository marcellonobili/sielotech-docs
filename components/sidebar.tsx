"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter, usePathname } from "next/navigation"

const apiSections = [
  { name: "Introduction", path: "/api/introduction" },
  { name: "Authentication", path: "/api/authentication" },
  { name: "Furigana", path: "/api/furigana" },
  { name: "Error Handling", path: "/api/errors" },
  { name: "TOS", path: "/api/tos" },
  { name: "Privacy", path: "/api/privacy" },
]

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="hidden lg:block w-64 bg-gray-50 dark:bg-gray-900">
      <ScrollArea className="h-full">
        <div className="p-4 space-y-2">
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
                    ? "bg-purple-100 dark:bg-purple-400/20 text-purple-700 dark:text-purple-400"
                    : "text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
                onClick={() => router.push(section.path)}
              >
                {section.name}
              </Button>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}
