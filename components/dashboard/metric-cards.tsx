"use client"

import { DollarSign, TrendingUp, Package, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const METRICS = {
  cashier: [
    { icon: DollarSign, label: "Today's Sales", value: "₱1230.50", change: "+12%", color: "bg-violet-500" },
    { icon: DollarSign, label: "Money in Drawer", value: "₱530.2", change: "-1.2%", color: "bg-purple-500" },
    { icon: Package, label: "Pending Devices", value: "4", change: "3 new customers", color: "bg-violet-400" },
    { icon: Zap, label: "Check In Device", value: "Action", change: "Quick access", color: "bg-purple-500" },
  ],
  technician: [
    { icon: DollarSign, label: "Today's Repairs", value: "8", change: "+3 from yesterday", color: "bg-violet-500" },
    { icon: Package, label: "Pending Devices", value: "12", change: "3 urgent", color: "bg-purple-400" },
    {
      icon: DollarSign,
      label: "Repair Revenue",
      value: "₱2456.00",
      change: "+15% from last week",
      color: "bg-violet-500",
    },
    { icon: Zap, label: "Check In Device", value: "Action", change: "Quick access", color: "bg-purple-500" },
  ],
  manager: [
    {
      icon: DollarSign,
      label: "Total Revenue",
      value: "₱10,456.00",
      change: "+12% from yesterday",
      color: "bg-violet-500",
    },
    { icon: Package, label: "Inventory Value", value: "₱25,890", change: "432 items", color: "bg-purple-400" },
    { icon: TrendingUp, label: "Staff on Duty", value: "8", change: "2 on break", color: "bg-violet-400" },
    { icon: Package, label: "Pending Orders", value: "24", change: "Need attention", color: "bg-purple-500" },
  ],
  admin: [
    {
      icon: DollarSign,
      label: "Total Revenue",
      value: "₱48,932.00",
      change: "+23% this month",
      color: "bg-violet-500",
    },
    { icon: Package, label: "Inventory Value", value: "₱125,456", change: "2,450 items", color: "bg-purple-400" },
    { icon: TrendingUp, label: "Total Staff", value: "32", change: "4 locations", color: "bg-violet-400" },
    { icon: Package, label: "System Health", value: "99.8%", change: "Optimal", color: "bg-purple-500" },
  ],
}

export function MetricCards({ role }: { role: string }) {
  const metrics = METRICS[role as keyof typeof METRICS] || METRICS.cashier

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold mt-2">{metric.value}</p>
                <p className="text-xs text-muted-foreground mt-2">{metric.change}</p>
              </div>
              <div className={`${metric.color} p-3 rounded-lg`}>
                <metric.icon size={20} className="text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
