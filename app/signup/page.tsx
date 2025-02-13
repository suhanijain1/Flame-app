"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Camera, Plus } from "lucide-react"
import Logo from "../../components/Logo"

export default function Signup() {
  const [step, setStep] = useState(1)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [interests, setInterests] = useState([""])

  const handleAddInterest = () => {
    setInterests([...interests, ""])
  }

  const handleInterestChange = (index, value) => {
    const newInterests = [...interests]
    newInterests[index] = value
    setInterests(newInterests)
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Enter Your Phone Number</h2>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="rounded-full"
            />
            <Button onClick={handleNextStep} className="w-full rounded-full flame-gradient">
              Send Verification Code
            </Button>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Enter Verification Code</h2>
            <Input
              type="text"
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="rounded-full"
            />
            <Button onClick={handleNextStep} className="w-full rounded-full flame-gradient">
              Verify Code
            </Button>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Create Your Flameprint</h2>
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <Camera className="w-8 h-8 text-primary" />
              </div>
            </div>
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-full"
            />
            <Input
              placeholder="Your age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="rounded-full"
            />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Your Interests</h3>
              {interests.map((interest, index) => (
                <Input
                  key={index}
                  placeholder={`Interest ${index + 1}`}
                  value={interest}
                  onChange={(e) => handleInterestChange(index, e.target.value)}
                  className="rounded-full"
                />
              ))}
              <Button onClick={handleAddInterest} variant="outline" className="w-full rounded-full">
                <Plus className="w-4 h-4 mr-2" /> Add Interest
              </Button>
            </div>
            <Button onClick={handleNextStep} className="w-full rounded-full flame-gradient">
              Complete Signup
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Logo size="large" />
      <div className="mt-8 w-full max-w-md">{renderStep()}</div>
    </div>
  )
}

