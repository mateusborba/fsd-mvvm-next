"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/entities/product/api/delete-product";
import { PRODUCTS_QUERY_KEY } from "../../get-products/api/use-get-products";

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  console.log("entrou aqui");

  return useMutation({
    mutationFn: (id: number) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
    },
  });
}
