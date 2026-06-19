# Portfolio Architecture & Recruiter Guidelines

This portfolio has been upgraded to match world-class engineering standards. Rather than looking like a typical college project, the design, structure, and technical copywriting have been tailored to appeal directly to **technical recruiters and engineering managers** at top firms like **Microsoft, Google, Amazon, Deloitte, Atlassian, Adobe, and high-impact startups**.

---

## 📂 Project Directory Mapping

Here is the exact folder structure of the upgraded portfolio, detailing where components, assets, data systems, and mock assets reside:

```
c:\Projects\Portf
├── index.html                  # Main entry page (SEO optimized titles, tags, and OG properties)
├── tailwind.config.js          # Extended Tailwind design tokens (primary/secondary/tertiary colors)
├── vite.config.js              # Vite bundler options
├── public/
│   ├── resume.pdf              # Functioning resume placeholder for instant download actions
│   └── desktop_pc/
│       ├── scene.gltf          # 3D Desktop GLTF computer model
│       └── scene.bin           # 3D binary data
└── src/
    ├── main.jsx                # React root mount point
    ├── App.jsx                 # Core router, loading controller, and sections mounting
    ├── index.css               # Core styling directives, custom scrollbars, and keyframe animations
    ├── styles.js               # Global layouts and heading typography padding values
    ├── assets/
    │   ├── index.js            # Unified asset registration and exports file
    │   ├── wanderlust_loop.png # Generated mockup image for Wanderlust Loop Travel Platform
    │   ├── veni_vidi_disceres.png # Generated mockup image for Veni Vidi Disceres AI Doc Assistant
    │   └── [fallback SVGs/icons]
    ├── constants/
    │   └── index.js            # Structured database of skills, credentials, projects, and experiences
    ├── hoc/
    │   └── SectionWrapper.jsx  # Framer Motion scroll-reveal container HOC
    └── components/
        ├── Navbar.jsx          # Personalized sticky header with smooth-scroll redirects
        ├── Hero.jsx            # Headline, custom typewriter, social links, resume trigger, and 3D computer
        ├── About.jsx           # Abhinav's professional story, goals, metrics grid, and inline SVG services
        ├── Tech.jsx            # Category skill-tabs with interactive animated expertise progress bars
        ├── Works.jsx           # Vertical work experience timeline (Zenix + IIT BHU)
        ├── Projects.jsx        # Project showcase cards featuring metrics filters and achievements lists
        ├── Education.jsx       # Academic degree credentials panel for IIIT Manipur
        ├── Achievements.jsx    # Credential badges for DSA counts, awards, and certifications
        ├── Contact.jsx         # Contact form with submit loaders, success toast notification, and email links
        ├── Footer.jsx          # Modern copyright banner with quick redirection and target company notes
        ├── ErrorBoundary.jsx   # General React error catcher for runtime resiliency
        └── canvas/
            ├── ComputersCanvas.jsx # Canvas wrapper for 3D model loaders
            ├── StarsCanvas.jsx     # Dynamic animated particle background
            └── PlanetCanvas.jsx    # Orbiting sphere canvas wrapper
```

---

## 🎨 UI/UX Design System

The visual architecture is inspired by **Apple (minimal layout, subtle rounded grids)**, **Stripe (sleek color accents, high-contrast text tags)**, and **Linear (glassmorphism borders, neon-glow accents)**.

*   **Color Palette**: 
    *   `Primary (Dark)`: `#050816` (Pitch-black deep space)
    *   `Secondary`: `#aaa6c3` (Clean muted gray for readable subtext)
    *   `Tertiary`: `#151030` (Glass card bases)
    *   `Accent 1 (Purple)`: `#915eff` (Main highlight and active focus)
    *   `Accent 2 (Magenta)`: `#bf61ff` (Highlight gradients)
    *   `Accent 3 (Teal)`: `#00cea8` (Metrics and success states)
*   **Typography**: Clean sans-serif hierarchy matching apple-system guidelines with heavy black headings (`font-black`) and light elegant paragraph text (`font-light`).
*   **Animations**: Built using **Framer Motion** and CSS keyframes for subtle micro-interactions:
    *   `Typewriter`: Loops through target career roles in the Hero section.
    *   `Scroll Reveal`: Sections fade and slide upward cleanly as the user scrolls down.
    *   `Active Tabs`: Smooth switching animations inside Skills and Projects filters.
    *   `Scale Hover`: Service cards and project cards tilt (`react-tilt`) and scale up slightly on hover.

---

## 🛠️ Component Hierarchy & How it Works

