import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ThemeSwitcher from './ThemeSwitcher'

const navLinks = [
  { name: 'Research', href: '#research' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['research', 'experience', 'skills', 'education', 'contact']
      const scrollPos = window.scrollY + 250
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 pt-5 pointer-events-none"
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between pointer-events-auto transition-all duration-300 px-5 py-3 rounded-2xl ${
          scrolled
            ? 'glass-hud shadow-2xl shadow-black/80'
            : 'glass-panel'
        }`}
      >
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <motion.span
            whileHover={{ scale: 1.08 }}
            className="w-9 h-9 rounded-xl glass-chip flex items-center justify-center text-sm font-mono font-bold text-white group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-all shadow-sm"
          >
            AP
          </motion.span>
          <span className="font-semibold text-base tracking-tight text-white group-hover:text-[var(--accent)] transition-colors">
            Anurag Pradhan
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-chip">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white bg-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Aesthetic Theme Switcher */}
          <ThemeSwitcher />

          {/* Shell Modal Trigger */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenTerminal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Open Interactive Shell (Cmd+K)"
          >
            <span className="text-[var(--accent)]">❯_</span>
            <span>Shell</span>
            <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-white/10 text-slate-400 font-mono">
              ⌘K
            </kbd>
          </motion.button>

          {/* Curriculum Vitae Download */}
          <motion.a
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            href={`${import.meta.env.BASE_URL}Anurag_Pradhan_Resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl font-mono font-medium text-xs sm:text-sm transition-all shadow-md"
            style={{
              backgroundColor: 'var(--accent-btn)',
              color: 'var(--accent-btn-text)',
            }}
          >
            <span>Resume</span>
            <span className="text-xs">↗</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar
