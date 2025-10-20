"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Copy, Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"

export function SettingsView() {
  const [showApiKey, setShowApiKey] = useState(false)
  const apiKey = "sk_live_1234567890abcdef"

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey)
    toast.success("API key copied to clipboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your GitFame profile and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="danger">Danger Zone</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="username">GitHub Username</Label>
                  <Input id="username" defaultValue="octocat" disabled />
                </div>
                <div>
                  <Label htmlFor="display-name">Display Name</Label>
                  <Input id="display-name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" placeholder="Tell us about yourself" />
                </div>
                <Button>Save Changes</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Privacy Settings</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Public Profile</Label>
                    <p className="text-sm text-muted-foreground">Show your profile on the leaderboard</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show Achievements</Label>
                    <p className="text-sm text-muted-foreground">Display your achievements publicly</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Allow Comparisons</Label>
                    <p className="text-sm text-muted-foreground">Let others compare their profile with yours</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Preferences</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive weekly roast updates</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Use dark theme</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Roast Intensity</Label>
                    <p className="text-sm text-muted-foreground">How brutal should the roasts be?</p>
                  </div>
                  <select className="border rounded px-3 py-2">
                    <option>Mild</option>
                    <option>Medium</option>
                    <option>Spicy</option>
                    <option>Nuclear</option>
                  </select>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">API Settings</h2>
              <div className="space-y-4">
                <div>
                  <Label>API Key</Label>
                  <div className="flex gap-2 mt-2">
                    <Input type={showApiKey ? "text" : "password"} value={apiKey} readOnly />
                    <Button variant="outline" size="icon" onClick={() => setShowApiKey(!showApiKey)}>
                      {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button variant="outline" size="icon" onClick={copyApiKey}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Keep your API key secret. Don't share it publicly.
                  </p>
                </div>
                <Button variant="outline">Regenerate API Key</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="danger">
            <Card className="p-6 border-red-500">
              <h2 className="text-xl font-bold mb-6 text-red-500">Danger Zone</h2>
              <div className="space-y-4">
                <div className="p-4 border border-red-500/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Delete All Data</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Permanently delete your GitFame profile and all associated data. This action cannot be undone.
                  </p>
                  <Button variant="destructive">Delete My Data</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
