import { motion } from 'motion/react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const charVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.50, 0, 0.105, 1] as const,
      opacity: { duration: 1, ease: 'easeOut' as const },
    },
  },
};

interface RevealTextProps {
  text: string;
  className?: string;
}

/**
 * Animates each character of `text` upward from behind an overflow-hidden mask
 * with a staggered fade-in when the heading enters the viewport.
 */
export default function RevealText({ text, className = '' }: RevealTextProps) {
  return (
    <motion.h1
      className={`overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
    >
      {text.match(/./gu)?.map((char, i) => (
        <motion.span
          className="inline-block will-change-transform"
          key={`${char}-${i}`}
          variants={charVariants}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
