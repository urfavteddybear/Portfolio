'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    id: 1,
    company: "PT Bangun Inovasi Teknologi",
    position: "Content Creator Internship",
    duration: "2022 (6 months)",
    location: "Work From Home",
    description: "Collaborated with the marketing team to create engaging visual content for social media platforms. Focused on developing Instagram content that aligned with the company's brand identity and marketing objectives.",
    achievements: [
      "Created compelling Instagram content that increased engagement",
      "Developed visual content strategy for social media campaigns",
      "Collaborated effectively with team members in remote work environment",
      "Maintained consistent brand identity across all content"
    ],
    technologies: ["Adobe Illustrator", "Canva", "Instagram"]
  },
  {
    id: 2,
    company: "EduKoding",
    position: "Learning Module Developer Internship",
    duration: "2022 (6 months)",
    location: "Work From Home",
    description: "Developed educational content and learning modules for students at EduKoding. Created interactive learning materials and visual designs to enhance the educational experience for programming students.",
    achievements: [
      "Designed and developed comprehensive learning modules for students",
      "Created interactive educational content using visual programming tools",
      "Collaborated with educational team to improve learning outcomes",
      "Delivered high-quality educational materials within project timelines"
    ],
    technologies: ["Adobe Illustrator", "Scratch Desktop"]  },
    {
    id: 3,
    company: "INSTIKI Developer Club",
    position: "Backend Beginner Mentor",
    duration: "2024 - 2025",
    location: "INSTIKI",
    description: "Mentored students in backend development fundamentals through campus extracurricular activities. Taught API development, database design, and server-side programming concepts to help students build strong foundation in backend technologies.",
    achievements: [
      "Mentored beginner students in backend development concepts and practices",
      "Designed and delivered comprehensive curriculum for API development",
      "Taught database design principles and MySQL implementation",
      "Guided students through hands-on projects and real-world applications"
    ],
    technologies: ["PHP", "MySQL", "API"]
  },
  {
    id: 4,
    company: "PT Invilove Digital",
    position: "Wedding Invitation Maker",
    duration: "2024 - Present",
    location: "Work From Home",
    description: "Creating beautiful and personalized wedding invitations for clients using WordPress platform. Combining web development skills with creative design to deliver unique digital invitation experiences that capture couples' special moments.",
    achievements: [
      "Designed and developed custom wedding invitations using WordPress",
      "Enhanced invitation designs with professional photo editing techniques",
      "Delivered personalized invitation solutions for diverse client requirements",
      "Maintained high client satisfaction through creative and timely delivery"
    ],
    technologies: ["WordPress", "Adobe Photoshop", "Elementor"]
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
            Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            My professional journey and the experiences that shaped my career.
          </p>
        </motion.div>        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600" />          <div className="space-y-12">
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
                <div className="w-full md:w-5/12 pl-16 pr-4 md:pl-0 md:pr-0"><motion.div
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
