"use client"

import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/layout/footer"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { FundingChart } from "@/components/dashboard/funding-chart"
import { ProjectList } from "@/components/dashboard/project-list"
import { NewsSection } from "@/components/dashboard/news-section"

export default function DashboardPage() {
  // Mock data - in real app, this would come from API
  const dashboardStats = {
    totalFunding: 15750000000, // 15.75 billion IDR
    totalProjects: 47,
    totalBackers: 12543,
    successRate: 78.5,
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground">
                Overview of funding statistics, active projects, and latest platform updates
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="mb-8">
              <StatsCards
                totalFunding={dashboardStats.totalFunding}
                totalProjects={dashboardStats.totalProjects}
                totalBackers={dashboardStats.totalBackers}
                successRate={dashboardStats.successRate}
              />
            </div>

            {/* Charts and Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <FundingChart />
              <NewsSection />
            </div>

            {/* Project List */}
            <ProjectList />
          </div>
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  )
}
