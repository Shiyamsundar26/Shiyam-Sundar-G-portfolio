import { motion } from 'motion/react';

export default function PageTransition() {
  return (
    <motion.div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Light tunnel effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '100%', opacity: [0, 1, 0] }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      {/* Radial light burst */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.4),transparent_70%)]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 2, 0], opacity: [0, 0.5, 0] }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Particle trails */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-500 rounded-full shadow-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: [0, (Math.random() - 0.5) * 200],
            y: [0, (Math.random() - 0.5) * 200],
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.03,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Diagonal wipe */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-200/40 to-violet-200/40 backdrop-blur-sm"
        initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
        animate={{
          clipPath: [
            'polygon(0 0, 0 0, 0 100%, 0 100%)',
            'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
          ],
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}