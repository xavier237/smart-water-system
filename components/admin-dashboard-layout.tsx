"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Droplets, LayoutDashboard, Users, Bell, Settings, BarChart3, LogOut, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}

function NavItem({ href, icon, label, active, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
        active ? "bg-cyan-100 text-cyan-900" : "text-gray-600 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

export function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { toast } = useToast()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: "Please try again",
      })
    }
  }

  const navItems = [
    { href: "/dashboard", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { href: "/dashboard/clients", icon: <Users size={20} />, label: "Clients" },
    { href: "/dashboard/analytics", icon: <BarChart3 size={20} />, label: "Analytics" },
    { href: "/dashboard/notifications", icon: <Bell size={20} />, label: "Notifications" },
    { href: "/dashboard/settings", icon: <Settings size={20} />, label: "Settings" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="p-4 border-b">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-6 w-6 text-cyan-600" />
                    <span className="text-lg font-bold">Admin Dashboard</span>
                  </div>
                </div>
                <nav className="p-4 space-y-1">
                  {navItems.map((item) => (
                    <NavItem
                      key={item.href}
                      href={item.href}
                      icon={item.icon}
                      label={item.label}
                      active={pathname === item.href}
                      onClick={() => setOpen(false)}
                    />
                  ))}
                  <button
                    className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors w-full text-left text-gray-600 hover:bg-gray-100"
                    onClick={handleSignOut}
                  >
                    <LogOut size={20} />
                    <span>Sign Out</span>
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/dashboard" className="flex items-center gap-2">
              <Droplets className="h-6 w-6 text-cyan-600" />
              <span className="text-lg font-bold hidden md:inline">Admin Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell size={20} />
            </Button>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <div className="text-sm font-medium">Admin User</div>
                <div className="text-xs text-gray-500">admin@example.com</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar - desktop only */}
        <aside className="hidden md:block w-64 bg-white border-r p-4">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                active={pathname === item.href}
              />
            ))}
            <button
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors w-full text-left text-gray-600 hover:bg-gray-100"
              onClick={handleSignOut}
            >
              <LogOut size={20} />
              <span>Sign Out</span>
            </button>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
