import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, RoundedBox, Html, Line } from '@react-three/drei';
import * as THREE from 'three';
import { Code2, Download, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import MagneticButton from '../MagneticButton';

const workstationObjects = [
  { name: 'RAM', position: [-2.4, 2.1, -0.5], color: '#67e8f9' },
  { name: 'GPU', position: [2.3, 1.9, -0.2], color: '#a78bfa' },
  { name: 'CPU', position: [-2.8, -0.8, -1.1], color: '#7dd3fc' },
  { name: 'SSD', position: [2.8, -1.4, -0.7], color: '#60a5fa' },
  { name: 'MONITOR', position: [-3.2, 0.5, -2.2], color: '#c4b5fd' },
  { name: 'MOUSE', position: [3.4, -1.6, 0.8], color: '#8b5cf6' },
];

const codeFragments = [
  { label: '< />', position: [-2.2, 1.8, -1.9] },
  { label: '{ }', position: [2.7, 0.8, -2.1] },
  { label: 'JS', position: [3.3, 2.3, -1.2] },
  { label: 'PY', position: [-3.2, -1.8, -2.2] },
  { label: 'C++', position: [0.7, 2.9, -1.7] },
];

function TypingText({ texts }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, texts]);

  return <span className="gradient-text font-semibold">{displayText}</span>;
}

function DataPacket({ from, to, color, speed = 0.18, phase = 0 }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = (clock.elapsedTime * speed + phase) % 1;
    const fromVec = new THREE.Vector3(...from);
    const toVec = new THREE.Vector3(...to);
    const pos = fromVec.clone().lerp(toVec, t);
    meshRef.current.position.copy(pos);
    meshRef.current.scale.setScalar(1 + Math.sin(clock.elapsedTime * 6 + phase) * 0.2);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.05, 10, 10]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.3} />
    </mesh>
  );
}

