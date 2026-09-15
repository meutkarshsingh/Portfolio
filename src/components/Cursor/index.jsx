import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const updatePointer = () => setIsPointerFine(media.matches);
    updatePointer();
    media.addEventListener?.('change', updatePointer);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const hoveredInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.role === 'button';

      setIsHovering(hoveredInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      media.removeEventListener?.('change', updatePointer);
    };
  }, []);

  if (!isPointerFine) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[60] mix-blend-screen shadow-[0_0_16px_rgba(99,102,241,0.6)]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 1.9 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          scale: { duration: 0.2 }
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/80 rounded-full pointer-events-none z-[60] mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.45 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 160,
          damping: 18,
          scale: { duration: 0.2 }
        }}
      />
    </>
  );
}
