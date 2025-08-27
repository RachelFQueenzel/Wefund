"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/layout/footer"
import { ProjectCard } from "@/components/projects/project-card"
import { ProjectFilters } from "@/components/projects/project-filters"
import { mockProjects } from "@/lib/projects"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [riskFilter, setRiskFilter] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const filteredAndSortedProjects = useMemo(() => {
    const filtered = mockProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.publishedBy.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = categoryFilter === "all" || project.category === categoryFilter
      const matchesStatus = statusFilter === "all" || project.status === statusFilter
      const matchesRisk = riskFilter === "all" || project.riskLevel === riskFilter

      return matchesSearch && matchesCategory && matchesStatus && matchesRisk
    })

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
        case "oldest":
          return new Date(a.datePublished).getTime() - new Date(b.datePublished).getTime()
        case "funded-high":
          return b.funded - a.funded
        case "funded-low":
          return a.funded - b.funded
        case "backers-high":
          return b.backers - a.backers
        case "return-high":
          return b.expectedReturn - a.expectedReturn
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, categoryFilter, statusFilter, riskFilter, sortBy])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
            <p className="text-muted-foreground">
              Discover and invest in innovative Web3 projects powered by Solana blockchain
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <ProjectFilters
              onSearchChange={setSearchTerm}
              onCategoryChange={setCategoryFilter}
              onStatusChange={setStatusFilter}
              onRiskChange={setRiskFilter}
              onSortChange={setSortBy}
            />
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredAndSortedProjects.length} of {mockProjects.length} projects
            </p>
          </div>

          {/* Project Grid */}
          {filteredAndSortedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
              <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
