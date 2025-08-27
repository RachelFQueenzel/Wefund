export interface User {
  id: string
  name: string
  email: string
  phone: string
}

export interface AuthResponse {
  user: User
  token: string
}

export interface LoginData {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  phone: string
  password: string
}

const API_BASE_URL = "http://127.0.0.1:8000"

export async function login(data: LoginData): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/authen/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Login failed")
  }

  return response.json()
}

export async function register(data: RegisterData): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/authen/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Registration failed")
  }

  return response.json()
}

export function getStoredUser(): User | null {
  if (typeof window === "undefined") return null

  const userData = localStorage.getItem("user")
  return userData ? JSON.parse(userData) : null
}

export function getStoredToken(): string | null {
  if (typeof window === "undefined") return null

  return localStorage.getItem("token")
}

export function storeAuth(user: User, token: string): void {
  localStorage.setItem("user", JSON.stringify(user))
  localStorage.setItem("token", token)
}

export function clearAuth(): void {
  localStorage.removeItem("user")
  localStorage.removeItem("token")
}
