"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getStoredUsers, type StoredUser } from "@/lib/user-storage"
import { getMockLeaderboard } from "@/lib/mock-data"
import Link from "next/link"

export function LeaderboardView() {
  const [search, setSearch] = useState("")
  const [period, setPeriod] = useState("all-time")
  const [leaderboard, setLeaderboard] = useState<StoredUser[]>([])

  useEffect(() => {
    const storedUsers = getStoredUsers()

    // If no users have signed in yet, show mock data
    if (storedUsers.length === 0) {
      setLeaderboard(getMockLeaderboard() as any)
    } else {
      setLeaderboard(storedUsers)
    }
  }, [])

  const filteredLeaderboard = leaderboard.filter((user) => user.username.toLowerCase().includes(search.toLowerCase()))

  const medals = ["🥇", "🥈", "🥉"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
          <p className="text-muted-foreground">
            {leaderboard.length > 0 && getStoredUsers().length > 0
              ? `${getStoredUsers().length} developers ranked by GitFame score`
              : "Top developers ranked by GitFame score"}
          </p>
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

        {filteredLeaderboard.length === 0 && search === "" && getStoredUsers().length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground mb-4">No developers have been roasted yet!</p>
            <p className="text-sm text-muted-foreground">Be the first to get your GitHub profile analyzed.</p>
          </Card>
        ) : filteredLeaderboard.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No developers found matching "{search}"</p>
          </Card>
        ) : (
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
                {filteredLeaderboard.map((user, index) => (
                  <TableRow key={index} className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-bold">
                      {index < 3 ? <span className="text-2xl">{medals[index]}</span> : index + 1}
                    </TableCell>
                    <TableCell>
                      <Link href={`/roast/${user.username}`} className="flex items-center gap-3 hover:underline">
                        <Avatar>
                          <AvatarImage src={user.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{user.username[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{user.username}</span>
                      </Link>
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
        )}
      </div>
    </div>
  )
}
