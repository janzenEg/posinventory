"use client"

import { useState } from "react"
import { ShoppingCart, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const PRODUCTS = {
  accessories: [
    { id: 1, name: "Apple Airpods", sku: "SKU1004594872189", price: 56.0, image: "🎧", inStock: 156 },
    { id: 2, name: "Bluetooth Earods", sku: "SKU1005489872189", price: 25.0, image: "🎧", inStock: 89 },
    { id: 3, name: "USB Power Bank", sku: "SKU1006589872189", price: 56.0, image: "🔌", inStock: 45 },
    { id: 4, name: "Xiaomi watch M9", sku: "SKU1007689872189", price: 56.0, image: "⌚", inStock: 23 },
  ],
  devices: [
    { id: 5, name: "iPhone 13 Pro", sku: "SKU2001594872189", price: 799.0, image: "📱", inStock: 12 },
    { id: 6, name: "Samsung Galaxy S21", sku: "SKU2002594872189", price: 699.0, image: "📱", inStock: 8 },
    { id: 7, name: "iPad Air", sku: "SKU2003594872189", price: 599.0, image: "📱", inStock: 5 },
  ],
  services: [
    { id: 8, name: "Screen Replacement", sku: "SVC1001", price: 89.0, image: "🔧", inStock: 999 },
    { id: 9, name: "Battery Replacement", sku: "SVC1002", price: 49.0, image: "🔧", inStock: 999 },
  ],
  parts: [
    { id: 10, name: "iPhone Screen", sku: "PART1001", price: 45.0, image: "🛠️", inStock: 234 },
    { id: 11, name: "Battery Pack", sku: "PART1002", price: 25.0, image: "🛠️", inStock: 156 },
  ],
}

export function SalesPageContent() {
  const [cart, setCart] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState("accessories")

  const addToCart = (product: any) => {
    const existingItem = cart.find((item) => item.id === product.id)
    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart(cart.map((item) => (item.id === productId ? { ...item, quantity } : item)))
    }
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const products = PRODUCTS[activeTab as keyof typeof PRODUCTS] || []

  return (
    <main className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Create a Sale</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Generate Tickets, add parts, accessories, services & modify repairs.
          </p>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <Plus size={20} className="mr-2" />
          Walk-in Customer
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Find customer name or item..." className="pl-10" />
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
              <TabsTrigger value="devices">Devices</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="parts">Parts</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="text-4xl mb-2 text-center">{product.image}</div>
                      <p className="font-semibold text-sm line-clamp-2">{product.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{product.sku}</p>
                      <p className="text-lg font-bold text-violet-600 mt-2">₱{product.price.toFixed(2)}</p>
                      <p className="text-xs text-muted-foreground">In stock: {product.inStock}</p>
                      <Button
                        onClick={() => addToCart(product)}
                        className="w-full mt-3 bg-violet-500 hover:bg-violet-600"
                        size="sm"
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-card sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart size={20} />
                Cart
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cart.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">Cart is empty</p>
              ) : (
                <>
                  <div className="space-y-3 max-h-96 overflow-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-start justify-between gap-2 p-2 bg-secondary/30 rounded">
                        <div className="flex-1">
                          <p className="text-sm font-semibold">{item.name}</p>
                          <p className="text-xs text-muted-foreground">₱{item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 bg-secondary rounded hover:bg-secondary/80"
                          >
                            -
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 bg-secondary rounded hover:bg-secondary/80"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="px-2 py-1 bg-red-500/20 text-red-600 rounded hover:bg-red-500/30"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Subtotal:</span>
                      <span className="font-semibold">₱{total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tax:</span>
                      <span className="font-semibold">₱{(total * 0.08).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>₱{(total * 1.08).toFixed(2)}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 mt-4">
                      Complete Sale
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
