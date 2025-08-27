"use client"

import { useState, useEffect, createContext, useContext, type ReactNode } from "react"
import { type User, getStoredUser, getStoredToken, storeAuth, clearAuth } from "@/lib/auth"
import { apiClient } from "@/lib/api"

interface AuthContextType {
  user: User | null
  token: string | null
  isLoading: boolean
  login: (user: User, token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = getStoredUser()
    const storedToken = getStoredToken()

    if (storedUser && storedToken) {
      setUser(storedUser)
      setToken(storedToken)
      apiClient.setToken(storedToken)
    }

    setIsLoading(false)
  }, [])

  const login = (userData: User, userToken: string) => {
    setUser(userData)
    setToken(userToken)
    storeAuth(userData, userToken)
    apiClient.setToken(userToken)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    clearAuth()
    apiClient.clearToken()
  }

  return <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
