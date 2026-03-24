"use client";

import { Separator } from "@/shared/ui/separator";
import { Plus } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { PageHeader } from "@/widgets/page-header/ui/page-header";
import { ProductStatsCards } from "@/features/products/get-products-stats/ui/product-stats-cards";
import { ProductList } from "@/features/products/get-products/ui/product-list";
import { CreateProductDialog } from "@/features/products/create-product/ui/create-product-dialog";
import { EditProductDrawer } from "@/features/products/update-product/ui/update-product-drawer";
import { useProductsWidgetModel } from "../model/use-products-widget.model";

export function ProductsWidget() {
  const { isCreateOpen, productToEdit, setIsCreateOpen, setProductToEdit } =
    useProductsWidgetModel();

  return (
    <div className="flex flex-col gap-0">
      <PageHeader
        title="Produtos"
        description="Gerencie o catálogo de produtos"
        action={
          <Button size="lg" onClick={() => setIsCreateOpen(true)}>
            <Plus />
            Novo produto
          </Button>
        }
      />

      <Separator />

      <ProductStatsCards />

      <Separator />

      <div className="px-6 py-5">
        <ProductList onEdit={setProductToEdit} />
      </div>

      <CreateProductDialog
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />

      <EditProductDrawer
        product={productToEdit}
        onClose={() => setProductToEdit(null)}
      />
    </div>
  );
}
