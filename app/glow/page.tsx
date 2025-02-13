"use client"

import { useState, useEffect } from "react"
import { MapPin, Users, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Glow() {
  const [heatmapData, setHeatmapData] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [showAnimation, setShowAnimation] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Simulate fetching nearby users
    setHeatmapData([
      { id: 1, name: "Harry Styles", location: "Wembley Stadium", distance: "500m", heat: 0.8 },
      { id: 2, name: "Hugh Hefner", location: "Playboy Mansion", distance: "1km", heat: 0.6 },
      { id: 3, name: "McDreamy", location: "Grey Sloan Memorial Hospital", distance: "1.5km", heat: 0.4 },
      { id: 4, name: "Sabyasachi", location: "Lakme Fashion Week", distance: "2km", heat: 0.7 },
    ])
  }, [])

  const handleUserClick = (user) => {
    setSelectedUser(user)
    setShowAnimation(true)
    setTimeout(() => {
      router.push(`/glow/${user.id}`)
    }, 3000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-glow">Nearby Flames</h2>
        <div className="flex items-center text-primary">
          <Users className="w-5 h-5 mr-2" />
          <span>{heatmapData.length} active</span>
        </div>
      </div>

      <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6 bg-gray-800">
        <div className="absolute inset-0">
          {/* Placeholder for actual map */}
          <div className="w-full h-full flex items-center justify-center text-gray-400">Interactive Map View</div>
          {/* Heat spots */}
          {heatmapData.map((user) => (
            <motion.div
              key={user.id}
              className="absolute heat-map w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                opacity: user.heat,
              }}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleUserClick(user)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {heatmapData.map((user) => (
          <motion.div
            key={user.id}
            className="glass-effect p-4 rounded-2xl border border-gray-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => handleUserClick(user)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-glow">{user.name}</h3>
                <p className="text-sm text-gray-300 flex items-center mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {user.location}
                </p>
              </div>
              <span className="text-primary text-sm">{user.distance}</span>
            </div>
            <div className="mt-3 text-sm text-gray-400">Last seen here 5 minutes ago</div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showAnimation && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-center text-white space-y-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-2xl font-bold mb-4">Touch phones to connect with {selectedUser?.name}</p>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              >
                <Zap className="w-16 h-16 mx-auto text-primary" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

