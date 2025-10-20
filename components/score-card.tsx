"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ScoreCardProps {
  title: string
  score: number
  icon: React.ReactNode
  description: string
  submetrics?: { label: string; value: number }[]
  color?: string
}

export function ScoreCard({ title, score, icon, description, submetrics, color = "indigo" }: ScoreCardProps) {
  const [displayScore, setDisplayScore] = useState(0)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayScore((prev) => {
          if (prev >= score) {
            clearInterval(interval)
            return score
          }
          return prev + 1
        })
      }, 20)
      return () => clearInterval(interval)
    }, 100)
    return () => clearTimeout(timer)
  }, [score])

  const getColorClass = () => {
    if (score >= 80) return "text-green-500"
    if (score >= 60) return "text-blue-500"
    if (score >= 40) return "text-amber-500"
    return "text-red-500"
  }

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`${getColorClass()}`}>{icon}</div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <motion.div
          className={`text-3xl font-bold ${getColorClass()}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {displayScore}
        </motion.div>
      </div>
      <Progress value={displayScore} className="h-2" />
      {submetrics && submetrics.length > 0 && (
        <div className="mt-4">
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)} className="w-full justify-between">
            <span className="text-sm">Details</span>
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-2 space-y-2"
            >
              {submetrics.map((metric, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{metric.label}</span>
                  <span className="font-medium">{metric.value}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      )}
    </Card>
  )
}
