"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronRight, Github, Home, Linkedin, Mail, Menu, Sparkles, UserRound, BriefcaseBusiness, X } from 'lucide-react'

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'About', icon: UserRound, href: '#about' },
  { name: 'Services', icon: Sparkles, href: '#services' },
  { name: 'Portfolio', icon: BriefcaseBusiness, href: '#portfolio' },
  { name: 'Contact', icon: Mail, href: '#contact' },
]

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/brian-kingara' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/kingaranjoroge' },
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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => scrollToSection('#home')}
            className="group flex items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <span className="grid size-11 place-items-center rounded-2xl border border-primary/30 bg-linear-to-br from-primary to-primary/70 text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:-translate-y-0.5">
              BN
            </span>
            <span className="hidden sm:block">
              <span className="block text-base font-semibold text-foreground">Brian Njoroge</span>
              <span className="block text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Full-stack web developer
              </span>
            </span>
          </button>

          <div className="hidden lg:flex items-center rounded-full border border-border/70 bg-background/80 p-1 shadow-sm shadow-black/5">
            {navItems.map((item) => {
              const active = activeSection === item.href.slice(1)
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all ${
                    active
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <item.icon className="size-4" />
                  <span>{item.name}</span>
                </button>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Badge variant="outline" className="hidden xl:inline-flex rounded-full border-border/70 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Available for select projects
            </Badge>
            <Button asChild size="lg" className="rounded-full px-5 shadow-lg shadow-black/10">
              <a href="#contact">
                Start a project
                <ChevronRight className="size-4" />
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden grid size-11 place-items-center rounded-full border border-border/70 bg-background/80 text-foreground shadow-sm"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 top-20 z-40 bg-foreground/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="lg:hidden fixed top-20 left-0 right-0 z-50 border-b border-border/70 bg-background/95 shadow-2xl shadow-black/10 backdrop-blur-2xl"
            >
              <div className="mx-auto max-h-[calc(100vh-5rem)] max-w-7xl overflow-y-auto px-4 py-6 sm:px-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-4 text-left transition-colors ${
                      activeSection === item.href.slice(1)
                        ? 'bg-foreground text-background'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <item.icon className="size-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}

                <div className="mt-6 rounded-3xl border border-border/70 bg-muted/60 p-4">
                  <p className="text-sm font-medium text-foreground">Connect</p>
                  <div className="mt-4 flex items-center gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={link.name}
                      >
                        <link.icon className="size-4" />
                        {link.name}
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
