'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'
import { testimonials } from '@/utils/constants'
import { fadeInUp } from '@/lib/animations'
import MovingGradient from './MovingGradient'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-12 sm:py-14 md:py-16 lg:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-base dark:via-dark-base dark:to-dark-gray overflow-hidden">
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
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 dark:text-purple-400 mb-2 sm:mb-3">
            Testimonials
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-3 sm:mb-4"></div>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
                  className="bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-lg border border-white/20 hover:border-purple-500/50 transition-all"
            >
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-neon-blue mb-3 sm:mb-4 md:mb-6" />
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-200 mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed italic">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-neon-blue/50 flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-neon-blue dark:text-neon-purple">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 p-2 sm:p-3 rounded-full bg-white dark:bg-dark-base shadow-lg border border-white/20 hover:bg-gray-100 dark:hover:bg-dark-gray transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 p-2 sm:p-3 rounded-full bg-white dark:bg-dark-base shadow-lg border border-white/20 hover:bg-gray-100 dark:hover:bg-dark-gray transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-neon-blue w-8'
                    : 'bg-gray-300 dark:bg-dark-base'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

