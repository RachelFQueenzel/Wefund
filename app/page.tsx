import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Web3 Funding Platform</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              PT. Diindonesia menghadirkan platform funding berbasis blockchain Solana untuk mendukung proyek-proyek
              inovatif di Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/projects">Explore Projects</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Platform?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami menyediakan solusi funding yang transparan, aman, dan efisien menggunakan teknologi blockchain
                terdepan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>High Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Dapatkan return investasi yang optimal dengan risiko yang terukur</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Community Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Bergabung dengan komunitas investor dan entrepreneur terpercaya</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Transparent Funding</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Semua transaksi tercatat di blockchain untuk transparansi penuh</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Fast & Secure</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Transaksi cepat dan aman dengan teknologi Solana blockchain</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
