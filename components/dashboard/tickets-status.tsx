"use client"

import { useState } from "react"
import { Info, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function TicketsStatus() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Tickets Status</CardTitle>
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="p-1 hover:bg-secondary rounded transition-colors">
              <Info className="w-4 h-4 text-muted-foreground" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <div className="bg-muted/50 rounded-lg p-3 space-y-2 text-xs text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">How Tickets Work:</p>
                <div className="space-y-1.5">
                  <p><strong>• Open:</strong> New tickets that need to be assigned or started</p>
                  <p><strong>• In Progress:</strong> Tickets currently being worked on by staff</p>
                  <p><strong>• Closed:</strong> Completed tickets that have been finished</p>
                </div>
                <div className="pt-2 border-t border-border mt-2">
                  <p className="font-semibold text-foreground mb-1">Ticket Types:</p>
                  <p>• <strong>Repair Tickets:</strong> Device repairs and services</p>
                  <p>• <strong>Sales Tickets:</strong> Product sales and transactions</p>
                  <p>• <strong>Trade-In:</strong> Device trade-in transactions</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center py-4">
          <p className="text-4xl font-bold">125</p>
          <p className="text-sm text-muted-foreground">Total Tickets</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-violet-500/10 rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-violet-500">80</p>
            <p className="text-xs text-muted-foreground">Open</p>
          </div>
          <div className="bg-purple-500/10 rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-purple-500">40</p>
            <p className="text-xs text-muted-foreground">In Progress</p>
          </div>
          <div className="bg-violet-400/10 rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-violet-400">5</p>
            <p className="text-xs text-muted-foreground">Closed</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
