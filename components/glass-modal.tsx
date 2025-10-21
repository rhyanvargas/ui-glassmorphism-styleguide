"use client"

import { X } from "lucide-react"
import { GlassCard } from "./glass-card"
import { GlassButton } from "./glass-button"

interface GlassModalProps {
  open: boolean
  onClose: () => void
}

export function GlassModal({ open, onClose }: GlassModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <GlassCard
        variant="heavy"
        className="relative max-w-md w-full p-8 space-y-6 animate-in fade-in zoom-in duration-300"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-glass-light transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Glassmorphism Modal</h3>
          <p className="text-muted-foreground">
            This modal demonstrates the heavy glass material effect with strong backdrop blur and high opacity.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-muted/30 space-y-2">
            <h4 className="font-semibold text-sm">Material Properties</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Backdrop blur: 24px</li>
              <li>• Background opacity: 0.8</li>
              <li>• Border: Semi-transparent white</li>
            </ul>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Heavy materials are perfect for modals, dialogs, and other prominent UI elements that need to stand out from
            the background while maintaining visual harmony.
          </p>
        </div>

        <div className="flex gap-3">
          <GlassButton variant="medium" onClick={onClose} className="flex-1">
            Got it
          </GlassButton>
          <GlassButton variant="light" onClick={onClose} className="flex-1">
            Learn More
          </GlassButton>
        </div>
      </GlassCard>
    </div>
  )
}
