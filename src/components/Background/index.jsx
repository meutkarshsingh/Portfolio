import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { useEffect, useRef } from 'react';

function ParticleField() {
  return (
    <Stars
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

function NeuralNetwork() {
  const groupRef = useRef();
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (groupRef.current) {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        groupRef.current.rotation.x = y * 0.1;
        groupRef.current.rotation.y = x * 0.1;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh>
          <icosahedronGeometry args={[2, 1]} />
          <meshBasicMaterial
            color="#6366f1"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[3, 0]} />
          <meshBasicMaterial
            color="#8b5cf6"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: '#0a0a0f' }}
      >
        <ParticleField />
        <NeuralNetwork />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}
