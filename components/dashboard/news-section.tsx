import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ExternalLink } from "lucide-react"
import Link from "next/link"

interface NewsItem {
  id: string
  title: string
  summary: string
  category: string
  publishedAt: string
  readTime: string
  url: string
}

const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "Solana Network Reaches New Transaction Speed Record",
    summary:
      "The Solana blockchain has achieved unprecedented transaction speeds, benefiting all Web3 funding platforms.",
    category: "Blockchain",
    publishedAt: "2024-01-28",
    readTime: "3 min",
    url: "#",
  },
  {
    id: "2",
    title: "Indonesian Government Supports Web3 Innovation",
    summary: "New regulations provide clearer framework for blockchain-based funding platforms in Indonesia.",
    category: "Regulation",
    publishedAt: "2024-01-27",
    readTime: "5 min",
    url: "#",
  },
  {
    id: "3",
    title: "Q1 2024 Funding Report: Record Breaking Quarter",
    summary: "Platform achieves 150% growth in total funding compared to previous quarter.",
    category: "Company",
    publishedAt: "2024-01-26",
    readTime: "4 min",
    url: "#",
  },
  {
    id: "4",
    title: "New Partnership with Major Indonesian Banks",
    summary: "Strategic partnerships enable easier fiat-to-crypto conversions for Indonesian users.",
    category: "Partnership",
    publishedAt: "2024-01-25",
    readTime: "2 min",
    url: "#",
  },
]

export function NewsSection() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "blockchain":
        return "bg-blue-500 hover:bg-blue-600"
      case "regulation":
        return "bg-orange-500 hover:bg-orange-600"
      case "company":
        return "bg-green-500 hover:bg-green-600"
      case "partnership":
        return "bg-purple-500 hover:bg-purple-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest News</CardTitle>
        <CardDescription>Stay updated with the latest developments in Web3 funding</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockNews.map((news) => (
            <div key={news.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between space-x-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center space-x-2">
                    <Badge className={getCategoryColor(news.category)}>{news.category}</Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{news.readTime}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground leading-tight">{news.title}</h3>
                  <p className="text-sm text-muted-foreground">{news.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{formatDate(news.publishedAt)}</span>
                    <Link
                      href={news.url}
                      className="text-xs text-primary hover:text-primary/80 flex items-center space-x-1"
                    >
                      <span>Read more</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
