<div align="center">

<!-- Animated header banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0c0c0c,50:00cccc,100:33ff33&height=180&section=header&text=mathias-paulenko-cv&fontSize=40&fontColor=ffffff&animation=fadeIn&fontAlignY=35" alt="mathias-paulenko-cv header" />

<!-- Typing animation -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=IBM+Plex+Mono&weight=600&size=20&duration=3000&pause=1000&color=33FF33&center=true&vCenter=true&width=600&lines=Terminal+Themed+Portfolio;React+%2B+Vite+%2B+Tailwind;GitHub+Pages+Deployment;Multilingual+Support" alt="Terminal themed portfolio with React, Vite, Tailwind, GitHub Pages deployment and multilingual support" />
</a>

<br/><br/>

[![Live Site](https://img.shields.io/badge/🌐_Live-mathiaspaulenko.com-00cccc?style=for-the-badge&labelColor=0c0c0c)](https://mathiaspaulenko.com)
[![Deploy](https://img.shields.io/github/actions/workflow/status/MathiasPaulenko/mathias-paulenko-cv/deploy.yml?style=for-the-badge&label=deploy&labelColor=0c0c0c&color=33ff33)](https://github.com/MathiasPaulenko/mathias-paulenko-cv/actions)
[![License](https://img.shields.io/badge/license-All_Rights_Reserved-ff4444?style=for-the-badge&labelColor=0c0c0c)](./LICENSE)

</div>

---

## ⚡ Features

| Feature | Description |
|---------|-------------|
| 🖥️ **Terminal UI** | CRT scanlines, ASCII art hero, git-log experience, JSON education, npm-list certifications, ASCII progress bars |
| 🌍 **i18n** | Full translations in English, Spanish & Chinese with language selector dropdown and flag icons |
| 🌗 **Theme Toggle** | Dark (default) and light mode with persistent preference |
| 📱 **Responsive** | Mobile-first with collapsible navbar, adaptive ASCII art (big text on mobile), compact progress bars |
| ✨ **Animated** | Framer Motion entrance, scroll-triggered animations, staggered lists |
| ⌨️ **Keyboard Shortcuts** | Navigate sections with H, A, S, E, D, C, L, N and scroll to top with Home key; visible shortcuts hint UI |
| 🔝 **Scroll to Top** | Floating button appears on scroll |
| � **Portfolio** | Inline tabbed section with libraries/webs, pagination, terminal-styled cards |
| 📋 **Copy to Clipboard** | One-click copy for email, phone and URL |
| 🖨️ **Print Optimized** | Skills section auto-expands all categories when printing |
| 🧭 **ScrollSpy Navbar** | Active section highlighting on scroll with smooth anchor navigation |
| 🏳️ **Flag Icons** | Dynamic flag CDN images for language selector and language section |
| 📊 **Progress Bars** | Terminal-style ASCII block progress bars for language proficiency |
| 📬 **Contact** | Terminal-styled contact info with email, phone, location and social links |
| ♿ **Accessible** | ARIA labels on icon buttons, semantic roles, aria-hidden on decorative elements |
| 🔍 **SEO** | Meta tags, Open Graph, Twitter cards, canonical URL, hreflang, PWA manifest |
| 🚀 **CI/CD** | Auto-deploy on push via GitHub Actions |
| 🌐 **Custom Domain** | mathiaspaulenko.com with CNAME |

---

## 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222?style=flat-square&logo=github&logoColor=white)

</div>

| Layer | Tech |
|-------|------|
| **Framework** | React 18 |
| **Bundler** | Vite 5 |
| **Styling** | TailwindCSS 3 |
| **Animations** | Framer Motion 11 |
| **Icons** | Lucide React |
| **Fonts** | IBM Plex Mono · Space Mono |
| **Deploy** | GitHub Pages (Actions) |
| **Domain** | mathiaspaulenko.com |

---

## 📋 Requirements

| Tool | Version |
|------|---------|
| Node.js | `>= 18` |
| npm | `>= 9` |

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/MathiasPaulenko/mathias-paulenko-cv.git
cd mathias-paulenko-cv

# Install
npm install

# Dev server → http://localhost:5173
npm run dev
```

---

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Preview locally
npm run preview
```

### CI/CD Pipeline

Every push to `main` triggers the GitHub Actions workflow:

```
push → checkout → npm ci → vite build → upload artifact → deploy to Pages
```

---

## 📁 Project Structure

```
mathias-paulenko-cv/
├── .github/workflows/    # CI/CD deploy pipeline
├── public/               # CNAME, static assets
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   ├── pages/        # HomePage, PrivacyPage, NotFound
│   │   ├── sections/     # Terminal, About, TechStack, Experience,
│   │   │                 # Education, Certifications, Portfolio, Languages, Contact
│   │   └── ui/           # SectionWrapper, CookieBanner, CopyButton, ScrollToTop
│   ├── data/
│   │   ├── cvData.js     # CV content (tags, tech stack, projects)
│   │   └── translations.js  # i18n (EN / ES / ZH)
│   ├── helpers/          # Animation variants
│   ├── hooks/
│   │   ├── useLanguage   # Language context & selector
│   │   ├── useTheme      # Dark/Light theme context
│   │   └── useTranslation # Translation accessor
│   ├── routers/          # AppRouter
│   ├── index.css         # Global styles + CSS variables (themes)
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point (providers)
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ⚙️ Configuration

| Setting | File | Value |
|---------|------|-------|
| Custom domain | `public/CNAME` | `mathiaspaulenko.com` |
| Base URL | `vite.config.js` | `/` |

---

## 🙏 Credits & Acknowledgments

| Resource | Author / Owner |
|----------|---------------|
| **React** | [Meta / React Team](https://react.dev/) |
| **Vite** | [Evan You / Vite Team](https://vitejs.dev/) |
| **Tailwind CSS** | [Tailwind Labs, Inc.](https://tailwindcss.com/) |
| **Framer Motion** | [Motion (formerly Framer)](https://motion.dev/) |
| **Lucide Icons** | [Lucide Contributors](https://lucide.dev/) |
| **IBM Plex Mono & Space Mono** | [IBM](https://fonts.google.com/specimen/IBM+Plex+Mono) · [Colophon Foundry / Google Fonts](https://fonts.google.com/specimen/Space+Mono) |
| **Capsule Render** (header/footer banners) | [kyechan99](https://github.com/kyechan99/capsule-render) |
| **Readme Typing SVG** | [DenverCoder1](https://github.com/DenverCoder1/readme-typing-svg) |
| **GitHub Pages** | [GitHub, Inc.](https://pages.github.com/) |
| **AI Assistance** | Design & code assistance by [Cascade](https://www.codeium.com/cascade) |

---

## 📄 License

Personal project — All rights reserved.

---

<div align="center">

```
$ echo "Mathias Paulenko 2026"
```

<!-- Animated footer banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:33ff33,50:00cccc,100:0c0c0c&height=100&section=footer" alt="footer" />

</div>
