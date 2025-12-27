"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaLaptopCode, FaCode, FaServer, FaDatabase } from 'react-icons/fa'

const services = [
  {
    icon: FaLaptopCode,
    title: 'FrontEnd Development',
    description: 'As a front-end developer, I specialize in creating visually appealing and interactive websites using HTML, CSS, and JavaScript. I have also honed my skills in ReactJS, a popular JavaScript library used for building user interfaces. I strive to create websites that not only look great but also provide a seamless user experience. With my expertise in front-end development, I can help your organization create stunning and functional websites that will leave a lasting impression on your users.'
  },
  {
    icon: FaServer,
    title: 'BackEnd Development',
    description: 'As a back-end developer, I specialize in creating the behind-the-scenes functionality of websites and applications using tools such as MongoDB, ExpressJS, and NodeJS. I am currently learning these technologies and have already become proficient in them. I understand the importance of creating efficient, scalable, and secure back-end systems to ensure the smooth functioning of your website or application. With my skills in back-end development, I can help your organization create robust and reliable systems that meet your specific requirements.'
  },
  {
    icon: FaDatabase,
    title: 'Full Stack Development',
    description: 'As a full-stack developer, I have a broad range of skills that allow me to create high-quality websites and applications from end to end. On the front-end, I specialize in using HTML, CSS, JavaScript, and ReactJS to create visually appealing and interactive interfaces. On the back-end, I use MongoDB, ExpressJS, and NodeJS to create efficient, scalable, and secure systems that ensure the smooth functioning of your website or application. With my expertise in full-stack development, I can help your organization create robust and reliable websites and applications that provide a seamless user experience.'
  },
  {
    icon: FaCode,
    title: 'Coding Tasks',
    description: 'As a skilled coder, I am passionate about solving complex problems and delivering high-quality code. With my expertise in programming languages like Java, JavaScript, C, and C++, I can tackle any coding task with ease. I am experienced in algorithm design, data structures, and software engineering principles, ensuring that my code is not only functional but also efficient and maintainable. Whether you need help with a small coding task or a larger software project, I am committed to delivering top-notch work that meets your specific requirements. Let me take care of your coding tasks so that you can focus on other important aspects of your business.'
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="min-h-screen w-full py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">Services</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
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
