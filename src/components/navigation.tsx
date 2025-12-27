"use client"

import { useState, useEffect } from 'react'
import { FaHome, FaUser, FaBriefcase, FaServicestack, FaAddressBook, FaTimes, FaBars, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', icon: FaHome, href: '#home' },
  { name: 'About', icon: FaUser, href: '#about' },
  { name: 'Services', icon: FaServicestack, href: '#services' },
  { name: 'Portfolio', icon: FaBriefcase, href: '#portfolio' },
  { name: 'Contact', icon: FaAddressBook, href: '#contact' },
]

const socialLinks = [
  { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/BrianKingara2' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/k_.ingb/' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/brian-king-ara-3bb150277/' },
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/kingaranjoroge' },
  { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://web.whatsapp.com/#' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Name */}
            <div className="flex-shrink-0">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Brian Njoroge
              </h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.href.slice(1)
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm lg:text-base">{item.name}</span>
                </button>
              ))}
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-40 top-16"
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-50 shadow-lg"
            >
              <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {/* Mobile Navigation Links */}
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors ${
                      activeSection === item.href.slice(1)
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}

                {/* Mobile Social Links */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex justify-center gap-6">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label={link.name}
                      >
                        <link.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
