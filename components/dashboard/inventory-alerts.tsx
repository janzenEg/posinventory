"use client"

import { Megaphone, MoreVertical } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function InventoryAlerts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white rounded-lg">
                <Megaphone className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-sm font-semibold text-orange-800">Most Used Item</h3>
            </div>
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-lg font-bold text-gray-900">Iphone 12 pro LCD Screen</p>
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-gray-900">₱120</p>
            <Badge className="bg-purple-500 text-white">In stock: 20</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white rounded-lg">
                <Megaphone className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-sm font-semibold text-orange-800">Item Needs to Order</h3>
            </div>
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-lg font-bold text-gray-900">Samsung S22 Front Cam</p>
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-gray-900">₱85</p>
            <Badge className="bg-red-500 text-white">In stock: 5</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
