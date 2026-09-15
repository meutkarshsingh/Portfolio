import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

function ParticleField() {
  return (
    <Stars
      radius={100}
      depth={50}
      count={1200}
      factor={4}
      saturation={0}
      fade
      speed={0.7}
    />
  );
}

function NeuralNetwork() {
  const groupRef = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    if (!media.matches) {
      setActive(false);
      return;
    }

    const handleMouseMove = (event) => {
      if (groupRef.current) {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        groupRef.current.rotation.x = y * 0.12;
        groupRef.current.rotation.y = x * 0.12;
      }
      setActive(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh rotation={[0.5, 0.5, 0]}>
          <icosahedronGeometry args={[2, 1]} />
          <meshBasicMaterial
            color={active ? '#8b5cf6' : '#6366f1'}
            wireframe
            transparent
            opacity={0.28}
          />
        </mesh>
        <mesh rotation={[0.9, 0.3, 0.8]}>
          <icosahedronGeometry args={[3, 0]} />
          <meshBasicMaterial
            color="#06b6d4"
            wireframe
            transparent
            opacity={0.18}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_50%)]" />
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: '#0a0a0f' }}
      >
        <ParticleField />
        <NeuralNetwork />
        <ambientLight intensity={0.6} />
      </Canvas>
    </div>
  );
}
