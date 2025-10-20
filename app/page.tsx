import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { FinalCTA } from "@/components/final-cta"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}
