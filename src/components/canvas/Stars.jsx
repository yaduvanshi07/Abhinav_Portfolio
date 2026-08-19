import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

export function Stars({ isMobile }) {
  const ref = useRef()

  // Fewer stars on mobile to preserve 60fps on low-end devices
  const count = isMobile ? 1500 : 3000

  const sphere = useMemo(() => {
    const points = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = 1.5
      const theta = 2 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)
      points[i3]     = radius * Math.sin(phi) * Math.cos(theta)
      points[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      points[i3 + 2] = radius * Math.cos(phi)
    }
    return points
  }, [count])

  // Dispose GPU geometry on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (ref.current?.geometry) ref.current.geometry.dispose()
      if (ref.current?.material) ref.current.material.dispose()
    }
  }, [])

  useFrame((_state, delta) => {
    if (!ref.current) return
    // Cap delta to 100ms to prevent large rotation jumps when tab regains focus
    const clampedDelta = Math.min(delta, 0.1)
    ref.current.rotation.x -= clampedDelta / 10
    ref.current.rotation.y -= clampedDelta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref} scale={isMobile ? 0.9 : 1.5}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={sphere.length / 3}
            array={sphere}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.002}
          color="#ffffff"
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

