"use client"

import { Search, Bell, MessageCircle, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function DashboardHeader({ user }: { user: any }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 border-b border-sidebar-border">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome! 👋 {user.name}</h1>
          <p className="text-blue-100 text-sm mt-1">Take a look at the latest updates for your POS.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search item or ticket number"
              className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50 w-64"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <MessageCircle size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Settings size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}
