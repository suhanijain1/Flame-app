"use client"

import { useState } from "react"
import { AlertTriangle, Shield, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ChatDetail({ params }: { params: { id: string } }) {
  const [showSafetyCheck, setShowSafetyCheck] = useState(false)
  const [showCompatibilityCheck, setShowCompatibilityCheck] = useState(false)

  const handleReport = () => {
    // Handle report functionality
    alert("Report submitted. We will review this conversation.")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Chat with Priya</h1>
        <Button variant="destructive" size="sm" className="rounded-full" onClick={handleReport}>
          <AlertTriangle className="w-4 h-4 mr-2" />
          Report
        </Button>
      </div>

      {/* Chat messages would go here */}

      <Dialog open={showSafetyCheck} onOpenChange={setShowSafetyCheck}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Safety Check</DialogTitle>
            <DialogDescription>How are you feeling about this conversation?</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Button className="w-full" onClick={() => setShowSafetyCheck(false)}>
              <Shield className="w-4 h-4 mr-2" />I feel safe and comfortable
            </Button>
            <Button variant="destructive" className="w-full" onClick={handleReport}>
              <AlertTriangle className="w-4 h-4 mr-2" />I want to report this conversation
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showCompatibilityCheck} onOpenChange={setShowCompatibilityCheck}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Compatibility Check</DialogTitle>
            <DialogDescription>How's the conversation going?</DialogDescription>
          </DialogHeader>
          <div className="flex gap-4">
            <Button className="flex-1" onClick={() => setShowCompatibilityCheck(false)}>
              <ThumbsUp className="w-4 h-4 mr-2" />
              Great Connection
            </Button>
            <Button variant="secondary" className="flex-1" onClick={() => setShowCompatibilityCheck(false)}>
              <ThumbsDown className="w-4 h-4 mr-2" />
              Not Compatible
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

