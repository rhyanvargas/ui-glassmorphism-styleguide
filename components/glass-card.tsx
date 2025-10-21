import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  variant?: "light" | "medium" | "heavy"
  className?: string
}

export function GlassCard({ children, variant = "medium", className }: GlassCardProps) {
  const variantClasses = {
    light: "glass-light",
    medium: "glass-medium",
    heavy: "glass-heavy",
  }

  return (
    <div className={cn("rounded-xl transition-all duration-300 hover:shadow-lg", variantClasses[variant], className)}>
      {children}
    </div>
  )
}
