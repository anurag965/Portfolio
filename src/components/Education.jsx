import React from 'react'
import { motion } from 'framer-motion'
import SpotlightCard from './SpotlightCard'

const education = [
  {
    institution: 'Vellore Institute of Technology (VIT Chennai)',
    degree: 'B.Tech. in Computer Science and Engineering',
    duration: 'Aug 2023 – Jun 2027',
    location: 'Chennai, India',
    details: 'Rigorous coursework in Deep Learning, Computer Vision, Algorithms, Distributed Computing, and Mathematical Foundations of Machine Learning.',
    status: 'Degree Candidate (In Good Standing)',
  },
  {
    institution: 'Sri Venkateswara Jr. College',
    degree: 'Higher Secondary (MPC — Mathematics, Physics, Chemistry)',
    duration: 'Jul 2021 – Jun 2023',
    location: 'Visakhapatnam, India',
    details: 'Intensive foundation in calculus, multivariable optimization, differential equations, and classical mechanics. Final Grade: 88.4%.',
    status: 'Completed (88.4%)',
  },
]

const Education = () => {
  return (
    <section id="education" className="space-y-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6"
      >
        <div className="space-y-1.5">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--accent)' }}>
            // ACADEMIC FOUNDATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
          Coursework foundations, mathematical optimization, and degree programs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu) => (
          <SpotlightCard
            key={edu.institution}
            className="p-7 sm:p-9 flex flex-col justify-between group cursor-default space-y-6"
            tilt={true}
            spotlightColor="var(--accent-glow)"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs sm:text-sm font-mono text-slate-400">
                <span>{edu.duration}</span>
                <span>{edu.location}</span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[var(--accent-light)] transition-colors">
                  {edu.institution}
                </h3>
                <div className="text-base sm:text-lg font-mono font-medium" style={{ color: 'var(--accent-light)' }}>
                  {edu.degree}
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                {edu.details}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs sm:text-sm font-mono text-slate-400">
              <span>Status</span>
              <span className="font-medium flex items-center gap-1.5" style={{ color: 'var(--accent-light)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                {edu.status}
              </span>
            </div>
          </SpotlightCard>
        ))}
      </div>

    </section>
  )
}

export default Education
