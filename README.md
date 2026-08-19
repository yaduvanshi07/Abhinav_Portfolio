# 🌌 Abhinav Kumar Yadav | Senior Developer Portfolio

Welcome to the official repository of my personal 3D developer portfolio. This application is an interactive, highly optimized, and responsive web application showcasing my software engineering projects, work experiences, technical capabilities, and academic background.

[![CI](https://github.com/yaduvanshi07/Abhinav_Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/yaduvanshi07/Abhinav_Portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

---

## 🚀 Overview & Features

* **3D Space Starfield (`StarsCanvas`)**: Built with Three.js and `@react-three/fiber`, featuring adaptive particle scaling (1500 particles on mobile, 3000 on desktop), delta-clamped animation loops, and Page Visibility API automatic rendering pause.
* **Responsive Hero Section**: Includes a dynamic typewriter, direct contact actions, and an integrated intro video card with responsive aspect-ratio containment across mobile, tablet, laptop, and 4K displays.
* **Professional Story & Metrics**: Highlights key milestones (CGPA 8.25 at IIIT Manipur, 400+ DSA problems solved in C++, Best Intern Award, -35% API latency optimization).
* **Work Experience & Research**: Detailed interactive timeline showcasing full-stack engineering at **Zenix Automotive** and ML research work at **IIT BHU**.
* **Technical Skills Grid**: Modern, high-density capability matrix categorized by domain (*Languages, Frontend, Backend & DB, AI/ML Concepts, Tools & Clouds, Computer Science Core*) with keyboard-accessible WAI-ARIA tab semantics.
* **Featured Projects Hub**: Showcases production applications like *Wanderlust Loop* (Full-stack travel platform with ML recommendations), *Veni Vidi Disceres* (AI PDF/OCR Parser), *Smart Customer* (MERN Portal), and *Loanify* (Financial Platform).
* **Verified Credentials**: Dedicated hub for verified industry certifications with direct PDF links.
* **Functional Contact Form**: Direct message delivery powered by Web3Forms integration with real-time submit loader and toast feedback.

---

## 🛠️ Architecture & Tech Stack

### **Frontend & UI**
* **Core**: React 18.2 + Vite 5.0
* **Styling**: Tailwind CSS 3.3 + Custom CSS Variables & Glassmorphism Design Tokens
* **3D Rendering**: Three.js, `@react-three/fiber`, `@react-three/drei`
* **Animations**: Framer Motion (scroll reveals), React Tilt (3D card tilt)
* **Icons & Scroll**: `react-icons`, `react-scroll`, `react-vertical-timeline-component`

### **Performance & Engineering**
* **Code Splitting & Lazy Loading**: Below-the-fold components (`Works`, `Projects`, `Education`, `Achievements`, `Certifications`, `Contact`, `Footer`) are lazy-loaded via React `Suspense` and manual Rollup chunking (`three-vendor`, `framer-motion`, `vendor`).
* **GPU Acceleration**: Hardware layer promotion (`transform: translateZ(0)`) and `content-visibility: auto` to maintain 60/120 FPS scrolling performance.
* **SEO & Accessibility**: Complete OpenGraph, Twitter Cards, Schema.org Person JSON-LD, canonical tags, and `:focus-visible` keyboard focus rings.
* **CI/CD Pipeline**: GitHub Actions workflow (`.github/workflows/ci.yml`) automating dependency caching, ESLint verification, and production build artifact packaging on every push.

---

## ⚙️ Setup & Local Development

### **1. Prerequisites**
* [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
* `npm` (v9.0.0 or higher)

### **2. Installation**
```bash
# Clone the repository
git clone https://github.com/yaduvanshi07/Abhinav_Portfolio.git
cd Abhinav_Portfolio

# Install dependencies
npm install --legacy-peer-deps
```

### **3. Environment Variables**
Create a `.env` file in the project root:
```env
# Web3Forms API Access Key (Obtain from https://web3forms.com)
VITE_WEB3FORMS_KEY=your_web3forms_access_key_here
```

### **4. Development Commands**
```bash
# Start local development server on http://localhost:3000
npm run dev

# Run ESLint code quality checks
npm run lint

# Automatically fix linting issues
npm run lint:fix

# Compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📬 Contact & Links

* **Email**: [abhinavyaduvanshi05@gmail.com](mailto:abhinavyaduvanshi05@gmail.com)
* **LinkedIn**: [Abhinav Kumar Yadav](https://www.linkedin.com/in/abhinav-kumar-yadav-706a14257)
* **GitHub**: [@yaduvanshi07](https://github.com/yaduvanshi07)
* **Phone**: [+91 9336158912](tel:9336158912)
* **Resume**: [Google Drive View](https://drive.google.com/file/d/1cPl_Sra45UG6jjgoJYybXSKIsWBxs0xj/view?usp=sharing)