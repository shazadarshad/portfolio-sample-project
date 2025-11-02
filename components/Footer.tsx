'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react'
import { socialLinks } from '@/utils/constants'
import MovingGradient from './MovingGradient'
import { scrollToSection } from '@/utils/helpers'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
  }

  return (
    <footer className="relative py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-base dark:via-dark-base dark:to-dark-gray border-t border-gray-200 dark:border-dark-base overflow-hidden">
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
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 md:mb-4">Aarav Desai</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Front-end developer crafting beautiful, performant, and accessible web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-600 dark:text-gray-300 hover:text-neon-blue dark:hover:text-neon-purple transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {[
                { name: 'GitHub', icon: Github, url: socialLinks.github },
                { name: 'LinkedIn', icon: Linkedin, url: socialLinks.linkedin },
                { name: 'Twitter', icon: Twitter, url: socialLinks.twitter },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass dark:glass-dark border border-white/20 hover:border-neon-blue/50 transition-all group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-neon-blue transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-dark-base text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} Aarav Desai. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 sm:p-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg hover:shadow-neon-blue/50 transition-all z-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      )}
    </footer>
  )
}

