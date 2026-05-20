import React from 'react'
import logo from '../assets/logo.png'
import logo_dark from '../assets/logo_dark.png'

const Footer = () => {
  return (
    <footer className="w-full px-6 py-12 mb-12 flex justify-center">
        <div className="w-full max-w-5xl bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            {/* HUD background decoration */}
            <div className="absolute left-0 bottom-0 opacity-[0.03] pointer-events-none select-none font-Mono text-7xl font-black uppercase -rotate-12 translate-y-1/2">
                Terminal
            </div>

            <div className="flex flex-col items-center md:items-start gap-4 relative z-10">
                <img src={logo} alt="Logo" className="w-24 dark:hidden"/>
                <img src={logo_dark} alt="Logo" className="w-24 hidden dark:block"/>
                <p className="text-xs text-gray-500 font-Mono uppercase tracking-widest">
                    Deep Learning Engineer // SYS_v3.1.2
                </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6 relative z-10">
                <div className="flex items-center gap-8 text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400">
                    <a target='_blank' rel="noreferrer" href="https://github.com/anurag965" className="hover:text-blue-600 transition-colors">GitHub</a>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/anurag-pradhan-0340bb288/" className="hover:text-blue-600 transition-colors">LinkedIn</a>
                    <a href="mailto:anuragpradhancb@gmail.com" className="hover:text-blue-600 transition-colors">Uplink</a>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[10px] text-gray-400 font-Mono uppercase tracking-wider">© 2026 Anurag Pradhan</span>
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.5)]"></span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
