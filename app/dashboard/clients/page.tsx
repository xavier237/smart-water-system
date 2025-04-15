"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ClientsTable } from "@/components/clients-table"
import { PlusCircle } from "lucide-react"

export default function ClientsPage() {
  // Simulated data for demo purposes
  const mockClients = [
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
    {
      id: 6,
      name: "Sarah Brown",
      email: "sarah@example.com",
      status: "Active",
      consumption: 31,
      lastActive: "3 hours ago",
    },
    {
      id: 7,
      name: "David Miller",
      email: "david@example.com",
      status: "Active",
      consumption: 45,
      lastActive: "30 minutes ago",
    },
    {
      id: 8,
      name: "Jennifer Taylor",
      email: "jennifer@example.com",
      status: "Inactive",
      consumption: 0,
      lastActive: "5 days ago",
    },
    {
      id: 9,
      name: "James Anderson",
      email: "james@example.com",
      status: "Pending",
      consumption: 0,
      lastActive: "Never",
    },
    {
      id: 10,
      name: "Lisa Thomas",
      email: "lisa@example.com",
      status: "Active",
      consumption: 22,
      lastActive: "4 hours ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Client Management</h1>
          <p className="text-muted-foreground">Manage and monitor all client accounts</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Client
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Clients</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>All Clients</CardTitle>
              <CardDescription>View and manage all registered clients</CardDescription>
            </CardHeader>
            <CardContent>
              <ClientsTable clients={mockClients} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Clients</CardTitle>
              <CardDescription>Clients with active accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <ClientsTable clients={mockClients.filter((client) => client.status === "Active")} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Clients</CardTitle>
              <CardDescription>Clients awaiting approval</CardDescription>
            </CardHeader>
            <CardContent>
              <ClientsTable clients={mockClients.filter((client) => client.status === "Pending")} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inactive" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Inactive Clients</CardTitle>
              <CardDescription>Clients with inactive accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <ClientsTable clients={mockClients.filter((client) => client.status === "Inactive")} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
