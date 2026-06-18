import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.85, 1, 1, 1.15]);
  const rotateX = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [25, 0, 0, -25]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [100, 0, 0, -100]);

  return (
    <div ref={ref} className={`min-h-screen flex items-center justify-center w-full px-6 md:px-12 lg:px-16 ${className}`} style={{ perspective: '1200px' }}>
      <motion.div
        style={{
          opacity,
          scale,
          rotateX,
          y,
          transformStyle: 'preserve-3d',
        }}
        className="w-full max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </div>
  );
}
