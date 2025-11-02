'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { socialLinks } from '@/utils/constants'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import toast, { Toaster } from 'react-hot-toast'
import MovingGradient from './MovingGradient'
import { isValidEmail } from '@/utils/helpers'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name')
      return false
    }
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      toast.error('Please enter a valid email address')
      return false
    }
    if (!formData.message.trim()) {
      toast.error('Please enter a message')
      return false
    }
    return true
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // TODO: Replace with actual API endpoint
    setTimeout(() => {
      toast.success('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section
      id="contact"
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
      <Toaster position="top-right" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 dark:text-purple-400 mb-2 sm:mb-3">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-3 sm:mb-4"></div>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Have a project in mind? Let&apos;s work together to bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
                part of your visions. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:contact@aaravdesai.com`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md border border-white/20 hover:border-purple-500/50 transition-all group"
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all">
                  <Mail className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium break-all">
                    contact@aaravdesai.com
                  </p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                Follow Me
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
                    className="p-4 rounded-full bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md border border-white/20 hover:border-purple-500/50 transition-all group hover:shadow-lg hover:shadow-purple-500/20"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-neon-blue transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-4 md:py-3 rounded-xl sm:rounded-2xl bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md border border-white/20 dark:border-dark-base focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-sm sm:text-base text-gray-900 dark:text-white touch-manipulation"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-4 md:py-3 rounded-xl sm:rounded-2xl bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md border border-white/20 dark:border-dark-base focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-sm sm:text-base text-gray-900 dark:text-white touch-manipulation"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-4 md:py-3 rounded-xl sm:rounded-2xl bg-white/10 dark:bg-dark-gray/50 backdrop-blur-md border border-white/20 dark:border-dark-base focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none text-sm sm:text-base text-gray-900 dark:text-white touch-manipulation"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95"
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    <span className="text-xs sm:text-sm md:text-base">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm md:text-base">Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

