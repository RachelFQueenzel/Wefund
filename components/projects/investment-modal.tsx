"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/use-auth"
import { apiClient } from "@/lib/api"
import type { Project } from "@/lib/projects"

interface InvestmentModalProps {
  project: Project
  children: React.ReactNode
}

export function InvestmentModal({ project, children }: InvestmentModalProps) {
  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()
  const { toast } = useToast()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const handleInvest = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to make an investment",
        variant: "destructive",
      })
      return
    }

    if (!amount || Number(amount) < project.minInvestment) {
      toast({
        title: "Invalid amount",
        description: `Minimum investment is ${formatCurrency(project.minInvestment)}`,
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      await apiClient.post("/api/investments", {
        projectId: project.id,
        amount: Number(amount),
      })

      toast({
        title: "Investment successful",
        description: `You have invested ${formatCurrency(Number(amount))} in ${project.title}`,
      })

      setAmount("")
      setIsOpen(false)
    } catch (error) {
      toast({
        title: "Investment failed",
        description: "There was an error processing your investment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invest in {project.title}</DialogTitle>
          <DialogDescription>
            Enter the amount you want to invest in this project. Expected return: {project.expectedReturn}%
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Investment Amount (IDR)</Label>
            <Input
              id="amount"
              type="number"
              placeholder={`Minimum: ${formatCurrency(project.minInvestment)}`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min={project.minInvestment}
            />
            <p className="text-sm text-muted-foreground">Minimum investment: {formatCurrency(project.minInvestment)}</p>
          </div>
          {amount && Number(amount) >= project.minInvestment && (
            <div className="p-4 bg-muted rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span>Investment Amount:</span>
                <span className="font-medium">{formatCurrency(Number(amount))}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Expected Return ({project.expectedReturn}%):</span>
                <span className="font-medium text-green-600">
                  {formatCurrency(Number(amount) * (project.expectedReturn / 100))}
                </span>
              </div>
              <div className="flex justify-between text-sm font-medium border-t pt-2">
                <span>Total Expected:</span>
                <span>{formatCurrency(Number(amount) * (1 + project.expectedReturn / 100))}</span>
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleInvest} disabled={isLoading}>
            {isLoading ? "Processing..." : "Invest Now"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
