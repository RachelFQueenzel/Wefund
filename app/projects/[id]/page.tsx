import { notFound } from "next/navigation"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { InvestmentModal } from "@/components/projects/investment-modal"
import { Calendar, User, Users, Clock, TrendingUp, DollarSign, Target, Shield } from "lucide-react"
import { getProjectById } from "@/lib/projects"

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="default">Active</Badge>
      case "funded":
        return <Badge className="bg-green-500 hover:bg-green-600">Funded</Badge>
      case "ended":
        return <Badge variant="secondary">Ended</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "low":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Low Risk</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Medium Risk</Badge>
      case "high":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">High Risk</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const fundingPercentage = (project.funded / project.goal) * 100

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-primary/90 text-primary-foreground">{project.category}</Badge>
                  {getStatusBadge(project.status)}
                  {getRiskBadge(project.riskLevel)}
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{project.title}</h1>
                <p className="text-lg text-muted-foreground">{project.shortDescription}</p>
              </div>

              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold text-foreground mb-3">About This Project</h2>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>

            {/* Funding Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Funding Progress</span>
                    <span className="text-2xl font-bold text-primary">{fundingPercentage.toFixed(1)}%</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <Progress value={Math.min(fundingPercentage, 100)} className="h-3" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Funded: {formatCurrency(project.funded)}</span>
                      <span>Goal: {formatCurrency(project.goal)}</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-muted-foreground mr-1" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">{project.backers}</div>
                      <div className="text-xs text-muted-foreground">Backers</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">
                        {project.daysLeft > 0 ? project.daysLeft : 0}
                      </div>
                      <div className="text-xs text-muted-foreground">Days Left</div>
                    </div>
                  </div>

                  <Separator />

                  {/* Investment Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Min Investment</span>
                      </div>
                      <span className="font-medium">{formatCurrency(project.minInvestment)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Expected Return</span>
                      </div>
                      <span className="font-medium text-green-600">{project.expectedReturn}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Margin</span>
                      </div>
                      <span className="font-medium">{project.margin}%</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Action Button */}
                  {project.status === "active" ? (
                    <InvestmentModal project={project}>
                      <Button className="w-full" size="lg">
                        Invest Now
                      </Button>
                    </InvestmentModal>
                  ) : project.status === "funded" ? (
                    <Button className="w-full" size="lg" disabled>
                      Fully Funded
                    </Button>
                  ) : (
                    <Button className="w-full" size="lg" disabled>
                      Campaign Ended
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm text-muted-foreground">Published Date</div>
                        <div className="font-medium">{formatDate(project.datePublished)}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm text-muted-foreground">Published By</div>
                        <div className="font-medium">{project.publishedBy}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm text-muted-foreground">Risk Level</div>
                        <div className="font-medium capitalize">{project.riskLevel}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm text-muted-foreground">Category</div>
                        <div className="font-medium">{project.category}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Latest investment</span>
                      <span>2 hours ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Milestone reached</span>
                      <span>1 day ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Project update</span>
                      <span>3 days ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
