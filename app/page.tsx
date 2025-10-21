"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, Search, Bell, User, Settings, Home, Layers, Zap } from "lucide-react"
import { GlassCard } from "@/components/glass-card"
import { GlassButton } from "@/components/glass-button"
import { GlassNavigation } from "@/components/glass-navigation"
import { GlassModal } from "@/components/glass-modal"

export default function GlassmorphismStyleguide() {
  const [darkMode, setDarkMode] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen relative overflow-hidden`}>
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-medium">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Layers className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Glassmorphism</h1>
                <p className="text-xs text-muted-foreground">Design System</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#foundations" className="text-sm font-medium hover:text-primary transition-colors">
                Foundations
              </a>
              <a href="#components" className="text-sm font-medium hover:text-primary transition-colors">
                Components
              </a>
              <a href="#patterns" className="text-sm font-medium hover:text-primary transition-colors">
                Patterns
              </a>
              <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">
                Examples
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <Badge className="glass-light px-4 py-1.5 text-sm font-medium">Material Design</Badge>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Glassmorphism
            <br />
            <span className="text-primary">Component Library</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A comprehensive design system showcasing frosted glass effects, transparency layers, and depth hierarchy
            inspired by Apple's Human Interface Guidelines.
          </p>
        </section>

        {/* Foundations Section */}
        <section id="foundations" className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">Foundations</h3>
            <p className="text-muted-foreground">Core principles of glassmorphism design</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard variant="light" className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Light Material</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Subtle transparency with 8px blur. Perfect for overlays and floating elements that need minimal visual
                weight.
              </p>
              <code className="block text-xs bg-muted/50 p-3 rounded-lg font-mono">
                backdrop-blur: 8px
                <br />
                opacity: 0.4
              </code>
            </GlassCard>

            <GlassCard variant="medium" className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Medium Material</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Balanced transparency with 16px blur. Ideal for cards, panels, and primary content containers.
              </p>
              <code className="block text-xs bg-muted/50 p-3 rounded-lg font-mono">
                backdrop-blur: 16px
                <br />
                opacity: 0.6
              </code>
            </GlassCard>

            <GlassCard variant="heavy" className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Heavy Material</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strong transparency with 24px blur. Best for modals, navigation bars, and prominent UI elements.
              </p>
              <code className="block text-xs bg-muted/50 p-3 rounded-lg font-mono">
                backdrop-blur: 24px
                <br />
                opacity: 0.8
              </code>
            </GlassCard>
          </div>
        </section>

        {/* Components Section */}
        <section id="components" className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">Components</h3>
            <p className="text-muted-foreground">Building blocks with glass effects</p>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Buttons</h4>
            <GlassCard variant="medium" className="p-8">
              <div className="flex flex-wrap gap-4">
                <GlassButton variant="light">Light Button</GlassButton>
                <GlassButton variant="medium">Medium Button</GlassButton>
                <GlassButton variant="heavy">Heavy Button</GlassButton>
                <GlassButton variant="light" size="sm">
                  Small
                </GlassButton>
                <GlassButton variant="medium" size="lg">
                  Large
                </GlassButton>
              </div>
            </GlassCard>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Cards</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <GlassCard variant="light" className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <h5 className="font-semibold">Light Card</h5>
                <p className="text-sm text-muted-foreground">Minimal glass effect for subtle elevation</p>
              </GlassCard>

              <GlassCard variant="medium" className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <h5 className="font-semibold">Medium Card</h5>
                <p className="text-sm text-muted-foreground">Balanced glass effect for content</p>
              </GlassCard>

              <GlassCard variant="heavy" className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <h5 className="font-semibold">Heavy Card</h5>
                <p className="text-sm text-muted-foreground">Strong glass effect for emphasis</p>
              </GlassCard>
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Input Fields</h4>
            <GlassCard variant="medium" className="p-8 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <div className="relative">
                  <Input type="email" placeholder="Enter your email" className="glass-light border-glass-border" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search components..."
                    className="glass-medium border-glass-border pl-10"
                  />
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Patterns Section */}
        <section id="patterns" className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">Patterns</h3>
            <p className="text-muted-foreground">Common UI patterns with glassmorphism</p>
          </div>

          {/* Navigation Bar */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Navigation Bar</h4>
            <GlassNavigation />
          </div>

          {/* Notification Card */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Notification Cards</h4>
            <div className="space-y-3">
              <GlassCard variant="medium" className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h5 className="font-semibold">New Update Available</h5>
                    <p className="text-sm text-muted-foreground">
                      Version 2.0 includes new glassmorphism components and improved performance.
                    </p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard variant="light" className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h5 className="font-semibold">Welcome to the Design System</h5>
                    <p className="text-sm text-muted-foreground">
                      Explore our comprehensive glassmorphism components and patterns.
                    </p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">Examples</h3>
            <p className="text-muted-foreground">Real-world applications</p>
          </div>

          {/* Dashboard Card Example */}
          <GlassCard variant="medium" className="p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-2xl font-bold">Dashboard Overview</h4>
                <p className="text-sm text-muted-foreground">Monitor your system performance</p>
              </div>
              <GlassButton variant="light">View Details</GlassButton>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <GlassCard variant="light" className="p-6 space-y-2">
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-3xl font-bold">12,543</p>
                <p className="text-xs text-accent">+12.5% from last month</p>
              </GlassCard>

              <GlassCard variant="light" className="p-6 space-y-2">
                <p className="text-sm text-muted-foreground">Active Sessions</p>
                <p className="text-3xl font-bold">3,891</p>
                <p className="text-xs text-accent">+8.2% from last month</p>
              </GlassCard>

              <GlassCard variant="light" className="p-6 space-y-2">
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
                <p className="text-3xl font-bold">24.8%</p>
                <p className="text-xs text-accent">+3.1% from last month</p>
              </GlassCard>
            </div>
          </GlassCard>

          {/* Modal Example */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Modal Dialog</h4>
            <GlassCard variant="medium" className="p-8 text-center space-y-4">
              <p className="text-muted-foreground">Click the button to see a glassmorphism modal</p>
              <GlassButton variant="medium" onClick={() => setShowModal(true)}>
                Open Modal
              </GlassButton>
            </GlassCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 space-y-4">
          <GlassCard variant="light" className="inline-block px-6 py-3">
            <p className="text-sm text-muted-foreground">Built with Tailwind CSS v4 and shadcn/ui</p>
          </GlassCard>
        </footer>
      </main>

      {/* Modal */}
      <GlassModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
