"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ArrowRight, Mail, MapPin, Phone, Sparkles } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await axios.post('/api/email', formData)
      await axios.post('/api/users', formData)
      toast.success('Message sent successfully.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="w-full px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-10 flex items-center gap-3">
            <Badge variant="outline" className="rounded-full border-border/70 px-3 py-1.5 uppercase tracking-[0.26em] text-muted-foreground">
              Contact
            </Badge>
            <span className="hidden h-px flex-1 bg-border/70 sm:block" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            <Card className="rounded-[2rem] border-primary/20 bg-linear-to-br from-primary to-primary/85 text-primary-foreground shadow-2xl shadow-primary/25">
              <CardHeader className="border-b border-background/10 px-6 py-6 sm:px-8">
                <CardTitle className="flex items-center gap-3 text-2xl text-primary-foreground">
                  <Sparkles className="size-5 text-accent" />
                  Let&apos;s build something premium.
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 p-6 sm:p-8">
                <p className="text-sm leading-7 text-primary-foreground/85">
                  If you need a website or web app that feels credible, polished, and built for serious stakeholders, send a message and I&apos;ll review the scope.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                    <MapPin className="mt-1 size-5 text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-background/60">Location</p>
                      <p className="mt-1 text-sm font-medium text-background">Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                    <Mail className="mt-1 size-5 text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-background/60">Email</p>
                      <a href="mailto:briankingara4@gmail.com" className="mt-1 inline-block text-sm font-medium text-background transition-opacity hover:opacity-80">
                        briankingara4@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                    <Phone className="mt-1 size-5 text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-background/60">Phone</p>
                      <p className="mt-1 text-sm font-medium text-background">0703371828</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-background/60">Best fit</p>
                  <p className="mt-2 text-sm leading-6 text-background/80">
                    Brand refreshes, premium marketing sites, product launches, and internal tools that need a polished public face.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-border/70 bg-background/85 shadow-xl shadow-black/5 backdrop-blur-xl">
              <CardHeader className="border-b border-border/70 px-6 py-6 sm:px-8">
                <CardTitle className="text-2xl text-foreground">Send a message</CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Your name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 rounded-2xl border-border/70 bg-background/70 px-4 py-3"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Your email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 rounded-2xl border-border/70 bg-background/70 px-4 py-3"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2 rounded-2xl border-border/70 bg-background/70 px-4 py-3"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Project details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2 rounded-2xl border-border/70 bg-background/70 px-4 py-3"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full px-6 py-6 text-base shadow-lg shadow-black/10"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send inquiry'}
                    <ArrowRight className="size-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
