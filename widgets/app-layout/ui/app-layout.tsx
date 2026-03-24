import { LayoutDashboard, Package, ShoppingCart, Settings, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/shared/ui/separator"

const NAV_ITEMS = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard", icon: Package, label: "Produtos" },
  { href: "/dashboard", icon: ShoppingCart, label: "Pedidos" },
  { href: "/dashboard", icon: BarChart3, label: "Relatórios" },
]

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex w-60 flex-col border-r bg-card shrink-0">
        {/* Brand */}
        <div className="flex items-center gap-2.5 px-5 h-14 border-b">
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary">
            <Package className="size-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-sm tracking-tight">Gestão de Produtos</span>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-0.5 p-3 flex-1">
          {NAV_ITEMS.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Icon className="size-4 shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Settings className="size-4 shrink-0" />
            Configurações
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center gap-4 border-b bg-card px-6 h-14 shrink-0">
          {/* Mobile brand */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary">
              <Package className="size-3.5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-sm">Gestão</span>
          </div>
          <Separator orientation="vertical" className="h-5 md:hidden" />
          <p className="text-sm text-muted-foreground hidden md:block">
            Bem-vindo ao painel de controle
          </p>

          <div className="ml-auto flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
              US
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
