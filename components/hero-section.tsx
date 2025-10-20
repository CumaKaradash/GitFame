"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useEffect, useState } from "react"
import { ExampleCards } from "./example-cards"

export function HeroSection() {
  const [roastedCount, setRoastedCount] = useState(12847)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoastedCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 opacity-20 animate-gradient" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1 className="mb-6 text-6xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Get Brutally Honest
            </span>
            <br />
            About Your GitHub
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-xl text-gray-400 md:text-2xl">AI-powered roast that developers actually share</p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="mb-6 h-14 bg-white px-8 text-lg font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200"
          >
            <Github className="mr-2 h-5 w-5" />
            Roast My Profile
          </Button>

          {/* Live counter */}
          <p className="mb-12 text-sm text-gray-500">
            <span className="font-mono text-purple-400">{roastedCount.toLocaleString()}</span> developers roasted today
          </p>

          {/* Floating example cards */}
          <ExampleCards />
        </div>
      </div>
    </section>
  )
}
