import React, { useEffect, useRef, useState } from 'react'

const navLinks = [
  { name: 'home',       href: '#top',        id: 'top' },
  { name: 'about',      href: '#about',      id: 'about' },
  { name: 'experience', href: '#experience', id: 'experience' },
  { name: 'education',  href: '#education',  id: 'education' },
  { name: 'work',       href: '#work',       id: 'work' },
  { name: 'contact',    href: '#contact',    id: 'contact' },
]

const Navbar = () => {
  const sideMenuRef = useRef()
  const [activeSection, setActiveSection] = useState('top')
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(0)'
    document.body.style.overflow = 'hidden'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-100%)'
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.5 }
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  return (
    <>
      {/* ── TITLE BAR ─────────────────────────────── */}
      <div
        className="fixed top-0 left-0 w-full z-50 term-titlebar"
        style={{ boxShadow: scrolled ? '0 1px 0 var(--border-dim)' : 'none' }}
      >
        {/* Window chrome row */}
        <div className="flex items-center gap-4 px-5 py-3 border-b" style={{ borderColor: 'var(--border-dim)' }}>
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          </div>

          {/* Path breadcrumb */}
          <div className="hidden md:flex items-center gap-1 text-xs font-Mono" style={{ color: 'var(--text-dim)' }}>
            <span>~/anurag-pradhan</span>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span style={{ color: 'var(--blue)' }}>portfolio</span>
            <span style={{ color: 'var(--border)' }}>—</span>
            <span style={{ color: 'var(--green, #3fb950)' }}>●</span>
            <span className="ml-0.5">main</span>
          </div>

          <div className="flex-1" />

          {/* Status */}
          <div className="hidden md:flex items-center gap-3 text-xs font-Mono" style={{ color: 'var(--text-dim)' }}>
            <span>bash</span>
            <span style={{ color: 'var(--border)' }}>·</span>
            <span>UTF-8</span>
          </div>

          {/* Theme switcher */}
          <button 
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            className="flex items-center justify-center p-1.5 rounded border transition-all duration-200 hover:scale-105"
            style={{ 
              borderColor: 'var(--border)', 
              color: 'var(--text-primary)',
              background: 'var(--bg-hover)',
              fontSize: '14px',
              cursor: 'pointer'
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Hire Me */}
          <a href="#contact" className="term-btn text-xs hidden sm:inline-flex">
            ./hire_me.sh
          </a>

          {/* Mobile menu */}
          <button onClick={openMenu} className="md:hidden text-lg font-bold font-Mono" style={{ color: 'var(--text-secondary)' }}>
            ≡
          </button>
        </div>

        {/* Tab bar */}
        <div className="hidden md:flex items-center px-5 overflow-x-auto" style={{ background: 'var(--bg)' }}>
          {navLinks.map(({ name, href, id }, i) => (
            <a
              key={id}
              href={href}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-Mono transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeSection === id ? 'term-tab-active' : 'term-tab-inactive'
              }`}
            >
              <span style={{ color: 'var(--text-dim)', fontSize: '10px' }}>{String(i + 1).padStart(2,'0')}</span>
              {name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        ref={sideMenuRef}
        className="fixed inset-0 z-[200] -translate-x-full transition-transform duration-500 flex"
        style={{ background: 'rgba(10, 12, 16, 0.7)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <div className="w-72 h-full flex flex-col p-8 gap-8 border-r" style={{ borderColor: 'var(--border-dim)', background: 'rgba(15, 20, 30, 0.4)' }}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-Mono" style={{ color: 'var(--text-dim)' }}>// navigation</span>
            <button onClick={closeMenu} className="text-xl font-Mono" style={{ color: 'var(--text-secondary)' }}>✕</button>
          </div>
          <ul className="flex flex-col gap-5 mt-2">
            {navLinks.map(({ name, href, id }, i) => (
              <li key={id}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="flex items-baseline gap-3 text-2xl font-black font-Mono uppercase transition-colors"
                  style={{ color: activeSection === id ? 'var(--blue)' : 'var(--text-secondary)' }}
                >
                  <span className="text-xs font-Mono" style={{ color: 'var(--text-dim)' }}>0{i + 1}.</span>
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button 
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              className="flex items-center gap-2 px-4 py-2 rounded border text-sm font-Mono"
              style={{ 
                borderColor: 'var(--border)', 
                color: 'var(--text-primary)',
                background: 'var(--bg-hover)',
                cursor: 'pointer'
              }}
            >
              <span>{theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}</span>
            </button>
          </div>
          <div className="mt-auto text-xs font-Mono" style={{ color: 'var(--text-dim)' }}>
            guest@anurag-sys:~$&nbsp;<span className="cursor-blink" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
