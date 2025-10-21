import { Home, Search, Bell, User, Settings } from "lucide-react"
import { GlassCard } from "./glass-card"

export function GlassNavigation() {
  return (
    <GlassCard variant="heavy" className="p-2">
      <nav className="flex items-center justify-around gap-2">
        <button className="flex flex-col items-center gap-1 px-6 py-3 rounded-lg hover:bg-glass-light transition-all duration-300 group">
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-6 py-3 rounded-lg hover:bg-glass-light transition-all duration-300 group">
          <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">Search</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-6 py-3 rounded-lg hover:bg-glass-light transition-all duration-300 group">
          <Bell className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">Alerts</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-6 py-3 rounded-lg hover:bg-glass-light transition-all duration-300 group">
          <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">Profile</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-6 py-3 rounded-lg hover:bg-glass-light transition-all duration-300 group">
          <Settings className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">Settings</span>
        </button>
      </nav>
    </GlassCard>
  )
}
