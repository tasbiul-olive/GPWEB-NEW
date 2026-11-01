"use client"

import { useSharedStore } from "@workspace/store/shared"
import { useUIStore } from "@/stores/ui"
import { useUserDataStore } from "@/stores/user-data"

/**
 * Example component demonstrating shared and app-specific store usage
 */
export function StoreExample() {
  const { user, setUser, clearUser } = useSharedStore()
  const { sidebarOpen, setState: setUIState } = useUIStore()
  const { history, setState: setUserDataState } = useUserDataStore()

  return (
    <div className="space-y-6 rounded-lg border border-gray-300 p-6">
      <div>
        <h3 className="font-semibold">Shared Store (Cross-app)</h3>
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
          onClick={() => clearUser()}
          className="ml-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Clear User
        </button>
      </div>

      <div>
        <h3 className="font-semibold">UI Store (App-specific)</h3>
        <p className="text-sm text-gray-600">
          Sidebar: {sidebarOpen ? "Open" : "Closed"}
        </p>
        <button
          onClick={() => setUIState("sidebarOpen", !sidebarOpen)}
          className="mt-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Toggle Sidebar
        </button>
      </div>

      <div>
        <h3 className="font-semibold">User Data Store (App-specific)</h3>
        <p className="text-sm text-gray-600">History items: {history.length}</p>
        <button
          onClick={() =>
            setUserDataState("history", [...history, `Item ${Date.now()}`])
          }
          className="mt-2 rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
        >
          Add to History
        </button>
      </div>
    </div>
  )
}
