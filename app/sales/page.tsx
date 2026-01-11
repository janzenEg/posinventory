"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SalesPageContent } from "@/components/sales/sales-page-content"

export default function SalesPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("pos_user")
      if (!userData) {
        router.push("/signin")
        return
      }
      const parsedUser = JSON.parse(userData)
      if (parsedUser.role === "admin") {
        router.push("/dashboard")
        return
      }
      setUser(parsedUser)
    }
  }, [router])

  if (!user) return null

  return (
    <div className="flex h-screen bg-background">
      <Sidebar user={user} />
      <div className="flex-1 overflow-auto">
        <DashboardHeader user={user} />
        <SalesPageContent />
      </div>
    </div>
  )
}
