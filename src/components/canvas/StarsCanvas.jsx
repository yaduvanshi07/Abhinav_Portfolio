import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { Stars } from './Stars'

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <div className="w-full h-screen fixed inset-0 z-[-1] pointer-events-none">
      <Canvas frameloop="always" dpr={[1, 1.5]} camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<CanvasLoader />}>
          <Stars isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas

