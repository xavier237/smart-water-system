"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "@/components/ui/chart"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

// Generate mock data for the chart
const generateData = (days: number, isClient = false) => {
  const data = []
  const today = new Date()

  // If it's the client view, show only one line
  // If it's the admin view, show multiple lines (clients)

  for (let i = days; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    const entry: any = {
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    }

    if (isClient) {
      // Just one client's data
      entry.usage = Math.floor(Math.random() * 10) + 30 + Math.sin(i / 2) * 10
    } else {
      // Multiple clients' data
      entry.client1 = Math.floor(Math.random() * 10) + 30 + Math.sin(i / 2) * 10
      entry.client2 = Math.floor(Math.random() * 8) + 20 + Math.cos(i / 2) * 8
      entry.client3 = Math.floor(Math.random() * 6) + 15 + Math.sin(i / 3) * 5
      entry.total = entry.client1 + entry.client2 + entry.client3
    }

    data.push(entry)
  }

  return data
}

export function WaterUsageChart({ isClient = false }: { isClient?: boolean }) {
  const [period, setPeriod] = useState("7d")

  const data7d = generateData(7, isClient)
  const data30d = generateData(30, isClient)
  const data90d = generateData(90, isClient)

  const getActiveData = () => {
    switch (period) {
      case "7d":
        return data7d
      case "30d":
        return data30d
      case "90d":
        return data90d
      default:
        return data7d
    }
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="7d" onValueChange={setPeriod} className="w-full">
        <TabsList>
          <TabsTrigger value="7d">7 days</TabsTrigger>
          <TabsTrigger value="30d">30 days</TabsTrigger>
          <TabsTrigger value="90d">90 days</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="h-[300px] w-full">
        <ChartContainer>
          <Chart>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={getActiveData()} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" />
                <YAxis unit=" m³" />
                <ChartTooltip content={<ChartTooltipContent />} />

                {isClient ? (
                  <Area
                    type="monotone"
                    dataKey="usage"
                    name="Water Usage"
                    stroke="#0ea5e9"
                    fill="#0ea5e9"
                    fillOpacity={0.2}
                  />
                ) : (
                  <>
                    <Area
                      type="monotone"
                      dataKey="client1"
                      name="Client 1"
                      stroke="#0ea5e9"
                      fill="#0ea5e9"
                      fillOpacity={0.2}
                      stackId="1"
                    />
                    <Area
                      type="monotone"
                      dataKey="client2"
                      name="Client 2"
                      stroke="#06b6d4"
                      fill="#06b6d4"
                      fillOpacity={0.2}
                      stackId="1"
                    />
                    <Area
                      type="monotone"
                      dataKey="client3"
                      name="Client 3"
                      stroke="#0891b2"
                      fill="#0891b2"
                      fillOpacity={0.2}
                      stackId="1"
                    />
                  </>
                )}
              </AreaChart>
            </ResponsiveContainer>
          </Chart>

          <ChartLegend>
            {isClient ? (
              <ChartLegendItem name="Water Usage" color="#0ea5e9" />
            ) : (
              <>
                <ChartLegendItem name="Client 1" color="#0ea5e9" />
                <ChartLegendItem name="Client 2" color="#06b6d4" />
                <ChartLegendItem name="Client 3" color="#0891b2" />
              </>
            )}
          </ChartLegend>
        </ChartContainer>
      </div>
    </div>
  )
}
