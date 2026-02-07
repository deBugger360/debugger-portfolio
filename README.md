# Churchill Emmanuel — Systems Engineer Portfolio

> **"Platforms engineered for reliability, performance, and scale."**

A high-performance, accessible, and offline-first portfolio designed to showcase systems engineering and scalable digital solutions.

## 🚀 Overview

This portfolio has been re-engineered to move beyond a standard "web developer" showcase into a **Systems Engineer** positioning. It emphasizes architectural rigor, performance optimization, and scalable design patterns.

**Live URL:** [https://ossportfolio.netlify.app](https://ossportfolio.netlify.app)

## ✨ Key Features & Engineering

### 1. Positioning & Identity
*   **Systems-First Messaging:** Hero section refactored to highlight "Scalable Digital Systems" over generic web development.
*   **Impact-Driven Case Studies:** Project cards focus on problem-solving and impact (e.g., "Scaling digital presence") rather than just visuals.
*   **Strategic Flow:** Storytelling architecture: *Positioning → Credibility → Work → Capabilities → Thinking → Action*.

### 2. Performance Engineering
*   **Core Web Vitals Optimization:**
    *   **Zero CLS (Cumulative Layout Shift):** All image containers (logos, project thumbnails) have explicit aspect ratios reserved to prevent layout shifts.
    *   **Skeleton Loading:** Custom implementation of skeleton states for images to improve perceived load performance.
    *   **Lazy Loading:** Native lazy loading for off-screen assets.
    *   **Font Preloading:** Critical fonts are preloaded to reduce FOUT/FOIT.

### 3. Modern UI/UX Architecture
*   **Card Design System:** "Selected Work" section features elevated cards with hover states, tag-based technology stacks, and clear primary/secondary actions.
*   **Visual Hierarchy:** Bold typography with gradient highlights and engineered spacing (micro/macro gutters).
*   **Theme Support:** Robust Dark/Light mode toggle with persistent local storage state.

## 🛠 Tech Stack

*   **Core:** Semantic HTML5, Vanilla CSS3 (Custom Properties/Variables), Vanilla JavaScript (ES6+).
*   **Architecture:** Component-based CSS structure without heavy frameworks.
*   **Accessibility:** Semantic landmarks, aria-labels, and keyboard navigation support.

## 📂 Project Structure

```
├── assets/          # Optimized images and fonts
├── index.html       # Main entry point with semantic structure
├── style.css        # CSS variables, utility classes, and component styles
├── script.js        # Interaction logic (Lazy loading, Theme toggle, Observers)
└── README.md        # Documentation
```

## ⚡ Deployment

This project is static-site ready and can be deployed to Netlify, Vercel, or GitHub Pages.

---

*Designed & Engineered by Churchill Emmanuel.*
