"use client"

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Layers3, Rocket, ShieldCheck, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const focusAreas = [
  {
    title: 'Product strategy',
    description: 'Clarity on what to build, why it matters, and how the interface should support the business.',
  },
  {
    title: 'Elegant execution',
    description: 'Polished interfaces, smooth motion, and responsive layouts that feel tailored rather than templated.',
  },
  {
    title: 'Reliable delivery',
    description: 'Modern frontend engineering, maintainable code, and a clean path from concept to launch.',
  },
]

const workingStyle = [
  'Client-first communication',
  'Fast iteration with visual polish',
  'Built for modern product teams',
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-28 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(180,150,90,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(42,60,96,0.16),transparent_28%),linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.28)_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(180,150,90,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(42,60,96,0.22),transparent_28%),linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.18)_100%)]" />

      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            <Badge variant="outline" className="mb-6 rounded-full border-primary/25 bg-primary/7 px-4 py-2 text-xs uppercase tracking-[0.28em] text-primary">
              Premium digital experiences
            </Badge>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
              Websites and product experiences for ambitious brands.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              I design and build refined digital experiences that help high-end clients and top organizations present credibility, move faster, and convert better.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-6 shadow-xl shadow-black/10">
                <a href="#contact">
                  Start a project
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-border/70 px-6">
                <a href="#portfolio">View selected work</a>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {workingStyle.map((item) => (
                <div key={item} className="rounded-3xl border border-border/70 bg-background/80 p-4 shadow-sm shadow-black/5 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <CheckCircle2 className="size-4 text-primary" />
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -left-8 top-10 hidden size-28 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-300/20 lg:block" />
            <div className="absolute -bottom-8 right-0 hidden size-36 rounded-full bg-slate-400/20 blur-3xl dark:bg-slate-300/10 lg:block" />

            <Card className="relative overflow-hidden rounded-[2rem] border-border/70 bg-background/85 shadow-2xl shadow-black/10 backdrop-blur-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-border/70 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Brian Njoroge</p>
                    <h2 className="mt-2 text-2xl font-semibold text-foreground">Full-stack developer</h2>
                  </div>
                  <div className="rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Nairobi, Kenya
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {focusAreas.map((item, index) => (
                    <div key={item.title} className="rounded-3xl border border-border/70 bg-muted/40 p-5">
                      <div className="flex items-start gap-4">
                        <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                          {index === 0 ? <Sparkles className="size-5" /> : index === 1 ? <Layers3 className="size-5" /> : <ShieldCheck className="size-5" />}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 rounded-[1.75rem] border border-primary/20 bg-linear-to-r from-primary/95 to-primary p-5 text-primary-foreground sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-primary-foreground/75">Delivery focus</p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-primary-foreground/90">
                      Product-ready websites, responsive front ends, and backend-aware builds that feel sharp on day one.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-sm font-medium">
                    <Rocket className="size-4" />
                    Launch ready
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
