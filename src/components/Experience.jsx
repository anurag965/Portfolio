import React from 'react'
import { motion } from 'framer-motion'
import SpotlightCard from './SpotlightCard'

const experiences = [
  {
    company: 'Indian Institute of Technology Mandi (IIT Mandi)',
    role: 'Research Intern — Medical AI & Generative Modeling',
    advisor: 'Advisor: Prof. Aditya Nigam',
    duration: 'May 2026 – Present',
    location: 'Mandi, Himachal Pradesh',
    details: [
      'Investigating 3D cross-modal volumetric reconstruction for radiotherapy planning, focusing on diffusion and state-space model architectures for MRI-to-CT translation.',
      'Designing sliding-window DDPM patch inference schemes and 3D wavelet spatial decompositions to address severe GPU memory bottlenecks during full-volume clinical scan generation.',
      'Collaborating with lab researchers on clinical dosimetry metrics (DVH, Gamma passing rates) and uncertainty quantification under Prof. Aditya Nigam.',
    ],
    tags: ['Diffusion Models', 'Mamba', 'SimpleITK', 'Volumetric Synthesis', 'PyTorch'],
  },
  {
    company: 'Team Ignition, VIT Chennai',
    role: 'Flight Software Lead',
    advisor: 'Flight & Competition Software Division',
    duration: 'Apr 2024 – Apr 2026',
    location: 'Chennai, India',
    details: [
      'Led the avionics software sub-team across 3 national CanSat competition campaigns, securing 1st place in all three.',
      'Architected microcontroller firmware (C/C++) featuring Kalman filter state estimation, PID fin actuation, and fail-safe recovery logic on low-power telemetry radios.',
      'Engineered ground station telemetry parsing scripts, raising packet decode reliability and diagnostic logging during live drop tests.',
    ],
    tags: ['Embedded C/C++', 'State Estimation', 'PID Control', 'Telemetry Protocols', 'Avionics'],
  },
  {
    company: 'National Aluminium Company Ltd (NALCO)',
    role: 'Computer Science Intern',
    advisor: 'Occupational Health & Industrial Automation',
    duration: 'Jun 2025 – Jul 2025',
    location: 'Damanjodi, Odisha',
    details: [
      'Developed and evaluated an automated computer-aided diagnosis pipeline for early respiratory disease detection in high-risk mine workers.',
      'Fine-tuned object detection and classification models across the NIH ChestX-ray14 benchmark (112,000+ radiographs), utilizing class-weighted loss and domain-specific augmentations to tackle severe pathology imbalances.',
    ],
    tags: ['Computer Vision', 'PyTorch', 'Data Augmentation', 'Medical Imaging'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="space-y-10">
      
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
            // LAB CHRONOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Research &amp; Engineering Experience
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
          Contributions across premier university research labs, competitive flight software divisions, and industrial health AI.
        </p>
      </motion.div>

      {/* Editorial Timeline with Energy Traveling Pulse */}
      <div className="space-y-8 relative">
        <div className="hidden md:block absolute left-4 top-4 bottom-4 w-px bg-white/10" />

        {/* Traveling Energy Pulse Beam */}
        <motion.div
          animate={{ top: ['0%', '95%'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          className="hidden md:block absolute left-[15px] w-1 h-14 rounded-full pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)',
            boxShadow: '0 0 10px var(--accent)',
          }}
        />

        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="md:pl-14 relative"
          >
            {/* Pulsing Timeline Node */}
            <div className="hidden md:flex absolute left-2.5 top-7 items-center justify-center">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--accent)' }} />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-slate-950 border-2" style={{ borderColor: 'var(--accent)' }} />
              </span>
            </div>

            <SpotlightCard className="p-7 sm:p-8 space-y-5" tilt={false} spotlightColor="var(--accent-glow)">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-white/[0.08]">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-base sm:text-lg font-semibold font-mono" style={{ color: 'var(--accent-light)' }}>
                    {exp.company}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-sans">
                    {exp.advisor} · {exp.location}
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-lg glass-chip text-xs sm:text-sm font-mono text-slate-300 shrink-0 self-start">
                  {exp.duration}
                </div>
              </div>

              <ul className="space-y-3 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-3">
                    <span className="font-mono select-none text-base" style={{ color: 'var(--accent)' }}>›</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 flex flex-wrap gap-2 border-t border-white/[0.06]">
                {exp.tags.map(t => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Experience
