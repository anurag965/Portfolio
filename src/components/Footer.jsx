import React from 'react'

const Footer = () => (
  <footer
    className="w-full font-Mono text-xs px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 border-t"
    style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-dim)', color: 'var(--text-dim)' }}
  >
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--green, #3fb950)', boxShadow: '0 0 4px #3fb950' }} />
      <span>guest@anurag-sys:~ — session active</span>
    </div>

    <div className="flex items-center gap-6">
      {[
        ['./gh',  'https://github.com/anurag965'],
        ['./li',  'https://www.linkedin.com/in/anurag-pradhan-0340bb288/'],
        ['./gs',  'https://scholar.google.co.in/citations?hl=en&user=_cFdzngAAAAJ'],
      ].map(([label, href]) => (
        <a key={label} href={href} target="_blank" rel="noreferrer"
          style={{ color: 'var(--text-dim)' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--blue)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
        >
          {label}
        </a>
      ))}
    </div>

    <span>© 2026 Anurag Pradhan</span>
  </footer>
)

export default Footer
