import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  // In a real app, this would validate the JWT token from headers
  const authHeader = request.headers.get("authorization")

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Mock user data - in real app, this would come from database
  const mockUser = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+62812345678",
  }

  return NextResponse.json({ user: mockUser })
}
