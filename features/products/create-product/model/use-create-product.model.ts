import { CreateProductDto } from "@/entities/product/model/product.type";
import { useCreateProduct } from "../api/use-create-product";
import {
  productFormSchema,
  ProductFormValues,
} from "@/entities/product/model/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useCreateProductModel = (onClose: () => void) => {
  const { mutateAsync, isPending: isCreatingProduct } = useCreateProduct();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    mode: "onChange",
  });

  const onFormSubmit = async (values: ProductFormValues) => {
    await mutateAsync(values as CreateProductDto, {
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  const handleOpenChange = (value: boolean) => {
    if (!isCreatingProduct) {
      reset();
      if (!value) onClose();
    }
  };

  return {
    isCreatingProduct,
    register,
    handleSubmit,
    onFormSubmit,
    handleOpenChange,
    errors,
    isValid,
  };
};
