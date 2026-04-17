"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LayoutDashboard, MonitorSmartphone, Settings2, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Premium websites',
    description: 'High-end marketing sites and brand experiences with deliberate typography, clean motion, and an editorial feel.',
    points: ['Responsive layouts', 'Conversion-focused structure', 'Refined visual direction'],
  },
  {
    icon: LayoutDashboard,
    title: 'Product interfaces',
    description: 'Dashboards, portals, and internal tools that help teams move quickly without sacrificing polish or usability.',
    points: ['Clear information hierarchy', 'Fast workflows', 'Accessible UI patterns'],
  },
  {
    icon: Settings2,
    title: 'Full-stack implementation',
    description: 'Frontend and backend delivery for teams that want one accountable partner from concept to launch.',
    points: ['Next.js and React', 'Node.js APIs', 'Database integration'],
  },
  {
    icon: ShieldCheck,
    title: 'System care and maintenance',
    description: 'Code cleanup, feature refinement, and ongoing improvements that keep the product healthy after launch.',
    points: ['Performance tuning', 'Bug fixing', 'Iteration support'],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-10 flex items-center gap-3">
            <Badge variant="outline" className="rounded-full border-border/70 px-3 py-1.5 uppercase tracking-[0.26em] text-muted-foreground">
              Services
            </Badge>
            <span className="hidden h-px flex-1 bg-border/70 sm:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full rounded-[2rem] border-border/70 bg-background/85 shadow-xl shadow-black/5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
                        <service.icon className="size-5" />
                      </div>
                      <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="text-sm leading-7 text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.points.map((point) => (
                        <div key={point} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="size-1.5 rounded-full bg-accent" />
                          {point}
                        </div>
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
