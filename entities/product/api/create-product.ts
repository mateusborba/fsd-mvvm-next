import type { Product, CreateProductDto } from "@/entities/product/model/product.type"
import { productMockStore, delay } from "./_mock-store"

// Substituir pelo httpClient quando houver backend real:
// httpClient.request<Product>({ type: "POST", endpoint: "/products", body: dto })
export async function createProduct(dto: CreateProductDto): Promise<Product> {
  await delay()
  const product: Product = { id: productMockStore.nextId++, ...dto }
  productMockStore.items = [...productMockStore.items, product]
  return structuredClone(product)
}
