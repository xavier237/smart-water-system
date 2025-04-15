"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Droplet, AlertTriangle, CheckCircle, Activity, ArrowDownRight, Gauge, DollarSign } from "lucide-react"
import { WaterUsageChart } from "@/components/water-usage-chart"

export function ClientDashboard() {
  const [currentWaterLevel, setCurrentWaterLevel] = useState(78)
  const [waterUsage, setWaterUsage] = useState(42)
  const [flowRate, setFlowRate] = useState(2.3)
  const [costEstimate, setCostEstimate] = useState(28.5)

  // Simulated real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate small random changes to water level
      setCurrentWaterLevel((prev) => {
        const change = Math.random() * 2 - 1 // Random value between -1 and 1
        const newValue = prev + change
        return Math.min(Math.max(newValue, 0), 100) // Keep between 0 and 100
      })

      // Simulate flow rate changes
      setFlowRate((prev) => {
        const change = Math.random() * 0.4 - 0.2 // Random value between -0.2 and 0.2
        return Math.max(prev + change, 0).toFixed(1)
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Client Dashboard</h1>
        <p className="text-muted-foreground">Monitor and control your water system</p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Tank Level</CardTitle>
            <Droplet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentWaterLevel}%</div>
            <Progress value={currentWaterLevel} className="h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Usage</CardTitle>
            <Gauge className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{waterUsage} m³</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <ArrowDownRight className="mr-1 h-4 w-4" />
                -5% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flow Rate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{flowRate} L/min</div>
            <p className="text-xs text-muted-foreground">Real-time measurement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cost Estimate</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${costEstimate.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">This month's projection</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Water Usage Chart */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Water Consumption History</CardTitle>
            <CardDescription>Your water usage over time</CardDescription>
          </CardHeader>
          <CardContent>
            <WaterUsageChart isClient={true} />
          </CardContent>
        </Card>

        {/* Water Control Panel */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Water Control Panel</CardTitle>
            <CardDescription>Manage your water system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Water Pump</span>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Active
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">Turn On</Button>
                <Button variant="outline" className="flex-1">
                  Turn Off
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Main Valve</span>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Open
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">Open Valve</Button>
                <Button variant="outline" className="flex-1">
                  Close Valve
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Schedule Pump Operation</span>
              </div>
              <Button variant="outline" className="w-full">
                Configure Schedule
              </Button>
            </div>

            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>System Status: Normal</AlertTitle>
              <AlertDescription>All systems are operating normally. Last check: 5 minutes ago.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
          <CardDescription>Updates and alerts from your water system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Tank Refill Complete</AlertTitle>
              <AlertDescription>
                Your water tank has been refilled to 100%.
                <div className="mt-1 text-xs text-muted-foreground">2 hours ago</div>
              </AlertDescription>
            </Alert>

            <Alert variant="default">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Scheduled Maintenance</AlertTitle>
              <AlertDescription>
                System maintenance scheduled for tomorrow between 2-4 PM.
                <div className="mt-1 text-xs text-muted-foreground">Yesterday</div>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View All Notifications
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
