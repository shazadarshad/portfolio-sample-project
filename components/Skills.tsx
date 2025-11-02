'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { skills } from '@/utils/constants'
import MovingGradient from './MovingGradient'
import {
  Code,
  Palette,
  Zap,
  Database,
  Smartphone,
  Globe,
  Layers,
  GitBranch,
  FileCode,
  Settings,
} from 'lucide-react'

// Map skill icons to their corresponding Lucide icons
const iconMap: Record<string, React.ElementType> = {
  html: Code,
  css: Palette,
  javascript: Code,
  typescript: FileCode,
  react: Zap,
  nextjs: Globe,
  tailwind: Palette,
  motion: Zap,
  nodejs: Database,
  git: GitBranch,
}

const getSkillLevelPercentage = (level: string): number => {
  switch (level) {
    case 'Expert':
      return 90
    case 'Advanced':
      return 75
    default:
      return 60
  }
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-12 sm:py-14 md:py-16 lg:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-base dark:via-dark-base dark:to-dark-gray overflow-hidden"
    >
      <MovingGradient />
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-blue/10"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 dark:text-purple-400 mb-2 sm:mb-3">
            My Skills
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-3 sm:mb-4"></div>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code
            return (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="group relative p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white/10 dark:bg-dark-gray/30 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/30 dark:hover:shadow-purple-500/20 hover:scale-105 touch-manipulation active:scale-95"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glassmorphism glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 relative z-10">
                  <div className="relative">
                    <div className="p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 group-hover:border-purple-400/50 transition-all">
                      <Icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-purple-400 dark:text-purple-300 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-purple-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg truncate">
                      {skill.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-400 dark:text-purple-300 font-semibold bg-purple-500/10 dark:bg-purple-500/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full inline-block">
                      {skill.level}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 sm:mt-5 md:mt-6 h-1.5 sm:h-2 bg-gray-200/50 dark:bg-dark-base/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${getSkillLevelPercentage(skill.level)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

