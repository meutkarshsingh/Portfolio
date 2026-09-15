import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, MeshDistortMaterial } from '@react-three/drei';
import { Code2, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

function AnimatedSphere() {
  const meshRef = useRef();
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

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

  return (
    <span className="gradient-text font-semibold">{displayText}</span>
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
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
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View Projects
              </button>
              
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 glass hover:bg-card text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
              
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass hover:bg-card text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Code2 size={18} />
                GitHub
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 6]} />
              <Environment preset="night" />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <AnimatedSphere />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
