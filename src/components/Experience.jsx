import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    id: '01',
    company: 'IIT Mandi',
    role: 'Research Intern',
    duration: 'May 2026 – June 2026',
    location: 'Mandi, Himachal Pradesh',
    file: 'iit_mandi_internship.md',
    details: [
      'Conducted research in medical imaging under the guidance of Dr. Aditya Nigam, focusing on MRI-to-synthetic CT (sCT) reconstruction for radiotherapy planning and disease detection.',
      'Explored and evaluated generative deep learning approaches including VAEs, GANs, and diffusion models for cross-modal image synthesis.',
    ],
    tags: ['Generative Models', 'VAE', 'GAN', 'Diffusion', 'Vision Encoders', 'Deep Learning'],
  },
  {
    id: '02',
    company: 'National Aluminium Company Ltd (NALCO)',
    role: 'Computer Science Intern',
    duration: 'June 2025 – July 2025',
    location: 'Damanjodi, Odisha',
    file: 'nalco_internship.md',
    details: [
      'Worked on Respiguard AI, an AI-based respiratory safety system for mining environments.',
      'Improved hazard detection reliability using deep-learning-based visual analysis and custom model architectures.',
    ],
    tags: ['Custom YOLOv5', 'PyTorch', 'Data Augmentation', 'Model Evaluation'],
  },
  {
    id: '03',
    company: 'Team Ignition, VIT Chennai',
    role: 'Flight Software Lead',
    duration: 'Apr 2024 – Apr 2026',
    location: 'On Site',
    file: 'flight_software_lead.md',
    details: [
      'Developed flight software for model rockets, including fin actuator control, stability algorithms, onboard video stabilization, and Kalman-based state estimation.',
    ],
    tags: ['Arduino', 'C/C++', 'PID Control', 'Image Processing', 'Deep Learning'],
  },
]

const Experience = () => (
  <section id="experience" className="py-16" style={{ borderBottom: '1px solid var(--border-dim)' }}>

    {/* Section heading */}
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-xs font-Mono font-bold px-2 py-0.5 rounded" style={{ background: 'var(--blue-subtle)', color: 'var(--blue)' }}>03</span>
        <h2 className="text-3xl font-black tracking-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>Experience</h2>
      </div>
      <p className="text-sm ml-9" style={{ color: 'var(--text-dim)' }}>Professional internships &amp; software leadership roles</p>
    </div>

    {/* Prompt */}
    <div className="term-prompt">
      <span className="prompt-char">$</span>
      <span className="prompt-cmd">ls -la ~/experience/</span>
    </div>

    {/* Listing header */}
    <div className="text-sm font-Mono mb-6" style={{ color: 'var(--text-dim)' }}>
      total 3 &nbsp;&nbsp; drwxr-xr-x &nbsp; anurag &nbsp; anurag &nbsp; Jul 2026
    </div>

    <div className="space-y-6">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="term-block overflow-hidden"
        >
          {/* File header */}
          <div className="flex flex-wrap items-center gap-3 px-4 py-2.5 text-sm font-Mono border-b" style={{ borderColor: 'var(--border-dim)', background: 'var(--bg-hover)' }}>
            <span style={{ color: 'var(--text-dim)' }}>-rwxr-xr-x</span>
            <span style={{ color: 'var(--text-dim)' }}>anurag</span>
            <span style={{ color: 'var(--blue)' }}>~/experience/{exp.file}</span>
            <span className="ml-auto font-bold" style={{ color: 'var(--text-secondary)' }}>{exp.company}</span>
          </div>

          {/* Content */}
          <div className="px-5 py-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-Mono">
              <span className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>{exp.role}</span>
              <div className="flex gap-3 text-xs" style={{ color: 'var(--text-dim)' }}>
                <span>{exp.duration}</span>
                <span>·</span>
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="space-y-2.5 mb-4">
              {exp.details.map((detail, j) => (
                <li key={j} className="flex gap-2.5 text-base" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--blue)' }} className="shrink-0">▸</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map(t => (
                <span key={t} className="term-badge">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Experience
