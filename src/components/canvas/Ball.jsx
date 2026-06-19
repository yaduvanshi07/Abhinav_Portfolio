import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Preload } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = () => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas

