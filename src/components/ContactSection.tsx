'use client'

import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline'

const contactMethods = [
  {
    name: 'Email',
    value: 'contact@wahyuputra.biz.id',
    href: 'mailto:contact@wahyuputra.biz.id',
    icon: EnvelopeIcon,
  },
  {
    name: 'Location',
    value: 'Bali, Indonesia',
    href: '#',
    icon: MapPinIcon,
  },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/urfavteddybear',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary-200/20 dark:from-primary-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-primary-200/20 dark:from-primary-500/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-4">
            Get In Touch
          </h2>          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                href={method.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ x: 10 }}
                viewport={{ once: true }}                className="relative overflow-hidden flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
              >                {/* Enhanced decorative quarter-circle */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-100 dark:from-slate-700/40 to-primary-50 dark:to-slate-600/20 rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <method.icon className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-4 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors relative z-10" />
                <div className="relative z-10">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{method.name}</div>
                  <div className="text-gray-900 dark:text-white font-medium">{method.value}</div>
                </div>
                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 dark:text-gray-500 ml-auto group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors relative z-10" />
              </motion.a>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Follow Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ x: -10 }}
                  viewport={{ once: true }}                  className="relative overflow-hidden flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >                  {/* Enhanced decorative quarter-circle */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary-100 dark:from-slate-700/40 to-primary-50 dark:to-slate-600/20 rounded-br-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <social.icon className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors relative z-10" />
                  <span className="text-gray-900 dark:text-white font-medium relative z-10">{social.name}</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 dark:text-gray-500 ml-auto group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
