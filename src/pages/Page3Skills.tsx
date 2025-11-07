import { motion } from 'motion/react';
import { useState } from 'react';
import { Code, Database, Palette, Users, Heart, Zap, Clock, Keyboard } from 'lucide-react';

interface Page3SkillsProps {
  navigateToPage: (page: number) => void;
}

export default function Page3Skills({ navigateToPage }: Page3SkillsProps) {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  const technicalSkills = [
    { name: 'Java', icon: Code, detail: 'Object-oriented programming and system development' },
    { name: 'MySQL', icon: Database, detail: 'Database design and management' },
    { name: 'Eclipse IDE', icon: Code, detail: 'Professional development environment' },
    { name: 'Figma', icon: Palette, detail: 'UI/UX design and prototyping' },
    { name: 'Adobe XD', icon: Palette, detail: 'Digital design and user experience' },
    { name: 'Canva', icon: Palette, detail: 'Graphic design and visual content' },
    { name: 'Windows', icon: Code, detail: 'Platform development and system tools' },
  ];

  const nonTechnicalSkills = [
    { name: 'Teamwork', icon: Users, detail: 'Collaborative project leadership' },
    { name: 'Emotional Intelligence', icon: Heart, detail: 'Understanding and empathy' },
    { name: 'Adaptability', icon: Zap, detail: 'Quick learning and flexibility' },
    { name: 'Creativity', icon: Palette, detail: 'Innovative problem solving' },
    { name: 'Time Management', icon: Clock, detail: 'Efficient task prioritization' },
    { name: 'Typewriting', icon: Keyboard, detail: 'English and Tamil proficiency' },
  ];

  return (
    <div className="relative min-h-screen px-6 py-20 overflow-hidden">
      {/* Camera pan effect background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(125,211,252,0.2),transparent_70%)]"
        animate={{
          x: [-100, 100, -100],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 bg-gradient-to-r from-cyan-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        {/* 3D Skill Grid */}
        <div className="space-y-16">
          {/* Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-cyan-700 mb-8 flex items-center gap-3"
            >
              <Code className="w-6 h-6" />
              Technical Skills
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
              style={{ perspective: 1000 }}
            >
              {technicalSkills.map((skill, index) => (
                <SkillCube
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isSelected={selectedSkill === index}
                  onSelect={() => setSelectedSkill(selectedSkill === index ? null : index)}
                  color="cyan"
                />
              ))}
            </motion.div>
          </div>

          {/* Non-Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-violet-700 mb-8 flex items-center gap-3"
            >
              <Users className="w-6 h-6" />
              Non-Technical Skills
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
              style={{ perspective: 1000 }}
            >
              {nonTechnicalSkills.map((skill, index) => (
                <SkillCube
                  key={skill.name}
                  skill={skill}
                  index={index + technicalSkills.length}
                  isSelected={selectedSkill === index + technicalSkills.length}
                  onSelect={() =>
                    setSelectedSkill(
                      selectedSkill === index + technicalSkills.length
                        ? null
                        : index + technicalSkills.length
                    )
                  }
                  color="violet"
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Ambient glow trail */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-200/30 to-violet-200/30 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: ['-50%', '0%', '-50%'],
            y: ['-50%', '-40%', '-50%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Navigate to Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <motion.button
            onClick={() => navigateToPage(4)}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

// Skill Cube Component
interface SkillCubeProps {
  skill: { name: string; icon: any; detail: string };
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  color: 'cyan' | 'violet';
}

function SkillCube({ skill, index, isSelected, onSelect, color }: SkillCubeProps) {
  const Icon = skill.icon;
  const colorClasses = {
    cyan: {
      bg: 'from-cyan-400/40 to-blue-400/40',
      bgHover: 'from-cyan-400/60 to-blue-400/60',
      border: 'border-cyan-400/40',
      text: 'text-cyan-700',
      icon: 'text-cyan-600',
      glow: '0 8px 32px rgba(6,182,212,0.4)',
    },
    violet: {
      bg: 'from-violet-400/40 to-purple-400/40',
      bgHover: 'from-violet-400/60 to-purple-400/60',
      border: 'border-violet-400/40',
      text: 'text-violet-700',
      icon: 'text-violet-600',
      glow: '0 8px 32px rgba(139,92,246,0.4)',
    },
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -30 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.05, type: 'spring' }}
      className="relative cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
      onClick={onSelect}
    >
      <motion.div
        className={`relative p-6 bg-gradient-to-br ${isSelected ? colors.bgHover : colors.bg} backdrop-blur-xl border ${colors.border} rounded-2xl h-full shadow-xl bg-white/50`}
        animate={
          isSelected
            ? {
                rotateY: 180,
                scale: 1.1,
                boxShadow: colors.glow,
              }
            : {
                rotateY: 0,
                scale: 1,
              }
        }
        whileHover={
          !isSelected
            ? {
                y: -10,
                rotateX: 10,
                rotateY: 5,
                boxShadow: colors.glow,
              }
            : {}
        }
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Front face */}
        <motion.div
          className="flex flex-col items-center gap-3"
          style={{
            backfaceVisibility: 'hidden',
            opacity: isSelected ? 0 : 1,
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Icon className={`w-8 h-8 ${colors.icon}`} />
          </motion.div>
          <p className={`text-center ${colors.text} font-medium`}>{skill.name}</p>
        </motion.div>

        {/* Back face (detail) */}
        <motion.div
          className="absolute inset-0 p-6 flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            opacity: isSelected ? 1 : 0,
          }}
        >
          <p className={`text-center ${colors.text}`}>{skill.detail}</p>
        </motion.div>

        {/* Glowing particles around cube */}
        {!isSelected &&
          [0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${colors.icon.replace('text', 'bg')} rounded-full shadow-sm`}
              style={{
                left: `${25 + i * 15}%`,
                top: `${10 + (i % 2) * 80}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
      </motion.div>
    </motion.div>
  );
}
