"use client"

import { useState } from "react"
import { Camera, Heart, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function Profile() {
  const [isPublic, setIsPublic] = useState(false)
  const [stats] = useState({
    flames: 24,
    activeChats: 5,
    matchRate: "78%",
    favoriteOpener: "u up?",
    commonInterests: ["Photography", "Travel", "Tea", "Reading"],
  })

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="w-32 h-32 rounded-full bg-primary-light flex items-center justify-center mb-4">
            <Camera className="w-8 h-8 text-primary" />
          </div>
          <Button size="sm" className="absolute bottom-0 right-0 rounded-full">
            <Camera className="w-4 h-4" />
          </Button>
        </div>
        <h1 className="text-2xl font-bold">Suhani Jain, 20</h1>
        <p className="text-muted-foreground">Mumbai, India</p>
      </div>

      <div className="glass-effect p-6 rounded-2xl border space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Profile Visibility</h2>
          <Switch checked={isPublic} onCheckedChange={setIsPublic} />
        </div>
        <p className="text-sm text-muted-foreground">
          {isPublic ? "Your profile is visible to nearby users" : "Only matched users can see your profile"}
        </p>
      </div>

      <div className="glass-effect p-6 rounded-2xl border">
        <h2 className="font-semibold mb-4">Your Interests</h2>
        <div className="flex flex-wrap gap-2">
          {stats.commonInterests.map((interest) => (
            <span key={interest} className="px-3 py-1 rounded-full bg-primary-light text-primary text-sm">
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className="glass-effect p-6 rounded-2xl border">
        <h2 className="font-semibold mb-4">Flame Stats</h2>
        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div>
            <div className="flex items-center justify-center mb-2">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <div className="font-semibold">{stats.flames}</div>
            <div className="text-xs text-muted-foreground">Total Flames</div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-2">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div className="font-semibold">{stats.activeChats}</div>
            <div className="text-xs text-muted-foreground">Active Chats</div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <div className="font-semibold">{stats.matchRate}</div>
            <div className="text-xs text-muted-foreground">Match Rate</div>
          </div>
        </div>
      </div>

      <div className="glass-effect p-6 rounded-2xl border">
        <h2 className="font-semibold mb-4">AI Insights</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Your Best Conversation Starter</h3>
            <p className="text-sm text-muted-foreground">{stats.favoriteOpener}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Chat Style</h3>
            <p className="text-sm text-muted-foreground">
              You tend to be the funniest person in the world, no one will ever be funnier than you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

