"use client"

import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 w-full max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
          Brian Njoroge
        </h1>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">
          Full Stack Web Developer
        </h3>
        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-xs sm:text-sm md:text-lg font-medium text-slate-700 dark:text-slate-300">
            Front End Developer (React.js, Next.js, TailwindCSS)
          </h3>
          <h3 className="text-xs sm:text-sm md:text-lg font-medium text-slate-700 dark:text-slate-300">
            Back End Developer (Node.js, Express.js, Nest.js)
          </h3>
          <h3 className="text-xs sm:text-sm md:text-lg font-medium text-slate-700 dark:text-slate-300">
            Database (MongoDB, PostgreSQL)
          </h3>
        </div>
      </motion.div>
    </section>
  )
}
