import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization")

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await request.json()
  const { projectId, amount } = body

  if (!projectId || !amount) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  // Mock investment creation - in real app, this would interact with blockchain
  const investment = {
    id: Math.random().toString(36).substr(2, 9),
    projectId,
    amount,
    timestamp: new Date().toISOString(),
    status: "pending",
    transactionHash: "mock_hash_" + Math.random().toString(36).substr(2, 9),
  }

  return NextResponse.json({ investment }, { status: 201 })
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization")

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Mock user investments
  const investments = [
    {
      id: "1",
      projectId: "1",
      projectTitle: "EcoTech Solar Panel Initiative",
      amount: 5000000,
      timestamp: "2024-01-20T10:00:00Z",
      status: "active",
      expectedReturn: 18.5,
    },
    {
      id: "2",
      projectId: "2",
      projectTitle: "Smart Agriculture IoT Platform",
      amount: 2500000,
      timestamp: "2024-01-15T14:30:00Z",
      status: "completed",
      expectedReturn: 25.0,
      actualReturn: 625000,
    },
  ]

  return NextResponse.json({ investments })
}
