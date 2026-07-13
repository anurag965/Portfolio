import React, { useState } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Experience from './components/Experience'
import Education from './components/Education'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import GutterSidebars from './components/GutterSidebars'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Subtle CRT overlays */}
      <div className="crt-scanlines" aria-hidden="true" />
      <div className="crt-vignette"  aria-hidden="true" />
      <div className="crt-beam"      aria-hidden="true" />
      <div className="crt-grid"      aria-hidden="true" />

      <div
        className={`relative z-10 min-h-screen flex flex-col transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ background: 'var(--bg)' }}
      >
        <Navbar />
        <GutterSidebars />

        <main className="flex-1 w-full max-w-5xl mx-auto px-6 md:px-12 py-10 font-Mono">
          <Header />
          <About />
          <Experience />
          <Education />
          <Work />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default App
