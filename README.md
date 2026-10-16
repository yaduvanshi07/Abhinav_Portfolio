# 🌌 Abhinav Kumar Yadav | Senior Developer Portfolio

Welcome to the official repository of my personal 3D developer portfolio. This application is an interactive, highly optimized, and responsive web application showcasing my software engineering projects, work experiences, technical capabilities, and academic background.

<p align="center">
  <b>Full Stack Engineer & ML Integrator</b><br>
  <i>Scalable Backend Architectures • Interactive 3D Web Systems • Production ML Pipelines</i>
</p>

<p align="center">
  <a href="https://abhi-portfolio2003.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live_Portfolio-09090B?style=for-the-badge&logo=vercel&logoColor=60A5FA&labelColor=000000" alt="Live Portfolio" />
  </a>
  <a href="https://drive.google.com/file/d/107TqIuVDpLUoQX0eHz020p59oMaot638/view?usp=sharing" target="_blank">
    <img src="https://img.shields.io/badge/Resume-3B82F6?style=for-the-badge&logo=google-drive&logoColor=white&labelColor=1D4ED8" alt="Resume" />
  </a>
  <a href="https://github.com/yaduvanshi07" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-18181B?style=for-the-badge&logo=github&logoColor=white&labelColor=09090B" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/abhinav-kumar-yadav-706a14257/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=004182" alt="LinkedIn" />
  </a>
  <a href="https://wanderlust-loop.onrender.com/listings" target="_blank">
    <img src="https://img.shields.io/badge/Featured_App-10B981?style=for-the-badge&logo=render&logoColor=white&labelColor=047857" alt="Featured App" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/yaduvanshi07/Abhinav_Portfolio/actions/workflows/ci.yml"><img src="https://github.com/yaduvanshi07/Abhinav_Portfolio/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" /></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=black" alt="React" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite" alt="Vite" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css" alt="TailwindCSS" /></a>
</p>

> ### Quick Navigation Hub
> | <img src="https://cdn.simpleicons.org/vercel/60A5FA" width="16" height="16" align="center" /> **Live Portfolio** | <img src="https://cdn.simpleicons.org/googledrive/3B82F6" width="16" height="16" align="center" /> **Resume (CV)** | <img src="https://cdn.simpleicons.org/github/white" width="16" height="16" align="center" /> **GitHub Profile** | <img src="https://cdn.simpleicons.org/linkedin/0A66C2" width="16" height="16" align="center" /> **LinkedIn Profile** | <img src="https://cdn.simpleicons.org/render/10B981" width="16" height="16" align="center" /> **Flagship Project** |
> | :---: | :---: | :---: | :---: | :---: |
> | [**abhi-portfolio2003.vercel.app**](https://abhi-portfolio2003.vercel.app/) | [**Download / View PDF**](https://drive.google.com/file/d/107TqIuVDpLUoQX0eHz020p59oMaot638/view?usp=sharing) | [**@yaduvanshi07**](https://github.com/yaduvanshi07) | [**Abhinav Kumar Yadav**](https://www.linkedin.com/in/abhinav-kumar-yadav-706a14257/) | [**Wanderlust Loop (Render)**](https://wanderlust-loop.onrender.com/listings) |

---

## 🚀 Overview & Features

* **3D Space Starfield (`StarsCanvas`)**: Built with Three.js and `@react-three/fiber`, featuring adaptive particle scaling (1500 particles on mobile, 3000 on desktop), delta-clamped animation loops, and Page Visibility API automatic rendering pause.
* **Responsive Hero Section**: Includes a dynamic typewriter, direct contact actions, and an integrated intro video card with responsive aspect-ratio containment across mobile, tablet, laptop, and 4K displays.
* **Professional Story & Metrics**: Highlights key milestones (CGPA 8.25 at IIIT Manipur, 400+ DSA problems solved in C++, Best Intern Award, -35% API latency optimization).
* **Work Experience & Research**: Detailed interactive timeline showcasing full-stack engineering at **Zenix Automotive** and ML research work at **IIT BHU**.
* **Technical Skills Grid**: Modern, high-density capability matrix categorized by domain (*Languages, Frontend, Backend & DB, AI/ML Concepts, Tools & Clouds, Computer Science Core*) with keyboard-accessible WAI-ARIA tab semantics.
* **Featured Projects Hub**: Showcases production applications like *PresentIQ* (AI Biometric Attendance System with Face & Voice Recognition), *Wanderlust Loop* (Full-stack travel platform with ML recommendations), *Veni Vidi Disceres* (AI PDF/OCR Parser), *Smart Customer* (MERN Portal), and *Loanify* (Financial Platform).
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
* **Resume**: [Google Drive View](https://drive.google.com/file/d/107TqIuVDpLUoQX0eHz020p59oMaot638/view?usp=sharing)