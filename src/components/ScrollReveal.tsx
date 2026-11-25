import type { ReactNode } from 'react';
import { motion } from 'motion/react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const OFFSETS: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * GPU-composited scroll reveal wrapper using IntersectionObserver (via motion)
 * so animations stay smooth alongside Lenis without scroll-listener jank.
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance,
  className = '',
}: ScrollRevealProps) {
  const base = OFFSETS[direction];
  const scale = distance !== undefined ? distance / 24 : 1;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: base.x * scale, y: base.y * scale }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
