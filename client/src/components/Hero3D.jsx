import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei';

function Hero3D() {
  return (
    <div style={{ height: 380, width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={2} />
        <pointLight position={[-3, -2, 2]} intensity={2} color="#a855f7" />

        <Stars radius={50} depth={40} count={1500} factor={3} fade speed={1} />

        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <mesh>
            <icosahedronGeometry args={[1.4, 1]} />
            <MeshDistortMaterial
              color="#3b82f6"
              distort={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}

export default Hero3D;