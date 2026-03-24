"use client";
import { PencilLine } from "lucide-react";
import type { Product } from "@/entities/product/model/product.type";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/shared/ui/sheet";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Textarea } from "@/shared/ui/textarea";
import { Separator } from "@/shared/ui/separator";
import { useUpdateProductDrawerModel } from "../model/use-update-product-drawer.model";

interface EditProductDrawerProps {
  product: Product | null;
  onClose: () => void;
}

export function EditProductDrawer({
  product,
  onClose,
}: EditProductDrawerProps) {
  const {
    open,
    register,
    handleSubmit,
    errors,
    isValid,
    onFormSubmit,
    handleOpenChange,
    isPending,
  } = useUpdateProductDrawerModel({ product, onClose });

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 p-0 sm:max-w-md"
      >
        {/* Drawer header */}
        <SheetHeader className="px-5 py-4 border-b">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
              <PencilLine className="size-5 text-primary" />
            </div>
            <div>
              <SheetTitle className="text-base">Editar Produto</SheetTitle>
              <SheetDescription className="text-xs">
                {product?.name ?? ""}
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        {/* Form body + footer */}
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="flex flex-col flex-1 overflow-hidden"
        >
          <div className="flex flex-col gap-5 flex-1 overflow-y-auto px-5 py-5">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="edit-name">
                Nome <span className="text-destructive">*</span>
              </Label>
              <Input
                id="edit-name"
                placeholder="Nome do produto"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="edit-description">Descrição</Label>
              <Textarea
                id="edit-description"
                placeholder="Descrição do produto"
                rows={4}
                className="resize-none"
                {...register("description")}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="edit-price">
                Preço (R$) <span className="text-destructive">*</span>
              </Label>
              <Input
                id="edit-price"
                type="number"
                min="0"
                step="0.01"
                placeholder="0,00"
                {...register("price", { valueAsNumber: true })}
              />
              {errors.price && (
                <p className="text-xs text-destructive">
                  {errors.price.message}
                </p>
              )}
            </div>
          </div>

          {/* Drawer footer */}
          <div className="shrink-0 border-t px-5 py-4">
            <Separator className="mb-4" />
            <div className="flex flex-col gap-2">
              <Button type="submit" disabled={!isValid || isPending} size="lg">
                {isPending ? "Salvando..." : "Salvar Alterações"}
              </Button>
              <Button
                size="lg"
                type="button"
                variant="outline"
                onClick={() => handleOpenChange(false)}
                disabled={isPending}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
