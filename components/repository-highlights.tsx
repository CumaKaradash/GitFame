"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface Repository {
  name: string
  description: string
  stars: number
  forks: number
  language: string
  comment: string
}

interface RepositoryHighlightsProps {
  repos: Repository[]
}

export function RepositoryHighlights({ repos }: RepositoryHighlightsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Repository Highlights</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {repos.map((repo, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="p-6 h-full">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{repo.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{repo.description}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4 text-blue-500" />
                      <span>{repo.forks}</span>
                    </div>
                    <Badge variant="secondary">{repo.language}</Badge>
                  </div>
                  <p className="text-sm italic text-muted-foreground">"{repo.comment}"</p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
