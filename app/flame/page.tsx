"use client"

import { useState } from "react"
import { Shield, ThumbsUp, ThumbsDown } from "lucide-react"

export default function Flame() {
  const [safetyCheckIn, setSafetyCheckIn] = useState(false)
  const [compatibility, setCompatibility] = useState(null)

  const handleSafetyCheckIn = () => {
    setSafetyCheckIn(true)
    // Here you would typically send a notification to a trusted contact or update the user's status in the backend
    alert("Safety check-in recorded. Stay safe!")
  }

  const handleCompatibilityFeedback = (isCompatible) => {
    setCompatibility(isCompatible)
    // Here you would typically send this feedback to the backend for analysis
    alert(
      isCompatible
        ? "Great! We'll use this feedback to improve your matches."
        : "Thanks for your feedback. We'll work on finding better matches for you.",
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Keep the Flame Alive</h2>
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h3 className="text-xl font-semibold mb-2">Safety Check-In</h3>
        <p className="mb-4">Going on a date? Let us know you're safe.</p>
        <button
          onClick={handleSafetyCheckIn}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center w-full"
        >
          <Shield size={20} className="mr-2" />
          Check-In Now
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Compatibility Insights</h3>
        <p className="mb-4">How was your recent date? Share your feedback to improve your matches.</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleCompatibilityFeedback(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <ThumbsUp size={20} className="mr-2" />
            Compatible
          </button>
          <button
            onClick={() => handleCompatibilityFeedback(false)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <ThumbsDown size={20} className="mr-2" />
            Not Compatible
          </button>
        </div>
      </div>
    </div>
  )
}

