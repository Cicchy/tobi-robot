# TOB-I Web

Landing page for TOB-I, an open educational robotics platform built in Argentina.

## Stack

- **Vite** (build tool)
- **React 19** + **TypeScript 6**
- **Tailwind CSS 4** (utility-first CSS)
- **shadcn/ui** (component primitives via Ark UI / Shark UI)
- **Oxlint** (linting)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run Oxlint |

## Structure

```
src/
├── App.tsx                    # App shell: scroll orchestration + layout
├── main.tsx                   # Entry point
├── index.css                  # Theme tokens + animations
├── components/
│   ├── hero.tsx               # Hero section
│   ├── scene-panel.tsx        # Scene card panels + center content
│   └── ui/button.tsx          # Button component (shadcn-style)
├── data/
│   └── scenes.tsx             # Scene data definitions
├── lib/
│   └── utils.ts               # cn() utility
└── assets/                    # Static assets (logo, robot image)
```
