import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { Stars } from './Stars'

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [frameloop, setFrameloop] = useState('always')

  useEffect(() => {
    // Use wider mobile breakpoint for better coverage on tablets
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  useEffect(() => {
    // Pause GPU render loop when tab is hidden — saves CPU/battery
    const handleVisibility = () => {
      setFrameloop(document.hidden ? 'never' : 'always')
    }

    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <div className="w-full h-screen fixed inset-0 z-[-1] pointer-events-none">
      <Canvas
        frameloop={frameloop}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false, powerPreference: 'low-power' }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Stars isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas

