"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { RepairsPageContent } from "@/components/repairs/repairs-page-content"

export default function RepairsPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("pos_user")
      let parsedUser
      if (userData) {
        parsedUser = JSON.parse(userData)
      } else {
        // Default technician user if none exists
        parsedUser = {
          id: "1",
          name: "Technician",
          email: "tech@pos.com",
          role: "technician",
        }
        localStorage.setItem("pos_user", JSON.stringify(parsedUser))
      }
      if (parsedUser.role === "cashier" || parsedUser.role === "admin") {
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
        <RepairsPageContent />
      </div>
    </div>
  )
}
