# Edgar Allan Poe – Biography Website (React + Tailwind + ShadCN UI)

> A dark, gothic, mobile-first React website to honor the legacy of Edgar Allan Poe. Includes biography, timeline, works, quote animations, audio player and photo gallery. 

---

## ⚙️ Stack Overview

| Feature              | Tech / Library           |
|----------------------|--------------------------|
| UI Kit               | [ShadCN UI](https://ui.shadcn.com) |
| Styling              | Tailwind CSS             |
| Animations           | Framer Motion / Tailwind transitions |
| Audio Player         | `react-h5-audio-player`  |
| Icons                | Lucide / Phosphor icons  |

---

## 📱 Mobile-First UI Design

All sections fit to screen height and scroll one-by-one vertically on touch devices using scroll-snap.

### Sections:

1. **Header** – Name, subtitle, animated intro
2. **About** – Short biography + portrait(photos slide, only show one at time, other ones looks small, like gets smaller by width)
3. **Timeline** – Milestones in Poe’s life
4. **Works** – Cards with famous works, quotes in modals
5. **Audio** – MP3 player for 2-3 audio tracks (only one plays at a time)
6. **Gallery** – Vintage-style photos in lightbox
7. **Quotes** – Rotating gothic quotes
8. **Footer** – Simple ending message

---

## 🎨 Theme & Typography

### 🖤 Colors

| Role           | Hex        | Description         |
|----------------|------------|---------------------|
| Background     | `#0B0C10`  | Very dark gray/black |
| Text (main)    | `#F8F8F2`  | Soft white          |
| Accent         | `#8B0000`  | Blood red / gothic  |
| Secondary Text | `#A9A9A9`  | Muted gray          |
| Hover / Border | `#1A1A1A`  | Subtle black shade  |

### ✍️ Fonts

```js
// tailwind.config.js
fontFamily: {
  serif: ['"EB Garamond"', 'serif'],
  gothic: ['"Cinzel"', 'serif'],
},
```

Use `Cinzel` or `Playfair Display` for headers and `EB Garamond` for body text.

---

## 🎧 Audio Functionality

- Use `react-h5-audio-player`
- Limit to **1 active track at a time**
- When a new track starts, others are paused via `useRef()` or global state (e.g. Zustand or Context API)

---

## 🎬 Animations

- Use `Framer Motion` for:
  - Section fade-ins
  - Quote transitions
- Tailwind’s built-in transition classes also apply (`transition-opacity`, `duration-700`, etc.)

---

## 🧩 Scroll-Snap Setup

```css
/* Example for vertical scroll */
.scroll-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

.section {
  scroll-snap-align: start;
  height: 100vh;
}
```

---

## 🗂 Recommended Folder Structure

```
src/
│
├── components/
│   ├── Header.tsx
│   ├── Timeline.tsx
│   ├── Works.tsx
│   ├── AudioPlayer.tsx
│   ├── Quotes.tsx
│   ├── Gallery.tsx
│   └── Footer.tsx
│
├── assets/
│   ├── images/
│   └── audio/
│
├── App.tsx
└── index.tsx
```

---

## 🚀 Quick Start

```bash
npx create-react-app poe-biography --template typescript

cd poe-biography

npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install @shadcn/ui react-h5-audio-player framer-motion lucide-react
```

Set up Tailwind in `index.css`, configure `tailwind.config.js`, then start building components.

---

## 📸 Inspiration

- [brittanychiang.com](https://brittanychiang.com/)
- [timcchang.com](https://timcchang.com/)
- Poe Society Archive

---

> "All that we see or seem is but a dream within a dream." — Edgar Allan Poe
