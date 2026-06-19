# Planet Model Setup Guide

## 🌍 Download Planet Model from Sketchfab

You provided this Sketchfab model: **Planet of Shards**
- Model ID: `8712e9fc4c3e4f8184dc7ef96e0fb937`
- Link: https://sketchfab.com/3d-models/planet-of-shards-8712e9fc4c3e4f8184dc7ef96e0fb937

### Steps to Download:

1. **Go to the model page**: 
   https://sketchfab.com/3d-models/planet-of-shards-8712e9fc4c3e4f8184dc7ef96e0fb937

2. **Click the "Download" button** (usually in the top right or bottom of the viewer)

3. **Select GLTF format** when prompted

4. **Extract the downloaded file**

5. **Create folder structure**:
   ```
   public/
   └── planet/
       └── scene.gltf
   ```

6. **Place the `scene.gltf` file** in `public/planet/` folder

7. **If there are texture files**, place them in the same `public/planet/` folder

### Alternative: If Download is Not Available

If the model is not downloadable (some models are view-only), you can:

1. **Search for a free planet model** on Sketchfab:
   - Go to https://sketchfab.com/
   - Search: "planet" or "earth"
   - Filter: Free, Downloadable, GLTF format
   - Download any suitable planet model

2. **Or use a simple sphere** (the code will work with a placeholder)

## ✅ Current Status

- ✅ Desktop PC model: `public/desktop_pc/scene.gltf` - **READY**
- ⏳ Planet model: `public/planet/scene.gltf` - **NEEDS TO BE ADDED**

## 🎯 After Adding the Planet Model

Once you place the planet model in `public/planet/scene.gltf`, it will automatically:
- Appear in the About section
- Rotate automatically
- Be interactive (you can rotate it with mouse)

The planet will be displayed next to your introduction text in the About section!

