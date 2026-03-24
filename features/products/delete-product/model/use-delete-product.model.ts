import { Product } from "@/entities/product/model/product.type";
import { useDeleteProduct } from "../api/use-delete-product";

export const useDeleteProductModel = () => {
  const { mutateAsync, isPending } = useDeleteProduct();

  const onDeleteClick = async (product: Product) => {
    await mutateAsync(product.id);
  };

  return { onDeleteClick, isPending };
};
