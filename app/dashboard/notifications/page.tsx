"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Bell, AlertTriangle, CheckCircle, Info, Trash2, Settings, MessageSquare } from "lucide-react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
      title: "System Update",
      message: "The system will undergo maintenance on Friday, April 16th from 2-4 AM.",
      date: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "warning",
      title: "High Water Usage",
      message: "Your water usage is 20% higher than your usual pattern.",
      date: "Yesterday",
      read: true,
    },
    {
      id: 3,
      type: "success",
      title: "Tank Refill Complete",
      message: "Your water tank has been successfully refilled to 100%.",
      date: "2 days ago",
      read: true,
    },
    {
      id: 4,
      type: "error",
      title: "Possible Leak Detected",
      message: "Unusual water flow detected during inactive hours. Please check your system.",
      date: "3 days ago",
      read: false,
    },
    {
      id: 5,
      type: "info",
      title: "New Feature Available",
      message: "You can now schedule automatic tank refills. Check the water control panel.",
      date: "1 week ago",
      read: true,
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "error":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Notification Center</h1>
        <p className="text-muted-foreground">Manage your alerts and notifications</p>
      </div>

      <Tabs defaultValue="all">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">
              All
              <Badge className="ml-2 bg-gray-100 text-gray-900" variant="secondary">
                {notifications.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="unread">
              Unread
              <Badge className="ml-2 bg-gray-100 text-gray-900" variant="secondary">
                {notifications.filter((n) => !n.read).length}
              </Badge>
            </TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Notification Settings
          </Button>
        </div>

        <TabsContent value="all" className="mt-4 space-y-4">
          {notifications.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Bell className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center">No notifications to display</p>
              </CardContent>
            </Card>
          ) : (
            notifications.map((notification) => (
              <Card key={notification.id} className={notification.read ? "" : "border-l-4 border-l-blue-500"}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{getIcon(notification.type)}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{notification.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{notification.date}</span>
                          <Button variant="ghost" size="icon" onClick={() => deleteNotification(notification.id)}>
                            <Trash2 className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </div>
                      </div>
                      {!notification.read && (
                        <Button
                          variant="link"
                          className="p-0 h-auto text-sm mt-2"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Mark as read
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}

          {notifications.length > 0 && (
            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="unread" className="mt-4 space-y-4">
          {notifications.filter((n) => !n.read).length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <CheckCircle className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center">No unread notifications</p>
              </CardContent>
            </Card>
          ) : (
            notifications
              .filter((n) => !n.read)
              .map((notification) => (
                <Card key={notification.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{notification.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{notification.date}</span>
                            <Button variant="ghost" size="icon" onClick={() => deleteNotification(notification.id)}>
                              <Trash2 className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                        </div>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-sm mt-2"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Mark as read
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
          )}
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Configure how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Alert Types</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="water-level-alerts">Water Level Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts when water levels are low</p>
                </div>
                <Switch id="water-level-alerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="leak-alerts">Leak Detection</Label>
                  <p className="text-sm text-muted-foreground">Get notified about potential water leaks</p>
                </div>
                <Switch id="leak-alerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="usage-alerts">Usage Alerts</Label>
                  <p className="text-sm text-muted-foreground">Alerts for unusual water consumption patterns</p>
                </div>
                <Switch id="usage-alerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="system-alerts">System Notifications</Label>
                  <p className="text-sm text-muted-foreground">Updates about system maintenance and features</p>
                </div>
                <Switch id="system-alerts" defaultChecked />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Notification Methods</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                </div>
                <Switch id="sms-notifications" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications on your devices</p>
                </div>
                <Switch id="push-notifications" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full sm:w-auto">Save Preferences</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>Send a message to our support team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Enter the subject of your message" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Describe your issue or question"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full sm:w-auto">
            <MessageSquare className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
