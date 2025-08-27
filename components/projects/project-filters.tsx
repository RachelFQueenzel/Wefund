"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, X } from "lucide-react"

interface ProjectFiltersProps {
  onSearchChange: (search: string) => void
  onCategoryChange: (category: string) => void
  onStatusChange: (status: string) => void
  onRiskChange: (risk: string) => void
  onSortChange: (sort: string) => void
}

export function ProjectFilters({
  onSearchChange,
  onCategoryChange,
  onStatusChange,
  onRiskChange,
  onSortChange,
}: ProjectFiltersProps) {
  const [search, setSearch] = useState("")
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const handleSearchChange = (value: string) => {
    setSearch(value)
    onSearchChange(value)
  }

  const clearFilters = () => {
    setSearch("")
    onSearchChange("")
    onCategoryChange("all")
    onStatusChange("all")
    onRiskChange("all")
    onSortChange("newest")
  }

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="flex items-center space-x-2"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </Button>
        <Button variant="ghost" onClick={clearFilters} className="flex items-center space-x-2">
          <X className="h-4 w-4" />
          <span>Clear</span>
        </Button>
      </div>

      {/* Filters */}
      {isFiltersOpen && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filter Projects</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select onValueChange={onCategoryChange}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Green Energy">Green Energy</SelectItem>
                  <SelectItem value="Agriculture">Agriculture</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Fashion">Fashion</SelectItem>
                  <SelectItem value="FinTech">FinTech</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select onValueChange={onStatusChange}>
                <SelectTrigger>
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="funded">Funded</SelectItem>
                  <SelectItem value="ended">Ended</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="risk">Risk Level</Label>
              <Select onValueChange={onRiskChange}>
                <SelectTrigger>
                  <SelectValue placeholder="All Risk Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Risk Levels</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sort">Sort By</Label>
              <Select onValueChange={onSortChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Newest First" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="funded-high">Most Funded</SelectItem>
                  <SelectItem value="funded-low">Least Funded</SelectItem>
                  <SelectItem value="backers-high">Most Backers</SelectItem>
                  <SelectItem value="return-high">Highest Return</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
