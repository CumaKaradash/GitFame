import type { Metadata } from "next"
import { SettingsView } from "@/components/settings-view"

export const metadata: Metadata = {
  title: "Settings | GitFame",
  description: "Manage your GitFame profile and preferences.",
}

export default function SettingsPage() {
  return <SettingsView />
}
