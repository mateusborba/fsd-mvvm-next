import { useDeleteProduct } from "../api/use-delete-product";

export const useDeleteProductModel = () => {
  const { mutateAsync, isPending } = useDeleteProduct();

  const onDeleteClick = async (id: number) => {
    await mutateAsync(id);
  };

  return { onDeleteClick, isPending };
};
