import { motion } from "framer-motion"

interface ProfileSectionProps {
  name: string
  bio: string
  imageUrl: string
  dark?: boolean
}

export function ProfileSection({ name, bio, imageUrl, dark }: ProfileSectionProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
        className="relative"
      >
        <div
          className="relative h-24 w-24 overflow-hidden rounded-full"
          style={{
            background: dark ? "rgba(30,100,255,0.2)" : "rgba(255,255,255,0.5)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: dark
              ? `inset 0 2px 4px rgba(255,255,255,0.1), 0 0 0 2px rgba(30,100,255,0.4), 0 4px 24px rgba(0,0,0,0.4)`
              : `inset 0 2px 4px rgba(255,255,255,0.8), 0 0 0 2px rgba(255,255,255,0.6), 0 4px 16px rgba(0,0,0,0.1)`,
          }}
        >
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: dark
              ? "0 0 40px 8px rgba(30,100,255,0.2)"
              : "0 0 40px 8px rgba(120,119,198,0.1)",
          }}
        />
      </motion.div>

      <h1 className={`mt-5 text-xl font-semibold tracking-tight ${dark ? "text-white" : "text-gray-800"}`}>
        {name}
      </h1>
      <p className={`mt-2 text-sm ${dark ? "text-blue-200" : "text-gray-500"}`}>{bio}</p>
    </div>
  )
}
