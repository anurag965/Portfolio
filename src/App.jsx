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

      {/* Apple Glass Background Blobs */}
      <div className="glass-bg-blobs" aria-hidden="true">
        <div className="glass-blob glass-blob-1" />
        <div className="glass-blob glass-blob-2" />
        <div className="glass-blob glass-blob-3" />
      </div>

      <div
        className={`relative z-10 min-h-screen flex flex-col transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ background: 'transparent' }}
      >
        <Navbar />
        <GutterSidebars />

        <main className="flex-1 w-full max-w-5xl mx-auto px-4 md:px-12 pt-20 pb-10 md:pt-32 md:pb-16 font-Mono">
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
