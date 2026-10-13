import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';

const shapes = [
  { position: [-4, 2, -3], color: '#3b82f6', type: 'ico' },
  { position: [4, -1, -4], color: '#a855f7', type: 'torus' },
  { position: [-3, -3, -2], color: '#ec4899', type: 'octa' },
  { position: [3, 3, -5], color: '#22d3ee', type: 'ico' },
  { position: [0, -4, -6], color: '#f59e0b', type: 'torus' },
];

function Shape({ type, color }) {
  return (
    <mesh>
      {type === 'ico' && <icosahedronGeometry args={[0.8, 0]} />}
      {type === 'torus' && <torusGeometry args={[0.7, 0.25, 16, 40]} />}
      {type === 'octa' && <octahedronGeometry args={[0.8, 0]} />}
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
}

function Scene() {
  const groupRef = useRef(null);

  useFrame(function (state) {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

    if (groupRef.current) {
      groupRef.current.rotation.y = progress * Math.PI * 2;
      groupRef.current.rotation.x = progress * Math.PI * 0.6;
      groupRef.current.position.y = progress * 3;
    }

    state.camera.position.x += (state.pointer.x * 0.8 - state.camera.position.x) * 0.05;
    state.camera.position.y += (state.pointer.y * 0.8 - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={2} />
      <Stars radius={60} depth={40} count={1200} factor={3} fade speed={1} />
      <group ref={groupRef}>
        {shapes.map(function (s, i) {
          return (
            <Float key={i} speed={1.5} rotationIntensity={2} floatIntensity={2}>
              <group position={s.position}>
                <Shape type={s.type} color={s.color} />
              </group>
            </Float>
          );
        })}
      </group>
    </>
  );
}

function Background3D() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        eventSource={document.body}
        eventPrefix="client"
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default Background3D;