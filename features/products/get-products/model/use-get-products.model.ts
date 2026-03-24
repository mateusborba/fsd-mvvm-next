import { useGetProducts } from "../api/use-get-products";

export const useGetProductsModel = () => {
  const { data = [], isLoading } = useGetProducts();

  const fmt = (v: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(v);

  const totalValue = data?.reduce((acc, p) => acc + p.price, 0);
  const avgPrice = data?.length > 0 ? totalValue / data.length : 0;

  const stats = {
    count: data.length,
    totalValue: fmt(totalValue),
    avgPrice: fmt(avgPrice),
  };

  return { products: data, isLoading, stats };
};
