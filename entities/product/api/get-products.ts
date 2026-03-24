import type { Product } from "@/entities/product/model/product.type"
import { productMockStore, delay } from "./_mock-store"

// Substituir pelo httpClient quando houver backend real:
// httpClient.request<Product[]>({ type: "GET", endpoint: "/products" })
export async function getProducts(): Promise<Product[]> {
  await delay()
  return structuredClone(productMockStore.items)
}
