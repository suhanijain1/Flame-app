import Link from "next/link"
import { MapPin, MessageCircle, GamepadIcon, User } from "lucide-react"
import { usePathname } from "next/navigation"

export default function BottomNav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <div className="fixed bottom-0 left-0 right-0 glass-effect border-t">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-3">
          <Link
            href="/profile"
            className={`flex flex-col items-center ${isActive("/profile") ? "text-primary" : "text-gray-500"}`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
          <Link
            href="/glow"
            className={`flex flex-col items-center ${isActive("/glow") ? "text-primary" : "text-gray-500"}`}
          >
            <MapPin className="w-6 h-6" />
            <span className="text-xs mt-1">Glow</span>
          </Link>
          <Link
            href="/chat"
            className={`flex flex-col items-center ${isActive("/chat") ? "text-primary" : "text-gray-500"}`}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs mt-1">Chat</span>
          </Link>
          <Link
            href="/games"
            className={`flex flex-col items-center ${isActive("/games") ? "text-primary" : "text-gray-500"}`}
          >
            <GamepadIcon className="w-6 h-6" />
            <span className="text-xs mt-1">Games</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

