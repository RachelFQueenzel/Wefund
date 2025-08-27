import { type NextRequest, NextResponse } from "next/server"
import { mockProjects } from "@/lib/projects"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const status = searchParams.get("status")
  const search = searchParams.get("search")

  let filteredProjects = mockProjects

  if (category && category !== "all") {
    filteredProjects = filteredProjects.filter((project) => project.category === category)
  }

  if (status && status !== "all") {
    filteredProjects = filteredProjects.filter((project) => project.status === status)
  }

  if (search) {
    filteredProjects = filteredProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()),
    )
  }

  return NextResponse.json({ projects: filteredProjects })
}
