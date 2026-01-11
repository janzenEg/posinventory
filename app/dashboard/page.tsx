"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { MetricCards } from "@/components/dashboard/metric-cards"
import { SalesChart } from "@/components/dashboard/sales-chart"
import { AttendanceRatio } from "@/components/dashboard/attendance-ratio"
import { TicketsStatus } from "@/components/dashboard/tickets-status"
import { RepairLab } from "@/components/dashboard/repair-lab"
import { InventoryAlerts } from "@/components/dashboard/inventory-alerts"

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("pos_user")
      if (!userData) {
        router.push("/signin")
        return
      }
      setUser(JSON.parse(userData))
    }
  }, [router])

  if (!user) return null

  return (
    <div className="flex h-screen bg-background">
      <Sidebar user={user} />
      <div className="flex-1 overflow-auto">
        <DashboardHeader user={user} />
        <main className="p-6 space-y-6">
          <MetricCards role={user.role} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <SalesChart />
              <RepairLab />
            </div>
            <div className="space-y-6">
              <AttendanceRatio />
              <TicketsStatus />
              <InventoryAlerts />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
