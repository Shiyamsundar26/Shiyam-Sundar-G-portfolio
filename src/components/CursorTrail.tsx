import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail particle
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrails((prev) => [...prev.slice(-15), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main glow cursor */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-[9999] mix-blend-multiply"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-cyan-400/40 rounded-full blur-xl" />
      </motion.div>

      {/* Trail particles */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed w-2 h-2 pointer-events-none z-[9998] bg-violet-400/60 rounded-full"
          initial={{ x: trail.x - 4, y: trail.y - 4, opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      ))}
    </>
  );
}