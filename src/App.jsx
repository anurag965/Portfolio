import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import InteractiveCanvas from './components/InteractiveCanvas'
import Navbar from './components/Navbar'
import Header from './components/Header'
import TechMarquee from './components/TechMarquee'
import Work from './components/Work'
import Experience from './components/Experience'
import About from './components/About'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Terminal from './components/Terminal'
import ScrollToTop from './components/ScrollToTop'

const AppContent = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Global CMD+K shortcut to toggle interactive terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsTerminalOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-white/20 selection:text-white relative overflow-x-hidden">
      
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] origin-left z-50 pointer-events-none shadow-md"
        style={{
          scaleX,
          backgroundColor: 'var(--accent)',
          boxShadow: '0 0 12px var(--accent)',
        }}
      />

      {/* Interactive Neural Constellation Canvas */}
      <InteractiveCanvas />

      {/* Subtle Geometric Grid & Atmospheric Theme Glows */}
      <div className="ambient-grid" aria-hidden="true" />
      <div className="ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow-2" aria-hidden="true" />

      {/* Floating Island Navigation */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-10 pt-32 pb-28 space-y-28">
        <Header onOpenTerminal={() => setIsTerminalOpen(true)} />
        <TechMarquee />
        <Work />
        <Experience />
        <About />
        <Education />
        <Contact />
      </main>

      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />
      <ScrollToTop />

      {/* Interactive CLI Terminal Modal */}
      <Terminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
