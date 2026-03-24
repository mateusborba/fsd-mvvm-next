import type { Product } from "@/entities/product/model/product.type"
import { MOCK_PRODUCTS } from "@/entities/product/model/product.mock"

export const productMockStore = {
  items: structuredClone(MOCK_PRODUCTS) as Product[],
  nextId: MOCK_PRODUCTS.length + 1,
}

export function delay(ms = 400): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
