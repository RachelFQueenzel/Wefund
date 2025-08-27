import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">DI</span>
              </div>
              <span className="font-bold text-lg text-foreground">PT. Diindonesia</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              PT. Diindonesia adalah sebuah perusahaan funding dengan menggunakan web3 yang dikembangkan oleh wiccan,
              menggunakan teknologi Solana blockchain untuk memberikan solusi funding yang inovatif dan transparan.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@diindonesia.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <img src="/solana-logo.png" alt="Solana" className="w-6 h-6" />
              <span className="text-sm text-muted-foreground">Powered by Solana Blockchain</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/discuss" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Discuss
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/wallet" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Wallet
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect & Legal</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Social Media</h4>
                <div className="flex space-x-3">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/help"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 PT. Diindonesia. All rights reserved. Developed by wiccan.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Regulated by OJK</span>
              <span>•</span>
              <span>Member of AFPI</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
