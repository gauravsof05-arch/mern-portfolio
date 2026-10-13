import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

function Reveal3D({ children, className }) {
  const ref = useRef(null);

  const scroll = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smooth = useSpring(scroll.scrollYProgress, { stiffness: 100, damping: 25 });

  const rotateX = useTransform(smooth, [0, 0.25, 0.75, 1], [45, 0, 0, -20]);
  const scale = useTransform(smooth, [0, 0.25, 0.75, 1], [0.8, 1, 1, 0.92]);
  const opacity = useTransform(smooth, [0, 0.2, 0.8, 1], [0, 1, 1, 0.4]);
  const y = useTransform(smooth, [0, 0.25], [100, 0]);

  return (
    <div ref={ref} style={{ perspective: 1200 }} className={className}>
      <motion.div
        style={{
          rotateX: rotateX,
          scale: scale,
          opacity: opacity,
          y: y,
          transformOrigin: 'center top',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal3D;