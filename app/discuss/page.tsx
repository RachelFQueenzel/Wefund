import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users, Clock, TrendingUp } from "lucide-react"

export default function DiscussPage() {
  // Mock discussion data
  const discussions = [
    {
      id: "1",
      title: "Best practices for evaluating Web3 projects",
      author: "CryptoInvestor",
      replies: 23,
      views: 456,
      lastActivity: "2 hours ago",
      category: "Investment Tips",
      isHot: true,
    },
    {
      id: "2",
      title: "Solana network performance and its impact on funding",
      author: "BlockchainDev",
      replies: 15,
      views: 234,
      lastActivity: "4 hours ago",
      category: "Technical",
      isHot: false,
    },
    {
      id: "3",
      title: "Indonesian regulations for Web3 funding platforms",
      author: "LegalExpert",
      replies: 31,
      views: 678,
      lastActivity: "6 hours ago",
      category: "Regulation",
      isHot: true,
    },
    {
      id: "4",
      title: "Success story: My experience with EcoTech Solar Panel",
      author: "GreenInvestor",
      replies: 8,
      views: 123,
      lastActivity: "1 day ago",
      category: "Success Stories",
      isHot: false,
    },
  ]

  const categories = [
    { name: "Investment Tips", count: 45, color: "bg-blue-100 text-blue-800" },
    { name: "Technical", count: 23, color: "bg-green-100 text-green-800" },
    { name: "Regulation", count: 12, color: "bg-orange-100 text-orange-800" },
    { name: "Success Stories", count: 18, color: "bg-purple-100 text-purple-800" },
    { name: "General", count: 67, color: "bg-gray-100 text-gray-800" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Community Discussions</h1>
            <p className="text-muted-foreground">
              Connect with other investors and share insights about Web3 funding opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-2xl font-bold">165</div>
                        <div className="text-sm text-muted-foreground">Total Discussions</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-2xl font-bold">1,234</div>
                        <div className="text-sm text-muted-foreground">Active Members</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-2xl font-bold">89</div>
                        <div className="text-sm text-muted-foreground">Posts Today</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Discussion List */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Discussions</CardTitle>
                    <Button>Start New Discussion</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {discussions.map((discussion) => (
                      <div
                        key={discussion.id}
                        className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-start justify-between space-x-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge className="bg-primary/10 text-primary">{discussion.category}</Badge>
                              {discussion.isHot && (
                                <Badge className="bg-red-100 text-red-800">
                                  <TrendingUp className="h-3 w-3 mr-1" />
                                  Hot
                                </Badge>
                              )}
                            </div>
                            <h3 className="font-semibold text-foreground mb-1">{discussion.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>by {discussion.author}</span>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="h-3 w-3" />
                                <span>{discussion.replies} replies</span>
                              </div>
                              <span>{discussion.views} views</span>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{discussion.lastActivity}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center justify-between">
                        <span className="text-sm">{category.name}</span>
                        <Badge className={category.color}>{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Be respectful and constructive</p>
                    <p>• No spam or promotional content</p>
                    <p>• Share accurate information only</p>
                    <p>• Help others learn and grow</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Contributors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                        CI
                      </div>
                      <div>
                        <div className="text-sm font-medium">CryptoInvestor</div>
                        <div className="text-xs text-muted-foreground">156 posts</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-bold">
                        BD
                      </div>
                      <div>
                        <div className="text-sm font-medium">BlockchainDev</div>
                        <div className="text-xs text-muted-foreground">134 posts</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                        LE
                      </div>
                      <div>
                        <div className="text-sm font-medium">LegalExpert</div>
                        <div className="text-xs text-muted-foreground">98 posts</div>
                      </div>
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
