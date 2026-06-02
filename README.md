<div align="center">

```
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   ~/mathias$ cat portfolio.config                        ║
║                                                          ║
║   > name     = "Mathias Paulenko"                        ║
║   > role     = "Project Leader & Test Architect"         ║
║   > stack    = "Python · React · Full Stack"             ║
║   > status   = "Open to opportunities"                   ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

[![Live Site](https://img.shields.io/badge/🌐_Live-mathiaspaulenko.com-ffb000?style=for-the-badge&labelColor=0c0c0c)](https://mathiaspaulenko.com)
[![Deploy](https://img.shields.io/github/actions/workflow/status/MathiasPaulenko/mathias-paulenko-cv/deploy.yml?style=for-the-badge&label=deploy&labelColor=0c0c0c&color=33ff33)](https://github.com/MathiasPaulenko/mathias-paulenko-cv/actions)
[![License](https://img.shields.io/badge/license-All_Rights_Reserved-ff4444?style=for-the-badge&labelColor=0c0c0c)](./LICENSE)

</div>

---

## ⚡ Features

```bash
$ ls --features
```

| Feature | Description |
|---------|-------------|
| 🖥️ **Terminal UI** | CRT scanlines, ASCII art, git-log experience, JSON education |
| 🌍 **i18n** | Full translations in English, Spanish & Chinese |
| 🌗 **Theme Toggle** | Dark (default) and light mode |
| 📱 **Responsive** | Mobile-first with collapsible navbar |
| ✨ **Animated** | Framer Motion entrance & scroll animations |
| 🚀 **CI/CD** | Auto-deploy on push via GitHub Actions |

---

## 🛠️ Tech Stack

```bash
$ npm list --depth=0
```

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
│   │   ├── pages/        # HomePage
│   │   ├── sections/     # Terminal, About, TechStack, Experience,
│   │   │                 # Education, Certifications, Languages, Contact
│   │   └── ui/           # SectionWrapper
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
| DNS (A records) | Dinahosting | `185.199.108-111.153` |
| DNS (CNAME) | Dinahosting | `www` → `MathiasPaulenko.github.io` |

---

## 📄 License

Personal project — All rights reserved.

---

<div align="center">

```
$ echo "Mathias Paulenko 2026"
```

</div>
