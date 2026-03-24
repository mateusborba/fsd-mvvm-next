"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/entities/product/api/get-products";

export const PRODUCTS_QUERY_KEY = ["products"];

export function useGetProducts() {
  return useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: getProducts,
  });
}
