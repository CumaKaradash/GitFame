import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
            <span className="text-lg font-bold">GF</span>
          </div>
          <span className="text-xl font-bold">GitFame</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/leaderboard" className="text-sm text-gray-400 transition-colors hover:text-white">
            Leaderboard
          </Link>
          <Link href="/api-docs" className="text-sm text-gray-400 transition-colors hover:text-white">
            API
          </Link>
          <Link href="/compare" className="text-sm text-gray-400 transition-colors hover:text-white">
            Compare
          </Link>
          <Link href="/settings" className="text-sm text-gray-400 transition-colors hover:text-white">
            Settings
          </Link>
        </nav>

        <Button className="bg-white text-black hover:bg-gray-200">
          <Github className="mr-2 h-4 w-4" />
          Sign In
        </Button>
      </div>
    </header>
  )
}
