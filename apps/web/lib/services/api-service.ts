import { z } from "zod"

import { createApiClient } from "@workspace/api-client"

import type { Post } from "@/lib/types/post"
import type { Todo } from "@/lib/types/todo"

const demoApiUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://jsonplaceholder.typicode.com"

const api = createApiClient({ baseUrl: demoApiUrl })

const todoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
})

const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
})

export const apiService = {
  getTodos(limit: number): Promise<Todo[]> {
    return api.request(`/todos?_limit=${limit}`, {
      schema: z.array(todoSchema),
      retries: 2,
    })
  },

  getTodo(id: number): Promise<Todo> {
    return api.request(`/todos/${id}`, {
      schema: todoSchema,
      retries: 2,
    })
  },

  createTodo(todo: Omit<Todo, "id">): Promise<Todo> {
    return api.request("/todos", {
      method: "POST",
      body: todo,
      schema: todoSchema,
    })
  },

  getPosts(limit: number): Promise<Post[]> {
    return api.request(`/posts?_limit=${limit}`, {
      schema: z.array(postSchema),
      retries: 2,
      next: { revalidate: 60 },
    })
  },
}
