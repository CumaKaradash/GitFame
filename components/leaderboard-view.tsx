"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getMockLeaderboard } from "@/lib/mock-data"

export function LeaderboardView() {
  const [search, setSearch] = useState("")
  const [period, setPeriod] = useState("all-time")
  const leaderboard = getMockLeaderboard()

  const medals = ["🥇", "🥈", "🥉"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
          <p className="text-muted-foreground">Top developers ranked by GitFame score</p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <Input placeholder="Search developers..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-time">All Time</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="overall">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="overall">Overall Score</SelectItem>
                <SelectItem value="commits">Commit Quality</SelectItem>
                <SelectItem value="impact">Impact Score</SelectItem>
                <SelectItem value="community">Community</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Leaderboard Table */}
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">Rank</TableHead>
                <TableHead>Developer</TableHead>
                <TableHead className="text-right">Score</TableHead>
                <TableHead className="text-right">Highlight</TableHead>
                <TableHead className="text-right">Badge</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboard.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="font-bold">
                    {index < 3 ? <span className="text-2xl">{medals[index]}</span> : index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{user.username[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user.username}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-bold">{user.score}</TableCell>
                  <TableCell className="text-right text-sm text-muted-foreground">{user.highlight}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary">{user.badge}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}
