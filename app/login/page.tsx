import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">PT. Diindonesia</h1>
          <p className="text-muted-foreground">Web3 Funding Platform</p>
        </div>
        <LoginForm />
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
