import type { IHttpClient, HttpRequest } from "./http-client.type"

export class FetchAdapter implements IHttpClient {
  constructor(private readonly baseUrl: string = "") {}

  private buildUrl(endpoint: string, params?: HttpRequest["params"]): string {
    const fullUrl = `${this.baseUrl}${endpoint}`
    if (!params) return fullUrl
    const query = new URLSearchParams(
      Object.entries(params).reduce(
        (acc, [k, v]) => ({ ...acc, [k]: String(v) }),
        {} as Record<string, string>
      )
    )
    return `${fullUrl}?${query.toString()}`
  }

  async request<T>({ type, endpoint, params, body, headers }: HttpRequest): Promise<T> {
    const response = await fetch(this.buildUrl(endpoint, params), {
      method: type,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`)
    }

    return response.json() as Promise<T>
  }
}
