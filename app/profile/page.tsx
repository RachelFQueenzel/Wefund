"use client"

import { useState } from "react"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/layout/footer"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"
import { User, Mail, Phone, Shield, Edit, Save, X } from "lucide-react"

export default function ProfilePage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  })

  const handleSave = () => {
    // In a real app, this would make an API call to update the user profile
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    })
    setIsEditing(false)
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
              <p className="text-muted-foreground">Manage your account settings and personal information</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Update your personal details and contact information</CardDescription>
                      </div>
                      {!isEditing ? (
                        <Button variant="outline" onClick={() => setIsEditing(true)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      ) : (
                        <div className="flex space-x-2">
                          <Button onClick={handleSave}>
                            <Save className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button variant="outline" onClick={handleCancel}>
                            <X className="h-4 w-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        {isEditing ? (
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        ) : (
                          <div className="flex items-center space-x-2 p-2 bg-muted rounded-md">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span>{user?.name}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        {isEditing ? (
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        ) : (
                          <div className="flex items-center space-x-2 p-2 bg-muted rounded-md">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{user?.email}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        {isEditing ? (
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        ) : (
                          <div className="flex items-center space-x-2 p-2 bg-muted rounded-md">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{user?.phone}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label>Account Status</Label>
                        <div className="flex items-center space-x-2 p-2 bg-muted rounded-md">
                          <Shield className="h-4 w-4 text-green-600" />
                          <Badge className="bg-green-100 text-green-800">Verified</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Investment History */}
                <Card>
                  <CardHeader>
                    <CardTitle>Investment History</CardTitle>
                    <CardDescription>Your recent investment activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">EcoTech Solar Panel Initiative</h4>
                          <p className="text-sm text-muted-foreground">Invested on Jan 20, 2024</p>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">Rp 5,000,000</div>
                          <Badge className="bg-green-100 text-green-800">Active</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">Smart Agriculture IoT Platform</h4>
                          <p className="text-sm text-muted-foreground">Invested on Jan 15, 2024</p>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">Rp 2,500,000</div>
                          <Badge className="bg-blue-100 text-blue-800">Completed</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Account Stats */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">Rp 7,500,000</div>
                      <div className="text-sm text-muted-foreground">Total Invested</div>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Active Investments</span>
                        <span className="font-medium">2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Completed Projects</span>
                        <span className="font-medium">1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Total Returns</span>
                        <span className="font-medium text-green-600">Rp 625,000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Security</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Email Verified</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Phone Verified</span>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      Change Password
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  )
}
