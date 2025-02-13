"use client"

import { useState } from "react"
import { Lightbulb } from "lucide-react"

export default function AIConversationStarter({ interests }) {
  const [suggestion, setSuggestion] = useState("")

  const generateSuggestion = () => {
    // In a real app, this would call an AI service to generate a conversation starter
    const starters = [
      "What's your favorite memory related to " + interests[Math.floor(Math.random() * interests.length)] + "?",
      "If you could become an expert in one aspect of " +
        interests[Math.floor(Math.random() * interests.length)] +
        ", what would it be?",
      "How has your interest in " +
        interests[Math.floor(Math.random() * interests.length)] +
        " influenced your life choices?",
    ]
    setSuggestion(starters[Math.floor(Math.random() * starters.length)])
  }

  return (
    <div className="mt-4">
      <button
        onClick={generateSuggestion}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center w-full"
      >
        <Lightbulb size={20} className="mr-2" />
        Get Conversation Starter
      </button>
      {suggestion && <p className="mt-2 p-2 bg-yellow-100 rounded">{suggestion}</p>}
    </div>
  )
}

