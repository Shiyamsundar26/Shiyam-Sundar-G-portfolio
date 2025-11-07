import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Shield, Code } from 'lucide-react';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    {
      title: 'Get Started with Python',
      provider: 'Google (Coursera)',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'C, C++, MS Office',
      provider: 'BSS Institute of Technology',
      icon: Award,
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Cybersecurity Fundamentals',
      provider: 'Nasscom',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-6 md:px-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2, type: 'spring' }}
              className="relative group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="relative p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl overflow-hidden h-full"
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: '0 20px 60px rgba(6, 182, 212, 0.4)',
                }}
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Rotating badge */}
                <motion.div
                  className="mb-6 flex justify-center"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className={`relative p-6 bg-gradient-to-br ${cert.color} rounded-full`}>
                    <cert.icon className="w-12 h-12 text-white" />
                    
                    {/* Orbiting particles */}
                    {[0, 120, 240].map((angle, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full"
                        style={{
                          transformOrigin: '0 0',
                        }}
                        animate={{
                          rotate: [angle, angle + 360],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <div className="transform translate-x-12 -translate-y-1.5" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <h3 className="text-center mb-3 text-cyan-400">{cert.title}</h3>
                <p className="text-center text-blue-300">{cert.provider}</p>

                {/* Glowing effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: `conic-gradient(from ${index * 120}deg, transparent, rgba(6, 182, 212, 0.5), transparent)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '2px',
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/50" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400/50" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
