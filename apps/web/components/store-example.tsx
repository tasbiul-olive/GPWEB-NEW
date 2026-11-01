"use client"

import { useState } from "react"

interface DemoUser {
  id: string
  name: string
  email: string
}

/**
 * Example component demonstrating local component state.
 */
export function StoreExample() {
  const [user, setUser] = useState<DemoUser | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [history, setHistory] = useState<string[]>([])

  return (
    <div className="space-y-6 rounded-lg border border-gray-300 p-6">
      <div>
        <h3 className="font-semibold">User State</h3>
        <p className="text-sm text-gray-600">
          Current User: {user?.name || "Not set"}
        </p>
        <button
          onClick={() =>
            setUser({ id: "1", name: "John Doe", email: "john@example.com" })
          }
          className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Set User
        </button>
        <button
          onClick={() => setUser(null)}
          className="ml-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Clear User
        </button>
      </div>

      <div>
        <h3 className="font-semibold">UI State</h3>
        <p className="text-sm text-gray-600">
          Sidebar: {sidebarOpen ? "Open" : "Closed"}
        </p>
        <button
          onClick={() => setSidebarOpen((open) => !open)}
          className="mt-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Toggle Sidebar
        </button>
      </div>

      <div>
        <h3 className="font-semibold">History State</h3>
        <p className="text-sm text-gray-600">History items: {history.length}</p>
        <button
          onClick={() =>
            setHistory((items) => [...items, `Item ${Date.now()}`])
          }
          className="mt-2 rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
        >
          Add to History
        </button>
      </div>
    </div>
  )
}
