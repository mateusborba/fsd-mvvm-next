import {
  Product,
  UpdateProductDto,
} from "@/entities/product/model/product.type";
import { useUpdateProduct } from "../api/use-update-product";
import { useForm } from "react-hook-form";
import {
  productFormSchema,
  ProductFormValues,
} from "@/entities/product/model/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

type UseUpdateProductDrawerModel = {
  product: Product | null;
  onClose: () => void;
};

export const useUpdateProductDrawerModel = ({
  product,
  onClose,
}: UseUpdateProductDrawerModel) => {
  const open = product !== null;
  const { mutateAsync, isPending } = useUpdateProduct();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        description: product.description,
        price: product.price,
      });
    }
  }, [product, reset]);

  const onFormSubmit = async (values: ProductFormValues) => {
    if (!product) return;
    await mutateAsync(
      { id: product.id, dto: values as UpdateProductDto },
      { onSuccess: () => onClose() },
    );
  };

  const handleOpenChange = (value: boolean) => {
    if (!isPending && !value) onClose();
  };

  return {
    open,
    register,
    handleSubmit,
    errors,
    isValid,
    onFormSubmit,
    handleOpenChange,
    isPending,
  };
};
