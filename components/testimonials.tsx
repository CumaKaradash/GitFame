import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Chen",
    username: "@sarahcodes",
    avatar: "/developer-woman.png",
    quote: "Got absolutely destroyed by my own commit history. 10/10 would get roasted again 🔥",
  },
  {
    name: "Mike Johnson",
    username: "@mikejs",
    avatar: "/developer-man.png",
    quote: "This is the most accurate personality test I've ever taken. Also the most brutal 😅",
  },
  {
    name: "Alex Rivera",
    username: "@alexdev",
    avatar: "/developer-person.jpg",
    quote: "Shared my roast card on Twitter and it went viral. GitFame knows developers too well 🚀",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">What Developers Say</h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.username}
              className="border-gray-800 bg-gradient-to-br from-indigo-950/30 to-purple-950/30 p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.username}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.quote}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
