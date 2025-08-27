"use client"

import { useState } from "react"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/layout/footer"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Wallet, Plus, Minus, ArrowUpRight, ArrowDownLeft, Copy, ExternalLink } from "lucide-react"

export default function WalletPage() {
  const { toast } = useToast()
  const [depositAmount, setDepositAmount] = useState("")
  const [withdrawAmount, setWithdrawAmount] = useState("")

  // Mock wallet data
  const walletData = {
    balance: 15750000, // IDR
    solanaBalance: 2.5, // SOL
    walletAddress: "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
    transactions: [
      {
        id: "1",
        type: "deposit",
        amount: 5000000,
        currency: "IDR",
        date: "2024-01-28",
        status: "completed",
        description: "Bank Transfer Deposit",
      },
      {
        id: "2",
        type: "investment",
        amount: 2500000,
        currency: "IDR",
        date: "2024-01-27",
        status: "completed",
        description: "Investment in EcoTech Solar Panel",
      },
      {
        id: "3",
        type: "return",
        amount: 625000,
        currency: "IDR",
        date: "2024-01-25",
        status: "completed",
        description: "Return from Smart Agriculture IoT",
      },
      {
        id: "4",
        type: "withdraw",
        amount: 1000000,
        currency: "IDR",
        date: "2024-01-20",
        status: "pending",
        description: "Bank Transfer Withdrawal",
      },
    ],
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
      month: "short",
      day: "numeric",
    })
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(walletData.walletAddress)
    toast({
      title: "Address copied",
      description: "Wallet address has been copied to clipboard",
    })
  }

  const handleDeposit = () => {
    if (!depositAmount) return
    toast({
      title: "Deposit initiated",
      description: `Deposit of ${formatCurrency(Number(depositAmount))} has been initiated`,
    })
    setDepositAmount("")
  }

  const handleWithdraw = () => {
    if (!withdrawAmount) return
    toast({
      title: "Withdrawal initiated",
      description: `Withdrawal of ${formatCurrency(Number(withdrawAmount))} has been initiated`,
    })
    setWithdrawAmount("")
  }

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return <ArrowDownLeft className="h-4 w-4 text-green-600" />
      case "withdraw":
        return <ArrowUpRight className="h-4 w-4 text-red-600" />
      case "investment":
        return <ArrowUpRight className="h-4 w-4 text-blue-600" />
      case "return":
        return <ArrowDownLeft className="h-4 w-4 text-green-600" />
      default:
        return <Wallet className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Wallet</h1>
              <p className="text-muted-foreground">Manage your funds and view transaction history</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Wallet Balance */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Wallet className="h-5 w-5" />
                        <span>IDR Balance</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {formatCurrency(walletData.balance)}
                      </div>
                      <p className="text-sm text-muted-foreground">Available for investment</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <img src="/solana-logo.png" alt="Solana" className="w-5 h-5" />
                        <span>SOL Balance</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground mb-2">{walletData.solanaBalance} SOL</div>
                      <p className="text-sm text-muted-foreground">Solana blockchain balance</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Wallet Address */}
                <Card>
                  <CardHeader>
                    <CardTitle>Wallet Address</CardTitle>
                    <CardDescription>Your Solana wallet address for receiving funds</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                      <code className="flex-1 text-sm font-mono">{walletData.walletAddress}</code>
                      <Button variant="outline" size="sm" onClick={copyAddress}>
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Transaction History */}
                <Card>
                  <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>Your recent wallet transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {walletData.transactions.map((transaction) => (
                        <div
                          key={transaction.id}
                          className="flex items-center justify-between p-4 border border-border rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            {getTransactionIcon(transaction.type)}
                            <div>
                              <h4 className="font-medium">{transaction.description}</h4>
                              <p className="text-sm text-muted-foreground">{formatDate(transaction.date)}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">
                              {transaction.type === "deposit" || transaction.type === "return" ? "+" : "-"}
                              {formatCurrency(transaction.amount)}
                            </div>
                            {getStatusBadge(transaction.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Actions */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Plus className="h-5 w-5" />
                      <span>Deposit Funds</span>
                    </CardTitle>
                    <CardDescription>Add money to your wallet</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="deposit">Amount (IDR)</Label>
                      <Input
                        id="deposit"
                        type="number"
                        placeholder="Enter amount"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                      />
                    </div>
                    <Button onClick={handleDeposit} className="w-full">
                      Deposit
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Minus className="h-5 w-5" />
                      <span>Withdraw Funds</span>
                    </CardTitle>
                    <CardDescription>Transfer money to your bank</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="withdraw">Amount (IDR)</Label>
                      <Input
                        id="withdraw"
                        type="number"
                        placeholder="Enter amount"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                      />
                    </div>
                    <Button onClick={handleWithdraw} variant="outline" className="w-full bg-transparent">
                      Withdraw
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      View Investment Portfolio
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Download Statements
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Set Auto-Invest
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
