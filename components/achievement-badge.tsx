"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface AchievementBadgeProps {
  name: string
  description: string
  icon: string
  rarity: "common" | "rare" | "epic" | "legendary"
  unlocked: boolean
}

export function AchievementBadge({ name, description, icon, rarity, unlocked }: AchievementBadgeProps) {
  const rarityColors = {
    common: "bg-gray-500",
    rare: "bg-blue-500",
    epic: "bg-purple-500",
    legendary: "bg-amber-500",
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card
              className={`p-6 text-center cursor-pointer transition-all ${
                unlocked ? "hover:shadow-lg" : "grayscale opacity-50 hover:opacity-70"
              }`}
            >
              <div className="text-5xl mb-3">
                {unlocked ? icon : <Lock className="h-12 w-12 mx-auto text-muted-foreground" />}
              </div>
              <h3 className="font-semibold mb-1">{name}</h3>
              <p className="text-xs text-muted-foreground mb-3">{description}</p>
              <Badge className={rarityColors[rarity]} variant="secondary">
                {rarity}
              </Badge>
            </Card>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
