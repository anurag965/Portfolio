import React, { useState, useEffect } from 'react'
import profile_img from '../assets/profile-img.webp'
import { motion } from 'framer-motion'

const SCRAMBLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'
const TARGET = 'ANURAG'

const Header = () => {
  const [name, setName] = useState('######')

  useEffect(() => {
    let iter = 0
    const id = setInterval(() => {
      setName(TARGET.split('').map((c, i) =>
        i < iter ? TARGET[i] : SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)]
      ).join(''))
      if (iter >= TARGET.length) clearInterval(id)
      iter += 0.12
    }, 45)
    return () => clearInterval(id)
  }, [])

  const info = [
    { label: 'Role', value: 'Deep Learning & CV Researcher', color: 'var(--blue)' },
    { label: 'Host', value: 'IIT Mandi — Research Intern' },
    { label: 'Node', value: "VIT Chennai — B.Tech '27" },
    { label: 'Kernel', value: 'PyTorch 2.x / CUDA 12.1', color: 'var(--yellow)' },
    { label: 'Stack', value: 'PyTorch · llama.cpp · SmolVLM2 · LangChain' },
    { label: 'Research', value: 'Generative Modeling · Medical Imaging · VLM Accessibility · EdgeAI' },
    { label: 'Focus', value: 'AI for Social Good', color: 'var(--blue)' },
  ]

  return (
    <section id="top" className="py-10 md:py-16" style={{ borderBottom: '1px solid var(--border-dim)' }}>

      {/* Section heading */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs font-Mono font-bold px-2 py-0.5 rounded" style={{ background: 'var(--blue-subtle)', color: 'var(--blue)' }}>01</span>
          <h1 className="text-3xl font-black tracking-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>Profile</h1>
        </div>
        <p className="text-sm ml-9" style={{ color: 'var(--text-dim)' }}>System identity &amp; researcher overview</p>
      </div>

      {/* Prompt */}
      <div className="term-prompt mb-10">
        <span className="prompt-char">$</span>
        <span className="prompt-cmd">neofetch --config ~/.anurag_profile</span>
        <span className="cursor-blink" />
      </div>

      {/* Neofetch layout */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row gap-12 items-start"
      >
        {/* Profile photo */}
        <div className="relative shrink-0">
          <div className="absolute -inset-[1px] rounded-lg" style={{ background: 'var(--border-dim)' }} />
          <div className="relative p-px rounded-lg overflow-hidden">
            <img
              src={profile_img}
              alt="Anurag Pradhan"
              fetchpriority="high"
              loading="eager"
              className="w-44 md:w-52 h-44 md:h-52 object-cover rounded-lg"
              style={{ filter: 'grayscale(20%) brightness(0.85) contrast(1.1)' }}
            />
          </div>
          {/* Status dot */}
          <div className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-Mono"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--green, #3fb950)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--green, #3fb950)' }} />
            online
          </div>
        </div>

        {/* Info panel */}
        <div className="flex-1 space-y-1 font-Mono">
          {/* Header */}
          <div className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--blue)' }}>anurag</span>
            <span style={{ color: 'var(--text-dim)' }}>@</span>
            <span style={{ color: 'var(--text-secondary)' }}>github</span>
          </div>
          <div className="border-b border-dashed mb-4" style={{ borderColor: 'var(--border)' }} />

          {/* Name */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-3">
            <span className="text-sm w-24 shrink-0 font-bold animate-pulse" style={{ color: 'var(--text-secondary)' }}>Name:</span>
            <span className="text-xl sm:text-2xl font-black tracking-wider" style={{ color: 'var(--text-primary)' }}>
              {name} <span style={{ color: 'var(--blue)' }}>PRADHAN</span>
            </span>
          </div>

          {info.map(({ label, value, color }) => (
            <div key={label} className="flex flex-col sm:flex-row gap-0.5 sm:gap-4 text-sm leading-relaxed">
              <span className="text-sm w-24 shrink-0 font-bold" style={{ color: 'var(--text-secondary)' }}>{label}:</span>
              <span style={{ color: color || 'var(--text-secondary)' }}>{value}</span>
            </div>
          ))}

          <div className="border-t border-dashed mt-3" style={{ borderColor: 'var(--border)' }} />

          {/* Palette */}
          <div className="flex gap-1.5 py-3">
            {['#0d1117', '#161b22', '#21262d', '#30363d', '#58a6ff', '#79c0ff', '#e6edf3', '#ffffff'].map((c, i) => (
              <span key={i} className="w-4 h-4 rounded-sm border" style={{ background: c, borderColor: 'var(--border-dim)' }} />
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-4">
            <a href="#contact" className="term-btn">
              ❯&nbsp;./exec_contact.sh
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Anurag_Pradhan.pdf`}
              target="_blank"
              rel="noreferrer"
              className="term-btn term-btn-ghost"
            >
              ❯&nbsp;wget resume.pdf
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Header
