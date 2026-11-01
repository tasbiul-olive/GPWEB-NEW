import { apiService } from "@/lib/services/api-service"
import type { Post } from "@/lib/types/post"

/**
 * Server Component — fetches posts on the server with Next.js data cache.
 * No "use client" directive; runs exclusively in the Node.js runtime.
 */
export async function ApiClientServerExample() {
  let posts: Post[] = []
  let error: string | null = null

  try {
    posts = await apiService.getPosts(5)
  } catch (err) {
    error = err instanceof Error ? err.message : "Unknown error"
  }

  return (
    <div className="space-y-3 rounded-lg border border-gray-300 p-6">
      <h3 className="font-semibold">API Client — Server-side fetch</h3>
      <p className="text-xs text-muted-foreground">
        Fetched with <code>next: {"{ revalidate: 60 }"}</code> via{" "}
        <code>@workspace/api-client</code> on the server.
      </p>

      {error ? (
        <p className="text-sm text-red-500">Error: {error}</p>
      ) : (
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id} className="rounded border border-gray-200 p-3">
              <p className="text-xs font-medium text-muted-foreground">
                #{post.id}
              </p>
              <p className="font-medium capitalize">{post.title}</p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {post.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
