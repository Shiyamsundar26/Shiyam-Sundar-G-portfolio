import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Zap, Bot, X } from 'lucide-react';

interface Page4ProjectsProps {
  navigateToPage: (page: number) => void;
}

export default function Page4Projects({ navigateToPage }: Page4ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Smart Tiles',
      date: 'April 2023',
      description: 'Energy generation from footsteps using Piezoelectric Sensor technology',
      role: 'Team Leader – Presentation & Sensor Integration',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
      details: [
        'Converts mechanical pressure into electrical energy',
        'Sustainable solution for high-traffic areas',
        'Integrated power management circuits',
        'Real-time energy monitoring system',
      ],
    },
    {
      id: 2,
      title: 'Human Following Robot',
      date: 'March 2025',
      description: 'Intelligent robot designed to assist individuals by following and carrying objects',
      role: 'Team Leader – Presentation & Coding',
      icon: Bot,
      color: 'from-violet-500 to-purple-500',
      details: [
        'Advanced sensor-based tracking system',
        'AI-driven path planning algorithms',
        'Obstacle detection and avoidance',
        'Designed for accessibility assistance',
      ],
    },
  ];

  return (
    <div className="relative min-h-screen px-6 py-20 overflow-hidden">
      {/* Bright gallery with soft shadows */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-violet-50" />

      {/* Soft spotlights */}
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="absolute top-0 w-96 h-96 bg-gradient-to-b from-cyan-200/20 to-transparent rounded-full blur-3xl"
          style={{
            left: `${20 + index * 50}%`,
            transform: 'translateX(-50%)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            delay: index * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 bg-gradient-to-r from-cyan-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Project Showcase
        </motion.h2>

        {/* 3D Floating Project Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, rotateX: -30, z: -200 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 1, type: 'spring' }}
              className="relative cursor-pointer"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <motion.div
                className="relative p-8 bg-white/80 backdrop-blur-xl border border-cyan-300/40 rounded-3xl overflow-hidden shadow-xl"
                whileHover={{
                  y: -20,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: '0 30px 60px rgba(6,182,212,0.3)',
                  borderColor: 'rgba(6,182,212,0.6)',
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
                {/* Project-specific animations */}
                {project.id === 1 && <SmartTilesAnimation />}
                {project.id === 2 && <RobotAnimation />}

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`inline-block p-4 bg-gradient-to-br ${project.color} rounded-2xl shadow-lg`}>
                      <project.icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="mb-2 text-cyan-700">{project.title}</h3>
                  <p className="text-violet-600 mb-4">{project.date}</p>
                  <p className="text-slate-700 mb-6">{project.description}</p>
                  <p className="text-cyan-600 font-medium">{project.role}</p>

                  <motion.div
                    className="mt-6 text-cyan-600"
                    animate={{
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    Click to explore →
                  </motion.div>
                </div>

                {/* Glowing border animation */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: `conic-gradient(from ${index * 180}deg, transparent, rgba(6, 182, 212, 0.4), transparent)`,
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
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Navigate to Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <motion.button
            onClick={() => navigateToPage(5)}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Certifications & Contact →
          </motion.button>
        </motion.div>
      </div>

      {/* Immersive 3D Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-white/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0, rotateY: -180, z: -500 }}
              animate={{ scale: 1, rotateY: 0, z: 0 }}
              exit={{ scale: 0, rotateY: 180, z: -500 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative max-w-4xl w-full p-10 bg-white/95 backdrop-blur-xl border-2 border-cyan-400/50 rounded-3xl shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={(e) => e.stopPropagation()}
            >
              {projects
                .filter((p) => p.id === selectedProject)
                .map((project) => (
                  <div key={project.id} className="space-y-6">
                    {/* Close button */}
                    <motion.button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 p-3 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-colors"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-6 h-6 text-red-600" />
                    </motion.button>

                    {/* Header */}
                    <div className="flex items-center gap-6">
                      <motion.div
                        className={`p-6 bg-gradient-to-br ${project.color} rounded-2xl shadow-lg`}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <project.icon className="w-12 h-12 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-cyan-700 mb-2">{project.title}</h3>
                        <p className="text-violet-600">{project.date}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 text-lg">{project.description}</p>

                    {/* Details */}
                    <div className="space-y-4">
                      <h4 className="text-cyan-700 font-semibold">Key Features:</h4>
                      {project.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-cyan-50 backdrop-blur-xl border border-cyan-300/40 rounded-xl shadow-sm"
                        >
                          <motion.div
                            className="mt-1 w-2 h-2 bg-cyan-500 rounded-full shadow-sm"
                            animate={{
                              scale: [1, 1.5, 1],
                              boxShadow: [
                                '0 0 5px rgba(6,182,212,0.5)',
                                '0 0 10px rgba(6,182,212,1)',
                                '0 0 5px rgba(6,182,212,0.5)',
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                          <p className="text-slate-700">{detail}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Role */}
                    <div className="pt-6 border-t border-cyan-300/40">
                      <p className="text-cyan-600 font-medium">{project.role}</p>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Smart Tiles Animation Component
function SmartTilesAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {/* Footstep tiles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1, 0.8],
            y: [-20 * i, -20 * i - 50, -20 * i],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <div className="w-16 h-20 bg-cyan-500 rounded-lg shadow-lg">
            {/* Energy sparks */}
            {[0, 1, 2, 3].map((j) => (
              <motion.div
                key={j}
                className="absolute w-1 h-1 bg-yellow-500 rounded-full shadow-sm"
                style={{
                  left: `${25 * j}%`,
                  top: '50%',
                }}
                animate={{
                  y: [-20, -40],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 0.5,
                  delay: j * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Robot Animation Component
function RobotAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {/* Human silhouette */}
      <motion.div
        className="absolute top-1/2 left-1/4 transform -translate-y-1/2"
        animate={{
          x: [0, 50, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-8 h-20 bg-blue-500 rounded-full opacity-50 shadow-lg" />
      </motion.div>

      {/* Robot */}
      <motion.div
        className="absolute top-1/2 left-1/4 transform -translate-y-1/2"
        animate={{
          x: [0, 50, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
      >
        <div className="relative ml-12">
          {/* Robot body */}
          <div className="w-12 h-16 bg-violet-500 rounded-lg shadow-lg">
            {/* LED eyes */}
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className="absolute top-4 w-2 h-2 bg-cyan-400 rounded-full shadow-sm"
                style={{
                  left: i === 0 ? '20%' : '60%',
                }}
                animate={{
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
