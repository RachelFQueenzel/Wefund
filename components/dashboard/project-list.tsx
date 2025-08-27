import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, User, Users } from "lucide-react"

interface Project {
  id: string
  title: string
  funded: number
  goal: number
  margin: number
  datePublished: string
  publishedBy: string
  backers: number
  status: "active" | "funded" | "ended"
}

const mockProjects: Project[] = [
  {
    id: "1",
    title: "EcoTech Solar Panel Initiative",
    funded: 750000000,
    goal: 1000000000,
    margin: 15.5,
    datePublished: "2024-01-15",
    publishedBy: "Green Energy Corp",
    backers: 234,
    status: "active",
  },
  {
    id: "2",
    title: "Smart Agriculture IoT Platform",
    funded: 1200000000,
    goal: 800000000,
    margin: 22.3,
    datePublished: "2024-01-10",
    publishedBy: "AgriTech Solutions",
    backers: 456,
    status: "funded",
  },
  {
    id: "3",
    title: "Blockchain Education Platform",
    funded: 450000000,
    goal: 600000000,
    margin: 8.7,
    datePublished: "2024-01-20",
    publishedBy: "EduChain Ltd",
    backers: 189,
    status: "active",
  },
  {
    id: "4",
    title: "Sustainable Fashion Marketplace",
    funded: 320000000,
    goal: 500000000,
    margin: 12.1,
    datePublished: "2024-01-25",
    publishedBy: "EcoFashion Hub",
    backers: 167,
    status: "active",
  },
]

export function ProjectList() {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Published Projects</CardTitle>
        <CardDescription>List of projects with funding status and performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {mockProjects.map((project) => {
            const fundingPercentage = (project.funded / project.goal) * 100
            return (
              <div key={project.id} className="border border-border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{project.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(project.datePublished)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{project.publishedBy}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{project.backers} backers</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(project.status)}
                    <Badge variant="outline">Margin: {project.margin}%</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {formatCurrency(project.funded)} / {formatCurrency(project.goal)}
                    </span>
                    <span className="font-medium">{fundingPercentage.toFixed(1)}%</span>
                  </div>
                  <Progress value={Math.min(fundingPercentage, 100)} className="h-2" />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
