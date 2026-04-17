"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Buntu - Social Networking Platform',
    description: 'A social networking platform built with the MERN stack, focused on clean interaction flows, realtime communication, and profile management.',
    url: 'https://buntu-network.vercel.app/',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    label: 'Community platform',
    role: 'Frontend and backend implementation',
  },
  {
    title: 'FetchFast - Online Restaurant Ordering & Management System',
    description: 'A restaurant ordering and operations system with menu management, order tracking, and payment-ready workflows.',
    url: 'https://fetchfast.vercel.app/',
    tags: ['React', 'Node.js', 'MongoDB', 'Payments', 'Realtime'],
    label: 'Operations platform',
    role: 'Product interface and app architecture',
  },
  {
    title: 'InternConnect - Internships Search Platform',
    description: 'A platform connecting students with internships through search, application tracking, and profile management.',
    url: 'https://internkonnekt.netlify.app/',
    tags: ['React', 'Express.js', 'MongoDB', 'Authentication', 'REST API'],
    label: 'Talent platform',
    role: 'Product build and deployment',
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-10 flex items-center gap-3">
            <Badge variant="outline" className="rounded-full border-border/70 px-3 py-1.5 uppercase tracking-[0.26em] text-muted-foreground">
              Portfolio
            </Badge>
            <span className="hidden h-px flex-1 bg-border/70 sm:block" />
          </div>

          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold text-foreground sm:text-5xl">Selected work that shows execution, not just ideas.</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              These projects show product thinking, implementation discipline, and the ability to ship polished experiences across different use cases.
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden rounded-3xl sm:rounded-[2rem] border-border/70 bg-background/85 shadow-xl shadow-black/5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader className="border-b border-border/70 pb-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-3xl">
                        <div className="mb-3 flex flex-wrap gap-2">
                          <Badge variant="secondary" className="rounded-full bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.22em] text-primary">
                            {project.label}
                          </Badge>
                          <Badge variant="outline" className="max-w-full whitespace-normal wrap-break-word rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.22em] text-muted-foreground">
                            {project.role}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl leading-tight text-foreground sm:text-3xl">{project.title}</CardTitle>
                        <CardDescription className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Button asChild size="lg" className="w-full rounded-full px-5 shadow-lg shadow-black/10 sm:w-fit lg:shrink-0">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          View project <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.18em]">
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
