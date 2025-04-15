"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Download, FileText, BarChart3, ArrowDownRight, ArrowUpRight, CheckCircle } from "lucide-react"
import { WaterUsageChart } from "@/components/water-usage-chart"

export default function ReportsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Reports & Analytics</h1>
        <p className="text-muted-foreground">View detailed consumption reports and analytics</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Monthly Consumption</CardTitle>
            <CardDescription>Your water usage for the current month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold">42 m³</div>
            <div className="flex items-center text-green-600">
              <ArrowDownRight className="mr-1 h-4 w-4" />
              <span>5% less than last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Estimated Cost</CardTitle>
            <CardDescription>Projected cost for current usage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold">$28.50</div>
            <div className="flex items-center text-green-600">
              <ArrowDownRight className="mr-1 h-4 w-4" />
              <span>$3.20 less than last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Average Daily Usage</CardTitle>
            <CardDescription>Your average daily consumption</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold">1.4 m³</div>
            <div className="flex items-center text-amber-600">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>0.2 m³ more on weekends</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Consumption Analysis</CardTitle>
              <CardDescription>Detailed view of your water consumption patterns</CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>

              <Select defaultValue="daily">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select view" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <WaterUsageChart isClient={true} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage Patterns & Recommendations</CardTitle>
          <CardDescription>Analysis of your consumption patterns with recommendations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Usage Patterns</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Morning Peak (6-9 AM)</span>
                  <span className="font-medium">35%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-cyan-600 h-full rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Afternoon (12-4 PM)</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-cyan-600 h-full rounded-full" style={{ width: "15%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Evening Peak (6-10 PM)</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-cyan-600 h-full rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Night (10 PM-6 AM)</span>
                  <span className="font-medium">5%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-cyan-600 h-full rounded-full" style={{ width: "5%" }}></div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Recommendations</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Consider shifting some morning water usage to off-peak hours to balance consumption.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>
                    Your weekend usage is 20% higher than weekdays. Check for inefficient water usage patterns.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Consider installing water-efficient fixtures to reduce overall consumption.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Your system detected minimal water flow during night hours, indicating no leaks.</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Export Reports</CardTitle>
          <CardDescription>Download your water consumption reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto py-4 justify-start">
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 mr-2 text-cyan-600" />
                  <span className="font-medium">Monthly Report</span>
                </div>
                <span className="text-sm text-muted-foreground">Detailed monthly consumption report</span>
              </div>
              <Download className="h-4 w-4 ml-auto" />
            </Button>

            <Button variant="outline" className="h-auto py-4 justify-start">
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center mb-2">
                  <BarChart3 className="h-5 w-5 mr-2 text-cyan-600" />
                  <span className="font-medium">Usage Analytics</span>
                </div>
                <span className="text-sm text-muted-foreground">Detailed usage patterns and analytics</span>
              </div>
              <Download className="h-4 w-4 ml-auto" />
            </Button>

            <Button variant="outline" className="h-auto py-4 justify-start">
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 mr-2 text-cyan-600" />
                  <span className="font-medium">Cost Analysis</span>
                </div>
                <span className="text-sm text-muted-foreground">Water usage cost breakdown</span>
              </div>
              <Download className="h-4 w-4 ml-auto" />
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col w-full space-y-2">
            <div className="text-sm text-muted-foreground">
              Reports are available in PDF and CSV formats. Data is updated daily.
            </div>
            <Button className="w-full sm:w-auto sm:self-end">
              <Download className="mr-2 h-4 w-4" />
              Export All Reports
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
