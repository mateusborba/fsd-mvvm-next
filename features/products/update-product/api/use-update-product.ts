"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UpdateProductDto } from "@/entities/product/model/product.type";
import { updateProduct } from "@/entities/product/api/update-product";
import { PRODUCTS_QUERY_KEY } from "../../get-products/api/use-get-products";

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, dto }: { id: number; dto: UpdateProductDto }) =>
      updateProduct(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
    },
  });
}
