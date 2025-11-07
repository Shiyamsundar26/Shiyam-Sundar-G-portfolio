import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Lightbulb, Cpu } from 'lucide-react';
import profileImage from 'figma:asset/2787123848825bcaa584a7a9e4c6bb1c51b463e8.png';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const floatingIcons = [
    { Icon: Code2, delay: 0, position: 'top-10 left-10' },
    { Icon: Lightbulb, delay: 0.3, position: 'top-20 right-10' },
    { Icon: Cpu, delay: 0.6, position: 'bottom-10 left-20' },
  ];

  return (
    <section ref={ref} className="relative py-20 px-6 md:px-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Avatar/Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, type: 'spring' }}
            className="relative"
          >
            <motion.div
              className="relative"
              animate={{
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
            >
              {/* Holographic frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl transform translate-z-10" />
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                <img
                  src={profileImage}
                  alt="Shiyam Sundar G"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent" />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
            </motion.div>

            {/* Floating icons */}
            {floatingIcons.map(({ Icon, delay, position }, index) => (
              <motion.div
                key={index}
                className={`absolute ${position} hidden md:block`}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                      }
                    : {}
                }
                transition={{
                  delay,
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="p-3 bg-cyan-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-2xl">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.div
              className="p-8 bg-blue-500/10 backdrop-blur-xl border border-cyan-400/20 rounded-3xl"
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(6, 182, 212, 0.5)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="text-blue-100 mb-4">
                I'm Shiyam Sundar, an Electronics and Communication Engineering student driven by a 
                deep passion for innovation, technology, and digital creativity. I love blending electronics, 
                coding, and design to craft intelligent systems and visually engaging digital experiences.
              </p>

              <p className="text-blue-100">
                With strong foundations in Java, MySQL, and UI/UX tools like Figma, Adobe XD, and Canva, 
                I enjoy transforming ideas into interactive 3D designs and system prototypes. My curiosity 
                for emerging technologies inspires me to explore 3D design, animation, and human-centered 
                systems that connect creativity and functionality.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '8.45', label: 'CGPA' },
                { value: '2+', label: 'Projects' },
                { value: '3+', label: 'Certifications' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                  className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-2xl text-center"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <motion.div
                    className="text-cyan-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-blue-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
