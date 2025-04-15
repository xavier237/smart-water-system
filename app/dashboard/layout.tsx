"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Loader2 } from "lucide-react"
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout"
import { ClientDashboardLayout } from "@/components/client-dashboard-layout"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, userRole, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-600" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (userRole === "admin") {
    return <AdminDashboardLayout>{children}</AdminDashboardLayout>
  }

  return <ClientDashboardLayout>{children}</ClientDashboardLayout>
}
