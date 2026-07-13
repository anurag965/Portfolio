import React from 'react'
import { motion } from 'framer-motion'

const education = [
  {
    id: '01',
    institution: 'Vellore Institute of Technology',
    degree: 'Bachelor of Technology in Computer Science',
    details: 'CGPA: 7.77 / 10.00',
    duration: 'August 2023 – June 2027',
    location: 'Chennai, India',
  },
  {
    id: '02',
    institution: 'Sri Venkateswara Jr. College',
    degree: 'Class 12th (MPC)',
    details: 'Score: 88.4 / 100.00',
    duration: 'July 2021 – June 2023',
    location: 'Visakhapatnam, India',
  },
  {
    id: '03',
    institution: 'Sri Chaitanya Techno School',
    degree: 'Class 10th',
    details: 'Score: 93.6 / 100.00',
    duration: 'February 2020 – March 2021',
    location: 'Visakhapatnam, India',
  },
]

const Education = () => (
  <section id="education" className="py-16" style={{ borderBottom: '1px solid var(--border-dim)' }}>

    {/* Section heading */}
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-xs font-Mono font-bold px-2 py-0.5 rounded" style={{ background: 'var(--blue-subtle)', color: 'var(--blue)' }}>04</span>
        <h2 className="text-3xl font-black tracking-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>Education</h2>
      </div>
      <p className="text-sm ml-9" style={{ color: 'var(--text-dim)' }}>Academic institutions &amp; grades</p>
    </div>

    {/* Prompt */}
    <div className="term-prompt">
      <span className="prompt-char">$</span>
      <span className="prompt-cmd">cat ~/education.json</span>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="term-block p-5 font-Mono text-base overflow-hidden"
    >
      <div className="text-xs mb-3" style={{ color: 'var(--text-dim)' }}>{'{'}</div>
      <div className="space-y-4 pl-4">
        {education.map((edu, i) => (
          <div key={edu.id} className="relative pl-4 border-l-2" style={{ borderColor: 'var(--blue-border)' }}>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <span className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                "{edu.institution}"
              </span>
              <span className="text-xs" style={{ color: 'var(--text-dim)' }}>
                {edu.duration} &middot; {edu.location}
              </span>
            </div>
            <div className="text-sm mt-1 pl-2 space-y-0.5">
              <div>
                <span style={{ color: 'var(--blue)' }}>degree:</span> <span style={{ color: 'var(--text-secondary)' }}>"{edu.degree}"</span>
              </div>
              <div>
                <span style={{ color: 'var(--blue)' }}>performance:</span> <span style={{ color: 'var(--yellow)' }}>"{edu.details}"</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-xs mt-3" style={{ color: 'var(--text-dim)' }}>{'}'}</div>
    </motion.div>
  </section>
)

export default Education
