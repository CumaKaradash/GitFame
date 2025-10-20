"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

const exampleRoasts = [
  {
    username: "codemaster",
    score: 73,
    roast: "73% commits on Saturday nights - do you have friends?",
    avatar: "/developer-avatar-1.png",
  },
  {
    username: "jsdev",
    score: 45,
    roast: "You call yourself full-stack but your GitHub says 'README.md developer'",
    avatar: "/developer-avatar-2.png",
  },
  {
    username: "pythonista",
    score: 88,
    roast: "Consistent with TypeScript... consistently avoiding tests",
    avatar: "/developer-avatar-3.png",
  },
]

export function ExampleCards() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % exampleRoasts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative mx-auto h-64 w-full max-w-2xl">
      {exampleRoasts.map((roast, index) => {
        const offset = (index - activeIndex + exampleRoasts.length) % exampleRoasts.length
        const isActive = offset === 0

        return (
          <Card
            key={roast.username}
            className="absolute left-1/2 top-1/2 w-80 -translate-x-1/2 -translate-y-1/2 border-purple-500/20 bg-gray-900/80 p-6 backdrop-blur-sm transition-all duration-700"
            style={{
              transform: `translate(-50%, -50%) translateX(${offset * 100}px) scale(${isActive ? 1 : 0.9})`,
              opacity: isActive ? 1 : 0.4,
              zIndex: isActive ? 10 : 5 - offset,
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={roast.avatar || "/placeholder.svg"} alt={roast.username} className="h-12 w-12 rounded-full" />
              <div>
                <p className="font-semibold">{roast.username}</p>
                <p className="text-sm text-gray-400">Score: {roast.score}/100</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">{roast.roast}</p>
          </Card>
        )
      })}
    </div>
  )
}
