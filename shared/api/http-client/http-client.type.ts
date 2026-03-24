export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export interface HttpRequest {
  type: HttpMethod
  endpoint: string
  params?: Record<string, string | number | boolean>
  body?: unknown
  headers?: Record<string, string>
}

export interface IHttpClient {
  request<T>(req: HttpRequest): Promise<T>
}
