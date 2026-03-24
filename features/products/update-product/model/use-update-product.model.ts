import { Product } from "@/entities/product/model/product.type";
import { useUpdateProduct } from "../api/use-update-product";

export const useUpdateProductModel = (
  onEditOpenChange: (state: boolean) => void,
  setEditingProduct: (product: Product) => void,
  setIsEditOpen: (state: boolean) => void,
) => {
  const { mutateAsync, isPending: isUpdatingProduct } = useUpdateProduct();

  const onEditSubmit = async (
    id: number,
    dto: Partial<Omit<Product, "id">>,
  ) => {
    await mutateAsync(
      { id, dto },
      { onSuccess: () => onEditOpenChange(false) },
    );
  };

  const onEditClick = (product: Product) => {
    setEditingProduct(product);
    setIsEditOpen(true);
  };

  return { onEditSubmit, onEditClick, isUpdatingProduct };
};
