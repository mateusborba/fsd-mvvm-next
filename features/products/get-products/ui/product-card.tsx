"use client";

import { Pencil, Trash2 } from "lucide-react";
import type { Product } from "@/entities/product/model/product.type";
import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/lib/utils";

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
  isDeleting?: boolean;
}

const ACCENT_COLORS = [
  "from-blue-500/15 to-blue-500/5 border-blue-500/20",
  "from-violet-500/15 to-violet-500/5 border-violet-500/20",
  "from-emerald-500/15 to-emerald-500/5 border-emerald-500/20",
  "from-amber-500/15 to-amber-500/5 border-amber-500/20",
  "from-rose-500/15 to-rose-500/5 border-rose-500/20",
  "from-cyan-500/15 to-cyan-500/5 border-cyan-500/20",
];

const ICON_COLORS = [
  "text-blue-500",
  "text-violet-500",
  "text-emerald-500",
  "text-amber-500",
  "text-rose-500",
  "text-cyan-500",
];

export function ProductCard({
  product,
  onEdit,
  onDelete,
  isDeleting = false,
}: ProductCardProps) {
  const colorIdx = product.id % ACCENT_COLORS.length;
  const accent = ACCENT_COLORS[colorIdx];
  const iconColor = ICON_COLORS[colorIdx];

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    <Card className="group relative flex flex-col border overflow-hidden ring-0 transition-shadow hover:shadow-md">
      {/* Colored top strip */}
      <div
        className={cn(
          "h-1.5 w-full bg-linear-to-r",
          accent.split(" ")[0].replace("from-", "bg-").replace("/15", "/60"),
        )}
      />

      <CardContent className="flex flex-col gap-3 p-4 flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br",
                accent,
              )}
            >
              <span className={cn("text-xs font-bold", iconColor)}>
                {product.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <h3 className="text-sm font-semibold leading-tight line-clamp-2">
              {product.name}
            </h3>
          </div>
          <Badge variant="secondary" className="shrink-0 text-xs">
            #{product.id}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {product.description || "Sem descrição."}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1 border-t">
          <span className="text-base font-bold text-foreground">
            {formattedPrice}
          </span>

          <div className="flex gap-1.5">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => onEdit(product)}
              aria-label={`Editar ${product.name}`}
              className="opacity-60 hover:opacity-100"
            >
              <Pencil />
            </Button>
            <Button
              variant="destructive"
              size="icon-sm"
              onClick={() => onDelete(product.id)}
              disabled={isDeleting}
              aria-label={`Excluir ${product.name}`}
              className="opacity-60 hover:opacity-100"
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
