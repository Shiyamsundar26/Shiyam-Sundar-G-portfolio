import { motion } from 'motion/react';
import { Code2, Lightbulb, Cpu, Palette, Zap, Brain } from 'lucide-react';
import profileImage from 'figma:asset/b5f28f64608ab32cc1ccbb01b2d5fdd0c94f52aa.png';

interface Page2AboutProps {
  navigateToPage: (page: number) => void;
}

export default function Page2About({ navigateToPage }: Page2AboutProps) {
  const floatingIcons = [
    { Icon: Code2, color: 'from-cyan-400 to-blue-400', delay: 0, x: -150, y: -100 },
    { Icon: Palette, color: 'from-violet-400 to-purple-400', delay: 0.3, x: 150, y: -80 },
    { Icon: Cpu, color: 'from-blue-400 to-cyan-400', delay: 0.6, x: -130, y: 100 },
    { Icon: Zap, color: 'from-purple-400 to-pink-400', delay: 0.9, x: 140, y: 90 },
    { Icon: Brain, color: 'from-cyan-400 to-violet-400', delay: 1.2, x: 0, y: -150 },
    { Icon: Lightbulb, color: 'from-yellow-400 to-orange-400', delay: 1.5, x: 0, y: 150 },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Cinematic light tunnel entrance animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-2 border-cyan-300/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1 + i * 0.3, opacity: [0, 0.4, 0] }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </motion.div>

      <div className="relative max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-20 bg-gradient-to-r from-cyan-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 3D Holographic Profile */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.8, duration: 1.2, type: 'spring' }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <div className="relative">
              {/* Holographic frame with depth */}
              <motion.div
                className="relative"
                animate={{
                  rotateY: [0, 3, 0, -3, 0],
                  z: [0, 20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glowing background layers */}
                {[0, 1, 2].map((layer) => (
                  <motion.div
                    key={layer}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-violet-200/30 rounded-3xl blur-xl"
                    style={{
                      transform: `translateZ(-${layer * 20}px)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      delay: layer * 0.3,
                      repeat: Infinity,
                    }}
                  />
                ))}

                {/* Main image */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/40 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Shiyam Sundar G"
                    className="w-full h-auto"
                  />
                  
                  {/* Holographic overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-cyan-300/20 via-transparent to-violet-300/20"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Scan line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-300/40 to-transparent h-32"
                    animate={{
                      y: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </div>

                {/* Holographic corners */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-cyan-500 rounded-tl-lg" />
                <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-violet-500 rounded-tr-lg" />
                <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-violet-500 rounded-bl-lg" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-cyan-500 rounded-br-lg" />
              </motion.div>

              {/* Floating icons around profile */}
              {floatingIcons.map(({ Icon, color, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 hidden md:block"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1.2, 0.8],
                    x: [0, x, 0],
                    y: [0, y, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className={`p-3 bg-gradient-to-br ${color} rounded-2xl backdrop-blur-xl border border-white/30 shadow-xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="space-y-8"
          >
            <motion.div
              className="p-8 bg-white/70 backdrop-blur-xl border border-cyan-300/40 rounded-3xl relative overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02, borderColor: 'rgba(6,182,212,0.5)' }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-200/20 to-violet-200/20"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative space-y-4 text-slate-700">
                <p>
                  I'm <span className="text-cyan-600 font-semibold">Shiyam Sundar</span>, an ECE student driven by innovation, 
                  technology, and digital creativity. I combine electronics, coding, and design to craft 
                  smart systems and immersive digital experiences.
                </p>

                <p>
                  Skilled in <span className="text-violet-600 font-semibold">Java, MySQL, Figma, Adobe XD, Canva</span>, 
                  I thrive on turning complex ideas into functional 3D concepts. Curious by nature, I'm 
                  exploring AI-driven design, motion graphics, and human-centered systems that fuse art 
                  and engineering.
                </p>
              </div>
            </motion.div>

            {/* Animated Timeline Hologram */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="p-6 bg-gradient-to-br from-cyan-100/70 to-violet-100/70 backdrop-blur-xl border border-cyan-400/40 rounded-2xl relative overflow-hidden shadow-xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <div className="relative">
                <h3 className="text-cyan-700 mb-4 flex items-center gap-3">
                  <motion.div
                    className="w-3 h-3 bg-cyan-500 rounded-full shadow-lg"
                    animate={{
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        '0 0 10px rgba(6,182,212,0.8)',
                        '0 0 20px rgba(6,182,212,1)',
                        '0 0 10px rgba(6,182,212,0.8)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Education
                </h3>
                <p className="text-slate-700 mb-2">Panimalar Engineering College, Chennai</p>
                <p className="text-violet-700 mb-2">B.E. Electronics and Communication Engineering</p>
                <motion.p
                  className="text-cyan-700 font-semibold"
                  animate={{
                    filter: [
                      'drop-shadow(0 0 8px rgba(6,182,212,0.5))',
                      'drop-shadow(0 0 16px rgba(6,182,212,0.8))',
                      'drop-shadow(0 0 8px rgba(6,182,212,0.5))',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  CGPA: 8.451
                </motion.p>
              </div>
            </motion.div>

            {/* Navigate to Skills */}
            <motion.button
              onClick={() => navigateToPage(3)}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My Skills →
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-500/40 rounded-full pointer-events-none shadow-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
