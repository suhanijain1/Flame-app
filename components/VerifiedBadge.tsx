import { CheckCircle } from "lucide-react"

export default function VerifiedBadge() {
  return (
    <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
      <CheckCircle size={12} className="mr-1" />
      Verified
    </span>
  )
}

