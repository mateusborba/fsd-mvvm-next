"use client";

import { TrendingUp, DollarSign, Layers } from "lucide-react";
import { Separator } from "@/shared/ui/separator";
import { useProducts } from "../model/use-products";
import { PageHeader } from "@/widgets/page-header/ui/page-header";
import { StatCard } from "@/features/products/get-products-stats/ui/product-stats-card";
import { ProductList } from "@/features/products/get-products/ui/product-list";
import { CreateProductDialog } from "@/features/products/create-product/create-product-dialog";
import { EditProductDrawer } from "@/features/products/update-product/ui/edit-product-drawer";

export function ProductsWidget() {
  const vm = useProducts();

  return (
    <div className="flex flex-col gap-0">
      {/* Header */}
      <PageHeader
        title="Produtos"
        description="Gerencie o catálogo de produtos"
        action={(value: boolean) => vm.onCreateOpenChange(value)}
        actionLabel="Novo produto"
      />

      <Separator />

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 px-6 py-5 sm:grid-cols-3">
        <StatCard
          icon={Layers}
          label="Total de produtos"
          value={String(vm.stats.count)}
          isLoading={vm.isLoading}
        />
        <StatCard
          icon={DollarSign}
          label="Valor total do catálogo"
          value={vm.stats.totalValue}
          isLoading={vm.isLoading}
        />
        <StatCard
          icon={TrendingUp}
          label="Preço médio"
          value={vm.stats.avgPrice}
          isLoading={vm.isLoading}
        />
      </div>

      <Separator />

      {/* Product grid */}
      <div className="px-6 py-5">
        {vm.isLoading ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-52 animate-pulse rounded-xl bg-muted" />
            ))}
          </div>
        ) : (
          <ProductList
            products={vm.products}
            onEdit={vm.onEditClick}
            onDelete={vm.onDeleteClick}
            deletingId={vm.deletingId}
          />
        )}
      </div>

      {/* Dialogs */}
      <CreateProductDialog
        open={vm.isCreateOpen}
        onOpenChange={vm.onCreateOpenChange}
        onSubmit={vm.onCreateSubmit}
        isPending={vm.isCreating}
      />
      <EditProductDrawer
        product={vm.editingProduct}
        open={vm.isEditOpen}
        onOpenChange={vm.onEditOpenChange}
        onSubmit={vm.onEditSubmit}
        isPending={vm.isUpdating}
      />
    </div>
  );
}
