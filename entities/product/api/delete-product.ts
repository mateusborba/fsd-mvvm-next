import { productMockStore, delay } from "./_mock-store"

// Substituir pelo httpClient quando houver backend real:
// httpClient.request<void>({ type: "DELETE", endpoint: `/products/${id}` })
export async function deleteProduct(id: number): Promise<void> {
  await delay()
  productMockStore.items = productMockStore.items.filter((p) => p.id !== id)
}
