"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Trophy } from "lucide-react"
import { getMockUserData } from "@/lib/mock-data"

export function CompareView() {
  const [user1, setUser1] = useState("")
  const [user2, setUser2] = useState("")
  const [compared, setCompared] = useState(false)
  const [data1, setData1] = useState<any>(null)
  const [data2, setData2] = useState<any>(null)

  const handleCompare = () => {
    setData1(getMockUserData(user1))
    setData2(getMockUserData(user2))
    setCompared(true)
  }

  const getWinner = (val1: number, val2: number) => {
    if (val1 > val2) return "user1"
    if (val2 > val1) return "user2"
    return "tie"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Compare Developers</h1>
          <p className="text-muted-foreground">
            See who's the better developer (according to our totally scientific algorithm)
          </p>
        </div>

        {!compared ? (
          <Card className="max-w-2xl mx-auto p-8">
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-end">
              <div>
                <label className="text-sm font-medium mb-2 block">User 1</label>
                <Input placeholder="github-username" value={user1} onChange={(e) => setUser1(e.target.value)} />
              </div>
              <div className="text-2xl font-bold text-muted-foreground pb-2">VS</div>
              <div>
                <label className="text-sm font-medium mb-2 block">User 2</label>
                <Input placeholder="github-username" value={user2} onChange={(e) => setUser2(e.target.value)} />
              </div>
            </div>
            <Button className="w-full mt-6" size="lg" onClick={handleCompare} disabled={!user1 || !user2}>
              Compare
            </Button>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Winner Banner */}
            <Card className="p-8 text-center bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/20">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-amber-500" />
              <h2 className="text-3xl font-bold mb-2">
                {data1.overallScore > data2.overallScore
                  ? `${user1} wins!`
                  : data2.overallScore > data1.overallScore
                    ? `${user2} wins!`
                    : "It's a tie!"}
              </h2>
              <p className="text-muted-foreground">
                {data1.overallScore > data2.overallScore
                  ? `${user1} scored ${data1.overallScore - data2.overallScore} points higher`
                  : data2.overallScore > data1.overallScore
                    ? `${user2} scored ${data2.overallScore - data1.overallScore} points higher`
                    : "Both developers are equally matched"}
              </p>
            </Card>

            {/* Profile Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={data1.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{user1[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-xl">{user1}</h3>
                    <Badge>{data1.overallScore}/100</Badge>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={data2.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{user2[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-xl">{user2}</h3>
                    <Badge>{data2.overallScore}/100</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Comparison Table */}
            <Card className="p-6">
              <h3 className="font-bold text-xl mb-6">Detailed Comparison</h3>
              <div className="space-y-4">
                {data1.scores.map((score: any, index: number) => {
                  const winner = getWinner(score.score, data2.scores[index].score)
                  return (
                    <div key={index} className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                      <div className={`text-right ${winner === "user1" ? "font-bold text-green-500" : ""}`}>
                        {score.score}
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">{score.title}</p>
                        {winner !== "tie" && (
                          <ArrowRight className={`h-4 w-4 mx-auto ${winner === "user1" ? "rotate-180" : ""}`} />
                        )}
                      </div>
                      <div className={`text-left ${winner === "user2" ? "font-bold text-green-500" : ""}`}>
                        {data2.scores[index].score}
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            <Button variant="outline" className="mx-auto block bg-transparent" onClick={() => setCompared(false)}>
              Compare Different Users
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
