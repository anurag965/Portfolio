import React from 'react'
import user_image from '../assets/user-image.webp'
import vscode from '../assets/vscode.png'
import firebase from '../assets/firebase.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import mongodb from '../assets/mongodb.png'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id="about" className="w-full px-6 md:px-[12%] py-24 scroll-mt-20 flex flex-col items-center relative overflow-hidden">
        {/* Background Decorative Tech Element */}
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none hidden lg:block">
            <div className="font-Mono text-[120px] font-black leading-none text-gray-400 rotate-12 uppercase tracking-tighter">
                ABOUT
            </div>
        </div>

        <div className="w-full max-w-6xl relative z-10">
            <div className="flex flex-col items-center mb-12">
                <span className="text-blue-600 font-Mono font-black uppercase tracking-[0.5em] text-[10px] mb-3">&lt; SYSTEM_PROFILE /&gt;</span>
                <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 dark:text-gray-100 uppercase tracking-tighter">Researcher</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    viewport={{ once: true }}
                    className="w-full max-w-sm relative group"
                >
                    {/* Bounding Box HUD for About Image */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-blue-600 opacity-40"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-blue-600 opacity-40"></div>
                    
                    <div className="absolute top-0 right-0 bg-blue-600 text-white font-Mono text-[8px] px-2 py-1 uppercase tracking-widest z-20">
                        verified_identity
                    </div>

                    <img 
                        src={user_image} 
                        alt="Anurag Pradhan" 
                        loading="lazy"
                        className="rounded-2xl w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative z-10"
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-10"
                >
                    <div className="space-y-4">
                        <div className="font-Mono text-xs text-blue-600 font-black tracking-widest uppercase mb-2">
                            // 01. executive_summary
                        </div>
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-Outfit">
                            I am a <span className="text-blue-600 dark:text-blue-600 font-black uppercase font-Mono">Deep Learning Engineer</span> and researcher at <span className="text-gray-900 dark:text-gray-100 font-black">VIT Chennai</span>. My core focus lies in the intersection of <span className="underline decoration-blue-600 decoration-2 underline-offset-4">accessibility</span> and efficient neural architectures.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="p-8 bg-gray-50 dark:bg-[#111] rounded-3xl border-2 border-black/5 dark:border-white/5 relative group hover:border-blue-600/30 transition-all">
                            <div className="font-Mono text-[10px] text-blue-600 font-black uppercase mb-4 opacity-60">core_expertise</div>
                            <p className="font-Outfit font-bold text-gray-900 dark:text-gray-100 text-lg leading-tight uppercase tracking-tight">
                                Computer Vision, VLMs, Generative AI & Image Processing
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 dark:bg-[#111] rounded-3xl border-2 border-black/5 dark:border-white/5 relative group hover:border-blue-600/30 transition-all">
                            <div className="font-Mono text-[10px] text-blue-600 font-black uppercase mb-4 opacity-60">primary_stack</div>
                            <p className="font-Outfit font-bold text-gray-900 dark:text-gray-100 text-lg leading-tight uppercase tracking-tight">
                                PyTorch, Hugging Face, Llama.cpp & LangChain
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-gray-900 dark:text-gray-100 font-Mono font-black uppercase tracking-[0.3em] text-[10px] opacity-40">
                            &lt; TOOL_ECOSYSTEM /&gt;
                        </h4>
                        <div className="flex flex-wrap gap-10 items-center grayscale opacity-40 hover:opacity-100 transition-all duration-500">
                            <img src={vscode} alt="VSCode" className="h-8 w-auto hover:scale-125 transition-transform"/>
                            <img src={git} alt="Git" className="h-8 w-auto hover:scale-125 transition-transform"/>
                            <img src={mongodb} alt="MongoDB" className="h-8 w-auto hover:scale-125 transition-transform"/>
                            <img src={firebase} alt="Firebase" className="h-8 w-auto hover:scale-125 transition-transform"/>
                            <img src={figma} alt="Figma" className="h-8 w-auto hover:scale-125 transition-transform"/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About
