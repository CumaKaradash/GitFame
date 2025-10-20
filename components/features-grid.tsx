import { Card } from "@/components/ui/card"
import { Brain, Share2, BarChart3, Trophy, Users, Calendar } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Advanced AI analyzes your commits, code quality, and patterns to generate personalized roasts",
  },
  {
    icon: Share2,
    title: "Shareable Cards",
    description: "Beautiful, viral-ready cards optimized for Twitter, LinkedIn, and social sharing",
  },
  {
    icon: BarChart3,
    title: "Developer Insights",
    description: "Deep dive into your coding patterns, languages, and activity with interactive charts",
  },
  {
    icon: Trophy,
    title: "Achievements",
    description: "Unlock badges and achievements based on your GitHub activity and milestones",
  },
  {
    icon: Users,
    title: "Compare",
    description: "Challenge friends and see how you stack up against other developers",
  },
  {
    icon: Calendar,
    title: "Yearly Wrapped",
    description: "Get your annual GitHub summary with stats, highlights, and roasts",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="group border-gray-800 bg-gray-900/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
