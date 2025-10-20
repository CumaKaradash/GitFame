"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Spinner } from "@/components/ui/spinner"

const messages = [
  "Analyzing commits...",
  "Counting console.logs...",
  "Judging commit messages...",
  "Reading your code...",
  "Preparing the roast...",
  "Calculating scores...",
]

export function LoadingScreen() {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center text-white"
      >
        <Spinner className="h-16 w-16 mx-auto mb-6" />
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-xl font-semibold"
        >
          {messages[messageIndex]}
        </motion.p>
      </motion.div>
    </div>
  )
}
