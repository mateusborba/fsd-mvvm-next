import { Product } from "@/entities/product/model/product.type";
import { useCreateProduct } from "../api/use-create-product";

export const useCreateProductModel = ({
  setIsCreateOpen,
}: {
  setIsCreateOpen: (state: boolean) => void;
}) => {
  const { mutateAsync, isPending: isCreatingProduct } = useCreateProduct();

  const onCreateSubmit = async (dto: Omit<Product, "id">) => {
    await mutateAsync(dto, {
      onSuccess: () => setIsCreateOpen(false),
    });
  };

  return { onCreateSubmit, isCreatingProduct };
};
