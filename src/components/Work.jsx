import React from 'react'
import send_icon from '../assets/send-icon.png'
import { motion } from 'framer-motion'

const ProjectCard = ({ title, tech, bgImage, link, index }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-3xl border border-black/5 dark:border-white/5 shadow-lg bg-gray-100 dark:bg-[#111]"
  >
    {/* Techier card header */}
    <div className="absolute top-0 left-0 right-0 p-6 z-40 flex justify-between items-start pointer-events-none">
        <span className="font-Mono text-[10px] text-white bg-blue-600 px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            PROJECT_NODE_0{index + 1}
        </span>
        <span className="font-Mono text-[10px] text-white/60 group-hover:text-blue-400 transition-colors uppercase tracking-widest">
            inference: ready
        </span>
    </div>

    <img 
        src={bgImage} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale-[60%] group-hover:grayscale-0 group-hover:scale-110"
        loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90 transition-opacity" />
    
    {/* Corner Brackets for Card */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-4">
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>
    </div>

    <div className="absolute inset-0 flex flex-col justify-end p-8 z-30">
        <h3 className="text-white font-Outfit font-black text-2xl mb-2 tracking-tight leading-none uppercase text-left group-hover:text-blue-400 transition-colors drop-shadow-md">{title}</h3>
        <p className="text-gray-200 font-Mono text-[10px] font-bold tracking-[0.2em] mb-6 uppercase leading-relaxed text-left max-w-[90%] drop-shadow-sm opacity-90">
            // {tech}
        </p>
        
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-max flex items-center gap-3 text-white font-Mono text-xs font-black bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all uppercase tracking-widest"
        >
            RUN_SOURCE() <img src={send_icon} alt="" className="w-3 invert"/>
        </a>
    </div>
  </motion.div>
);

const Work = () => {
  const projects = [
    {
        title: "DrishtiAI — Android App",
        tech: "VLMs (SmolVLM2), Quantization, llama.cpp, Kotlin",
        bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        link: "https://github.com/anurag965"
    },
    {
        title: "CMCA ActionNet – Spatio  Temporal  Multimodal  Action  Detection",
        tech: "PyTorch, Causal Attention, JHMDB Dataset, Optical Flow, MediaPipe",
        bgImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
        link: "https://github.com/anurag965"
    },
    {
        title: "Brain Tumor Segmentation",
        tech: "Python, Vision Transformers, BEiT, Segmentation",
        bgImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800",
        link: "https://github.com/anurag965/Brain-Tumor-Segmentation"
    },
    {
        title: "JanaSathi: Odia E-Gov Chatbot",
        tech: "Python, Transformers, LangChain, RAG",
        bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        link: "https://github.com/anurag965/OdiaGenAI_Hackathon"
    }
  ];

  const publication = {
    title: "Towards Blind and Low-Vision Accessibility of Lightweight VLMs and Custom LLM-Evals",
    authors: "S. S. Baghel, Y. P. S. Rathore, A. Pradhan",
    conference: "IJCNLP–AACL 2025, Mumbai, India",
    status: "Accepted at IJCNLP–AACL 2025"
  };

  return (
    <div id="work" className="w-full px-6 md:px-[12%] py-24 scroll-mt-20 flex flex-col items-center relative">
        {/* Background Decal */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden xl:block">
            <div className="font-Mono text-[100px] font-black leading-none text-gray-400 rotate-90 uppercase tracking-tighter">
                RESEARCH
            </div>
        </div>

        {/* Publication Section */}
        <div className="w-full max-w-5xl mb-32 relative z-10">
            <div className="flex flex-col items-center mb-16">
                <span className="text-blue-600 font-Mono font-black uppercase tracking-[0.5em] text-[10px] mb-4">&lt; PEER_REVIEWED /&gt;</span>
                <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 dark:text-gray-100 uppercase tracking-tighter">Publications</h2>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
            >
                {/* Refined Tech Corner Brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-600/50"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-600/50"></div>

                <div className="absolute top-0 right-0 bg-blue-600 text-white font-Mono font-bold text-[10px] px-6 py-2 uppercase tracking-widest">
                    PUBLISHED_ACL
                </div>
                
                <div className="flex flex-col gap-6">
                    <div className="font-Mono text-[10px] text-blue-500 font-bold tracking-widest uppercase opacity-60">
                        // 01. model_eval_accessibility
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 uppercase leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-left max-w-3xl">
                        {publication.title}
                    </h3>
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <p className="text-base text-gray-500 dark:text-gray-400 font-Outfit text-left italic">
                            {publication.authors}
                        </p>
                        <div className="h-[1px] w-12 bg-blue-500/20 hidden md:block"></div>
                        <p className="font-Mono font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider text-[10px] leading-relaxed text-left border border-blue-500/20 px-3 py-1 rounded-md">
                            {publication.conference}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Projects Section */}
        <div className="w-full max-w-6xl relative z-10">
            <div className="flex flex-col items-center mb-16">
                <span className="text-blue-600 font-Mono font-black uppercase tracking-[0.5em] text-[10px] mb-4">&lt; SYSTEM_INFERENCE /&gt;</span>
                <h2 className="text-4xl md:text-6xl font-black text-center text-gray-900 dark:text-gray-100 uppercase tracking-tighter">Selected Work</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((proj, index) => (
                    <ProjectCard key={index} {...proj} index={index} />
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-24 text-center"
            >
                <a 
                    href="https://github.com/anurag965?tab=repositories" 
                    className="inline-block px-12 py-4 bg-transparent border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 font-Mono font-black uppercase rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all duration-300 tracking-widest text-xs shadow-lg"
                >
                    BROWSE_ALL_NODES()
                </a>
            </motion.div>
        </div>
    </div>
  )
}

export default Work
