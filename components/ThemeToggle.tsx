'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder during SSR to avoid hydration mismatch
    return (
      <div className="p-2 rounded-full bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md border border-white/20">
        <Sun className="w-5 h-5 text-gray-400" />
      </div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md border border-white/20 hover:border-neon-blue transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </motion.button>
  )
}

