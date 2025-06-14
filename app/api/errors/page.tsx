import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Errors } from "@/components/pages/errors"

export default function ErrorsPage() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
          <Errors />
        </main>
      </div>
    </div>
  )
}
