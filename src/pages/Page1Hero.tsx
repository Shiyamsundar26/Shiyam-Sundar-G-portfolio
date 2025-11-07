import { motion } from 'motion/react';
import { Cpu, Zap, Code, Sparkles } from 'lucide-react';

interface Page1HeroProps {
  navigateToPage: (page: number) => void;
}

export default function Page1Hero({ navigateToPage }: Page1HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background circuit board */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: 1000 }}
      >
        {/* Central rotating circuit board */}
        <motion.div
          className="relative w-96 h-96"
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 10, 0, -10, 0],
          }}
          transition={{
            rotateY: { duration: 20, repeat: Infinity, ease: 'linear' },
            rotateX: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Circuit board layers */}
          {[0, 1, 2].map((layer) => (
            <motion.div
              key={layer}
              className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl shadow-lg"
              style={{
                transform: `translateZ(${layer * 20}px)`,
                background: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Circuit lines */}
              <svg className="w-full h-full opacity-40" viewBox="0 0 400 400">
                <motion.path
                  d="M 50 200 L 150 200 L 150 100 L 250 100 L 250 300 L 350 300"
                  stroke="url(#circuit-gradient)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: layer * 0.5,
                  }}
                />
                <motion.path
                  d="M 200 50 L 200 150 L 300 150 L 300 250 L 100 250"
                  stroke="url(#circuit-gradient)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: layer * 0.5 + 1,
                  }}
                />
                <defs>
                  <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Connection nodes */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-cyan-500 rounded-full shadow-lg"
                  style={{
                    left: `${20 + (i % 4) * 25}%`,
                    top: `${20 + Math.floor(i / 4) * 60}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    boxShadow: [
                      '0 0 10px rgba(6,182,212,0.8)',
                      '0 0 20px rgba(6,182,212,1)',
                      '0 0 10px rgba(6,182,212,0.8)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          ))}

          {/* Floating electronic components */}
          {[
            { Icon: Cpu, angle: 0, distance: 200 },
            { Icon: Zap, angle: 90, distance: 220 },
            { Icon: Code, angle: 180, distance: 200 },
            { Icon: Sparkles, angle: 270, distance: 220 },
          ].map(({ Icon, angle, distance }, i) => (
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
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <motion.div
                className="p-4 bg-white/80 backdrop-blur-xl border border-cyan-400/40 rounded-2xl shadow-xl"
                style={{
                  transform: `translate(${distance}px, -50%) translateZ(50px)`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              >
                <Icon className="w-8 h-8 text-cyan-600" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Ambient particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-500/60 rounded-full shadow-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Soundwave visualization */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-1">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-gradient-to-t from-cyan-500 to-violet-500 rounded-full shadow-lg"
            animate={{
              height: [20, 60, 20],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.05,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
        >
          <motion.h1
            className="mb-6 bg-gradient-to-r from-cyan-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(6, 182, 212, 0.3))',
              backgroundSize: '200% auto',
            }}
            animate={{
              backgroundPosition: ['0% center', '200% center'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Shiyam Sundar G
          </motion.h1>

          <motion.div
            className="mb-12 inline-block px-8 py-4 bg-white/70 backdrop-blur-xl border border-cyan-400/40 rounded-2xl shadow-xl"
            animate={{
              boxShadow: [
                '0 8px 32px rgba(125,211,252,0.3)',
                '0 8px 48px rgba(125,211,252,0.5)',
                '0 8px 32px rgba(125,211,252,0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-slate-700 tracking-wider">
              Innovator | Developer | Designer | ECE Engineer
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <motion.button
              onClick={() => navigateToPage(2)}
              className="group relative px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10">About Me</span>
              
              {/* 3D pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-violet-300"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            <motion.button
              onClick={() => navigateToPage(4)}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-400"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10">Explore My Work</span>
              
              {/* 3D pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-cyan-300"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            <motion.button
              onClick={() => navigateToPage(5)}
              className="group relative px-8 py-4 bg-white/70 backdrop-blur-xl border-2 border-cyan-400/40 text-slate-700 rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05, borderColor: 'rgba(6,182,212,0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get in Touch</span>
              
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Depth of field blur overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" />
      </div>
    </div>
  );
}
