"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, Droplet, AlertTriangle, CheckCircle, Activity, ArrowUpRight } from "lucide-react"
import { WaterUsageChart } from "@/components/water-usage-chart"
import { ClientsTable } from "@/components/clients-table"

export function AdminDashboard() {
  const [activeClients, setActiveClients] = useState(24)
  const [totalWaterUsage, setTotalWaterUsage] = useState(1250)
  const [alerts, setAlerts] = useState(3)
  const [systemHealth, setSystemHealth] = useState(92)

  // Simulated data for demo purposes
  const mockData = {
    clients: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        status: "Active",
        consumption: 42,
        lastActive: "2 hours ago",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        status: "Active",
        consumption: 36,
        lastActive: "5 hours ago",
      },
      {
        id: 3,
        name: "Robert Johnson",
        email: "robert@example.com",
        status: "Inactive",
        consumption: 0,
        lastActive: "2 days ago",
      },
      {
        id: 4,
        name: "Emily Davis",
        email: "emily@example.com",
        status: "Active",
        consumption: 28,
        lastActive: "1 hour ago",
      },
      {
        id: 5,
        name: "Michael Wilson",
        email: "michael@example.com",
        status: "Pending",
        consumption: 0,
        lastActive: "Never",
      },
    ],
    alerts: [
      {
        id: 1,
        type: "warning",
        title: "High Water Usage",
        description: "Client #4 has unusually high water usage",
        time: "10 minutes ago",
      },
      {
        id: 2,
        type: "error",
        title: "Leak Detected",
        description: "Possible leak detected at Client #2",
        time: "1 hour ago",
      },
      {
        id: 3,
        type: "info",
        title: "New Client Registration",
        description: "New client registration pending approval",
        time: "3 hours ago",
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Monitor system status and manage clients</p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeClients}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +2 from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Water Usage</CardTitle>
            <Droplet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalWaterUsage} m³</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +12% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{alerts}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-amber-500 flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />1 new alert today
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemHealth}%</div>
            <Progress value={systemHealth} className="h-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Water Usage Chart */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Water Consumption Analytics</CardTitle>
            <CardDescription>System-wide water usage over time</CardDescription>
          </CardHeader>
          <CardContent>
            <WaterUsageChart />
          </CardContent>
        </Card>

        {/* Alerts Panel */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Alerts & Notifications</CardTitle>
            <CardDescription>Recent system alerts and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.alerts.map((alert) => (
                <Alert key={alert.id} variant={alert.type === "error" ? "destructive" : "default"}>
                  <div className="flex items-start">
                    {alert.type === "warning" && <AlertTriangle className="h-4 w-4 mr-2" />}
                    {alert.type === "error" && <AlertTriangle className="h-4 w-4 mr-2" />}
                    {alert.type === "info" && <CheckCircle className="h-4 w-4 mr-2" />}
                    <div>
                      <AlertTitle>{alert.title}</AlertTitle>
                      <AlertDescription className="mt-1">
                        {alert.description}
                        <div className="mt-1 text-xs text-muted-foreground">{alert.time}</div>
                      </AlertDescription>
                    </div>
                  </div>
                </Alert>
              ))}
              <Button variant="outline" className="w-full">
                View All Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Clients Table */}
      <Card>
        <CardHeader>
          <CardTitle>Client Overview</CardTitle>
          <CardDescription>List of all registered clients and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <ClientsTable clients={mockData.clients} />
        </CardContent>
      </Card>
    </div>
  )
}