function WorkstationModel() {
  const rootRef = useRef();
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [selectedPart, setSelectedPart] = useState('monitor');
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame(({ pointer, clock }) => {
    if (!rootRef.current) return;
    rootRef.current.rotation.y = THREE.MathUtils.lerp(rootRef.current.rotation.y, pointer.x * 0.55, 0.05);
    rootRef.current.rotation.x = THREE.MathUtils.lerp(rootRef.current.rotation.x, pointer.y * 0.18 - 0.22, 0.05);
    rootRef.current.position.x = THREE.MathUtils.lerp(rootRef.current.position.x, pointer.x * 0.4, 0.04);
    rootRef.current.position.y = Math.sin(clock.elapsedTime * 0.9) * 0.18 + pointer.y * 0.2;
  });

  const floatingComponents = [
    { name: 'GPU', position: [2.9, 1.8, -0.4], color: '#a78bfa', label: 'GPU\nCOMPUTE' },
    { name: 'CPU', position: [-2.8, -0.8, -1.2], color: '#60a5fa', label: 'CPU\nPROCESSING' },
    { name: 'RAM', position: [-2.5, 2.1, -0.6], color: '#67e8f9', label: 'RAM\nMEMORY' },
    { name: 'SSD', position: [2.8, -1.4, -0.7], color: '#8b5cf6', label: 'SSD\nSTORAGE' },
    { name: 'React', position: [0.5, 2.9, -1.5], color: '#7dd3fc', label: 'REACT\nFRONTEND' },
    { name: 'Python', position: [-1.4, 2.8, -1.8], color: '#67e8f9', label: 'PYTHON\nAI / ML' },
  ];

  const branches = [
    { start: [-0.5, 2.8, -1.2], end: [0.9, 2.1, -1.0] },
    { start: [0.2, 2.1, -1.0], end: [2.1, 1.7, -0.8] },
    { start: [0.1, 2.1, -1.0], end: [-2.2, 1.3, -1.1] },
  ];

  const keyMatrix = Array.from({ length: 12 }, (_, i) => i);

  return (
    <group ref={rootRef}>
      <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.7}>
        <group>
          <mesh position={[0, -2.3, -2.2]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[4.7, 32]} />
            <meshStandardMaterial color="#0b1220" transparent opacity={0.28} />
          </mesh>

          {[...Array(28)].map((_, idx) => {
            const x = (idx % 7) * 0.9 - 3;
            const y = Math.floor(idx / 7) * 0.7 - 1.2;
            const z = -2.9 - (idx % 3) * 0.2;
            return (
              <mesh key={idx} position={[x, y, z]}>
                <sphereGeometry args={[0.035, 8, 8]} />
                <meshStandardMaterial color={idx % 2 === 0 ? '#67e8f9' : '#a78bfa'} emissive={idx % 2 === 0 ? '#67e8f9' : '#a78bfa'} emissiveIntensity={0.4} />
              </mesh>
            );
          })}

          <group position={[-2.5, 0.6, -0.7]} rotation={[0.12, 0.6, 0.06]}>
            <RoundedBox args={[2.2, 1.4, 0.14]} radius={0.05}>
              <meshStandardMaterial color="#111827" metalness={0.95} roughness={0.2} emissive="#60a5fa" emissiveIntensity={0.24} />
            </RoundedBox>

            <mesh position={[0, 0, 0.09]}>
              <planeGeometry args={[1.9, 1.06]} />
              <meshStandardMaterial color="#0b1320" emissive="#1d4ed8" emissiveIntensity={0.26} />
            </mesh>

            <mesh position={[0, 0.18, 0.12]}>
              <planeGeometry args={[1.72, 0.82]} />
              <meshStandardMaterial color="#111827" emissive="#67e8f9" emissiveIntensity={0.12} />
            </mesh>

            <mesh position={[0, 0, 0.12]}>
              <planeGeometry args={[1.52, 0.72]} />
              <meshStandardMaterial color="#0b1320" emissive="#67e8f9" emissiveIntensity={0.1} />
            </mesh>

            <mesh position={[0, -0.82, -0.12]}>
              <boxGeometry args={[0.46, 0.8, 0.12]} />
              <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} emissive="#8b5cf6" emissiveIntensity={0.12} />
            </mesh>

            <Html position={[0, 0.15, 0.14]} center style={{ pointerEvents: 'none' }}>
              <div style={{ width: '220px', padding: '9px 12px', borderRadius: '8px', background: 'rgba(2,6,23,0.78)', border: '1px solid rgba(103,232,249,0.35)', boxShadow: '0 0 22px rgba(34,211,238,0.18)', fontFamily: 'ui-monospace, SFMono-Regular, monospace', fontSize: '9px', color: '#dbeafe', lineHeight: 1.6 }}>
                <div style={{ color: '#7dd3fc' }}>portfolio/</div>
                <div style={{ marginLeft: '12px', color: '#dbeafe' }}>src/</div>
                <div style={{ marginLeft: '24px', color: '#dbeafe' }}>components/</div>
                <div style={{ marginLeft: '24px', color: '#dbeafe' }}>projects/</div>
                <div style={{ marginLeft: '24px', color: '#dbeafe' }}>data/</div>
                <div style={{ marginLeft: '12px', color: '#dbeafe' }}>App.jsx</div>
              </div>
            </Html>
          </group>

          <group position={[2.7, -0.8, 0.2]} rotation={[0.12, -0.65, 0.08]}>
            <RoundedBox args={[1.2, 2.8, 0.9]} radius={0.08}>
              <meshStandardMaterial color="#101827" metalness={0.9} roughness={0.18} emissive="#a78bfa" emissiveIntensity={0.18} />
            </RoundedBox>

            <mesh position={[0, 0.18, 0.46]}>
              <boxGeometry args={[0.85, 1.6, 0.08]} />
              <meshStandardMaterial color="#0b1320" transparent opacity={0.28} emissive="#67e8f9" emissiveIntensity={0.2} />
            </mesh>

            <mesh position={[0.18, 0.2, 0.49]}>
              <boxGeometry args={[0.38, 0.48, 0.04]} />
              <meshStandardMaterial color="#111827" emissive="#8b5cf6" emissiveIntensity={0.26} />
            </mesh>

            <mesh position={[-0.2, -0.8, 0.48]}>
              <boxGeometry args={[0.9, 0.16, 0.14]} />
              <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} emissive="#67e8f9" emissiveIntensity={0.18} />
            </mesh>

            {[-0.5, -0.18, 0.14, 0.46].map((offset, idx) => (
              <mesh key={idx} position={[offset, 0.7, 0.52]} rotation={[0, 0, 0]}>
                <cylinderGeometry args={[0.06, 0.06, 0.4, 18]} />
                <meshStandardMaterial color="#c4b5fd" emissive="#67e8f9" emissiveIntensity={0.28} />
              </mesh>
            ))}

            <mesh position={[0.38, -0.9, 0.46]} rotation={[0, 0, 1.4]}>
              <boxGeometry args={[0.14, 0.8, 0.08]} />
              <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.18} />
            </mesh>
          </group>

          <group position={[-2.7, -2.15, 0.5]} rotation={[0.08, 0.24, -0.04]}>
            <RoundedBox args={[3.1, 0.36, 1.15]} radius={0.06}>
              <meshStandardMaterial color="#111827" metalness={0.9} roughness={0.18} emissive="#67e8f9" emissiveIntensity={0.15} />
            </RoundedBox>

            {keyMatrix.map((key, index) => {
              const col = index % 6;
              const row = Math.floor(index / 6);
              const x = (col - 2.5) * 0.42;
              const y = (row - 0.4) * 0.2;
              const z = (index % 2 === 0 ? 0.1 : -0.08);

              return (
                <mesh key={key} position={[x, y, z]}>
                  <boxGeometry args={[0.26, 0.2, 0.08]} />
                  <meshStandardMaterial
                    color={selectedPart === 'keyboard' && index % 5 === 0 ? '#67e8f9' : '#0f172a'}
                    emissive={selectedPart === 'keyboard' && index % 5 === 0 ? '#67e8f9' : '#111827'}
                    emissiveIntensity={selectedPart === 'keyboard' && index % 5 === 0 ? 0.9 : 0.3}
                    metalness={0.7}
                    roughness={0.25}
                  />
                </mesh>
              );
            })}
          </group>

          <group position={[2.8, -2.5, 0.9]} rotation={[0.06, -0.3, 0.1]}>
            <RoundedBox args={[0.95, 0.5, 0.72]} radius={0.08}>
              <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.18} emissive="#8b5cf6" emissiveIntensity={0.16} />
            </RoundedBox>
            <mesh position={[0.12, 0.04, 0.28]}>
              <boxGeometry args={[0.34, 0.2, 0.1]} />
              <meshStandardMaterial color="#0b1320" emissive="#67e8f9" emissiveIntensity={0.26} />
            </mesh>
          </group>

          <group position={[0.4, 2.7, -1.2]} rotation={[0.18, -0.5, 0.12]}>
            <RoundedBox args={[2.1, 1.2, 0.18]} radius={0.06}>
              <meshStandardMaterial color="#0b1220" metalness={0.9} roughness={0.18} emissive="#67e8f9" emissiveIntensity={0.34} />
            </RoundedBox>
            <mesh position={[0, 0, 0.11]}>
              <planeGeometry args={[1.78, 0.7]} />
              <meshStandardMaterial color="#0b1320" emissive="#1d4ed8" emissiveIntensity={0.24} />
            </mesh>
            <RoundedBox args={[1.7, 0.18, 0.12]} radius={0.04} position={[0, -0.46, 0.12]}>
              <meshStandardMaterial color="#111827" metalness={0.8} roughness={0.24} emissive="#8b5cf6" emissiveIntensity={0.14} />
            </RoundedBox>
            <Html position={[0, 0.02, 0.16]} center style={{ pointerEvents: 'none' }}>
              <div style={{ fontSize: '8px', color: '#dbeafe', letterSpacing: '0.18em', fontFamily: 'ui-monospace, SFMono-Regular, monospace', padding: '7px 10px', borderRadius: '8px', background: 'rgba(2,6,23,0.7)', border: '1px solid rgba(103,232,249,0.35)', boxShadow: '0 0 22px rgba(34,211,238,0.18)' }}>
                WORKSTATION 01
              </div>
            </Html>
          </group>

          <group position={[1.5, 2.2, -1.5]} rotation={[0.2, -0.5, 0.1]}>
            <RoundedBox args={[1.9, 1.1, 0.12]} radius={0.04}>
              <meshStandardMaterial color="#0b1220" metalness={0.9} roughness={0.2} emissive="#67e8f9" emissiveIntensity={0.18} />
            </RoundedBox>
            <mesh position={[0, 0, 0.08]}>
              <planeGeometry args={[1.6, 0.66]} />
              <meshStandardMaterial color="#0b1320" emissive="#3b82f6" emissiveIntensity={0.19} />
            </mesh>
            <Html position={[0, 0.02, 0.09]} center style={{ pointerEvents: 'none' }}>
              <div style={{ fontSize: '7px', color: '#dbeafe', letterSpacing: '0.14em', fontFamily: 'ui-monospace, SFMono-Regular, monospace', padding: '5px 8px', borderRadius: '6px', background: 'rgba(2,6,23,0.68)', border: '1px solid rgba(96,165,250,0.3)' }}>
                $ npm run dev
              </div>
            </Html>
          </group>

          {branches.map((branch, idx) => (
            <Line key={idx} points={[branch.start, branch.end]} color={idx % 2 === 0 ? '#67e8f9' : '#a78bfa'} transparent opacity={0.42} lineWidth={0.8} />
          ))}

          {floatingComponents.map((item, idx) => (
            <group
              key={item.name}
              position={item.position}
              onPointerOver={(event) => {
                event.stopPropagation();
                setHoveredLabel(item.name);
              }}
              onPointerOut={() => setHoveredLabel(null)}
              onClick={(event) => {
                event.stopPropagation();
                setSelectedPart(item.name.toLowerCase());
              }}
            >
              <mesh rotation={[0, idx * 0.8, idx % 2 === 0 ? 1.2 : 0.6]}>
                <boxGeometry args={[0.4, 0.3, 0.15]} />
                <meshStandardMaterial color="#111827" metalness={0.8} roughness={0.2} emissive={item.color} emissiveIntensity={hoveredLabel === item.name ? 1.2 : 0.5} />
              </mesh>

              <mesh position={[0, 0, 0.12]}>
                <boxGeometry args={[0.26, 0.16, 0.04]} />
                <meshStandardMaterial color="#0b1320" emissive={item.color} emissiveIntensity={hoveredLabel === item.name ? 1.3 : 0.7} />
              </mesh>

              {hoveredLabel === item.name && (
                <Html position={[0, 0.42, 0]} center style={{ pointerEvents: 'none' }}>
                  <div style={{ padding: '5px 8px', borderRadius: '999px', background: 'rgba(15,23,42,0.72)', border: '1px solid rgba(96,165,250,0.6)', color: '#e0f2fe', fontSize: '7px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    {item.label.replace('\n', ' ') }
                  </div>
                </Html>
              )}
            </group>
          ))}

          <group position={[-0.2, 2.1, -1.5]}>
            <mesh>
              <boxGeometry args={[1.1, 0.7, 0.08]} />
              <meshStandardMaterial color="#0b1220" emissive="#67e8f9" emissiveIntensity={0.24} />
            </mesh>
            <Html position={[0, 0.02, 0.08]} center style={{ pointerEvents: 'none' }}>
              <div style={{ fontSize: '7px', color: '#dbeafe', letterSpacing: '0.14em', fontFamily: 'ui-monospace, SFMono-Regular, monospace', padding: '6px 9px', borderRadius: '6px', background: 'rgba(15,23,42,0.48)', border: '1px solid rgba(103,232,249,0.28)' }}>
                DATA → MODEL → PREDICTION
              </div>
            </Html>
          </group>

          {[...Array(10)].map((_, idx) => (
            <DataPacket
              key={idx}
              from={[-1.8 + idx * 0.38, 2.8 - (idx % 3) * 0.5, -1.2]}
              to={[1.2 - idx * 0.15, 1.7 + (idx % 2) * 0.2, -0.8]}
              color={idx % 2 === 0 ? '#67e8f9' : '#a78bfa'}
              speed={0.13 + idx * 0.013}
              phase={idx * 0.21}
            />
          ))}

          {!mobile && (
            <>
              <Line points={[[-2.4, 1.4, -0.7], [-0.3, 0.8, 0.3]]} color="#67e8f9" transparent opacity={0.2} lineWidth={0.8} />
              <Line points={[[2.3, 0.7, 0], [0.4, 0.5, 0.1]]} color="#a78bfa" transparent opacity={0.2} lineWidth={0.8} />
              <Line points={[[-2.4, -1.6, -0.6], [-0.3, -0.2, 0.2]]} color="#60a5fa" transparent opacity={0.2} lineWidth={0.8} />
            </>
          )}
        </group>
      </Float>
    </group>
  );
}

