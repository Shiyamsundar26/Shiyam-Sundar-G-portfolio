import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Award, Code, Shield } from 'lucide-react';

interface Page5ContactProps {
  navigateToPage: (page: number) => void;
}

export default function Page5Contact({ navigateToPage }: Page5ContactProps) {
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
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Cybersecurity Fundamentals',
      provider: 'NASSCOM',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shiyamsundarganesan@gmail.com',
      href: 'mailto:shiyamsundarganesan@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'shiyam-sundar-g-41a808274',
      href: 'https://linkedin.com/in/shiyam-sundar-g-41a808274',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '7502009579',
      href: 'tel:7502009579',
    },
  ];

  return (
    <div className="relative min-h-screen px-6 py-20 overflow-hidden">
      {/* Cinematic pull-back effect */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(125,211,252,0.2),transparent_50%)]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 bg-gradient-to-r from-cyan-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Certifications & Contact
        </motion.h2>

        {/* 3D Certification Cards */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-cyan-700 mb-12 text-center"
          >
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.2, duration: 1, type: 'spring' }}
                className="relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="relative p-8 bg-white/80 backdrop-blur-xl border border-cyan-300/40 rounded-3xl overflow-hidden h-full shadow-xl"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: '0 20px 60px rgba(6,182,212,0.3)',
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    },
                  }}
                >
                  {/* Badge icon */}
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
                    <div className={`p-6 bg-gradient-to-br ${cert.color} rounded-full shadow-xl`}>
                      <cert.icon className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h4 className="text-cyan-700 font-semibold">{cert.title}</h4>
                    <p className="text-violet-600">{cert.provider}</p>
                  </div>

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
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-500/60" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-500/60" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-500/60" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-500/60" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Glowing Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: 'spring' }}
          className="relative"
        >
          <motion.div
            className="p-10 bg-white/80 backdrop-blur-xl border-2 border-cyan-300/40 rounded-3xl overflow-hidden shadow-xl"
            animate={{
              boxShadow: [
                '0 8px 32px rgba(6,182,212,0.3)',
                '0 8px 48px rgba(6,182,212,0.5)',
                '0 8px 32px rgba(6,182,212,0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-200/20 via-violet-200/20 to-cyan-200/20"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <div className="relative space-y-6">
              <h3 className="text-center text-cyan-700 mb-8">Let's Connect</h3>

              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-white/60 backdrop-blur-xl border border-cyan-300/40 rounded-2xl hover:border-cyan-400/60 transition-all group shadow-lg"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <motion.div
                    className="p-4 bg-gradient-to-br from-cyan-400/30 to-violet-400/30 rounded-2xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <contact.icon className="w-6 h-6 text-cyan-600" />
                  </motion.div>

                  <div className="flex-1">
                    <p className="text-violet-600 mb-1">{contact.label}</p>
                    <p className="text-slate-700 group-hover:text-cyan-700 transition-colors font-medium">
                      {contact.value}
                    </p>
                  </div>

                  <motion.div
                    className="text-cyan-600"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-cyan-500 rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-violet-500 rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-violet-500 rounded-bl-2xl" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-cyan-500 rounded-br-2xl" />
          </motion.div>

          {/* Collaborate Button with 3D Ripple */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-center"
          >
            <motion.button
              onClick={() => window.location.href = 'mailto:shiyamsundarganesan@gmail.com?subject=Let\'s Collaborate&body=Hi Shiyam,%0D%0A%0D%0AI came across your portfolio and would love to discuss potential collaboration opportunities.%0D%0A%0D%0A'}
              className="relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-2xl overflow-hidden group shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Collaborate</span>

              {/* 3D Ripple effect */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-2xl border-2 border-cyan-300"
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0.8, 0.4, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.4,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={() => navigateToPage(1)}
            className="px-8 py-3 bg-white/70 backdrop-blur-xl border border-cyan-400/40 text-slate-700 rounded-2xl hover:bg-white/90 transition-all shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Home
          </motion.button>
        </motion.div>
      </div>

      {/* Camera pull-back effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 2, opacity: 0.1 }}
        transition={{ delay: 2, duration: 3 }}
      >
        <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-full" />
      </motion.div>
    </div>
  );
}
