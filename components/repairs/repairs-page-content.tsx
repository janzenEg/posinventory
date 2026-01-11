"use client"

import { useState } from "react"
import { Plus, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const REPAIR_TICKETS = [
  {
    id: "INV-5329",
    customer: "Jack Peterson",
    status: "In Progress",
    device: "iPhone 12",
    issue: "Screen broken",
    time: "45 min",
    assigned: "john Smith",
  },
  {
    id: "INV-5330",
    customer: "Jane Wilson",
    status: "In Progress",
    device: "Samsung S21",
    issue: "Battery drain",
    time: "1h 20min",
    assigned: "Jack Peterson",
  },
  {
    id: "INV-5331",
    customer: "Bob Johnson",
    status: "Pending",
    device: "iPad Air",
    issue: "Water damage",
    time: "2h",
    assigned: "Unassigned",
  },
  {
    id: "INV-5332",
    customer: "Alice Brown",
    status: "Completed",
    device: "MacBook Pro",
    issue: "Hard drive failure",
    time: "3h",
    assigned: "john Smith",
  },
]

export function RepairsPageContent() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTickets = REPAIR_TICKETS.filter((ticket) => {
    const matchesSearch =
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.device.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "progress") return matchesSearch && ticket.status === "In Progress"
    if (activeTab === "pending") return matchesSearch && ticket.status === "Pending"
    if (activeTab === "completed") return matchesSearch && ticket.status === "Completed"
    return matchesSearch
  })

  return (
    <main className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Repair Services</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Repair Lab - Generate Tickets, add parts, accessories, services & modify repairs.
          </p>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <Plus size={20} className="mr-2" />
          New Repair Ticket
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-violet-500">150</p>
              <p className="text-sm text-muted-foreground mt-2">Ticket Summary</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-500">80</p>
              <p className="text-sm text-muted-foreground mt-2">Repair Tickets</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-violet-400">50</p>
              <p className="text-sm text-muted-foreground mt-2">Sales Tickets</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">20</p>
              <p className="text-sm text-muted-foreground mt-2">Trade In</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Tickets</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Manage and track all repair tickets</p>
            </div>
            <Button variant="outline" size="sm">
              <Filter size={18} className="mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by customer, ticket ID, or device..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="progress">In Progress</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-3">
            {filteredTickets.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No tickets found</p>
            ) : (
              filteredTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-semibold">{ticket.id}</p>
                        <p className="text-sm text-muted-foreground">{ticket.customer}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm">{ticket.device}</p>
                      <p className="text-xs text-muted-foreground">{ticket.issue}</p>
                    </div>
                    <Badge
                      className={
                        ticket.status === "Completed"
                          ? "bg-purple-500/20 text-purple-600"
                          : ticket.status === "In Progress"
                            ? "bg-violet-500/20 text-violet-600"
                            : "bg-violet-400/20 text-violet-600"
                      }
                    >
                      {ticket.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground w-16 text-right">{ticket.time}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
