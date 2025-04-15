"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Droplet, Gauge, Power, AlertTriangle, CheckCircle, Calendar } from "lucide-react"

export default function WaterControlPage() {
  const [pumpActive, setPumpActive] = useState(true)
  const [valveOpen, setValveOpen] = useState(true)
  const [flowRate, setFlowRate] = useState(50)
  const [scheduleEnabled, setScheduleEnabled] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Water Control Panel</h1>
        <p className="text-muted-foreground">Monitor and control your water system devices</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Water Pump Control */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Power className="h-5 w-5 text-cyan-600" />
              Water Pump Control
            </CardTitle>
            <CardDescription>Control your water pump operation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Pump Status</span>
              <Badge variant="outline" className={pumpActive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}>
                {pumpActive ? "Active" : "Inactive"}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="pump-switch">Automatic Operation</Label>
                <Switch id="pump-switch" checked={pumpActive} onCheckedChange={setPumpActive} />
              </div>
              <p className="text-sm text-muted-foreground">Enable automatic operation based on water level</p>
            </div>

            <div className="space-y-2">
              <Label>Flow Rate Control</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[flowRate]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setFlowRate(value[0])}
                />
                <span className="w-12 text-right font-medium">{flowRate}%</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button className="flex-1" onClick={() => setPumpActive(true)}>
                Turn On
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => setPumpActive(false)}>
                Turn Off
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Valve Control */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-cyan-600" />
              Valve Control
            </CardTitle>
            <CardDescription>Control your water system valves</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Main Valve</span>
              <Badge variant="outline" className={valveOpen ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}>
                {valveOpen ? "Open" : "Closed"}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="valve-switch">Automatic Control</Label>
                <Switch id="valve-switch" checked={valveOpen} onCheckedChange={setValveOpen} />
              </div>
              <p className="text-sm text-muted-foreground">Enable automatic valve control based on system conditions</p>
            </div>

            <Alert className="mt-4">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Valve Operating Normally</AlertTitle>
              <AlertDescription>Pressure readings are within normal range.</AlertDescription>
            </Alert>

            <div className="flex gap-2 pt-2">
              <Button className="flex-1" onClick={() => setValveOpen(true)}>
                Open Valve
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => setValveOpen(false)}>
                Close Valve
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Scheduled Operations */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-cyan-600" />
              Scheduled Operations
            </CardTitle>
            <CardDescription>Configure scheduled pump and valve operations</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="daily">
              <TabsList>
                <TabsTrigger value="daily">Daily Schedule</TabsTrigger>
                <TabsTrigger value="weekly">Weekly Schedule</TabsTrigger>
                <TabsTrigger value="custom">Custom Schedule</TabsTrigger>
              </TabsList>
              <TabsContent value="daily" className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="schedule-switch">Enable Daily Schedule</Label>
                  <Switch id="schedule-switch" checked={scheduleEnabled} onCheckedChange={setScheduleEnabled} />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="start-time">Start Time</Label>
                    <Input id="start-time" type="time" defaultValue="06:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-time">End Time</Label>
                    <Input id="end-time" type="time" defaultValue="08:00" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input id="duration" type="number" defaultValue="30" min="1" max="120" />
                </div>
              </TabsContent>

              <TabsContent value="weekly" className="pt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="weekly-schedule-switch">Enable Weekly Schedule</Label>
                    <Switch id="weekly-schedule-switch" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label>Select Days</Label>
                    <div className="flex flex-wrap gap-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <Button
                          key={day}
                          variant="outline"
                          className="flex-1 min-w-[60px]"
                          data-selected={["Mon", "Wed", "Fri"].includes(day)}
                        >
                          {day}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="weekly-start-time">Start Time</Label>
                      <Input id="weekly-start-time" type="time" defaultValue="07:30" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weekly-duration">Duration (minutes)</Label>
                      <Input id="weekly-duration" type="number" defaultValue="45" min="1" max="120" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="custom" className="pt-4">
                <div className="space-y-4">
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Advanced Feature</AlertTitle>
                    <AlertDescription>
                      Custom scheduling allows for complex water management patterns. Please consult the user manual for
                      detailed instructions.
                    </AlertDescription>
                  </Alert>

                  <Button variant="outline" className="w-full">
                    Configure Custom Schedule
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Save Schedule Settings</Button>
          </CardFooter>
        </Card>

        {/* System Status */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplet className="h-5 w-5 text-cyan-600" />
              System Status
            </CardTitle>
            <CardDescription>Current status of your water management system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2 border rounded-lg p-4">
                <div className="text-sm text-muted-foreground">Water Tank Level</div>
                <div className="text-2xl font-bold">78%</div>
                <div className="text-sm text-green-600">Normal</div>
              </div>

              <div className="space-y-2 border rounded-lg p-4">
                <div className="text-sm text-muted-foreground">System Pressure</div>
                <div className="text-2xl font-bold">4.2 bar</div>
                <div className="text-sm text-green-600">Optimal</div>
              </div>

              <div className="space-y-2 border rounded-lg p-4">
                <div className="text-sm text-muted-foreground">Flow Rate</div>
                <div className="text-2xl font-bold">2.3 L/min</div>
                <div className="text-sm text-green-600">Normal</div>
              </div>
            </div>

            <Alert className="mt-4 bg-green-50 text-green-800 border-green-200">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>All Systems Operational</AlertTitle>
              <AlertDescription>
                Your water management system is functioning normally. Last system check: 5 minutes ago.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
