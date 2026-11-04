import React, { useState, useEffect } from 'react'
import profile_img from '../assets/profile-img.webp'
import { motion, AnimatePresence } from 'framer-motion'
import SpotlightCard from './SpotlightCard'

const rotatingWords = [
  'Generative AI Models',
  'Diffusion Architectures',
  'On-Device Edge VLMs',
  '3D Medical Synthesis',
  'Flight Software',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const focusAreas = [
  { name: '3D Volumetric Diffusion', icon: '🧬' },
  { name: 'Mamba & SSM Architectures', icon: '⚡' },
  { name: 'On-Device Spatial VLMs', icon: '👁️' },
  { name: 'Flight Software', icon: '🛰️' },
]

const Header = ({ onOpenTerminal }) => {
  const [wordIndex, setWordIndex] = useState(0)
  const [isCardHovered, setIsCardHovered] = useState(false)

  // Rotating headline specialty animation
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section
      id="top"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-6 sm:pt-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Headline & Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7">
          
          {/* Eyebrow badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs sm:text-sm font-mono text-slate-300 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--accent)' }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: 'var(--accent)' }} />
              </span>
              <span>AI &amp; Systems Researcher · CSE @ VIT Chennai '27</span>
            </div>
          </motion.div>

          {/* Large Bold Headline with Animated Word Switcher */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Anurag Pradhan
            </h1>
            
            <div className="h-16 sm:h-20 lg:h-24 flex items-center overflow-hidden">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mr-3">
                Engineering
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -35, filter: 'blur(8px)' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient-theme inline-block"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Comfortable, High-Readability Bio */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal">
            I develop cross-modal 3D medical synthesis pipelines using <span className="text-white font-semibold">Diffusion Models &amp; Mamba</span> under Prof. Aditya Nigam at <strong className="text-white font-semibold">IIT Mandi</strong>, and architect 100% offline multimodal vision assistants for on-device spatial accessibility.
          </motion.p>

          {/* Focus Area Badges with Springy Hover */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 pt-1">
            {focusAreas.map(f => (
              <motion.span
                key={f.name}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-chip text-xs sm:text-sm font-mono text-slate-200 cursor-default"
              >
                <span>{f.icon}</span>
                <span>{f.name}</span>
              </motion.span>
            ))}
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-3">
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="#research"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all shadow-lg flex items-center gap-2 group cursor-pointer"
              style={{
                backgroundColor: 'var(--accent-btn)',
                color: 'var(--accent-btn-text)',
                boxShadow: '0 0 25px var(--accent-glow)',
              }}
            >
              <span>Explore Research &amp; Work</span>
              <span className="text-sm group-hover:translate-y-1 transition-transform">↓</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={`${import.meta.env.BASE_URL}Anurag_Pradhan_Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-xl glass-chip text-sm sm:text-base font-medium text-slate-200 hover:text-white transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Curriculum Vitae</span>
              <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenTerminal}
              className="px-4 py-3.5 rounded-xl glass-chip text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
              title="Open Interactive Terminal"
            >
              <span style={{ color: 'var(--accent)' }}>❯_</span>
              <span>Shell</span>
              <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 font-mono">⌘K</kbd>
            </motion.button>
          </motion.div>

        </div>

        {/* Right Column: Floating 3D Tilt Portrait Card (5 cols) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex flex-col items-center lg:items-end"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full max-w-sm"
          >
            <div
              className="portrait-card group"
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
            >
              <SpotlightCard className="w-full p-3 sm:p-3.5 cursor-pointer" tilt={true} spotlightColor="var(--accent-glow)">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
                  {/* Profile Photo: Guaranteed smooth transition from black & white to full rich color on hover via both CSS & React */}
                  <img
                    src={profile_img}
                    alt="Anurag Pradhan"
                    className={`portrait-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
                      isCardHovered ? 'is-hovered' : ''
                    }`}
                    style={{
                      filter: isCardHovered
                        ? 'grayscale(0%) saturate(130%) contrast(102%) brightness(102%)'
                        : 'grayscale(100%) contrast(105%) brightness(92%)',
                      transition: 'filter 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                  
                  {/* Subtle Gradient vignette (non-blocking pointer events) */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent transition-opacity duration-500"
                    style={{ opacity: isCardHovered ? 0.15 : 0.65 }}
                  />
                  
                  {/* Clean location badge only (no affiliation, no publication, pointer-events-none) */}
                  <div className="pointer-events-none absolute bottom-4 left-4 flex items-center text-xs font-mono">
                    <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-slate-300">
                      Chennai, India
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default Header
