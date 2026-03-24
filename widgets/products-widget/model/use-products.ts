"use client";

import { useState } from "react";
import type { Product } from "@/entities/product/model/product.type";
import { useDeleteProductModel } from "@/features/products/delete-product/model/use-delete-product.model";
import { useUpdateProductModel } from "@/features/products/update-product/model/use-update-product.model";
import { useCreateProductModel } from "@/features/products/create-product/model/use-create-product.model";
import { useGetProductsModel } from "@/features/products/get-products/model/use-get-products.model";

const fmt = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    v,
  );

export function useProducts() {
  // --- Feature Model hooks ---

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  function onEditOpenChange(open: boolean) {
    setIsEditOpen(open);
    if (!open) setEditingProduct(null);
  }

  const { onDeleteClick } = useDeleteProductModel();

  const { onEditSubmit, onEditClick, isUpdatingProduct } =
    useUpdateProductModel(onEditOpenChange, setEditingProduct, setIsEditOpen);

  const { onCreateSubmit, isCreatingProduct } = useCreateProductModel({
    setIsCreateOpen,
  });

  const { products = [], isLoading } = useGetProductsModel();

  const totalValue = products.reduce((acc, p) => acc + p.price, 0);
  const avgPrice = products.length > 0 ? totalValue / products.length : 0;

  const stats = {
    count: products.length,
    totalValue: fmt(totalValue),
    avgPrice: fmt(avgPrice),
  };

  return {
    products,
    isLoading,
    stats,
    isCreateOpen,
    onCreateOpenChange: setIsCreateOpen,
    onCreateSubmit,
    isCreating: isCreatingProduct,
    editingProduct,
    isEditOpen,
    onEditOpenChange,
    onEditSubmit,
    isUpdating: isUpdatingProduct,
    onEditClick,
    onDeleteClick,
  };
}
