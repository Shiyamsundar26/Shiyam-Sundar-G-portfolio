import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { X, Zap, Bot } from 'lucide-react';

interface ProjectsProps {
  navigateTo: (page: string) => void;
}

export default function Projects({ navigateTo }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Smart Tiles',
      date: 'April 2023',
      description:
        'A system that generates electricity from footsteps using a Piezoelectric Sensor.',
      role: 'Team Leader — handled presentation and sensor integration',
      icon: Zap,
      gradient: 'from-cyan-500 to-blue-500',
      details: [
        'Converts mechanical pressure into electrical energy',
        'Ideal for high-traffic areas like malls and stations',
        'Sustainable energy solution using piezoelectric technology',
        'Integrated power management circuits for optimal efficiency',
      ],
    },
    {
      id: 2,
      title: 'Human Following Robot',
      date: 'March 2025',
      description:
        'A robot designed to help both normal and disabled individuals by following and carrying objects.',
      role: 'Team Leader — handled presentation and coding',
      icon: Bot,
      gradient: 'from-blue-500 to-purple-500',
      details: [
        'Advanced sensors for real-time human tracking',
        'AI algorithms for intelligent path planning',
        'Obstacle detection and avoidance system',
        'Designed to assist individuals with mobility challenges',
      ],
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2, type: 'spring' }}
              className="relative group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => setSelectedProject(project.id)}
            >
              <motion.div
                className={`relative p-8 bg-gradient-to-br ${project.gradient} bg-opacity-10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl overflow-hidden h-full`}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 20px 60px rgba(6, 182, 212, 0.4)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}
                />

                {/* 3D Icon */}
                <motion.div
                  className="mb-6"
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className={`inline-block p-4 bg-gradient-to-br ${project.gradient} rounded-2xl`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <h3 className="mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-blue-300 mb-4">{project.date}</p>
                <p className="text-blue-100 mb-4">{project.description}</p>
                <p className="text-cyan-300">{project.role}</p>

                {/* Click indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 text-cyan-400/50"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  Click to expand →
                </motion.div>

                {/* Glowing border animation */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    border: '2px solid transparent',
                    borderImage: `linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.5), transparent) 1`,
                  }}
                  animate={{
                    borderImageSource: [
                      'linear-gradient(0deg, transparent, rgba(6, 182, 212, 0.5), transparent)',
                      'linear-gradient(360deg, transparent, rgba(6, 182, 212, 0.5), transparent)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            onClick={() => navigateTo('projects-detail')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* 3D Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0, rotateY: 180 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative max-w-2xl w-full p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-red-400" />
            </button>

            {projects
              .filter((p) => p.id === selectedProject)
              .map((project) => (
                <div key={project.id} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 bg-gradient-to-br ${project.gradient} rounded-2xl`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-cyan-400">{project.title}</h3>
                      <p className="text-blue-300">{project.date}</p>
                    </div>
                  </div>

                  <p className="text-blue-100">{project.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-cyan-400">Key Features:</h4>
                    {project.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-2 w-2 h-2 bg-cyan-400 rounded-full" />
                        <p className="text-blue-100">{detail}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-cyan-400/20">
                    <p className="text-cyan-300">{project.role}</p>
                  </div>
                </div>
              ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