function Hero3D() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas dpr={[1, 1.5]}>
      <PerspectiveCamera makeDefault position={[0, 0.6, 7.5]} fov={mobile ? 52 : 42} />
      <Environment preset="night" />
      <ambientLight intensity={0.85} />
      <directionalLight position={[8, 5, 4]} intensity={1.6} color="#c4b5fd" />
      <directionalLight position={[-5, 2, 4]} intensity={1.2} color="#67e8f9" />
      <pointLight position={[0, 1.5, 2]} intensity={12} color="#60a5fa" />
      <pointLight position={[2.8, -1.5, 2]} intensity={10} color="#22d3ee" />
      <WorkstationModel />
    </Canvas>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 section-glow">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-4"
            >
              Hi, I'm {profile.name} 👋
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              {profile.role}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-lg mb-8 max-w-xl"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 text-lg mb-8"
            >
              I specialize in <TypingText texts={['AI/ML', 'Software Development', 'Web Development', 'Problem Solving']} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton
                onClick={scrollToProjects}
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium shadow-[0_0_30px_rgba(99,102,241,0.35)]"
              >
                View Projects
              </MagneticButton>

              <MagneticButton
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 glass hover:bg-card text-white rounded-lg font-medium flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </MagneticButton>

              <MagneticButton
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass hover:bg-card text-white rounded-lg font-medium flex items-center gap-2"
              >
                <Code2 size={18} />
                GitHub
              </MagneticButton>

              <MagneticButton
                href={profile.resume}
                download
                className="px-6 py-3 glass hover:bg-card text-white rounded-lg font-medium flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[420px] sm:h-[460px] lg:h-[520px]"
          >
            <div className="absolute inset-0 rounded-[30px] border border-white/10 bg-white/[0.02] shadow-[0_30px_80px_rgba(15,23,42,0.45)]" />
            <div className="absolute inset-4 rounded-[24px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_50%)]" />
            <div className="relative h-full w-full overflow-hidden rounded-[30px]">
              <Hero3D />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
