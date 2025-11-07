import { motion } from 'motion/react';
import { Cpu, Code, Palette, Zap } from 'lucide-react';

interface HeroProps {
  navigateTo: (page: string) => void;
}

export default function Hero({ navigateTo }: HeroProps) {
  const floatingIcons = [
    { Icon: Cpu, delay: 0, x: -100, y: -50 },
    { Icon: Code, delay: 0.2, x: 100, y: -30 },
    { Icon: Palette, delay: 0.4, x: -80, y: 50 },
    { Icon: Zap, delay: 0.6, x: 120, y: 40 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Floating electronic components */}
      <div className="absolute inset-0">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              x: [0, x, 0],
              y: [0, y, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon className="w-16 h-16 md:w-24 md:h-24 text-cyan-400/40" />
          </motion.div>
        ))}
      </div>

      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 0 200 Q 400 100 800 200 T 1600 200"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <motion.h1
            className="mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
            }}
            animate={{
              textShadow: [
                '0 0 40px rgba(6, 182, 212, 0.3)',
                '0 0 60px rgba(6, 182, 212, 0.5)',
                '0 0 40px rgba(6, 182, 212, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Shiyam Sundar G
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-block px-8 py-4 bg-blue-500/10 backdrop-blur-xl border border-cyan-400/30 rounded-2xl">
            <motion.p
              className="text-cyan-300"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Innovator | Developer | Designer | ECE Engineer
            </motion.p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          <motion.button
            onClick={() => navigateTo('projects-detail')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <span className="relative z-10">View My Projects</span>
          </motion.button>

          <motion.button
            onClick={() => navigateTo('contact-page')}
            className="px-8 py-4 bg-blue-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-2xl hover:bg-blue-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
