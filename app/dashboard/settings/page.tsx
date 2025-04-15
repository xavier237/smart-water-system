"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Save } from "lucide-react"

export default function SettingsPage() {
  const [name, setName] = useState("Client User")
  const [email, setEmail] = useState("client@example.com")
  const [phone, setPhone] = useState("+1 (555) 123-4567")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter your address" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Communication Preferences</CardTitle>
              <CardDescription>Manage how we communicate with you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing-emails">Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground">Receive emails about new features and offers</p>
                </div>
                <Switch id="marketing-emails" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="service-emails">Service Emails</Label>
                  <p className="text-sm text-muted-foreground">Receive emails about your account and service updates</p>
                </div>
                <Switch id="service-emails" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive text messages for important alerts</p>
                </div>
                <Switch id="sms-notifications" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable two-factor authentication for enhanced security
                  </p>
                </div>
                <Switch id="two-factor" />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Authentication Methods</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="auth-app" name="auth-method" className="h-4 w-4 text-primary" />
                    <Label htmlFor="auth-app" className="text-sm font-normal">
                      Authenticator App
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="auth-sms" name="auth-method" className="h-4 w-4 text-primary" />
                    <Label htmlFor="auth-sms" className="text-sm font-normal">
                      SMS Verification
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled>Set Up Two-Factor Authentication</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Login Sessions</CardTitle>
              <CardDescription>Manage your active sessions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Current Session</p>
                    <p className="text-sm text-muted-foreground">Chrome on Windows • IP: 192.168.1.1</p>
                    <p className="text-xs text-muted-foreground">Started: Today at 10:30 AM</p>
                  </div>
                  <div className="text-sm text-green-600">Active Now</div>
                </div>

                <Separator />

                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Mobile App</p>
                    <p className="text-sm text-muted-foreground">iPhone 13 • IP: 192.168.1.2</p>
                    <p className="text-xs text-muted-foreground">Last active: Yesterday at 6:45 PM</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Revoke
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="destructive">Sign Out All Devices</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure your notification preferences</CardDescription>
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

              <Separator />

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

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Thresholds</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="water-level-threshold">Water Level Threshold (%)</Label>
                    <div className="flex items-center gap-4">
                      <Input id="water-level-threshold" type="number" defaultValue="20" min="1" max="100" />
                      <span className="text-sm text-muted-foreground">Alert when below this level</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="usage-threshold">Usage Threshold (%)</Label>
                    <div className="flex items-center gap-4">
                      <Input id="usage-threshold" type="number" defaultValue="30" min="1" max="100" />
                      <span className="text-sm text-muted-foreground">
                        Alert when usage increases by this percentage
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Notification Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure your system preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Display</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select defaultValue="light">
                      <SelectTrigger id="theme">
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Measurement Units</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="volume-unit">Volume Unit</Label>
                    <Select defaultValue="cubic-meters">
                      <SelectTrigger id="volume-unit">
                        <SelectValue placeholder="Select volume unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cubic-meters">Cubic Meters (m³)</SelectItem>
                        <SelectItem value="gallons">Gallons (gal)</SelectItem>
                        <SelectItem value="liters">Liters (L)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select defaultValue="xaf">
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xaf">FCFA (XAF)</SelectItem>
                        <SelectItem value="usd">US Dollar ($)</SelectItem>
                        <SelectItem value="eur">Euro (€)</SelectItem>
                        <SelectItem value="gbp">British Pound (£)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data Management</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-backup">Automatic Data Backup</Label>
                      <p className="text-sm text-muted-foreground">Automatically backup your data weekly</p>
                    </div>
                    <Switch id="data-backup" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="data-retention">Data Retention Period</Label>
                    <Select defaultValue="12">
                      <SelectTrigger id="data-retention">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 months</SelectItem>
                        <SelectItem value="6">6 months</SelectItem>
                        <SelectItem value="12">12 months</SelectItem>
                        <SelectItem value="24">24 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="outline">Export All Data</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save System Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IoT Device Settings</CardTitle>
              <CardDescription>Configure your connected IoT devices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Device Configuration</AlertTitle>
                <AlertDescription>
                  Changes to IoT device settings may affect your water system operation. Please consult with a
                  technician before making changes.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-medium">Water Flow Sensor</p>
                    <p className="text-sm text-muted-foreground">Device ID: WFS-12345</p>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Connected
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-medium">Water Level Sensor</p>
                    <p className="text-sm text-muted-foreground">Device ID: WLS-67890</p>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Connected
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-medium">Pump Controller</p>
                    <p className="text-sm text-muted-foreground">Device ID: PC-24680</p>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Connected
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-medium">Leak Detector</p>
                    <p className="text-sm text-muted-foreground">Device ID: LD-13579</p>
                  </div>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700">
                    Needs Attention
                  </Badge>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Refresh Devices</Button>
                <Button>Configure Devices</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Management</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-50"
                >
                  Deactivate Account
                </Button>
                <p className="text-xs text-muted-foreground">
                  Temporarily deactivate your account. You can reactivate it at any time.
                </p>
              </div>

              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-50"
                >
                  Delete Account
                </Button>
                <p className="text-xs text-muted-foreground">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
