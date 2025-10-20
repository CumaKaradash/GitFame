import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

interface CommitMessagesProps {
  best: string[]
  worst: string[]
}

export function CommitMessages({ best, worst }: CommitMessagesProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Commit Message Hall of Fame/Shame</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-green-500/5 border-green-500/20">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            Best Commits
          </h3>
          <ul className="space-y-2">
            {best.map((commit, index) => (
              <li key={index} className="text-sm font-mono bg-background p-2 rounded">
                {commit}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 bg-red-500/5 border-red-500/20">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <X className="h-5 w-5 text-red-500" />
            Worst Commits
          </h3>
          <ul className="space-y-2">
            {worst.map((commit, index) => (
              <li key={index} className="text-sm font-mono bg-background p-2 rounded">
                {commit}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}
