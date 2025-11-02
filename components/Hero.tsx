'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Circle } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { scrollToSection } from '@/utils/helpers'
import Particles from './Particles'
import SocialLinks from './SocialLinks'
import Typewriter from './Typewriter'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-base dark:via-dark-base dark:to-dark-gray pt-16 sm:pt-18 md:pt-20"
    >
      <Particles />
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-12rem)] py-8 sm:py-12 md:py-14 lg:py-16 w-full pb-16 sm:pb-20 md:pb-24"
        >
          {/* Name */}
          <motion.div variants={fadeInUp} className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 w-full flex justify-center">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Aarav Desai
            </motion.h1>
          </motion.div>

          {/* Title Badge with Typewriter */}
          <motion.div
            variants={fadeInUp}
            className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 w-full flex justify-center"
          >
            <motion.div
              className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl shadow-lg min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Typewriter
                words={['Front-End Developer', 'UI/UX Designer', 'React Specialist', 'Creative Coder']}
                className="text-white font-semibold"
              />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-gray-200 dark:text-gray-300 mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-3xl mx-auto px-4 leading-relaxed text-center"
          >
            Crafting exceptional digital experiences with clean code and thoughtful design
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 w-full flex justify-center"
          >
            <SocialLinks variant="horizontal" />
          </motion.div>

          {/* Availability Status */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-1.5 sm:gap-2 w-full mt-2"
          >
            <motion.button
              className="flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-medium text-xs sm:text-sm md:text-sm lg:text-base shadow-lg hover:shadow-green-500/50 transition-all duration-300 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Circle className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-white" />
              </motion.div>
              <span>Available for projects</span>
            </motion.button>
            
            {/* Scroll for more */}
            <motion.button
              onClick={() => scrollToSection('#about')}
              className="flex flex-col items-center justify-center gap-0.5 text-gray-300 dark:text-gray-400 hover:text-neon-blue transition-colors group mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 6, 0] }}
              transition={{ delay: 0.8, duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-xs sm:text-xs md:text-sm font-medium">Scroll for more</span>
              <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

