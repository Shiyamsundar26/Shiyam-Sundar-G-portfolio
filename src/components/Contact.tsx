import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

interface ContactProps {
  navigateTo: (page: string) => void;
}

export default function Contact({ navigateTo }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shiyamsundarganesan@gmail.com',
      href: 'mailto:shiyamsundarganesan@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '7502009579',
      href: 'tel:7502009579',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'shiyam-sundar-g-41a808274',
      href: 'https://linkedin.com/in/shiyam-sundar-g-41a808274',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-6 md:px-16 min-h-screen flex items-center">
      {/* Animated wave background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.1)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
            </linearGradient>
          </defs>
          {[0, 1, 2].map((i) => (
            <motion.path
              key={i}
              d={`M 0 ${300 + i * 50} Q 400 ${250 + i * 50} 800 ${300 + i * 50} T 1600 ${300 + i * 50} V 800 H 0 Z`}
              fill="url(#waveGradient)"
              initial={{ opacity: 0.1 }}
              animate={{
                d: [
                  `M 0 ${300 + i * 50} Q 400 ${250 + i * 50} 800 ${300 + i * 50} T 1600 ${300 + i * 50} V 800 H 0 Z`,
                  `M 0 ${300 + i * 50} Q 400 ${350 + i * 50} 800 ${300 + i * 50} T 1600 ${300 + i * 50} V 800 H 0 Z`,
                  `M 0 ${300 + i * 50} Q 400 ${250 + i * 50} 800 ${300 + i * 50} T 1600 ${300 + i * 50} V 800 H 0 Z`,
                ],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>

        {/* Circuit pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px),
            linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 1, type: 'spring' }}
          className="relative p-8 md:p-12 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0"
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="relative space-y-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index }}
                className="flex items-center gap-6 p-6 bg-slate-900/50 backdrop-blur-xl border border-cyan-400/20 rounded-2xl hover:border-cyan-400/50 hover:bg-slate-900/70 transition-all group"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <motion.div
                  className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <contact.icon className="w-6 h-6 text-cyan-400" />
                </motion.div>

                <div className="flex-1">
                  <p className="text-blue-300 mb-1">{contact.label}</p>
                  <p className="text-blue-100 group-hover:text-cyan-400 transition-colors">
                    {contact.value}
                  </p>
                </div>

                <motion.div
                  className="text-cyan-400"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
            ))}
          </div>

          {/* Collaboration button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <motion.button
              onClick={() => navigateTo('contact-page')}
              className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="relative z-10">Let's Collaborate</span>
            </motion.button>
          </motion.div>

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-400/50" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-400/50" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyan-400/50" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-cyan-400/50" />
        </motion.div>
      </div>
    </section>
  );
}
