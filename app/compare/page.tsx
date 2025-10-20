import type { Metadata } from "next"
import { CompareView } from "@/components/compare-view"

export const metadata: Metadata = {
  title: "Compare Developers | GitFame",
  description: "Compare two GitHub profiles side-by-side and see who wins.",
}

export default function ComparePage() {
  return <CompareView />
}
