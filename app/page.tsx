"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Redirect to dashboard
    router.push("/dashboard")
  }, [router])

  if (!isClient) return null

  return null
}
