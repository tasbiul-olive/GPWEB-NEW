import type { ZodType } from "zod"

export interface ApiClientOptions {
  baseUrl: string
  headers?: HeadersInit
  fetch?: typeof globalThis.fetch
}

export interface ApiRequestOptions<T> extends Omit<RequestInit, "body"> {
  body?: unknown
  next?: {
    revalidate?: number | false
    tags?: string[]
  }
  retries?: number
  timeoutMs?: number
  schema?: ZodType<T>
}

export class HttpError extends Error {
  readonly status: number
  readonly statusText: string
  readonly body: unknown

  constructor(status: number, statusText: string, body: unknown) {
    super(
      `Request failed with status ${status}${statusText ? ` ${statusText}` : ""}`
    )
    this.name = "HttpError"
    this.status = status
    this.statusText = statusText
    this.body = body
  }
}

export class ApiResponseValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ApiResponseValidationError"
  }
}

export function createApiClient({
  baseUrl,
  headers: defaultHeaders,
  fetch: fetchImplementation = globalThis.fetch,
}: ApiClientOptions) {
  const normalizedBaseUrl = baseUrl.replace(/\/+$/, "")

  async function request<T>(
    path: string,
    options: ApiRequestOptions<T> = {}
  ): Promise<T> {
    const {
      body,
      headers,
      method = body === undefined ? "GET" : "POST",
      retries = 0,
      timeoutMs = 15_000,
      schema,
      signal: callerSignal,
      ...fetchOptions
    } = options
    const retryCount = Math.max(0, Math.floor(retries))
    const canRetry = (method === "GET" || method === "HEAD") && retryCount > 0
    const url = `${normalizedBaseUrl}/${path.replace(/^\/+/, "")}`
    let attempt = 0

    while (true) {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), timeoutMs)
      const abortFromCaller = () => controller.abort(callerSignal?.reason)
      if (callerSignal?.aborted) {
        abortFromCaller()
      } else {
        callerSignal?.addEventListener("abort", abortFromCaller, { once: true })
      }

      try {
        const requestHeaders = new Headers(defaultHeaders)
        new Headers(headers).forEach((value, key) =>
          requestHeaders.set(key, value)
        )

        let requestBody: BodyInit | undefined
        if (body !== undefined) {
          requestHeaders.set("content-type", "application/json")
          requestBody = JSON.stringify(body)
        }

        const response = await fetchImplementation(url, {
          ...fetchOptions,
          method,
          headers: requestHeaders,
          body: requestBody,
          signal: controller.signal,
        })

        if (!response.ok) {
          const errorBody = await readResponseBody(response)
          if (
            canRetry &&
            attempt < retryCount &&
            (response.status === 429 || response.status >= 500)
          ) {
            attempt += 1
            await waitBeforeRetry(attempt)
            continue
          }
          throw new HttpError(response.status, response.statusText, errorBody)
        }

        if (response.status === 204 || method === "HEAD") {
          return undefined as T
        }

        const responseBody = await readResponseBody(response)
        if (!schema) return responseBody as T

        const result = await schema.safeParseAsync(responseBody)
        if (!result.success) {
          throw new ApiResponseValidationError(
            `Response validation failed: ${result.error.message}`
          )
        }
        return result.data
      } catch (error) {
        if (
          error instanceof HttpError ||
          error instanceof ApiResponseValidationError
        ) {
          throw error
        }

        if (canRetry && attempt < retryCount && !callerSignal?.aborted) {
          attempt += 1
          await waitBeforeRetry(attempt)
          continue
        }

        if (controller.signal.aborted && !callerSignal?.aborted) {
          throw new DOMException(
            `Request timed out after ${timeoutMs}ms`,
            "TimeoutError"
          )
        }
        throw error
      } finally {
        clearTimeout(timeout)
        callerSignal?.removeEventListener("abort", abortFromCaller)
      }
    }
  }

  return { request }
}

async function readResponseBody(response: Response): Promise<unknown> {
  if (response.status === 204) return undefined

  const text = await response.text()
  if (!text) return undefined

  const contentType = response.headers.get("content-type") ?? ""
  if (!contentType.includes("json")) return text

  try {
    return JSON.parse(text) as unknown
  } catch {
    throw new ApiResponseValidationError(
      "The API returned a malformed JSON response."
    )
  }
}

function waitBeforeRetry(attempt: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.min(250 * 2 ** (attempt - 1), 2_000))
  })
}
