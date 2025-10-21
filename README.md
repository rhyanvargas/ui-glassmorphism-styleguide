
# Glassmorphism Styleguide

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/rhyanvargas1s-projects/v0-glassmorphism-styleguide)  

A lightweight design system and component playground showcasing glassmorphism UI patterns: frosted glass effects, layered transparency, depth hierarchy, and accessible components built with Tailwind CSS (v4), shadcn/ui primitives and TypeScript.

---

## Quick overview

- Purpose: Provide reusable glassmorphism components and patterns for apps and prototypes.
- Tech stack: Next.js (app directory), TypeScript, Tailwind CSS (v4), shadcn/ui, lucide-react.
- Components: GlassCard, GlassButton, GlassNavigation, GlassModal and other UI primitives.
- Deployment: Automatically deployed to Vercel from this repo and kept in sync with v0.app.

---

## Features

- Theme-aware glass materials (light / medium / heavy)
- Component variants for buttons, cards, navigation and modals
- Examples and patterns: headers, notifications, dashboard cards, modals
- Dark mode toggle and responsive layout
- Built with accessibility and maintainability in mind

---

## Local development

Prerequisites:
- Node.js (recommended 18+)
- npm, yarn or pnpm

Install dependencies:
```bash
npm install
# or
yarn
# or
pnpm install
```

Run development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 to view the styleguide.

Build for production:
```bash
npm run build
npm run start
# or with yarn / pnpm equivalents
```

---

## Project structure (high level)

- app/ — Next.js app routes and pages (app/page.tsx contains the styleguide UI)
- components/ — glassmorphism components (glass-card.tsx, glass-button.tsx, glass-navigation.tsx, glass-modal.tsx, etc.)
- styles/ / tailwind config — Tailwind tokens and utilities
- package.json — scripts and dependencies

---

## Components and usage examples

The design system exposes simple React components you can drop into your app. Example usages below are illustrative; check components/ for prop details.

GlassCard
```tsx
import { GlassCard } from "@/components/glass-card"

function Example() {
  return (
    <GlassCard variant="medium" className="p-6">
      <h3 className="text-lg font-semibold">Medium Material</h3>
      <p className="text-sm text-muted-foreground">Backdrop blur: 16px; Opacity: 0.6</p>
    </GlassCard>
  )
}
```

GlassButton
```tsx
import { GlassButton } from "@/components/glass-button"

<GlassButton variant="light">Primary</GlassButton>
<GlassButton variant="heavy" size="lg">Prominent</GlassButton>
```

GlassModal
```tsx
import { GlassModal } from "@/components/glass-modal"
const [open, setOpen] = useState(false)
<GlassModal open={open} onClose={() => setOpen(false)} />
```

Navigation & patterns
- GlassNavigation demonstrates a sticky header with glass background and navigation anchors.
- Examples in app/page.tsx show notification cards, dashboard cards and component combinations.

---

## Theming & customization

- Tailwind tokens (colors, blur, opacities) live in the Tailwind config — adjust tokens to change the glass material appearances.
- Components accept variant props (light / medium / heavy) to switch blur/opacity values.
- Dark mode is implemented with a CSS class toggle; you can integrate it with your preferred theme provider.

---

## Deployment & sync

This repository is connected to v0.app. The typical flow:
1. Edit the project on v0.app or locally.
2. Deploy from the v0 interface (if using v0) — changes are pushed to this repository.
3. Vercel watches this repository and redeploys the latest commit automatically.

Vercel deployment: https://vercel.com/rhyanvargas1s-projects/v0-glassmorphism-styleguide

---

## Contributing

Contributions are welcome. Suggested workflow:
1. Fork this repo.
2. Create a branch for your change.
3. Add/update components or examples and ensure the app runs locally.
4. Open a pull request with a clear description of your changes.

Before opening PRs:
- Run linting and type checks (if configured)
- Ensure UI changes are documented in the examples section

---

## Notes & troubleshooting

- No special environment variables required to run the styleguide locally.
- If you see layout differences, ensure you are using the same Tailwind version (v4) and postcss setup.
- For production issues, check the Vercel deployment logs.

---

## License & contact

This project is provided under the license in the repository (see LICENSE file).  
Maintainer: rhyanvargas — open issues or PRs for questions, suggestions, or bug reports.

---

## Acknowledgements

Built with shadcn/ui primitives and lucide-react icons. Inspired by modern material & frosted glass UI patterns.
