import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GitFame - Get Brutally Honest About Your GitHub",
  description:
    "AI-powered GitHub profile analyzer that generates shareable roast cards. Spotify Wrapped meets GitHub Roast Me.",
  generator: "v0.app",
  openGraph: {
    title: "GitFame - Get Brutally Honest About Your GitHub",
    description: "AI-powered roast that developers actually share",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitFame - Get Brutally Honest About Your GitHub",
    description: "AI-powered roast that developers actually share",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <div className="pt-16">{children}</div>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
