import { Pacifico } from "next/font/google"

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] })

export default function Logo({ size = "default" }) {
  const sizeClasses = {
    default: "w-40 h-40",
    medium: "w-16 h-16",
    large: "w-64 h-64",
    small: "w-12 h-12",
  }

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClasses[size]}`}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20at%204.54.16%E2%80%AFAM-CHcgwKJHB2hZITaeru9N4XWRxH6PyT.png"
          alt="Flame Logo"
          className="w-full h-full object-contain animate-flame mix-blend-multiply"
        />
      </div>
      <p className={`${pacifico.className} text-primary text-2xl font-light mt-2`}>Flame</p>
    </div>
  )
}

