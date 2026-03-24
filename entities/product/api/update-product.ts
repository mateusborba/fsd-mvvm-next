import type { Product, UpdateProductDto } from "@/entities/product/model/product.type"
import { productMockStore, delay } from "./_mock-store"

// Substituir pelo httpClient quando houver backend real:
// httpClient.request<Product>({ type: "PUT", endpoint: `/products/${id}`, body: dto })
export async function updateProduct(id: number, dto: UpdateProductDto): Promise<Product> {
  await delay()
  const index = productMockStore.items.findIndex((p) => p.id === id)
  if (index === -1) throw new Error(`Product ${id} not found`)
  productMockStore.items = productMockStore.items.map((p) =>
    p.id === id ? { ...p, ...dto } : p
  )
  return structuredClone(productMockStore.items[index])
}
