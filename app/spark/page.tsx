"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Clock } from "lucide-react"
import AIConversationStarter from "../../components/AIConversationStarter"

export default function Spark() {
  const [matches, setMatches] = useState([])
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [conversation, setConversation] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    // Simulating fetching matches
    setMatches([
      { id: 1, name: "Priya", interests: ["Travel", "Photography"] },
      { id: 2, name: "Rahul", interests: ["Music", "Cooking"] },
    ])
  }, [])

  const handleSendMessage = () => {
    if (message.trim()) {
      setConversation([...conversation, { sender: "You", text: message }])
      setMessage("")
      // Simulating AI response
      setTimeout(() => {
        setConversation((prev) => [
          ...prev,
          {
            sender: "AI",
            text: "Here's an interesting question based on your shared interests: What's your favorite travel photograph you've taken?",
          },
        ])
      }, 1000)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">The Spark</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Your Matches</h3>
        <ul className="space-y-2">
          {matches.map((match) => (
            <li
              key={match.id}
              className={`bg-white p-3 rounded-lg shadow cursor-pointer ${selectedMatch?.id === match.id ? "border-2 border-pink-500" : ""}`}
              onClick={() => setSelectedMatch(match)}
            >
              <span className="font-medium">{match.name}</span>
              <p className="text-sm text-gray-500">{match.interests.join(", ")}</p>
            </li>
          ))}
        </ul>
      </div>
      {selectedMatch && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Chat with {selectedMatch.name}</h3>
          <div className="h-60 overflow-y-auto mb-4 space-y-2">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${msg.sender === "You" ? "bg-pink-100 ml-auto" : "bg-gray-100"} max-w-[80%]`}
              >
                <p className="font-medium">{msg.sender}</p>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <AIConversationStarter interests={selectedMatch.interests} />
          <div className="flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow border rounded-l-lg p-2"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-r-lg"
            >
              <MessageCircle size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2 flex items-center">
            <Clock size={16} className="mr-1" />
            Chat expires in 24 hours
          </p>
        </div>
      )}
    </div>
  )
}

