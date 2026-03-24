export interface Product {
  id: number
  name: string
  description: string
  price: number
}

export type CreateProductDto = Omit<Product, "id">
export type UpdateProductDto = Partial<CreateProductDto>
