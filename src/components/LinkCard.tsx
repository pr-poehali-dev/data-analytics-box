import { motion } from "framer-motion"
import { ChevronRight, type LucideIcon } from "lucide-react"

interface LinkCardProps {
  title: string
  description?: string
  href: string
  icon: LucideIcon
  dark?: boolean
}

export function LinkCard({ title, description, href, icon: Icon, dark }: LinkCardProps) {
  const bg = dark
    ? "rgba(255, 255, 255, 0.07)"
    : "rgba(255, 255, 255, 0.45)"
  const border = dark
    ? "1px solid rgba(255, 255, 255, 0.12)"
    : "1px solid rgba(255, 255, 255, 0.5)"
  const iconBg = dark
    ? "rgba(255, 255, 255, 0.1)"
    : "rgba(255, 255, 255, 0.8)"
  const titleColor = dark ? "text-white" : "text-gray-800"
  const descColor = dark ? "text-blue-200" : "text-gray-500"
  const chevronColor = dark ? "text-blue-300" : "text-gray-400"
  const chevronHover = dark ? "group-hover:text-white" : "group-hover:text-gray-600"
  const iconColor = dark ? "text-blue-300" : "text-gray-700"

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-full items-center gap-4 rounded-[20px] px-4 py-4 overflow-hidden"
      style={{
        background: bg,
        backdropFilter: "blur(40px) saturate(180%)",
        WebkitBackdropFilter: "blur(40px) saturate(180%)",
        boxShadow: dark
          ? `inset 0 1px 1px rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.3)`
          : `inset 0 1px 1px rgba(255,255,255,0.9), 0 0 0 1px rgba(255,255,255,0.6), 0 8px 32px rgba(0,0,0,0.08)`,
        border,
      }}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      whileTap={{
        scale: 0.98,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: dark
            ? "radial-gradient(ellipse at center, rgba(30,100,255,0.15), transparent 70%)"
            : "radial-gradient(ellipse at center, rgba(255,255,255,0.4), transparent 70%)",
        }}
      />

      <div
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconColor}`}
        style={{
          background: iconBg,
          boxShadow: dark
            ? "inset 0 1px 1px rgba(255,255,255,0.1), 0 2px 8px rgba(0,0,0,0.3)"
            : "inset 0 1px 2px rgba(255,255,255,1), 0 2px 4px rgba(0,0,0,0.04)",
          border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.6)",
        }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>

      <div className="relative flex-1 min-w-0">
        <h3 className={`text-[15px] font-semibold tracking-tight ${titleColor}`}>{title}</h3>
        {description && <p className={`text-[12px] truncate mt-0.5 ${descColor}`}>{description}</p>}
      </div>

      <ChevronRight
        className={`relative h-5 w-5 transition-all duration-200 group-hover:translate-x-0.5 ${chevronColor} ${chevronHover}`}
        strokeWidth={2}
      />
    </motion.a>
  )
}
