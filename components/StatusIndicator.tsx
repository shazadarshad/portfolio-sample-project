'use client'

import { motion } from 'framer-motion'
import { Circle } from 'lucide-react'

interface StatusIndicatorProps {
  status: string
  subtitle?: string
}

export default function StatusIndicator({ status, subtitle }: StatusIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="flex flex-col items-center gap-2 mt-12"
    >
      <motion.button
        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-medium shadow-lg hover:shadow-green-500/50 transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
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
          <Circle className="w-2 h-2 fill-white" />
        </motion.div>
        <span>{status}</span>
      </motion.button>
      {subtitle && (
        <p className="text-sm text-gray-400 dark:text-gray-500 animate-pulse">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

