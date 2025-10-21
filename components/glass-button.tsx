import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "light" | "medium" | "heavy"
  size?: "sm" | "md" | "lg"
}

export function GlassButton({ children, variant = "medium", size = "md", className, ...props }: GlassButtonProps) {
  const variantClasses = {
    light: "glass-light hover:bg-glass-medium",
    medium: "glass-medium hover:bg-glass-heavy",
    heavy: "glass-heavy hover:brightness-110",
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button
      className={cn(
        "rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
