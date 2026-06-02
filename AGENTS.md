# AGENTS.md

## Dev Environment

- Use `npm run dev` to start dev server at http://localhost:5173
- Use `npm run build` for production build to `dist/`
- Use `npm run deploy` to deploy to GitHub Pages
- Project uses Vite 5 + React 18 + TailwindCSS 3 + Framer Motion 11

## Code Style

### Components
- Arrow functions with `export const`: `export const Component = () => {}`
- PascalCase names: `SectionWrapper`, `TechStack`
- One component per file
- Import hooks explicitly: `import { useState } from 'react'`

### Styling (Tailwind)
- Only use terminal palette colors:
  - Background: `#0c0c0c`
  - Surface: `#141414`, `#1a1a1a`
  - Border: `#2a2a2a`, `#3a3a3a`
  - Text: `#d0d0d0`, `#999999`
  - Accents: `#33ff33` (green), `#ffb000` (amber), `#00cccc` (cyan), `#ff4444` (red), `#6688cc` (links)
- NEVER use default Tailwind colors like `bg-blue-500`
- Card pattern: `border border-[#2a2a2a] bg-[#0c0c0c] p-6 md:p-8`
- Transitions: `transition-all duration-300`

### Animations (Framer Motion)
- Use variants from `helpers/animations.js`
- Always include `viewport={{ once: true }}`
- Use `staggerContainer` for lists

### i18n
- All visible text must use `useTranslation()` hook
- Static data in `cvData.js`, translations in `translations.js`
- Never hardcode strings in JSX

### Terminal Theme Elements
- Prompts: `<span className="text-[#33ff33]">mathias@dev</span>`
- Paths: `<span className="text-[#6688cc]">~/section</span>`
- Commands: `<span className="text-[#d0d0d0]">cat file.txt</span>`
- Use symbols `$`, `>`, `→` for CLI style

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── pages/        # HomePage
│   ├── sections/     # Terminal, About, etc.
│   └── ui/           # SectionWrapper
├── data/             # cvData.js, translations.js
├── helpers/          # Animation variants
├── hooks/            # useLanguage, useTheme
└── routers/          # AppRouter
```

## Common Patterns

### Section Wrapper
```jsx
<SectionWrapper id="section" title={t.sectionTitle} subtitle={t.sectionSub}>
  {/* content */}
</SectionWrapper>
```

### External Links
Always include `target="_blank" rel="noopener noreferrer"`

## Testing & Deployment

- Build must pass before commit: `npm run build`
- Deploy via GitHub Actions on push to main
- Domain: mathiaspaulenko.com
