"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const repairs = [
  { id: "INV-5329", customer: "john Smith", status: "In Progress", device: "iPhone 12", time: "45 min" },
  { id: "INV-5330", customer: "Jane Wilson", status: "In Progress", device: "Samsung S21", time: "1h 20min" },
  { id: "INV-5331", customer: "Bob Johnson", status: "Pending", device: "iPad Air", time: "2h" },
  { id: "INV-5332", customer: "Alice Brown", status: "Completed", device: "MacBook Pro", time: "3h" },
]

export function RepairLab() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Repair Lab</CardTitle>
        <p className="text-sm text-muted-foreground">Ongoing repairs and tickets</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {repairs.map((repair) => (
            <div key={repair.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <div>
                <p className="font-semibold text-sm">{repair.id}</p>
                <p className="text-xs text-muted-foreground">{repair.customer}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground text-right">{repair.device}</p>
                <Badge variant={repair.status === "Completed" ? "default" : "secondary"} className="mt-1">
                  {repair.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{repair.time}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
