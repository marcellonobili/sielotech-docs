import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Introduction } from "@/components/pages/introduction"

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-8">
          <div className="max-w-3xl">
            <Introduction />
          </div>
        </main>
      </div>
    </div>
  )
}

