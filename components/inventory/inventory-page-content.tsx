"use client"

import { useState } from "react"
import { Plus, Search, Edit2, Trash2, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const INVENTORY_ITEMS = [
  { id: 1, name: "iPhone Screen", sku: "PART1001", quantity: 45, reorderLevel: 20, price: 45.0, category: "Parts" },
  { id: 2, name: "Battery Pack", sku: "PART1002", quantity: 8, reorderLevel: 50, price: 25.0, category: "Parts" },
  { id: 3, name: "USB Cable", sku: "ACC1001", quantity: 156, reorderLevel: 100, price: 8.99, category: "Accessories" },
  {
    id: 4,
    name: "Screen Protector",
    sku: "ACC1002",
    quantity: 34,
    reorderLevel: 50,
    price: 4.99,
    category: "Accessories",
  },
  { id: 5, name: "Phone Case", sku: "ACC1003", quantity: 67, reorderLevel: 40, price: 12.99, category: "Accessories" },
  {
    id: 6,
    name: "Bluetooth Speaker",
    sku: "ACC1004",
    quantity: 12,
    reorderLevel: 15,
    price: 34.99,
    category: "Accessories",
  },
]

export function InventoryPageContent() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = INVENTORY_ITEMS.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const lowStockItems = filteredItems.filter((item) => item.quantity <= item.reorderLevel)
  const totalValue = filteredItems.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <main className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Inventory Management</h1>
          <p className="text-muted-foreground text-sm mt-1">Track and manage all inventory items</p>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <Plus size={20} className="mr-2" />
          Add Item
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Items</p>
              <p className="text-3xl font-bold mt-2">{filteredItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Value</p>
              <p className="text-3xl font-bold mt-2">₱{totalValue.toFixed(2)}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Low Stock Items</p>
              <p className="text-3xl font-bold text-orange-500 mt-2">{lowStockItems.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Categories</p>
              <p className="text-3xl font-bold mt-2">12</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Inventory Items</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name or SKU..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-sm">Item Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">SKU</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Quantity</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Reorder Level</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Unit Price</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Total Value</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-secondary/30 transition-colors">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{item.sku}</td>
                    <td className="py-3 px-4 text-sm font-semibold">{item.quantity}</td>
                    <td className="py-3 px-4 text-sm">{item.reorderLevel}</td>
                    <td className="py-3 px-4 text-sm">₱{item.price.toFixed(2)}</td>
                    <td className="py-3 px-4 text-sm font-semibold">₱{(item.quantity * item.price).toFixed(2)}</td>
                    <td className="py-3 px-4">
                      {item.quantity <= item.reorderLevel ? (
                        <Badge className="bg-violet-500/20 text-violet-600">
                          <AlertTriangle size={14} className="mr-1" />
                          Low Stock
                        </Badge>
                      ) : (
                        <Badge className="bg-purple-500/20 text-purple-600">In Stock</Badge>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit2 size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
