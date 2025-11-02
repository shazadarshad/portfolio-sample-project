'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react'
import { socialLinks } from '@/utils/constants'

interface SocialLink {
  name: string
  icon: React.ElementType
  url: string
  color: string
}

const socials: SocialLink[] = [
  {
    name: 'GitHub',
    icon: Github,
    url: socialLinks.github,
    color: 'hover:bg-gray-800 dark:hover:bg-gray-700',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: socialLinks.linkedin,
    color: 'hover:bg-blue-600',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: socialLinks.twitter,
    color: 'hover:bg-sky-500',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:contact@aaravdesai.com',
    color: 'hover:bg-orange-600',
  },
]

export default function SocialLinks({ variant = 'horizontal' }: { variant?: 'horizontal' | 'vertical' }) {
  return (
    <div className={`flex flex-wrap ${variant === 'horizontal' ? 'flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center' : 'flex-col gap-3 items-center'} w-full`}>
      {socials.map((social, index) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-lg sm:rounded-xl bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md border border-white/20 ${social.color} text-white transition-all duration-300 group touch-manipulation`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
          >
            <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">{social.name}</span>
          </motion.a>
        )
      })}
    </div>
  )
}

