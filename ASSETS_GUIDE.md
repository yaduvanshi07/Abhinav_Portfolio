# Assets Organization Guide

## 📁 Folder Structure

Your images should be organized like this:

```
src/assets/
├── icons/              # General icons (menu, close, github, etc.)
│   ├── menu.svg
│   ├── close.svg
│   └── github.svg
│
├── services/           # Service category icons
│   ├── web.png
│   ├── mobile.png
│   ├── backend.png
│   └── creator.png
│
├── tech/               # Technology stack icons
│   ├── html.png
│   ├── css.png
│   ├── javascript.png
│   ├── reactjs.png
│   ├── tailwind.png
│   ├── nodejs.png
│   ├── mongodb.png
│   ├── git.png
│   └── threejs.svg
│
├── company/            # Company logos (for work experience)
│   ├── iitbhu.png     # Add your company logos here
│   └── ...
│
└── projects/           # Project screenshots/images
    ├── wanderlust.png
    ├── weather-app.png
    └── ...
```

## 🎨 Where to Get Icons

### Technology Icons:
1. **Devicons**: https://devicon.dev/ (Free, SVG format)
2. **Simple Icons**: https://simpleicons.org/ (Free, SVG format)
3. **Iconify**: https://iconify.design/ (Free, multiple formats)
4. **Flaticon**: https://www.flaticon.com/ (Free with attribution)

### Service Icons:
- Use any icon library or create custom icons
- Recommended: **Heroicons** (https://heroicons.com/) or **Font Awesome**

### Project Images:
- Take screenshots of your projects
- Or use placeholder images from:
  - **Unsplash**: https://unsplash.com/
  - **Pexels**: https://www.pexels.com/

## 📦 3D Model (GLTF File) - NOT a GIF!

**You need a GLTF file, not a GIF!**

### What is GLTF?
- GLTF (GL Transmission Format) is a 3D model file format
- It's used for 3D graphics in web browsers
- Similar to how images are PNG/JPG, 3D models are GLTF

### Where to Get 3D Models:

1. **Sketchfab** (Recommended): https://sketchfab.com/
   - Search for "desktop computer" or "laptop"
   - Filter by: Free, Downloadable, GLTF format
   - Download the model
   - Extract the files
   - Place the `scene.gltf` file in: `public/desktop_pc/scene.gltf`

2. **Poly Haven**: https://polyhaven.com/
   - Free 3D models

3. **TurboSquid**: https://www.turbosquid.com/
   - Some free models available

### How to Add the 3D Model:

1. Download a GLTF model (desktop/laptop/computer)
2. Create folder: `public/desktop_pc/`
3. Place the `scene.gltf` file inside
4. If the model has textures/images, place them in the same folder
5. The model should load automatically

### Example Structure:
```
public/
└── desktop_pc/
    ├── scene.gltf          # Main model file
    ├── scene.bin           # Binary data (if needed)
    └── textures/           # Texture images (if needed)
        ├── texture1.jpg
        └── texture2.jpg
```

## 🔧 How to Add Your Images

1. **Download icons** from the websites above
2. **Save them** in the appropriate folders:
   - Tech icons → `src/assets/tech/`
   - Service icons → `src/assets/services/`
   - Project images → `src/assets/projects/`
3. **Update `src/assets/index.js`** to import your new images
4. **Update `src/constants/index.js`** to use your new images

## 📝 Quick Checklist

- [ ] Download technology icons (HTML, CSS, JS, React, etc.)
- [ ] Download service icons (Web, Mobile, Backend, Creator)
- [ ] Add project screenshots
- [ ] Download 3D model (GLTF format) for hero section
- [ ] Organize all files in proper folders
- [ ] Update imports in `src/assets/index.js`

## ⚠️ Important Notes

- **File formats**: Use PNG for icons with backgrounds, SVG for scalable icons
- **File sizes**: Keep images optimized (< 500KB each)
- **Naming**: Use lowercase with hyphens (e.g., `react-js.png`)
- **3D Model**: Must be GLTF format, not OBJ, FBX, or other formats

