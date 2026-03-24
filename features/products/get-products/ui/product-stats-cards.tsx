"use client";

import { TrendingUp, DollarSign, Layers } from "lucide-react";
import { useGetProductsModel } from "../../get-products/model/use-get-products.model";
import { StatCard } from "@/entities/product/ui/product-stats-card";

export function ProductStatsCards() {
  const { isLoading, stats } = useGetProductsModel();

  return (
    <div className="grid grid-cols-1 gap-4 px-6 py-5 sm:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <StatCard
          key={i}
          icon={i === 0 ? Layers : i === 1 ? DollarSign : TrendingUp}
          label={
            i === 0
              ? "Total de produtos"
              : i === 1
                ? "Valor total do catálogo"
                : "Preço médio"
          }
          value={
            i === 0
              ? String(stats.count)
              : i === 1
                ? stats.totalValue
                : stats.avgPrice
          }
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}
