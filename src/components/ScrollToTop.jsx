import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#0b0f1a]/90 hover:bg-[#151f38] text-slate-300 border border-white/10 shadow-2xl backdrop-blur-md transition-colors cursor-pointer group"
          style={{ borderColor: 'var(--border)' }}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <span className="text-sm block group-hover:-translate-y-0.5 transition-transform" style={{ color: 'var(--accent-light)' }}>↑</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
