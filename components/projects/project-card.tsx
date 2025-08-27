import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Calendar, User, Users, Clock, TrendingUp } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
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
      month: "short",
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
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary/90 text-primary-foreground">{project.category}</Badge>
        </div>
        <div className="absolute top-4 right-4">{getRiskBadge(project.riskLevel)}</div>
      </div>

      <CardHeader className="flex-1">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
          {getStatusBadge(project.status)}
        </div>
        <CardDescription className="line-clamp-2">{project.shortDescription}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Funding Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {formatCurrency(project.funded)} / {formatCurrency(project.goal)}
            </span>
            <span className="font-medium">{fundingPercentage.toFixed(1)}%</span>
          </div>
          <Progress value={Math.min(fundingPercentage, 100)} className="h-2" />
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{project.backers} backers</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{project.daysLeft > 0 ? `${project.daysLeft} days left` : "Completed"}</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span>{project.expectedReturn}% return</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{formatDate(project.datePublished)}</span>
          </div>
        </div>

        {/* Publisher */}
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <User className="h-4 w-4" />
          <span>by {project.publishedBy}</span>
        </div>

        {/* Action Button */}
        <Button asChild className="w-full">
          <Link href={`/projects/${project.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
