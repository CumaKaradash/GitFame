"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Share2, Twitter, Linkedin, Copy, Download, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScoreCard } from "@/components/score-card"
import { AchievementBadge } from "@/components/achievement-badge"
import { CodingPatterns } from "@/components/coding-patterns"
import { RepositoryHighlights } from "@/components/repository-highlights"
import { CommitMessages } from "@/components/commit-messages"
import { DeveloperPersonality } from "@/components/developer-personality"
import { useToast } from "@/components/ui/use-toast"
import { getMockUserData } from "@/lib/mock-data"
import { saveUser } from "@/lib/user-storage"

interface RoastResultsProps {
  username: string
}

export function RoastResults({ username }: RoastResultsProps) {
  const [userData, setUserData] = useState<any>(null)
  const { toast } = useToast()

  useEffect(() => {
    setTimeout(() => {
      const data = getMockUserData(username)
      setUserData(data)

      saveUser({
        username: data.username,
        avatar: data.avatar,
        score: data.overallScore,
        repos: data.repos,
        followers: data.followers,
      })
    }, 500)
  }, [username])

  if (!userData) {
    return null
  }

  const handleShare = (platform: string) => {
    const url = `https://gitfame.dev/roast/${username}`
    const text = `I got a ${userData.overallScore}/100 on GitFame! ${userData.roast.split(".")[0]}. Get roasted:`

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=GitFame`,
          "_blank",
        )
        break
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
        break
      case "copy":
        navigator.clipboard.writeText(url)
        toast({
          title: "Link copied!",
          description: "Share link copied to clipboard",
        })
        break
      case "download":
        toast({
          title: "Downloading...",
          description: "Your roast card is being prepared",
        })
        break
    }
  }

  const getScoreBadge = (score: number) => {
    if (score <= 20) return { label: "Code Newbie", emoji: "🐣" }
    if (score <= 40) return { label: "Junior", emoji: "🎓" }
    if (score <= 60) return { label: "Solid Dev", emoji: "💪" }
    if (score <= 80) return { label: "Senior", emoji: "🥷" }
    if (score <= 95) return { label: "Tech Lead", emoji: "👑" }
    return { label: "Legend", emoji: "🚀" }
  }

  const badge = getScoreBadge(userData.overallScore)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-8 h-fit space-y-4">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={username} />
                  <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold">{username}</h2>
                  <p className="text-sm text-muted-foreground">
                    {userData.repos} repos • {userData.followers} followers
                  </p>
                </div>
                <div className="w-full pt-4 border-t">
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    {userData.overallScore}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Overall Score</p>
                </div>
                <Badge className="text-lg px-4 py-2">
                  {badge.emoji} {badge.label}
                </Badge>
                <Button className="w-full" size="lg" onClick={() => handleShare("twitter")}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share My Score
                </Button>
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="space-y-8">
            {/* Sticky Share Buttons */}
            <div className="sticky top-4 z-10 flex justify-end gap-2 bg-background/80 backdrop-blur-sm p-2 rounded-lg">
              <Button variant="outline" size="icon" onClick={() => handleShare("twitter")}>
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => handleShare("linkedin")}>
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => handleShare("copy")}>
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => handleShare("download")}>
                <Download className="h-4 w-4" />
              </Button>
            </div>

            {/* The Roast */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="p-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold">The Roast</h2>
                  <div className="flex gap-1">
                    {Array.from({ length: userData.flameIntensity }).map((_, i) => (
                      <Flame key={i} className="h-5 w-5 text-orange-500 fill-orange-500" />
                    ))}
                  </div>
                </div>
                <p className="text-lg leading-relaxed">{userData.roast}</p>
              </Card>
            </motion.div>

            {/* Score Breakdown */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Score Breakdown</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {userData.scores.map((score: any, index: number) => (
                  <ScoreCard key={index} {...score} />
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Achievements</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {userData.achievements.map((achievement: any, index: number) => (
                  <AchievementBadge key={index} {...achievement} />
                ))}
              </div>
            </div>

            {/* Coding Patterns */}
            <CodingPatterns data={userData.patterns} />

            {/* Repository Highlights */}
            <RepositoryHighlights repos={userData.topRepos} />

            {/* Commit Messages */}
            <CommitMessages best={userData.bestCommits} worst={userData.worstCommits} />

            {/* Developer Personality */}
            <DeveloperPersonality personality={userData.personality} />
          </main>
        </div>
      </div>
    </div>
  )
}
