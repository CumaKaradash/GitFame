"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Github } from "lucide-react"

interface UsernameDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UsernameDialog({ open, onOpenChange }: UsernameDialogProps) {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) return

    setIsLoading(true)
    // Navigate to roast page
    router.push(`/roast/${username.trim()}`)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-white/10 bg-black/95 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Enter GitHub Username</DialogTitle>
          <DialogDescription className="text-gray-400">
            We'll analyze your GitHub profile and generate a brutally honest roast
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="octocat"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-white/20 bg-white/5 text-white placeholder:text-gray-500"
              autoFocus
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            disabled={!username.trim() || isLoading}
          >
            <Github className="mr-2 h-4 w-4" />
            {isLoading ? "Loading..." : "Roast My Profile"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
