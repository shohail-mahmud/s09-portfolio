# S09 — Portfolio of Shohail Mahmud

> Between **code** and **curiosity**, I explore and create.

A minimal, cinematic personal portfolio built with React, Vite, TypeScript, and Tailwind CSS. Features a fullscreen video background, dark/light mode with persisted preference, and smooth, responsive page transitions.

🌐 **Live:** [s09-portfolio.lovable.app](https://s09-portfolio.lovable.app)
📸 **Instagram:** [@shohailmahmud09](https://instagram.com/shohailmahmud09)

---

## ✨ Features

- 🎬 **Cinematic video background** — fullscreen, autoplay, looped, muted
- 🌗 **Dark / Light mode** — instant toggle, preference saved in `localStorage`
- ⚡ **Optimized performance** — preloaded assets, no layout shifts, both theme videos warmed up for instant switching
- 📱 **Fully responsive** — mobile-first, accessible navigation
- 🎨 **Editorial typography** — Instrument Serif + Inter
- 🔀 **Client-side routing** with React Router

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite 5
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v3 + shadcn/ui
- **Routing:** React Router
- **State / Data:** TanStack Query
- **Icons:** lucide-react

## 🚀 Getting Started

```bash
# install dependencies
npm install

# run dev server
npm run dev

# production build
npm run build

# preview production build
npm run preview
```

The app runs at `http://localhost:5173` by default.

## 📁 Project Structure

```
src/
├── assets/          # Logo and static assets
├── components/      # Navbar, BackgroundVideo, UI primitives
├── hooks/           # use-dark-mode, etc.
├── pages/           # Home, About, Work, Archive, Connect
├── App.tsx          # Routes + providers
└── main.tsx         # Entry point
```

## 🌗 Dark Mode

Toggle the moon/sun icon in the navbar. Preference persists across reloads via `localStorage` (`s09-dark-mode` key). Both background videos are pre-buffered on load so switching themes is instant.

## 📬 Connect

- **Instagram:** [@shohailmahmud09](https://instagram.com/shohailmahmud09)
- **Currency Archive:** [@s09_currency](https://instagram.com/s09_currency)
- **GitHub:** [shohail-mahmud](https://github.com/shohail-mahmud)

## 📄 License

© Shohail Mahmud. All rights reserved.
