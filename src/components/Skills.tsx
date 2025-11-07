import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Users } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const technicalSkills = [
    'Java',
    'MySQL',
    'Eclipse IDE',
    'Figma',
    'Adobe XD',
    'Canva',
    'Windows platform',
  ];

  const nonTechnicalSkills = [
    'Teamwork',
    'Emotional Intelligence',
    'Adaptability',
    'Creativity',
    'Time Management',
    'Typewriting (English & Tamil)',
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
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, type: 'spring' }}
            className="relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl h-full"
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="p-3 bg-cyan-500/20 rounded-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Code2 className="w-8 h-8 text-cyan-400" />
                </motion.div>
                <h3 className="text-cyan-400">Technical Skills</h3>
              </div>

              <div className="space-y-3">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * index }}
                    className="group relative"
                  >
                    <motion.div
                      className="p-4 bg-slate-900/50 border border-cyan-400/20 rounded-xl"
                      whileHover={{
                        x: 10,
                        borderColor: 'rgba(6, 182, 212, 0.5)',
                        backgroundColor: 'rgba(6, 182, 212, 0.1)',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-blue-100">{skill}</span>
                        <motion.div
                          className="w-2 h-2 bg-cyan-400 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Non-Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
            className="relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-400/30 rounded-3xl h-full"
              whileHover={{
                scale: 1.02,
                rotateY: -5,
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="p-3 bg-blue-500/20 rounded-2xl"
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Users className="w-8 h-8 text-blue-400" />
                </motion.div>
                <h3 className="text-blue-400">Non-Technical Skills</h3>
              </div>

              <div className="space-y-3">
                {nonTechnicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * index }}
                    className="group relative"
                  >
                    <motion.div
                      className="p-4 bg-slate-900/50 border border-blue-400/20 rounded-xl"
                      whileHover={{
                        x: -10,
                        borderColor: 'rgba(59, 130, 246, 0.5)',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-blue-100">{skill}</span>
                        <motion.div
                          className="w-2 h-2 bg-blue-400 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
