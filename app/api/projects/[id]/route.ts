import { type NextRequest, NextResponse } from "next/server"
import { getProjectById } from "@/lib/projects"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const project = getProjectById(params.id)

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 })
  }

  return NextResponse.json({ project })
}
