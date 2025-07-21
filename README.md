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


> "All that we see or seem is but a dream within a dream." — Edgar Allan Poe
