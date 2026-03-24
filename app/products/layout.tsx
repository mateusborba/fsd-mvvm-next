import { AppLayout } from "@/widgets/app-layout/ui/app-layout";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
