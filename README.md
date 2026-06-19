# 🌌 Abhinav Kumar Yadav | Professional 3D Portfolio

Welcome to the repository of my personal portfolio. This is a highly interactive, responsive, and visually stunning 3D developer portfolio showcasing my skills, experiences, projects, and academic background.

Live Site: [Wanderlust Loop (Featured Project)](https://wanderlust-loop.onrender.com/listings)  
Resume Link: [Google Drive](https://drive.google.com/file/d/1f_2nYCdCHQpr_icf5XSjdMhMIFt8snbq/view?usp=sharing)

---

## 🚀 Overview & Features

This portfolio is designed to deliver a premium, immersive user experience leveraging modern web technologies and 3D graphics.

*   **Immersive 3D Space Background**: Features an interactive 3D starfield canvas (`StarsCanvas`) built using Three.js and React Three Fiber.
*   **Dynamic Typewriter & Hero Section**: Highlights key roles with interactive hover states, dynamic glow animations, and integrated intro video playback capability.
*   **Professional Story & Timeline**: Showcases professional experiences at **Zenix Automotive** and research work at **IIT BHU** using an interactive, styled vertical timeline.
*   **Interactive Skills Dashboard**: Categorizes languages, frontend, backend, tools, and computer science concepts using skill cards with tilt animations and level progress bars.
*   **Interactive Projects Carousel**: Displays key projects like *Wanderlust Loop* (Full Stack travel portal with ML recommendation) and *Veni Vidi Disceres* (AI-powered PDF parser/OCR) with smooth glassmorphism containers.
*   **Credentials & Certifications Hub**: Hosts verified certifications with descriptive details and downloadable PDF links.
*   **Contact System**: Features a functional glassmorphic contact form connected to telemetry/email APIs.
*   **Highly Responsive Design**: Tailored layout using Tailwind CSS for fluid viewing on all devices from mobile to wide monitors.

---

## 🛠️ Tech Stack & Architecture

### **Core Stack**
*   **Frontend**: React (v18.2) + Vite (for lightning-fast bundling)
*   **Styling**: Tailwind CSS (v3.3) for custom utilities & grid layouts
*   **3D Elements**: Three.js, `@react-three/fiber`, and `@react-three/drei`
*   **Animations**: Framer Motion for scroll-reveals and spring transitions, and React Tilt for 3D card tilt effects
*   **Components**: React Scroll (for smooth navigation), React Vertical Timeline (for experience flow)

### **Optimization & Performance**
*   **Lazy Loading**: Subsections (Works, Projects, Achievements, Certifications) are loaded asynchronously via `Suspense` callbacks to minimize bundle sizes.
*   **Vite Chunk Splitting**: Configured manual rollup chunk division for dependencies to separate heavy libraries like `three` and `framer-motion` from the main code.

---

## 📂 Project Directory Structure

```
Portf/
├── public/                  # Static assets (PDF certificates, intro video, images)
│   ├── intro.mp4            # Local introduction video file
│   └── *.pdf                # Publicly viewable certificates
├── src/
│   ├── assets/              # Locally imported image & vector assets (logos, project screenshots)
│   ├── components/          # Reusable React components
│   │   ├── canvas/          # 3D Canvas components (e.g., StarsCanvas.jsx)
│   │   ├── About.jsx        # Professional Story and Core Stats
│   │   ├── Achievements.jsx # Key milestones andDSA counts
│   │   ├── Certifications.jsx # Interactive credentials hub
│   │   ├── Contact.jsx      # Interactive Email Form
│   │   ├── Education.jsx    # School & College milestones
│   │   ├── ErrorBoundary.jsx# Fallback handler for React components
│   │   ├── Footer.jsx       # Bottom layout links
│   │   ├── Hero.jsx         # Introduction section + intro video panel
│   │   ├── Loader.jsx       # 3D canvas loading screen
│   │   ├── Navbar.jsx       # Sticky responsive glassmorphic nav bar
│   │   ├── Projects.jsx     # Project showcase cards
│   │   ├── Tech.jsx         # Skills overview lists
│   │   └── Works.jsx        # Work experience timeline
│   ├── constants/
│   │   └── index.js         # Single Source of Truth for experiences, skills, and links data
│   ├── hoc/
│   │   └── SectionWrapper.jsx # Higher Order Component wrapping section transitions and animations
│   ├── utils/
│   │   └── motion.js        # Framer Motion animation utility configs (fadeIn, textVariant, etc.)
│   ├── App.jsx              # Main application orchestrator
│   ├── index.css            # Global CSS styling & animation triggers
│   ├── main.jsx             # React DOM rendering entrypoint
│   └── styles.js            # Extensible styling constants
├── .env                     # Local environment variables configuration
├── index.html               # Main HTML entrypoint (SEO optimized)
├── package.json             # Scripts & dependency definitions
├── tailwind.config.js       # Tailwind CSS design token setup
└── vite.config.js           # Rollup and dev server ports mapping
```

---

## ⚙️ Setup & Installation Instructions

### **1. Prerequisites**
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) along with `npm`.

### **2. Clone and Install Dependencies**
```bash
# Clone the repository
git clone https://github.com/yaduvanshi07/Abhinav_Portfolio.git
cd Portf

# Install all development and core packages
npm install
```

### **3. Environment Setup**
Create a `.env` file in the root directory and configure necessary API keys or links (e.g. for the Contact page or third party configurations):
```env
# Example Env Setup
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### **4. Local Development Server**
Launch the Vite development server locally on port 3000:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### **5. Production Build**
To compile optimized static files to the `/dist` directory for deployment:
```bash
# Build the project
npm run build

# Preview the built production output locally
npm run preview
```

---

## 📬 Contact & Networks

*   **Email**: [abhinavyaduvanshi05@gmail.com](mailto:abhinavyaduvanshi05@gmail.com)
*   **Phone**: +91-9336158912
*   **LinkedIn**: [abhinav-kumar-yadav-706a14257](https://www.linkedin.com/in/abhinav-kumar-yadav-706a14257)
*   **GitHub**: [yaduvanshi07](https://github.com/yaduvanshi07)
