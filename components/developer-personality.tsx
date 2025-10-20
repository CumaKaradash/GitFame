import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

interface DeveloperPersonalityProps {
  personality: {
    type: string
    traits: { label: string; positive: boolean }[]
    similarTo: string
    advice: string
  }
}

export function DeveloperPersonality({ personality }: DeveloperPersonalityProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Developer Personality</h2>
      <Card className="p-8">
        <div className="text-center mb-6">
          <Badge className="text-lg px-4 py-2 mb-4" variant="secondary">
            {personality.type}
          </Badge>
          <p className="text-muted-foreground">
            You're most similar to: <strong>{personality.similarTo}</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {personality.traits.map((trait, index) => (
            <div key={index} className="flex items-center gap-2">
              {trait.positive ? (
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-red-500 flex-shrink-0" />
              )}
              <span className="text-sm">{trait.label}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t">
          <h3 className="font-semibold mb-2">Career Advice</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{personality.advice}</p>
        </div>
      </Card>
    </div>
  )
}
