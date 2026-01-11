"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SalesChart() {
  return (
    <Card className="bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>Total Revenue</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Your revenue overview</p>
          </div>
          <div className="text-right min-w-0">
            <p className="text-3xl font-bold leading-tight">₱10,456.00</p>
            <p className="text-xs text-green-500 mt-1">↑ 12% from last week</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="h-56 rounded-lg flex items-end justify-around p-4 pb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-32 bg-violet-500 rounded-t opacity-70"></div>
              <span className="text-xs font-medium text-foreground">Mon</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-40 bg-violet-500 rounded-t"></div>
              <span className="text-xs font-medium text-foreground">Tue</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-28 bg-violet-500 rounded-t opacity-70"></div>
              <span className="text-xs font-medium text-foreground">Wed</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-36 bg-violet-500 rounded-t opacity-80"></div>
              <span className="text-xs font-medium text-foreground">Thu</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-32 bg-violet-500 rounded-t opacity-70"></div>
              <span className="text-xs font-medium text-foreground">Fri</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-44 bg-violet-500 rounded-t"></div>
              <span className="text-xs font-medium text-foreground">Sat</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-30 bg-violet-500 rounded-t opacity-80"></div>
              <span className="text-xs font-medium text-foreground">Sun</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-violet-500 rounded"></div>
              <span className="text-xs text-muted-foreground">Daily Revenue</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
