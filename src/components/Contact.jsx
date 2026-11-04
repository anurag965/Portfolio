import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SpotlightCard from './SpotlightCard'

const channels = [
  {
    name: 'Direct Email',
    value: 'anuragpradhancb@gmail.com',
    href: 'mailto:anuragpradhancb@gmail.com',
    icon: '✉️',
    desc: 'Research discussions, lab inquiries & collaborations',
    isCopy: true,
  },
  {
    name: 'GitHub Repositories',
    value: 'github.com/anurag965',
    href: 'https://github.com/anurag965',
    icon: '🐙',
    desc: 'Open-source code, training runs & model implementations',
  },
  {
    name: 'LinkedIn Network',
    value: 'in/anurag-pradhan-0340bb288',
    href: 'https://www.linkedin.com/in/anurag-pradhan-0340bb288',
    icon: '💼',
    desc: 'Professional background, career updates & connections',
  },
  {
    name: 'Google Scholar',
    value: 'Anurag Pradhan Profile',
    href: 'https://scholar.google.co.in/citations?hl=en&user=_cFdzngAAAAJ',
    icon: '🎓',
    desc: 'Citation metrics & peer-reviewed research papers',
  },
]

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('anuragpradhancb@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="space-y-10">
      
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
            // INQUIRIES &amp; CONNECT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect &amp; Collaborate
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
          Open to research discussions, graduate lab discussions, and engineering opportunities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {channels.map((ch) => (
          <SpotlightCard
            key={ch.name}
            className="p-6 sm:p-7 shadow-lg"
            tilt={true}
            spotlightColor="var(--accent-glow)"
          >
            <a
              href={ch.href}
              target={ch.isCopy ? undefined : '_blank'}
              rel="noreferrer"
              onClick={ch.isCopy ? (e) => { e.preventDefault(); copyEmail(); } : undefined}
              className="flex items-center justify-between w-full cursor-pointer group"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <span className="w-12 h-12 rounded-2xl glass-chip flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-all shadow-sm">
                  {ch.icon}
                </span>
                <div className="space-y-1">
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-[var(--accent-light)] transition-colors">
                    {ch.name}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-slate-300 break-all">
                    {ch.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-sans">
                    {ch.desc}
                  </div>
                </div>
              </div>

              <span className="text-slate-500 group-hover:text-[var(--accent)] transition-all text-sm shrink-0 font-mono ml-2">
                {ch.isCopy ? (copied ? '✓' : 'Copy') : '↗'}
              </span>
            </a>
          </SpotlightCard>
        ))}
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center text-sm font-mono pt-2 flex items-center justify-center gap-2"
            style={{ color: 'var(--accent-light)' }}
          >
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: 'var(--accent)' }} />
            <span>✓ Email copied to clipboard (anuragpradhancb@gmail.com)</span>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

export default Contact
