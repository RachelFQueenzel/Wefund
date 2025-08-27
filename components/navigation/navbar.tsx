"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, ChevronDown, User, Wallet, LogOut, Menu, X } from "lucide-react"

export function Navbar() {
  const { user, logout } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">DI</span>
              </div>
              <span className="font-bold text-lg text-foreground">PT. Diindonesia</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Navigation</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/projects">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/discuss">Discuss</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search projects..." className="pl-10 w-64" />
            </div>

            {/* User Section */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{user.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/wallet" className="flex items-center space-x-2">
                      <Wallet className="h-4 w-4" />
                      <span>Wallet</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center space-x-2">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Search Bar Mobile */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search projects..." className="pl-10 w-full" />
              </div>

              {/* Navigation Links */}
              <Link
                href="/projects"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/discuss"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Discuss
              </Link>
              <Link
                href="/dashboard"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>

              {/* User Section Mobile */}
              {user ? (
                <div className="border-t border-border pt-3 mt-3">
                  <div className="px-3 py-2 text-sm font-medium text-muted-foreground">Signed in as {user.name}</div>
                  <Link
                    href="/profile"
                    className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/wallet"
                    className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Wallet
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="border-t border-border pt-3 mt-3 space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      Register
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
