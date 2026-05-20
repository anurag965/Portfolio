import React, { useState, useEffect } from 'react'
import profile_img from '../assets/profile-img.webp'
import { motion } from 'framer-motion'

const Header = () => {
  const [scrambledName, setScrambledName] = useState("*******");
  const targetName = "ANURAG";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledName(prev => 
        targetName.split("")
          .map((letter, index) => {
            if(index < iteration) return targetName[index];
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      );
      
      if(iteration >= targetName.length) clearInterval(interval);
      iteration += 1/10; // Slowed down from 1/3
    }, 50); // Increased interval from 40ms
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="top" className="w-full min-h-screen px-6 py-20 flex flex-col items-center justify-center relative overflow-hidden">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }} // Slower container entrance
            className="w-full max-w-5xl flex flex-col items-center text-center gap-6 md:gap-8 relative z-10"
        >
            <div className="relative group p-4 inline-block">
                {/* HUD-style brackets for profile image */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-600 opacity-50 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-600 opacity-50 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-600 opacity-50 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-600 opacity-50 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>

                <motion.img 
                    src={profile_img} 
                    alt="Anurag Pradhan" 
                    fetchpriority="high"
                    loading="eager"
                    initial={{ filter: "brightness(0) invert(1)", opacity: 0 }}
                    animate={{ filter: "brightness(1) invert(0)", opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }} // Slower reveal
                    className="relative z-10 rounded-2xl w-36 md:w-40 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl mx-auto"
                />
                
                <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-white dark:border-[#0a0a0a] animate-pulse z-20 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            </div>
            
            <div className="flex flex-col gap-4">
                <motion.h3 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-blue-600 dark:text-blue-600 font-Mono font-black tracking-[0.3em] text-xs uppercase mb-1"
                >
                    &lt; DL_ENGINEER_INIT /&gt;
                </motion.h3>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-Outfit tracking-tighter leading-none text-gray-900 dark:text-gray-100 uppercase">
                    <div className="flex items-center justify-center gap-3">
                        <motion.span 
                            initial={{ x: 40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 1 }}
                            className="text-blue-600"
                        >[</motion.span>
                        
                        <span className="inline-block min-w-[1.2em]">
                            {scrambledName}
                        </span>

                        <motion.span 
                            initial={{ x: -40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 1 }}
                            className="text-blue-600"
                        >]</motion.span>
                    </div>
                    
                    <motion.span
                        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 1.5, delay: 2.2 }} // Much later reveal
                        className="text-blue-600 block mt-2"
                    >
                        Pradhan
                    </motion.span>
                </h1>
                
                <div className="max-w-2xl mx-auto flex flex-col gap-4 px-2 sm:px-0">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2.8 }}
                        className="font-Outfit text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium italic"
                    >
                        "Bridging neural architectures with real-world impact."
                    </motion.p>
                    <div className="w-20 md:w-24 h-[1px] bg-blue-600/30 mx-auto"></div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 3.2 }}
                        className="font-Outfit text-base md:text-base text-gray-700 dark:text-gray-300"
                    >
                        Skilled in <span className="text-blue-600 dark:text-blue-600 font-bold font-Mono">CNNs</span>, <span className="text-blue-600 dark:text-blue-600 font-bold font-Mono">ViTs</span>, and <span className="text-blue-600 dark:text-blue-600 font-bold font-Mono">LLMs</span> with on-device optimization expertise.
                    </motion.p>
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3.8 }}
                className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mt-6 w-full sm:w-auto px-4 sm:px-0"
            >
                <a 
                    href="#contact"
                    className="w-full sm:w-auto group relative px-12 py-5 font-Mono font-black uppercase overflow-hidden border-2 border-black dark:border-white transition-all duration-300 text-center text-sm"
                >
                    <span className="absolute inset-0 bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                    <span className="relative group-hover:text-white dark:group-hover:text-black">EXEC_CONTACT()</span>
                </a>

                <a 
                    href={`${import.meta.env.BASE_URL}Anurag_Pradhan.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="group px-6 py-2 flex items-center gap-4 font-Mono text-xs font-bold tracking-widest text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-all cursor-pointer uppercase" 
                >
                    <span className="w-10 h-[1px] bg-gray-300 dark:bg-gray-700 group-hover:w-16 group-hover:bg-blue-600 transition-all"></span>
                    FETCH_RESUME.pdf
                </a>
            </motion.div>
        </motion.div>

        {/* Vertical HUD Labels */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-24 opacity-10 pointer-events-none">
            <span className="font-Mono text-[10px] uppercase tracking-[0.5em] -rotate-90">PROCESSING_DATA...</span>
            <span className="font-Mono text-[10px] uppercase tracking-[0.5em] -rotate-90">RESEARCH_ACTIVE</span>
            <span className="font-Mono text-[10px] uppercase tracking-[0.5em] -rotate-90">NODE_VIT_CHENNAI</span>
        </div>
    </div>
  )
}

export default Header
