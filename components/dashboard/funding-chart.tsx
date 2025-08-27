"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", funding: 2400000000 },
  { month: "Feb", funding: 1398000000 },
  { month: "Mar", funding: 9800000000 },
  { month: "Apr", funding: 3908000000 },
  { month: "May", funding: 4800000000 },
  { month: "Jun", funding: 3800000000 },
  { month: "Jul", funding: 4300000000 },
]

export function FundingChart() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      notation: "compact",
      minimumFractionDigits: 0,
    }).format(value)
  }

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Funding Trends</CardTitle>
        <CardDescription>Monthly funding performance over the last 7 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={formatCurrency} />
            <Tooltip formatter={(value) => [formatCurrency(value as number), "Funding"]} />
            <Line type="monotone" dataKey="funding" stroke="hsl(var(--primary))" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
