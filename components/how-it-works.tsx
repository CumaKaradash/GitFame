import { Github, Flame, Share2 } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Github,
    title: "Connect GitHub",
    description: "Sign in with your GitHub account in seconds",
  },
  {
    number: 2,
    icon: Flame,
    title: "Get Roasted",
    description: "AI analyzes your profile and generates your personalized roast",
  },
  {
    number: 3,
    icon: Share2,
    title: "Share & Flex",
    description: "Download your card and share it with the world",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">How It Works</h2>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 top-16 hidden h-0.5 w-full border-t-2 border-dashed border-gray-700 md:block" />
                  )}

                  <div className="relative text-center">
                    {/* Number badge */}
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-2xl font-bold">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
                      <Icon className="h-8 w-8 text-purple-400" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
