import { Product } from "@/entities/product/model/product.type";
import { useDeleteProductModel } from "@/features/products/delete-product/model/use-delete-product.model";
import { useState } from "react";

export const useProductsWidgetModel = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const { onDeleteClick, isPending: isDeleting } = useDeleteProductModel();

  return {
    isCreateOpen,
    productToEdit,
    setIsCreateOpen,
    setProductToEdit,
    onDeleteClick,
    isDeleting,
  };
};
