import { Suspense } from "react"
import type { Metadata } from "next"
import { RoastResults } from "@/components/roast-results"
import { LoadingScreen } from "@/components/loading-screen"

export async function generateMetadata({
  params,
}: {
  params: { username: string }
}): Promise<Metadata> {
  return {
    title: `${params.username}'s GitHub Roast | GitFame`,
    description: `See ${params.username}'s brutal GitHub analysis with AI-powered roasts, scores, and achievements.`,
  }
}

export default function RoastPage({
  params,
}: {
  params: { username: string }
}) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RoastResults username={params.username} />
    </Suspense>
  )
}
