'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    id: 1,
    company: "TechFlow Solutions",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "Remote",
    description: "Leading development of enterprise-level web applications and mentoring junior developers. Specialized in React ecosystem, Node.js backend services, and cloud infrastructure on AWS.",
    achievements: [
      "Architected and built 3 major SaaS applications serving 10k+ users",
      "Led migration to microservices architecture, improving system reliability by 45%",
      "Mentored 8 junior developers and established coding standards for the team",
      "Reduced application bundle size by 60% through code splitting and optimization"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker", "Kubernetes"]
  },
  {
    id: 2,
    company: "InnovateLab",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "San Francisco, CA",
    description: "Developed modern web applications for startups and established companies. Focused on creating scalable solutions with great user experience and performance optimization.",
    achievements: [
      "Built 15+ responsive web applications using React and Vue.js",
      "Implemented real-time features using WebSocket technology",
      "Optimized database queries reducing response times by 70%",
      "Collaborated with design team to create pixel-perfect implementations"
    ],
    technologies: ["React", "Vue.js", "JavaScript", "Python", "Django", "PostgreSQL", "Redis", "AWS"]
  },
  {
    id: 3,
    company: "WebCraft Agency",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    location: "Austin, TX",
    description: "Started my professional journey developing client websites and learning modern web development practices. Gained solid foundation in frontend technologies and agile development.",
    achievements: [
      "Delivered 25+ client websites with 100% on-time completion rate",
      "Learned and implemented modern JavaScript frameworks",
      "Contributed to company's internal component library",
      "Improved website performance scores by 40% on average"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "SASS", "WordPress", "PHP", "MySQL"]
  }
]

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-4">
            Work Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            My professional journey and the experiences that shaped my career as a developer.
          </p>
        </motion.div>        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />                {/* Content card */}
                <div className={`w-full md:w-5/12 pl-16 pr-4 md:pl-0 md:pr-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}><motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >                    {/* Company and position */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        {experience.company}
                      </h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">                      <h5 className="text-gray-900 dark:text-white font-semibold mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </div>                    {/* Technologies */}
                    <div>                      <h5 className="text-gray-900 dark:text-white font-semibold mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 border border-primary-200 dark:border-primary-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
