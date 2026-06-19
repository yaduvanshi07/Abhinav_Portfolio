# 3D Developer Portfolio

A modern, interactive 3D portfolio website showcasing my work as a Full Stack Developer. Built with React, Three.js, and Framer Motion.

## 🚀 Live Demo

[Add your deployed URL here]

## ✨ Features

- 🎨 **3D Graphics**: Interactive 3D desktop model in hero section
- 📱 **Fully Responsive**: Works seamlessly on all devices
- ⚡ **Fast Performance**: Optimized with Vite and modern React
- 🎭 **Smooth Animations**: Framer Motion animations throughout
- 🌟 **Interactive Elements**: Hover effects, scroll animations, and 3D interactions
- 📊 **Work Timeline**: Vertical timeline showcasing work experience
- 💼 **Projects Showcase**: Featured projects with live links
- 📧 **Contact Form**: Easy way for visitors to reach out

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Devicons (CDN)
- **Timeline**: React Vertical Timeline Component

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portf
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add 3D Model** (Optional but recommended)
   - Download a desktop/computer GLTF model from [Sketchfab](https://sketchfab.com/)
   - Place it at: `public/desktop_pc/scene.gltf`
   - Include all texture files in `public/desktop_pc/textures/` folder

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   - Navigate to `http://localhost:3000`

## 📁 Project Structure

```
Portf/
├── public/
│   └── desktop_pc/          # 3D model files
│       ├── scene.gltf
│       ├── scene.bin
│       └── textures/
├── src/
│   ├── assets/              # Images and icons
│   │   ├── icons/
│   │   ├── services/
│   │   ├── tech/
│   │   ├── company/
│   │   └── projects/
│   ├── components/          # React components
│   │   ├── canvas/          # 3D canvas components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Tech.jsx
│   │   └── Works.jsx
│   ├── constants/           # Data and constants
│   │   └── index.js
│   ├── hoc/                 # Higher-order components
│   │   └── SectionWrapper.jsx
│   ├── utils/               # Utility functions
│   │   └── motion.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Name and Title** (`src/components/Hero.jsx`)
   - Line 24: Update your name
   - Line 29-31: Update professional headline

2. **About Section** (`src/components/About.jsx`)
   - Line 54-60: Update professional summary

3. **Work Experience** (`src/constants/index.js`)
   - Update `experiences` array with your work history
   - Add company logos in `src/assets/company/`

4. **Projects** (`src/constants/index.js`)
   - Update `projects` array with your projects
   - Add project images in `src/assets/projects/`
   - Update `source_code_link` and `live_link`

5. **Technologies** (`src/constants/index.js`)
   - Update `technologies` array with your skills
   - Icons are loaded from CDN (Devicons)

6. **Contact Information** (`src/components/Contact.jsx`)
   - Line 77: Update email
   - Line 83: Update phone
   - Line 89: Update LinkedIn
   - Line 95: Update GitHub

7. **Services** (`src/constants/index.js`)
   - Update `services` array to match your expertise

## 🖼️ Adding Assets

### Technology Icons
- Currently using CDN from Devicons
- Icons automatically load from: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/`

### Project Images
- Add screenshots to `src/assets/projects/`
- Update project objects in `src/constants/index.js` to reference images

### Company Logos
- Add logos to `src/assets/company/`
- Update work experience icons in `src/constants/index.js`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite
   - Click Deploy

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repo for continuous deployment

### Other Platforms

The `dist` folder contains the production build. Deploy it to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any static file server

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎯 Key Features Explained

### 3D Desktop Model
- Located in Hero section (right side)
- Interactive: Can be rotated with mouse
- Responsive: Adjusts size for mobile devices
- Model path: `public/desktop_pc/scene.gltf`

### Smooth Scrolling
- Navigation links smoothly scroll to sections
- Uses react-scroll library
- Offset accounts for fixed navbar

### Animations
- Framer Motion for entrance animations
- Stagger animations for lists
- Hover effects on cards and buttons

### Responsive Design
- Mobile-first approach
- Breakpoints: xs (450px), sm, md, lg, xl
- 3D models scale down on mobile

## 🔧 Troubleshooting

### 3D Model Not Showing
- Check that `public/desktop_pc/scene.gltf` exists
- Ensure all texture files are in `public/desktop_pc/textures/`
- Check browser console for errors
- Try a different GLTF model if issues persist

### Images Not Loading
- Verify file paths in `src/assets/index.js`
- Check that image files exist in correct folders
- Technology icons load from CDN automatically

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Clear `node_modules` and reinstall if needed
- Check Node.js version (v16+ required)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Abhinav Kumar Yadav**

- Email: abhinavyaduvanshi05@gmail.com
- LinkedIn: [Abhinav Kumar Yadav](https://www.linkedin.com/in/abhinav-kumar-yadav-706a14257)
- GitHub: [yaduvanshi07](https://github.com/yaduvanshi07)
- Phone: 9336158912

## 🙏 Acknowledgments

- Three.js community for amazing 3D graphics library
- React Three Fiber for React integration
- Framer Motion for smooth animations
- Devicons for technology icons

---

Built with ❤️ using React and Three.js