### 1. Preloader Loading Screen (`src/App.jsx`)
*   **How it works**: Uses a state `loading` initialized to `true` that switches to `false` after a 1.5s delay.
*   **UI View**: Shows a gorgeous spinning gradient circle with initials **AKY** and custom text, which ensures that all heavier elements (like 3D canvas files) are preloaded without layout shift.

### 2. Header Navbar (`src/components/Navbar.jsx`)
*   **How it works**: Features active-link indicators that trace scroll offsets. It replaces generic logo text with `Abhinav Kumar Yadav | Full Stack Engineer`.
*   **Responsive**: Collapses into a clean mobile burger menu overlay on smaller screens.

### 3. Hero Section (`src/components/Hero.jsx`)
*   **How it works**:
    *   Typewriter loops dynamically through four specialized roles (Full Stack Developer, Software Engineer, Backend Developer, AI/ML Integrator).
    *   Features a direct `Resume` download trigger linking to `/resume.pdf` and a `Let's Talk` redirection button to the Contact form.
    *   Loads the `ComputersCanvas` model which features 3D rotations on user click/drag.

### 4. About Section (`src/components/About.jsx`)
*   **How it works**:
    *   Presents a robust professional summary tailored to high-growth teams.
    *   Displays a 4-card statistics grid highlighting metrics (400+ DSA, Best Intern, 8.25 CGPA, -35% Latency).
    *   Renders core service cards using **crisp, responsive inline SVGs** instead of placeholder PNGs, preventing broken images.

### 5. Skills Section (`src/components/Tech.jsx`)
*   **How it works**:
    *   Categorizes Abhinav's stack into 6 separate domains (Languages, Frontend, Backend & DB, AI/ML, Tools, Core CS).
    *   Users can click tab capsules to switch categories.
    *   Each skill card renders an expertise level indicator and an animated progress bar that smoothly slides from 0% to the target value when mounted.

### 6. Experience Timeline (`src/components/Works.jsx`)
*   **How it works**: Renders a vertical timeline utilizing `react-vertical-timeline-component` to highlight accomplishments at **Zenix Automotive** and **IIT BHU**. Company logos feature text-abbreviation fallbacks on error.

### 7. Projects Showcase (`src/components/Projects.jsx`)
*   **How it works**:
    *   Filters projects dynamically by "All", "Full Stack", or "AI / ML".
    *   Features the newly generated high-fidelity mockups for **Wanderlust Loop** and **Veni Vidi Disceres**.
    *   Renders **bullet lists of key achievements** detailing optimization stats (e.g. -35% latency, 85% question-answering accuracy), demonstrating direct business and technical impact to recruiters.

### 8. Credentials Section (`src/components/Achievements.jsx`)
*   **How it works**: Displays a premium tiled grid of achievements, completing the proof-of-work requirement (DSA problems, Best Intern award, Full Stack & C++ certificates).

### 9. Education Section (`src/components/Education.jsx`)
*   **How it works**: Renders a structured graduation card highlighting degree details at **IIIT Manipur** with CGPA callouts.

### 10. Contact & Footer (`src/components/Contact.jsx` & `src/components/Footer.jsx`)
*   **How it works**:
    *   The form features real-time input binding, dynamic button text switching (`Send Message` -> `Sending...`), and a fade-in success toast message on submission.
    *   Footer lists quick navigation anchors and targeted recruiters' firms, leaving a final professional closing statement.

---

## ⚡ Technical Implementations & Advanced Features

1.  **Search Engine Optimization (SEO)**:
    *   Meta tags added to `index.html` for descriptions, target keywords, and author.
    *   Open Graph tags (`og:title`, `og:description`, `og:image`) configured to support social sharing preview cards on platforms like LinkedIn and Twitter.
2.  **Performance Optimization**:
    *   Vite code-splits CSS and JS efficiently.
    *   Large media assets are pre-compressed.
    *   The 3D Canvas elements utilize pre-loaded GLTFs with error boundaries (`SafeModel`), falling back cleanly if 3D context is unsupported on target mobile devices.
3.  **ATS-Friendly Copywriting**:
    *   The summary paragraph, timeline bullet points, and project descriptions use action verbs (*Optimized, Reduced, Refactored, Engineered, Simulated*) and quantifiable metrics (*40%, 35%, 50%, 85%*) to align with automated tracking systems and recruiter grading metrics.

---

## 🚀 Local Execution & Development

To launch the project locally, run:
```bash
# Install dependencies (if not done)
npm install

# Start Vite live server
npm run dev

# Run production build and check assets bundle
npm run build
```
The server will boot on `http://localhost:3001/` (or next free port).
