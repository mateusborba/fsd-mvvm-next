import { Product } from "@/entities/product/model/product.type";
import { useState } from "react";

export const useProductsWidgetModel = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);

  return {
    isCreateOpen,
    productToEdit,
    setIsCreateOpen,
    setProductToEdit,
  };
};
