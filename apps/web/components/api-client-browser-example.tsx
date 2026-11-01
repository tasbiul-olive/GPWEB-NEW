"use client"

import { useState } from "react"
import { HttpError } from "@workspace/api-client"
import { apiService } from "@/lib/services/api-service"
import type { Todo } from "@/lib/types/todo"

type Status = "idle" | "loading" | "success" | "error"

/**
 * Client Component — fires requests from the browser on demand.
 * Demonstrates GET, POST, and HttpError handling.
 */
export function ApiClientBrowserExample() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [created, setCreated] = useState<Todo | null>(null)

  async function fetchTodos() {
    setStatus("loading")
    setErrorMsg(null)
    setCreated(null)
    try {
      const data = await apiService.getTodos(5)
      setTodos(data)
      setStatus("success")
    } catch (err) {
      const msg =
        err instanceof HttpError
          ? `${err.status}: ${err.message}`
          : err instanceof Error
            ? err.message
            : "Unknown error"
      setErrorMsg(msg)
      setStatus("error")
    }
  }

  async function createTodo() {
    setStatus("loading")
    setErrorMsg(null)
    try {
      const newTodo = await apiService.createTodo({
        userId: 1,
        title: `New todo - ${new Date().toLocaleTimeString()}`,
        completed: false,
      })
      setCreated(newTodo)
      setStatus("success")
    } catch (err) {
      const msg =
        err instanceof HttpError
          ? `${err.status}: ${err.message}`
          : err instanceof Error
            ? err.message
            : "Unknown error"
      setErrorMsg(msg)
      setStatus("error")
    }
  }

  async function trigger404() {
    setStatus("loading")
    setErrorMsg(null)
    try {
      await apiService.getTodo(99999999)
      setStatus("success")
    } catch (err) {
      const msg =
        err instanceof HttpError
          ? `HttpError ${err.status}: ${err.message}`
          : err instanceof Error
            ? err.message
            : "Unknown error"
      setErrorMsg(msg)
      setStatus("error")
    }
  }

  return (
    <div className="space-y-4 rounded-lg border border-gray-300 p-6">
      <h3 className="font-semibold">API Client - Browser-side fetch</h3>
      <p className="text-xs text-muted-foreground">
        Calls fired from the browser via <code>@workspace/api-client</code>.
      </p>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={fetchTodos}
          disabled={status === "loading"}
          className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600 disabled:opacity-50"
        >
          GET /todos
        </button>
        <button
          onClick={createTodo}
          disabled={status === "loading"}
          className="rounded bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-600 disabled:opacity-50"
        >
          POST /todos
        </button>
        <button
          onClick={trigger404}
          disabled={status === "loading"}
          className="rounded bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600 disabled:opacity-50"
        >
          Trigger 404
        </button>
      </div>

      {status === "loading" && (
        <p className="text-sm text-muted-foreground">Loading...</p>
      )}

      {status === "error" && errorMsg && (
        <p className="rounded bg-red-50 p-3 text-sm text-red-600">
          ⚠ {errorMsg}
        </p>
      )}

      {created && (
        <div className="rounded border border-green-200 bg-green-50 p-3">
          <p className="text-xs font-medium text-green-700">
            Created (id: {created.id})
          </p>
          <p className="text-sm">{created.title}</p>
        </div>
      )}

      {todos.length > 0 && (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-start gap-2 rounded border border-gray-200 p-2"
            >
              <span
                className={`mt-0.5 h-3 w-3 shrink-0 rounded-full ${
                  todo.completed ? "bg-green-400" : "bg-gray-300"
                }`}
              />
              <span
                className={`text-sm ${todo.completed ? "text-muted-foreground line-through" : ""}`}
              >
                {todo.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
