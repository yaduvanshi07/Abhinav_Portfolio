import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Stars({ isMobile }) {
  const ref = useRef()

  const sphere = useMemo(() => {
    const count = 3000
    const points = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = 1.5
      const theta = 2 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)
      points[i3] = radius * Math.sin(phi) * Math.cos(theta)
      points[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      points[i3 + 2] = radius * Math.cos(phi)
    }
    return points
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
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

