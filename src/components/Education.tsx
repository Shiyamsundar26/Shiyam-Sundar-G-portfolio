import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-20 px-6 md:px-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: -30 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1, type: 'spring' }}
          className="relative"
          style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        >
          {/* 3D Book/Certificate Animation */}
          <motion.div
            className="absolute -top-20 left-1/2 transform -translate-x-1/2"
            animate={{
              rotateY: [0, 360],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="relative">
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-2xl flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(6, 182, 212, 0.3)',
                    '0 0 40px rgba(6, 182, 212, 0.6)',
                    '0 0 20px rgba(6, 182, 212, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <GraduationCap className="w-12 h-12 text-cyan-400" />
              </motion.div>

              {/* Orbiting awards */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className="w-8 h-8 bg-cyan-400/20 backdrop-blur-xl border border-cyan-400/30 rounded-full flex items-center justify-center transform translate-x-16 -translate-y-4">
                    <Award className="w-4 h-4 text-cyan-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Holographic card */}
          <motion.div
            className="relative mt-16 p-8 md:p-12 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl overflow-hidden"
            whileHover={{
              scale: 1.02,
              borderColor: 'rgba(6, 182, 212, 0.5)',
            }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  'linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.1), transparent)',
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <div className="relative space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-cyan-400 mb-2">
                  Bachelor of Engineering (B.E.)
                </h3>
                <p className="text-blue-300">Electronics and Communication Engineering</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <p className="text-blue-100">Panimalar Engineering College, Chennai</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="pt-6 border-t border-cyan-400/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-blue-300">CGPA</span>
                  <motion.span
                    className="text-cyan-400"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(6, 182, 212, 0.5)',
                        '0 0 20px rgba(6, 182, 212, 0.8)',
                        '0 0 10px rgba(6, 182, 212, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    8.451
                  </motion.span>
                </div>
              </motion.div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
