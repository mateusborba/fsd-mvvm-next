import { useGetProductsModel } from "../../get-products/model/use-get-products.model";

export const useGetProductsStatsModel = () => {
  const { products = [] } = useGetProductsModel();

  const fmt = (v: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(v);

  const totalValue = products.reduce((acc, p) => acc + p.price, 0);
  const avgPrice = products.length > 0 ? totalValue / products.length : 0;

  const stats = {
    count: products.length,
    totalValue: fmt(totalValue),
    avgPrice: fmt(avgPrice),
  };

  return {
    stats,
  };
};
