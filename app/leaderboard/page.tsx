import type { Metadata } from "next"
import { LeaderboardView } from "@/components/leaderboard-view"

export const metadata: Metadata = {
  title: "Leaderboard | GitFame",
  description: "Top developers ranked by GitFame score.",
}

export default function LeaderboardPage() {
  return <LeaderboardView />
}
