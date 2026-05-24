import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"

interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
}

interface SocialFooterProps {
  socials: SocialLink[]
  copyright: string
  dark?: boolean
}

export function SocialFooter({ socials, copyright, dark }: SocialFooterProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-full"
        style={{
          background: dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.4)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: dark
            ? "inset 0 1px 1px rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.06)"
            : "inset 0 1px 1px rgba(255,255,255,0.6), 0 0 0 1px rgba(255,255,255,0.3)",
        }}
      >
        {socials.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              dark
                ? "text-blue-300 hover:text-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 600, damping: 20 }}
          >
            <social.icon className="h-5 w-5" strokeWidth={1.5} />
          </motion.a>
        ))}
      </div>

      <p className={`text-[11px] ${dark ? "text-blue-400/60" : "text-gray-400"}`}>{copyright}</p>
    </div>
  )
}
