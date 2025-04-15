"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, type User } from "firebase/auth"
import { auth } from "@/lib/firebase"

type UserRole = "admin" | "client" | null

interface AuthContextType {
  user: User | null
  userRole: UserRole
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userRole: null,
  loading: true,
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userRole, setUserRole] = useState<UserRole>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)

      if (user) {
        // In a real app, you would fetch the user's role from Firestore
        // For demo purposes, we'll simulate this with a timeout
        setTimeout(() => {
          // This would be replaced with actual role fetching logic
          const role = user.email?.includes("admin") ? "admin" : "client"
          setUserRole(role as UserRole)
          setLoading(false)
        }, 500)
      } else {
        setUserRole(null)
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ user, userRole, loading }}>{children}</AuthContext.Provider>
}
