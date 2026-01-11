"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { InventoryPageContent } from "@/components/inventory/inventory-page-content"

export default function InventoryPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("pos_user")
      if (userData) {
        setUser(JSON.parse(userData))
      } else {
        // Default user if none exists
        const defaultUser = {
          id: "1",
          name: "Admin",
          email: "admin@pos.com",
          role: "admin",
        }
        setUser(defaultUser)
        localStorage.setItem("pos_user", JSON.stringify(defaultUser))
      }
    }
  }, [router])

  if (!user) return null

  return (
    <div className="flex h-screen bg-background">
      <Sidebar user={user} />
      <div className="flex-1 overflow-auto">
        <DashboardHeader user={user} />
        <InventoryPageContent />
      </div>
    </div>
  )
}
