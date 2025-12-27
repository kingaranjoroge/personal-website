"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Buntu - Social Networking Platform',
    description: 'A social networking platform built with the MERN stack. Features include user authentication, real-time messaging, post creation, likes, comments, and profile management.',
    url: 'https://buntu-network.vercel.app/',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io']
  },
  {
    title: 'FetchFast - Online Restaurant Ordering & Management System',
    description: 'A comprehensive restaurant management system featuring online ordering, menu management, order tracking, and payment integration. Built with React, Node.js, and MongoDB.',
    url: 'https://fetchfast.vercel.app/',
    tags: ['React', 'Node.js', 'MongoDB', 'Payment Integration', 'Real-time']
  },
  {
    title: 'InternConnect - Internships Search Platform',
    description: 'A platform connecting students with internship opportunities. Features include job posting, application tracking, and profile management. Built using React and Express.js.',
    url: 'https://internkonnekt.netlify.app/',
    tags: ['React', 'Express.js', 'MongoDB', 'Authentication', 'REST API']
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen w-full py-20 px-4 sm:px-6 md:px-8 bg-white dark:bg-slate-900">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">Portfolio</h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Button asChild className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
