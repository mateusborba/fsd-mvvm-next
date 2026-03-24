import axios, { type AxiosInstance } from "axios"
import type { IHttpClient, HttpRequest } from "./http-client.type"

export class AxiosAdapter implements IHttpClient {
  private readonly client: AxiosInstance

  constructor(baseUrl: string = "") {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: { "Content-Type": "application/json" },
    })
  }

  async request<T>({ type, endpoint, params, body, headers }: HttpRequest): Promise<T> {
    const { data } = await this.client.request<T>({
      method: type,
      url: endpoint,
      params,
      data: body,
      headers,
    })
    return data
  }
}
