"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Check if user is logged in
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("pos_user")
      if (user) {
        router.push("/dashboard")
      } else {
        router.push("/signin")
      }
    }
  }, [router])

  if (!isClient) return null

  return null
}
