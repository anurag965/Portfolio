import React from 'react'
import ParticlesBackground from './components/ParticlesBackground'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  
  return (
    <>
        <ParticlesBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
            <Navbar/>
            <Header/>
            <About/>
            <Services/>
            <Work/>
            <Contact/>
            <Footer/>
        </div>
        <ScrollToTop />
    </>
  )
}

export default App
