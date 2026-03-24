import { Card, CardContent } from "@/shared/ui/card";
import React from "react";

type StatsCardProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  isLoading: boolean;
};

export function StatCard({
  icon: Icon,
  label,
  value,
  isLoading,
}: StatsCardProps) {
  return (
    <Card className="shadow-sm">
      <CardContent className="flex items-center gap-4 py-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground truncate">{label}</p>
          {isLoading ? (
            <div className="mt-1 h-5 w-20 animate-pulse rounded bg-muted" />
          ) : (
            <p className="text-lg font-semibold leading-tight">{value}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
