"use client";

import { PackagePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Textarea } from "@/shared/ui/textarea";
import { useCreateProductModel } from "../model/use-create-product.model";

interface CreateProductDialogProps {
  open: boolean;
  onClose: () => void;
}

export function CreateProductDialog({
  open,
  onClose,
}: CreateProductDialogProps) {
  const {
    isCreatingProduct,
    register,
    handleSubmit,
    onFormSubmit,
    handleOpenChange,
    errors,
    isValid,
  } = useCreateProductModel(onClose);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
              <PackagePlus className="size-5 text-primary" />
            </div>
            <div>
              <DialogTitle>Novo Produto</DialogTitle>
              <DialogDescription className="text-xs">
                Preencha os dados para cadastrar um produto.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="create-name">
              Nome <span className="text-destructive">*</span>
            </Label>
            <Input
              id="create-name"
              placeholder="Ex: Notebook Pro X1"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="create-description">Descrição</Label>
            <Textarea
              id="create-description"
              placeholder="Descreva as características do produto..."
              rows={3}
              className="resize-none"
              {...register("description")}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="create-price">
              Preço (R$) <span className="text-destructive">*</span>
            </Label>
            <Input
              id="create-price"
              type="number"
              min="0"
              step="0.01"
              placeholder="0,00"
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price && (
              <p className="text-xs text-destructive">{errors.price.message}</p>
            )}
          </div>

          <DialogFooter className="pt-2">
            <Button
              size="lg"
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={isCreatingProduct}
            >
              Cancelar
            </Button>
            <Button
              size="lg"
              type="submit"
              disabled={!isValid || isCreatingProduct}
            >
              {isCreatingProduct ? "Criando..." : "Criar Produto"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
