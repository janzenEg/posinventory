"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      if (typeof window === "undefined") return
      
      const users = JSON.parse(localStorage.getItem("pos_users") || "[]")
      let user = users.find((u: any) => u.email === email && u.password === password)

      // If user doesn't exist, create them automatically
      if (!user) {
        user = {
          id: Date.now().toString(),
          name: email.split("@")[0],
          email: email,
          password: password,
          role: "cashier",
        }
        users.push(user)
        localStorage.setItem("pos_users", JSON.stringify(users))
      }

      localStorage.setItem(
        "pos_user",
        JSON.stringify({
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }),
      )

      router.push("/dashboard")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/95 backdrop-blur">
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded flex items-center justify-center text-white font-bold">
              POS
            </div>
            <span className="font-bold text-lg">POS System</span>
          </div>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Enter your credentials to access the POS system</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">{error}</div>}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <button onClick={() => router.push("/signup")} className="text-primary hover:underline font-semibold">
              Sign up
            </button>
          </div>
          <div className="mt-4 p-3 bg-violet-50 dark:bg-violet-950 rounded text-xs text-muted-foreground">
            <strong>Quick start:</strong>
            <div>Enter any email and password to create an account instantly</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
