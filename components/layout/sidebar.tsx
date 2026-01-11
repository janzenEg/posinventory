"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Package, Wrench, Users, Settings, LogOut, Home, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Sidebar({ user }: { user: any }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    ...(user.role !== "admin" ? [{ icon: ShoppingCart, label: "Sales", href: "/sales" }] : []),
    ...(user.role !== "cashier" ? [{ icon: Wrench, label: "Repairs", href: "/repairs" }] : []),
    { icon: Package, label: "Inventory", href: "/inventory" },
    ...(user.role === "manager" || user.role === "admin" ? [{ icon: Users, label: "Staff", href: "/staff" }] : []),
    ...(user.role === "admin" ? [{ icon: Settings, label: "Settings", href: "/settings" }] : []),
  ]

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("pos_user")
    }
    router.push("/signin")
  }

  return (
    <div
      className={`${isOpen ? "w-64" : "w-20"} bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col h-screen`}
    >
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded flex items-center justify-center text-white font-bold text-lg">
            P
          </div>
          {isOpen && <span className="font-bold text-lg text-sidebar-foreground">POS</span>}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.href}
            onClick={() => router.push(item.href)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground transition-colors"
          >
            <item.icon size={20} />
            {isOpen && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border space-y-2">
        <div
          className={`text-xs font-semibold text-sidebar-foreground uppercase tracking-wider ${!isOpen && "text-center"}`}
        >
          {isOpen ? user.name : user.name.slice(0, 1)}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          {isOpen && <span className="ml-2">Logout</span>}
        </Button>
      </div>
    </div>
  )
}
