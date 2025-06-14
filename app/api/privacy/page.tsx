import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Privacy } from "@/components/pages/privacy"

export default function PrivacyPage() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
          <Privacy />
        </main>
      </div>
    </div>
  )
}

