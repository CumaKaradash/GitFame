import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function ApiDocsView() {
  const endpoints = [
    {
      method: "GET",
      path: "/api/roast/:username",
      description: "Get roast data for a GitHub user",
      params: [{ name: "username", type: "string", required: true }],
      response: "{ score: number, roast: string, achievements: [] }",
    },
    {
      method: "GET",
      path: "/api/compare/:user1/:user2",
      description: "Compare two GitHub users",
      params: [
        { name: "user1", type: "string", required: true },
        { name: "user2", type: "string", required: true },
      ],
      response: "{ winner: string, comparison: {} }",
    },
    {
      method: "GET",
      path: "/api/leaderboard",
      description: "Get top developers",
      params: [
        { name: "limit", type: "number", required: false },
        { name: "period", type: "string", required: false },
      ],
      response: "{ users: [] }",
    },
  ]

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      features: ["100 requests/day", "Basic endpoints", "Community support", "Rate limited"],
    },
    {
      name: "Pro",
      price: "$19/mo",
      features: ["10,000 requests/day", "All endpoints", "Priority support", "Webhooks", "Custom branding"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited requests",
        "Dedicated support",
        "SLA guarantee",
        "Custom integrations",
        "On-premise option",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
          <p className="text-muted-foreground">Integrate GitFame into your apps with our developer API</p>
        </div>

        {/* Quick Start */}
        <Card className="p-6 mb-12 bg-muted/50">
          <h2 className="text-xl font-bold mb-4">Quick Start</h2>
          <pre className="bg-background p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {`curl -X GET "https://api.gitfame.dev/roast/octocat" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            </code>
          </pre>
        </Card>

        {/* Endpoints */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">Endpoints</h2>
          {endpoints.map((endpoint, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Badge variant={endpoint.method === "GET" ? "default" : "secondary"}>{endpoint.method}</Badge>
                <div className="flex-1">
                  <code className="text-sm font-mono">{endpoint.path}</code>
                  <p className="text-sm text-muted-foreground mt-1">{endpoint.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Parameters:</h4>
                {endpoint.params.map((param, i) => (
                  <div key={i} className="text-sm flex gap-2">
                    <code className="bg-muted px-2 py-1 rounded">{param.name}</code>
                    <span className="text-muted-foreground">{param.type}</span>
                    {param.required && (
                      <Badge variant="outline" className="text-xs">
                        required
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Response:</h4>
                <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                  <code>{endpoint.response}</code>
                </pre>
              </div>
            </Card>
          ))}
        </div>

        {/* Pricing */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`p-6 ${tier.popular ? "border-indigo-500 border-2 relative" : ""}`}>
                {tier.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Popular</Badge>}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold">{tier.price}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
