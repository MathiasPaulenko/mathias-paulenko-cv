# mathias-paulenko-cv

Personal CV/portfolio website with a retro-terminal aesthetic, built with React and deployed on GitHub Pages.

🌐 **Live:** [mathiaspaulenko.com](https://mathiaspaulenko.com)

---

## Features

- **Retro terminal design** — CRT scanlines, ASCII art, monospace fonts, git-log style experience
- **i18n (EN / ES / ZH)** — Full translations with language selector dropdown
- **Dark / Light theme** — Toggle between dark terminal and light mode
- **Responsive** — Mobile-first layout with collapsible navbar
- **Animated** — Framer Motion entrance animations throughout
- **Auto-deploy** — GitHub Actions workflow deploys on push to `main`

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | TailwindCSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | IBM Plex Mono, Space Mono |
| Deploy | GitHub Pages (Actions) |
| Domain | mathiaspaulenko.com (Dinahosting) |

---

## Requirements

- **Node.js** >= 18 (tested on v20+)
- **npm** >= 9

---

## Installation

```bash
# Clone the repository
git clone https://github.com/MathiasPaulenko/mathias-paulenko-cv.git
cd mathias-paulenko-cv

# Install dependencies
npm install
```

---

## Development

```bash
# Start dev server (http://localhost:5173)
npm run dev
```

---

## Build

```bash
# Generate production build in /dist
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

Deployment is automated via GitHub Actions. Every push to `main` triggers:

1. `npm ci` → `npm run build`
2. Upload `dist/` artifact
3. Deploy to GitHub Pages

### Manual deploy (alternative)

```bash
npm run deploy
```

This uses `gh-pages` to push the `dist/` folder to the `gh-pages` branch.

---

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── pages/         # HomePage
│   ├── sections/      # Terminal, About, TechStack, Experience,
│   │                  # Education, Certifications, Languages,
│   │                  # Projects, Contact
│   └── ui/            # SectionWrapper, WindowBar
├── data/
│   ├── cvData.js      # Static CV data (tags, tech stack, etc.)
│   └── translations.js # i18n strings (EN/ES/ZH)
├── helpers/           # Animation variants
├── hooks/
│   ├── useLanguage.jsx  # Language context (EN/ES/ZH)
│   ├── useTheme.jsx     # Theme context (dark/light)
│   └── useTranslation.js # Translation accessor hook
├── routers/           # AppRouter
├── statics/           # Static assets
├── themes/            # Backup of previous designs
├── index.css          # Global styles + theme variables
├── App.jsx            # Root component
└── main.jsx           # Entry point (providers)
```

---

## Configuration

- **Custom domain:** `public/CNAME` → `mathiaspaulenko.com`
- **Base URL:** `vite.config.js` → `base: '/'`
- **DNS (Dinahosting):**
  - 4× A records → GitHub Pages IPs
  - CNAME `www` → `MathiasPaulenko.github.io`

---

## License

Personal project — All rights reserved.
