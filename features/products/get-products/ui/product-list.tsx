"use client";

import { PackageOpen } from "lucide-react";
import type { Product } from "@/entities/product/model/product.type";
import { useGetProductsModel } from "../model/use-get-products.model";
import { ProductCard } from "@/entities/product/ui/product-card";

interface ProductListProps {
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
  isDeleting?: boolean;
}

export function ProductList({
  onEdit,
  onDelete,
  isDeleting = false,
}: ProductListProps) {
  const { products = [], isLoading } = useGetProductsModel();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-52 animate-pulse rounded-xl bg-muted" />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed py-16 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-muted">
          <PackageOpen className="size-7 text-muted-foreground" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">
            Nenhum produto cadastrado
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Clique em &quot;Novo Produto&quot; para começar.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
          isDeleting={isDeleting}
        />
      ))}
    </div>
  );
}
