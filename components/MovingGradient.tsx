'use client'

import { motion } from 'framer-motion'

export default function MovingGradient({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`absolute inset-0 -z-10 ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        background: 'linear-gradient(to right, rgba(0, 255, 255, 0.1) 0%, rgba(154, 77, 255, 0.1) 50%, rgba(0, 255, 255, 0.1) 100%)',
        backgroundSize: '200% 200%',
      }}
    />
  )
}

