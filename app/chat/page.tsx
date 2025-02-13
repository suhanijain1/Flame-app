"use client"

import { useState } from "react"
import { MessageCircle, Clock, GamepadIcon as GameController, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Chat() {
  const [matches, setMatches] = useState([
    {
      id: 1,
      name: "Harry Styles",
      location: "Met at Wembley Stadium",
      lastMessage: "Would you like to hear my new song?",
      timeLeft: "23:45:30",
      avatar: "/placeholder.svg",
      superLike: true,
    },
    {
      id: 2,
      name: "Hugh Hefner",
      location: "Connected at Playboy Mansion",
      lastMessage: "Want to come to my next party?",
      timeLeft: "12:30:15",
      avatar: "/placeholder.svg",
    },
    {
      id: 3,
      name: "McDreamy",
      location: "Met at Grey Sloan Memorial Hospital",
      lastMessage: "You're the cure to my heart condition",
      timeLeft: "18:20:45",
      avatar: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Sabyasachi",
      location: "Connected at Lakme Fashion Week",
      lastMessage: "I have the perfect design for you",
      timeLeft: "09:15:30",
      avatar: "/placeholder.svg",
    },
  ])

  const [selectedChat, setSelectedChat] = useState(null)
  const [message, setMessage] = useState("")
  const [showContinueDialog, setShowContinueDialog] = useState(false)
  const [showHoroscope, setShowHoroscope] = useState(false)
  const [showSafetyCheck, setShowSafetyCheck] = useState(false)
  const [showCompatibilityCheck, setShowCompatibilityCheck] = useState(false)

  const renderChatPrompts = () => (
    <div className="flex gap-2 mb-4 overflow-x-auto py-2">
      <Button variant="outline" className="whitespace-nowrap rounded-full animate-pulse">
        What's your zodiac sign? 🌟
      </Button>
      <Button variant="outline" className="whitespace-nowrap rounded-full">
        Tea or coffee person? ☕️
      </Button>
      <Button variant="outline" className="whitespace-nowrap rounded-full">
        Your dream travel destination? 🌴
      </Button>
    </div>
  )

  const handleChatClick = (match) => {
    setSelectedChat(match)
    setShowContinueDialog(true)
  }

  const generateHoroscope = () => {
    if (!selectedChat) return ""
    const signs = [
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Scorpio",
      "Sagittarius",
      "Capricorn",
      "Aquarius",
      "Pisces",
    ]
    const randomSign = signs[Math.floor(Math.random() * signs.length)]
    return `${selectedChat.name}'s zodiac sign is ${randomSign}. Today, they will have an unexpected encounter that will brighten their day. Lucky number: 7`
  }

  const handleSafetyCheck = () => {
    setShowSafetyCheck(true)
  }

  const handleCompatibilityCheck = () => {
    setShowCompatibilityCheck(true)
  }

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Your Matches</h2>
        {matches.map((match) => (
          <div
            key={match.id}
            onClick={() => handleChatClick(match)}
            className={`glass-effect p-4 rounded-2xl cursor-pointer ${
              selectedChat?.id === match.id ? "border-primary" : "border"
            } hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-light flex-shrink-0 overflow-hidden">
                <img src={match.avatar || "/placeholder.svg"} alt={match.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold flex items-center">
                  {match.name}
                  {match.superLike && <Star className="w-4 h-4 text-yellow-400 ml-2" />}
                </h3>
                <p className="text-xs text-muted-foreground truncate">{match.location}</p>
                <p className="text-sm truncate">{match.lastMessage}</p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Expires in {match.timeLeft}
              </div>
              <Button variant="ghost" size="sm" className="rounded-full">
                <GameController className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="md:col-span-2">
        {selectedChat ? (
          <div className="glass-effect border rounded-2xl h-[600px] flex flex-col overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{selectedChat.name}</h3>
                  <p className="text-xs text-muted-foreground">{selectedChat.location}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="rounded-full" onClick={() => setShowHoroscope(true)}>
                    🔮 Horoscope
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    <GameController className="w-4 h-4 mr-2" />
                    Start Game
                  </Button>
                </div>
              </div>
              {renderChatPrompts()}
            </div>

            <div className="flex-1 p-4 overflow-y-auto">{/* Chat messages would go here */}</div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="rounded-full"
                />
                <Button className="rounded-full flame-gradient" size="icon">
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[600px] flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
              <p>Select a chat to start messaging</p>
            </div>
          </div>
        )}
      </div>

      <Dialog open={showContinueDialog} onOpenChange={setShowContinueDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How are you feeling about this chat?</DialogTitle>
            <DialogDescription>
              Let us know if you want to continue chatting with {selectedChat?.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              onClick={() => {
                setShowContinueDialog(false)
                handleSafetyCheck()
              }}
              className="flame-gradient"
            >
              Continue Chatting
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowContinueDialog(false)
                setSelectedChat(null)
              }}
            >
              End Chat
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showHoroscope} onOpenChange={setShowHoroscope}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Daily Horoscope</DialogTitle>
          </DialogHeader>
          <p>{generateHoroscope()}</p>
        </DialogContent>
      </Dialog>

      <Dialog open={showSafetyCheck} onOpenChange={setShowSafetyCheck}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Safety Check</DialogTitle>
            <DialogDescription>How are you feeling about this conversation?</DialogDescription>
          </DialogHeader>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              onClick={() => {
                setShowSafetyCheck(false)
                handleCompatibilityCheck()
              }}
              className="bg-green-500 hover:bg-green-600"
            >
              I feel safe
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setShowSafetyCheck(false)
                setSelectedChat(null)
              }}
            >
              I feel uncomfortable
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showCompatibilityCheck} onOpenChange={setShowCompatibilityCheck}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Compatibility Check</DialogTitle>
            <DialogDescription>How compatible do you feel with {selectedChat?.name}?</DialogDescription>
          </DialogHeader>
          <div className="flex justify-center gap-4 mt-4">
            <Button onClick={() => setShowCompatibilityCheck(false)} className="bg-pink-500 hover:bg-pink-600">
              Very Compatible
            </Button>
            <Button variant="outline" onClick={() => setShowCompatibilityCheck(false)}>
              Somewhat Compatible
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowCompatibilityCheck(false)
                setSelectedChat(null)
              }}
            >
              Not Compatible
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

