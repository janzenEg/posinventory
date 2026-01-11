"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AttendanceRatio() {
  return (
    <Card className="bg-gradient-to-br from-violet-500 to-purple-600 text-white">
      <CardHeader>
        <CardTitle className="text-xl">Employees</CardTitle>
        <p className="text-sm text-violet-100">Attendance Ratio</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative w-32 h-32 mx-auto">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="8" opacity="0.2" />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={`${((65 * Math.PI) / 100) * 2} ${Math.PI * 100}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold">65%</p>
              <p className="text-xs">On Time</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-4">
          <div className="text-center">
            <p className="text-lg font-bold">40</p>
            <p className="text-xs text-violet-100">Total</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">32</p>
            <p className="text-xs text-violet-100">Present</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">8</p>
            <p className="text-xs text-violet-100">Absent</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
