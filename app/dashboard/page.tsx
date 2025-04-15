"use client"
import { useAuth } from "@/components/auth-provider"
import { AdminDashboard } from "@/components/admin-dashboard"
import { ClientDashboard } from "@/components/client-dashboard"

export default function DashboardPage() {
  const { userRole } = useAuth()

  if (userRole === "admin") {
    return <AdminDashboard />
  }

  return <ClientDashboard />
}
