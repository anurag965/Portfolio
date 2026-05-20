import React, { useState, useEffect } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
    <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
    </AnimatePresence>
    
    <div className={`min-h-screen bg-white dark:bg-[#0a0a0a] relative transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Advanced Grid & Scanline Background */}
        <div className="fixed inset-0 bg-grid z-0 opacity-100 pointer-events-none"></div>
        <div className="ambient-glow"></div>
        <div className="fixed inset-0 scanline z-[5] opacity-20 pointer-events-none"></div>
        
        {/* Edge Decals (HUD Style) */}
        <div className="fixed top-4 left-4 font-Mono text-[10px] opacity-20 z-50 pointer-events-none hidden md:block uppercase tracking-widest">
            UPLINK: STABLE // SYS_ID: ANURAG_DL_v3.0
        </div>
        <div className="fixed bottom-4 left-4 font-Mono text-[10px] opacity-20 z-50 pointer-events-none hidden md:block uppercase tracking-widest">
            LOC: 12.83, 80.15 // NODE: CHENNAI_VIT
        </div>

        <div className="relative z-[10] flex flex-col items-center">
            <Navbar/>
            <Header/>
            <div className="w-full max-w-7xl flex flex-col items-center">
                <About/>
                <Services/>
                <Work/>
                <Contact/>
                <Footer/>
            </div>
        </div>
        <ScrollToTop />
    </div>
    </>
  )
}

export default App
