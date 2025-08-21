import React from 'react'
import profile_img from '../assets/profile-img.png'
import right_arrow_white from '../assets/right-arrow-white.png'
import download_icon from '../assets/download-icon.png'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
    <motion.img 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src={profile_img} alt="" className="rounded-full w-32"/>
    <motion.h3 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Anurag Pradhan <img src="./assets/hand-icon.png" alt="" className="w-6"/>
    </motion.h3>
    <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Deep Learning Engineer.</motion.h1>
    <motion.p 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-2xl mx-auto font-Ovo">I am a Deep Learning enthusiast from Chennai, India with 2 years of experience learning and applying Deep Learning and GenAI for public welfare.</motion.p>

    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact"
        className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent hover:scale-105 transition-transform">
        contact me <img src={right_arrow_white} alt="" className="w-4"/></a>

        <a className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black hover:bg-gray-100 dark:hover:bg-gray-800" style={{ cursor: "pointer" }} onClick={() => window.open("/Anurag_Pradhan.pdf", "_blank")}>
        My Resume </a>
    </motion.div>
</div>
  )
}

export default Header
