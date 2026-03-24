"use client";

import { PackageOpen } from "lucide-react";
import type { Product } from "@/entities/product/model/product.type";
import { ProductCard } from "./product-card";

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
  deletingId?: number | null;
}

export function ProductList({
  products,
  onEdit,
  onDelete,
  deletingId,
}: ProductListProps) {
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
          isDeleting={deletingId === product.id}
        />
      ))}
    </div>
  );
}
