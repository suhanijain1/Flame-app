"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export default function ConnectAnimation({ params }: { params: { id: string } }) {
  const [animationStep, setAnimationStep] = useState(1)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStep(2)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleStartChatting = () => {
    router.push("/chat")
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <AnimatePresence>
        {animationStep === 1 ? (
          <motion.div
            key="step1"
            className="text-center text-white space-y-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <p className="text-2xl font-bold mb-4">Touch phones to connect</p>
            <motion.div
              animate={{
                x: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <ArrowRight className="w-12 h-12 mx-auto text-primary" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            className="text-center text-white space-y-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4">It's a Match! 🎉</h2>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <Zap className="w-16 h-16 mx-auto text-primary" />
            </motion.div>
            <p className="mb-8">You've made a new connection!</p>
            <Button className="rounded-full flame-gradient" onClick={handleStartChatting}>
              Start Chatting
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

