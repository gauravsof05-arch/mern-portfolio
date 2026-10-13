import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TiltCard({ children, className, strength }) {
  const ref = useRef(null);
  const power = strength || 12;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [power, -power]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-power, power]);

  const glare = useTransform([springX, springY], function (latest) {
    const gx = (latest[0] + 0.5) * 100;
    const gy = (latest[1] + 0.5) * 100;
    return (
      'radial-gradient(circle at ' +
      gx +
      '% ' +
      gy +
      '%, rgba(255,255,255,0.25), transparent 60%)'
    );
  });

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        initial="rest"
        whileHover="hover"
        variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={'relative ' + (className || '')}
      >
        <div style={{ transform: 'translateZ(30px)' }}>{children}</div>

        <motion.div
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
        />
      </motion.div>
    </div>
  );
}

export default TiltCard;