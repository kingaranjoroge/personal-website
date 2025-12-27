"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JAVASCRIPT', level: 92 },
  { name: 'MONGODB', level: 85 },
  { name: 'EXPRESSJS', level: 88 },
  { name: 'REACTJS', level: 93 },
  { name: 'NODEJS', level: 90 },
]

const personalInfo = [
  { label: 'Name', value: 'Brian Njoroge' },
  { label: 'Website', value: 'kingaranjoroge.netlify.app', link: 'https://kingaranjoroge.netlify.app/' },
  { label: 'Phone', value: '0703371828' },
  { label: 'Email', value: 'briankingara4@gmail.com' },
  { label: 'City', value: 'Nairobi, Kenya' },
  { label: 'Github', value: 'github.com/kingaranjoroge', link: 'https://github.com/kingaranjoroge' },
  { label: 'Degree', value: 'Bsc. Applied Computer Science' },
  { label: 'Freelance', value: 'Available' },
]

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen w-full py-20 px-4 sm:px-6 md:px-8 bg-white dark:bg-slate-900">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">About</h2>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                Welcome to my world of web development mastery! As a full-stack web developer, I craft immersive digital experiences using cutting-edge technologies. Harnessing the power of React.js, Next.js, and TailwindCSS, I sculpt dynamic and responsive front-end interfaces that captivate and engage users.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                On the backend, I leverage the robust capabilities of Node.js, Express.js, and Nest.js to architect scalable and efficient systems that power my applications. With MongoDB as my database of choice, coupled with the flexibility of Mongoose as the ORM, I seamlessly manage data with precision and speed.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Every project I undertake is infused with creativity, functionality, and a relentless pursuit of excellence. Let&apos;s collaborate to bring your vision to life and elevate your digital presence to new heights.
              </p>
            </CardContent>
          </Card>

          <div className="mb-8 flex justify-center sm:justify-start">
            <Badge
              variant="secondary"
              className="text-base sm:text-lg px-3 sm:px-4 py-2 text-center whitespace-normal break-words"
            >
              Full Stack Web Developer, JavaScript Developer, TypeScript Developer
            </Badge>
          </div>

          <Separator className="my-8" />

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {personalInfo.map((info, index) => (
              <div key={index} className="flex items-center">
                <strong className="text-slate-900 dark:text-white mr-2">{info.label}:</strong>
                {info.link ? (
                  <a 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-slate-700 dark:text-slate-300">{info.value}</span>
                )}
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Skills</h3>
          
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-900 dark:text-white font-medium">{skill.name}</span>
                  <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
