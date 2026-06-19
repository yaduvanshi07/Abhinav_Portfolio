# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add 3D Models** (Required for Hero section)
   - Download a desktop/computer 3D model in GLTF format
   - Place it at: `public/desktop_pc/scene.gltf`
   - You can find free models at: https://sketchfab.com

3. **Add Image Assets**
   - See `src/assets/placeholder-images.md` for the complete list
   - Minimum required for basic functionality:
     - Technology icons (in `src/assets/tech/`)
     - Service icons (web.png, mobile.png, backend.png, creator.png)
     - Company logos (if using work experience section)

4. **Update Personal Information**
   - Edit `src/constants/index.js`:
     - Update `experiences` array with your work history
     - Update `projects` array with your projects
     - Update `technologies` array with your skills
     - Update `services` array if needed
   - Edit `src/components/Hero.jsx`:
     - Replace "Your Name" with your actual name
     - Update the professional headline
   - Edit `src/components/About.jsx`:
     - Update the about text with your personal summary
   - Edit `src/components/Contact.jsx`:
     - Update email and phone number

5. **Run Development Server**
   ```bash
   npm run dev
   ```

## File Structure Overview

```
Portf/
├── public/
│   └── desktop_pc/          # 3D model goes here
│       └── scene.gltf
├── src/
│   ├── assets/
│   │   ├── tech/            # Technology icons
│   │   ├── company/         # Company logos
│   │   ├── menu.svg         # ✓ Created
│   │   ├── close.svg        # ✓ Created
│   │   └── github.svg       # ✓ Created
│   ├── components/
│   │   ├── canvas/          # 3D components
│   │   ├── About.jsx        # About section
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Hero.jsx         # Hero section with 3D
│   │   ├── Navbar.jsx       # Navigation
│   │   ├── Projects.jsx     # Projects showcase
│   │   ├── Tech.jsx         # Technologies
│   │   └── Works.jsx        # Work experience
│   ├── constants/
│   │   └── index.js         # All your data goes here
│   └── App.jsx              # Main app
└── package.json
```

## Key Files to Customize

### 1. Personal Information (`src/constants/index.js`)
- **Experiences**: Your work history with company, dates, and responsibilities
- **Projects**: Your portfolio projects with descriptions and links
- **Technologies**: Skills you want to showcase
- **Services**: Types of services you offer

### 2. Hero Section (`src/components/Hero.jsx`)
- Line 18: Update your name
- Line 22-24: Update professional headline

### 3. About Section (`src/components/About.jsx`)
- Line 30-35: Update your personal summary

### 4. Contact Section (`src/components/Contact.jsx`)
- Line 87: Update email address
- Line 91: Update phone number

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Deploy `dist` folder to Netlify

## Troubleshooting

- **3D Model Not Showing**: Ensure the GLTF file is in `public/desktop_pc/scene.gltf`
- **Images Not Loading**: Check file paths in `src/assets/index.js`
- **Build Errors**: Run `npm install` again to ensure all dependencies are installed

