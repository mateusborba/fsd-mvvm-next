"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateProductDto } from "@/entities/product/model/product.type";
import { createProduct } from "@/entities/product/api/create-product";
import { PRODUCTS_QUERY_KEY } from "../../get-products/api/use-get-products";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateProductDto) => createProduct(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
    },
  });
}
