'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Globe, MapPin, Trophy, Award } from 'lucide-react'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/lib/animations'
import Image from 'next/image'
import MovingGradient from './MovingGradient'

export default function About() {
  const skillTags = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank')
  }

  // Highlight text helper
  const HighlightText = ({ text, highlight }: { text: string; highlight: string[] }) => {
    const parts = text.split(new RegExp(`(${highlight.join('|')})`, 'gi'))
    return (
      <>
        {parts.map((part, i) => 
          highlight.includes(part) ? (
            <span key={i} className="text-green-400 font-semibold">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    )
  }

  return (
    <section
      id="about"
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
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-6 flex items-center gap-2 px-4 py-2 rounded-full border-2 border-purple-500 text-purple-500 font-medium hover:bg-purple-500 hover:text-white transition-all"
        >
          <span>Get To Know Me</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 dark:text-purple-400 mb-2 sm:mb-3">
            About Me
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-3 sm:mb-4"></div>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 px-4">
            Crafting digital experiences with passion, precision, and purpose.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
        >
          {/* Main Content */}
          <motion.div variants={slideInLeft} className="lg:col-span-2">
            <div className="bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-white/20 space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                Hello, I&apos;m <span className="font-bold text-white">Aarav Desai</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                A passionate <span className="text-green-400 font-semibold">Front-End Developer</span> and{' '}
                <span className="text-green-400 font-semibold">Creative Designer</span> with{' '}
                <span className="text-green-400 font-semibold">5+ years</span> of experience crafting digital
                experiences that users love.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in building scalable web and mobile applications using React, Next.js, TypeScript,
                and modern development technologies. I thrive on turning complex problems into elegant solutions
                that users love.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond work, I love exploring emerging technologies, contributing to open-source projects, and
                mentoring aspiring developers. I believe in continuous learning and staying at the forefront of
                technological innovation.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
                {skillTags.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-gray-900 dark:text-white text-xs sm:text-sm font-medium hover:border-neon-purple/50 transition-colors touch-manipulation active:scale-95"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={slideInRight} className="space-y-6">
                {/* Let's Connect */}
                <div className="bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 rounded-full bg-purple-500/20">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Let&apos;s Connect</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                      <span className="break-all">contact@aaravdesai.com</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                      <span>aaravdesai.dev</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                      <span>Mumbai, India</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 rounded-full bg-yellow-500/20">
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Achievements</h3>
                  </div>
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-300">50+ Projects Completed</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-300">5+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-300">20+ Happy Clients</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={downloadResume}
                  className="w-full px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3 rounded-xl sm:rounded-2xl border-2 border-neon-blue text-white font-semibold text-sm sm:text-base hover:bg-gradient-to-r hover:from-neon-blue hover:to-neon-purple transition-all duration-300 flex items-center justify-center gap-2 touch-manipulation active:scale-95"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Download Resume</span>
                  <span className="sm:hidden">Resume</span>
                </motion.button>
          </motion.div>
        </motion.div>

        {/* Glowing Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"
        />
      </div>
    </section>
  )
}

