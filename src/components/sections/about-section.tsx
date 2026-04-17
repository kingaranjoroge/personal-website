"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { BriefcaseBusiness, Code2, ShieldCheck, Sparkles } from 'lucide-react'

const capabilities = [
  {
    icon: Sparkles,
    title: 'Premium presentation',
    description: 'Elegant layouts and motion that help a brand feel modern, credible, and intentional.',
  },
  {
    icon: Code2,
    title: 'Modern engineering',
    description: 'Fast, maintainable interfaces built with React, Next.js, and a clean TypeScript workflow.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable delivery',
    description: 'Clear communication, responsive implementation, and a process that keeps projects moving.',
  },
]

const personalInfo = [
  { label: 'Name', value: 'Brian Njoroge' },
  { label: 'Website', value: 'brian-njoroge.vercel.app', link: 'https://brian-njoroge.vercel.app/' },
  { label: 'Phone', value: '+254703371828' },
  { label: 'Email', value: 'briankingara4@gmail.com' },
  { label: 'City', value: 'Nairobi, Kenya' },
  { label: 'Github', value: 'github.com/kingaranjoroge', link: 'https://github.com/kingaranjoroge' },
  { label: 'Freelance', value: 'Available' },
]

export function AboutSection() {
  return (
    <section id="about" className="w-full py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-10 flex items-center gap-3">
            <Badge variant="outline" className="rounded-full border-border/70 px-3 py-1.5 uppercase tracking-[0.26em] text-muted-foreground">
              About
            </Badge>
            <span className="hidden h-px flex-1 bg-border/70 sm:block" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <Card className="rounded-[2rem] border-border/70 bg-background/85 shadow-xl shadow-black/5 backdrop-blur-xl">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  I build polished websites and digital products for teams that care about trust, clarity, and a premium finish. My work blends strong visual systems with practical engineering so the result feels elevated without being fragile.
                </p>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                  I focus on the parts that matter to high-end clients and larger organizations: clear messaging, responsive layouts, accessible interactions, and code that can grow with the business.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm">Frontend architecture</Badge>
                  <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm">Design systems</Badge>
                  <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm">API integrations</Badge>
                  <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm">Performance-focused builds</Badge>
                </div>

                <Separator className="my-8" />

                <div className="grid gap-4 sm:grid-cols-3">
                  {capabilities.map((item) => (
                    <div key={item.title} className="rounded-3xl border border-border/70 bg-muted/40 p-4">
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-foreground text-background">
                        <item.icon className="size-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-border/70 bg-foreground text-background shadow-2xl shadow-black/10">
              <CardHeader className="border-b border-background/10 px-6 py-6 sm:px-8">
                <CardTitle className="text-2xl text-background">Credentials</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 p-6 sm:p-8">
                {personalInfo.map((info) => (
                  <div key={info.label} className="rounded-3xl border border-background/10 bg-background/6 p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-background/60">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-background transition-opacity hover:opacity-80">
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm font-medium text-background">{info.value}</p>
                    )}
                  </div>
                ))}

                <div className="mt-2 rounded-3xl border border-background/10 bg-background/8 p-5">
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness className="size-5 text-amber-300" />
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-background/75">Working model</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-background/80">
                    Best for founders, agencies, and organizations that need a refined digital presence with disciplined execution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
