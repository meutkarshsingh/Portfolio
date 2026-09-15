import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function MagneticButton({ children, className = '', onClick, href, target, rel, type = 'button', disabled = false }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    if (!ref.current || disabled) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    ref.current.style.transform = `translate(${offsetX * 0.12}px, ${offsetY * 0.12}px)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0px, 0px)';
    }
  };

  const sharedProps = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    onMouseEnter: reset,
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    className,
    onClick,
    type,
    disabled,
  };

  if (href) {
    return (
      <motion.a
        {...sharedProps}
        href={href}
        target={target}
        rel={rel}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...sharedProps}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      {children}
    </motion.button>
  );
}
