import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <>
      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Ready to face the truth?</h2>
          <p className="mb-8 text-xl text-gray-300">Join thousands of developers who've been roasted</p>
          <Button
            size="lg"
            className="h-14 bg-white px-8 text-lg font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200"
          >
            <Github className="mr-2 h-5 w-5" />
            Get Your Roast Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                  <span className="text-lg font-bold">GF</span>
                </div>
                <span className="text-xl font-bold text-white">GitFame</span>
              </div>
              <p className="text-sm text-gray-400">AI-powered GitHub profile analyzer</p>
            </div>

            {/* Product */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/leaderboard" className="hover:text-white">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-white">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="/examples" className="hover:text-white">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="https://twitter.com" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://github.com" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 GitFame. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
