# S09 — Shohail Mahmud | Personal Portfolio Website

> **Between code and curiosity, I explore and create.** — The official portfolio of **Shohail Mahmud** (S09), a developer, creator, and currency archivist from Bangladesh.

[![Live Site](https://img.shields.io/badge/Live-s09--portfolio.lovable.app-000?style=flat-square)](https://s09-portfolio.lovable.app)
[![Instagram](https://img.shields.io/badge/Instagram-%40shohailmahmud09-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/shohailmahmud09)
[![GitHub](https://img.shields.io/badge/GitHub-shohail--mahmud-181717?style=flat-square&logo=github)](https://github.com/shohail-mahmud)

🌐 **Live website:** https://s09-portfolio.lovable.app
📸 **Instagram:** [@shohailmahmud09](https://instagram.com/shohailmahmud09)
🪙 **Currency Archive:** [@s09_currency](https://instagram.com/s09_currency)

---

## 📖 About This Project

**S09 Portfolio** is the personal website of **Shohail Mahmud**, a builder from Bangladesh exploring ideas through code, creativity, and history. This open-source project showcases a minimal, cinematic **personal portfolio** built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS** — featuring a fullscreen video background, instant dark/light mode, and Awwwards-style editorial typography.

**Keywords:** Shohail Mahmud, S09, personal portfolio, React portfolio template, Vite portfolio, Tailwind CSS portfolio, developer portfolio Bangladesh, minimal portfolio website, dark mode video background, TypeScript portfolio.

## ✨ Key Features

- 🎬 **Cinematic fullscreen video background** — autoplay, looped, muted, optimized for fast load
- 🌗 **Dark / Light mode toggle** — preference persisted via `localStorage`, instant theme switching
- ⚡ **Performance-first** — preloaded assets, no layout shifts, both theme videos warmed up
- 📱 **Fully responsive** — mobile-first, accessible navigation, semantic HTML
- 🎨 **Editorial typography** — Instrument Serif headings + Inter body text
- 🔀 **Client-side routing** — smooth page transitions with React Router
- ♿ **Accessibility** — proper ARIA labels, keyboard navigation, reduced-motion friendly

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [React 18](https://react.dev) + [Vite 5](https://vitejs.dev) |
| Language | [TypeScript 5](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) |
| Routing | [React Router](https://reactrouter.com) |
| Data | [TanStack Query](https://tanstack.com/query) |
| Icons | [lucide-react](https://lucide.dev) |

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/shohail-mahmud/s09-portfolio.git
cd s09-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The app runs locally at `http://localhost:5173`.

## 📁 Project Structure

```
src/
├── assets/          # Logo and static assets
├── components/      # Navbar, BackgroundVideo, UI primitives
├── hooks/           # use-dark-mode, custom hooks
├── pages/           # Home, About, Work, Archive, Connect
├── App.tsx          # Routes + providers
└── main.tsx         # Application entry point
```

## 🌗 Dark Mode Implementation

Toggle the moon/sun icon in the navbar to switch themes. The user preference is saved to `localStorage` (`s09-dark-mode` key) and restored on every visit. Both light and dark background videos are pre-buffered on initial load, so theme switching is **instant** with no re-download.

## 🔍 SEO & Performance

- ✅ Single semantic `<h1>` per page
- ✅ Meta description and Open Graph tags
- ✅ Responsive viewport meta
- ✅ Lazy-loaded routes
- ✅ Optimized video preload (`metadata`/`auto`)
- ✅ Image `alt` attributes
- ✅ Smooth scroll + reduced layout shift

## 📬 Connect with Shohail Mahmud

- **Personal Instagram:** [@shohailmahmud09](https://instagram.com/shohailmahmud09)
- **Currency Archive Instagram:** [@s09_currency](https://instagram.com/s09_currency)
- **GitHub:** [github.com/shohail-mahmud](https://github.com/shohail-mahmud)
- **Portfolio:** [s09-portfolio.lovable.app](https://s09-portfolio.lovable.app)

## 🤝 Contributing

This is a personal portfolio, but feedback, issues, and suggestions are welcome. Feel free to open an issue or fork the project for your own use.

## 📄 License

© Shohail Mahmud. All rights reserved. Code may be referenced for educational purposes with attribution.

---

**Built with ❤️ in Bangladesh by [Shohail Mahmud](https://instagram.com/shohailmahmud09)** — exploring the space between **code** and **curiosity**.
