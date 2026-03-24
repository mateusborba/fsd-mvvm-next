import { useGetProducts } from "../api/use-get-products";

export const useGetProductsModel = () => {
  const { data: products, isLoading } = useGetProducts();

  return { products, isLoading };
};
