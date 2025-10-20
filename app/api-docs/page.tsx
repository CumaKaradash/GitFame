import type { Metadata } from "next"
import { ApiDocsView } from "@/components/api-docs-view"

export const metadata: Metadata = {
  title: "API Documentation | GitFame",
  description: "Integrate GitFame into your apps with our developer API.",
}

export default function ApiDocsPage() {
  return <ApiDocsView />
}
