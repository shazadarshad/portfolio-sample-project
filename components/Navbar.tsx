'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { scrollToSection } from '@/utils/helpers'

const navLinks = [
  { name: 'Overview', href: '#home' },
  { name: 'Stack', href: '#skills' },
  { name: 'Experience', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2 sm:py-2.5 md:py-3 lg:py-4 bg-white/10 dark:bg-dark-base/80 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'py-3 sm:py-4 md:py-5 lg:py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center touch-manipulation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-lg lg:text-xl shadow-lg">
              AD
            </div>
          </motion.a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white dark:text-white hover:text-purple-400 dark:hover:text-purple-400 transition-colors font-medium text-sm lg:text-base xl:text-lg relative touch-manipulation"
                whileHover={{ y: -1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-lg bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md touch-manipulation active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-white" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-white" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-2 bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white dark:text-white hover:text-purple-400 dark:hover:text-purple-400 transition-colors font-medium py-2.5 sm:py-3 px-2 rounded-lg hover:bg-white/5 touch-manipulation active:scale-95 transition-transform"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
