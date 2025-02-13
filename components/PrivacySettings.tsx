"use client"

import { useState } from "react"
import { Lock } from "lucide-react"

export default function PrivacySettings() {
  const [shareLocation, setShareLocation] = useState(false)
  const [shareInterests, setShareInterests] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Lock size={20} className="mr-2" />
        Privacy Settings
      </h3>
      <div className="space-y-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={shareLocation}
            onChange={() => setShareLocation(!shareLocation)}
            className="form-checkbox"
          />
          <span>Share my location</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={shareInterests}
            onChange={() => setShareInterests(!shareInterests)}
            className="form-checkbox"
          />
          <span>Share my interests</span>
        </label>
      </div>
    </div>
  )
}

