import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import logo_dark from '../assets/logo_dark.png'
import moon_icon from '../assets/moon_icon.png'
import sun_icon from '../assets/sun_icon.png'
import menu_black from '../assets/menu-black.png'
import menu_white from '../assets/menu-white.png'
import close_black from '../assets/close-black.png'
import close_white from '../assets/close-white.png'

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateY(0)';
    document.body.style.overflow = 'hidden';
  }
  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateY(-100%)';
    document.body.style.overflow = 'auto';
  }
  
  const toggleTheme = ()=>{
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const sections = ['top', 'about', 'services', 'work', 'contact'];
    const observerOptions = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#top', id: 'top' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#work', id: 'work' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none flex justify-center">
        <div 
            className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-500 pointer-events-auto ${
                isScrolled 
                ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-xl' 
                : 'bg-transparent border-transparent'
            }`}
        >
            <a href="#top" className="flex items-center gap-2 group">
                <img src={logo} alt="Logo" className="w-20 dark:hidden" />
                <img src={logo_dark} alt="Logo" className="w-20 hidden dark:block" />
            </a>

            <ul className="hidden md:flex items-center gap-4 bg-gray-100/50 dark:bg-white/5 px-4 py-2 rounded-full border border-black/5 dark:border-white/5">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a 
                            href={link.href} 
                            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 px-3 py-1 rounded-full ${
                                activeSection === link.id 
                                ? 'text-blue-600 dark:text-blue-500 bg-blue-600/10' 
                                : 'text-gray-500 dark:text-gray-400 hover:text-blue-600'
                            }`}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-3">
                <button 
                    onClick={toggleTheme} 
                    className="p-2.5 rounded-xl border border-black/5 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                >
                    <img src={moon_icon} alt="" className="w-4 dark:hidden" />
                    <img src={sun_icon} alt="" className="w-4 hidden dark:block" />
                </button>

                <a href="#contact" 
                    className="hidden sm:block px-6 py-2.5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
                >
                    Hire_Me
                </a>

                <button 
                    className="md:hidden p-2.5 rounded-xl border border-black/5 dark:border-white/5" 
                    onClick={openMenu}
                >
                    <img src={menu_black} alt="" className="w-5 dark:hidden" />
                    <img src={menu_white} alt="" className="w-5 hidden dark:block" />
                </button>
            </div>
        </div>
    </nav>

    {/* -- Modern Mobile Overlay -- */}
    <div 
        ref={sideMenuRef} 
        className="fixed top-[-100%] left-0 w-full h-full bg-white dark:bg-[#0a0a0a] z-[100] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex items-center justify-center"
    >
        <button className="absolute top-10 right-10 p-4" onClick={closeMenu}>
            <img src={close_black} alt="" className="w-6 dark:hidden" />
            <img src={close_white} alt="" className="w-6 hidden dark:block" />
        </button>

        <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-Mono font-black text-blue-600 uppercase tracking-[0.5em]">Nav_Interface</span>
                <div className="w-12 h-[2px] bg-blue-600"></div>
            </div>
            
            <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link, idx) => (
                    <li key={link.name}>
                        <a 
                            href={link.href} 
                            onClick={closeMenu}
                            className="text-5xl font-black uppercase tracking-tighter text-gray-900 dark:text-white hover:text-blue-600 transition-colors flex items-baseline gap-4"
                        >
                            <span className="text-xs font-Mono text-blue-600">0{idx + 1}</span>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex gap-8 mt-8">
                <a target='_blank' rel="noreferrer" href="https://github.com/anurag965" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">GH</a>
                <a target='_blank' rel="noreferrer" href="https://linkedin.com" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">LI</a>
                <a href="mailto:anuragpradhancb@gmail.com" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">MAIL</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
