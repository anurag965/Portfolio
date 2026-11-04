import React from 'react'

const Footer = ({ onOpenTerminal }) => {
  return (
    <footer className="w-full max-w-6xl mx-auto px-5 sm:px-8 pb-14 pt-8 text-sm font-mono text-slate-400 relative z-10 border-t border-white/[0.08]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <span className="font-bold text-white text-base">Anurag Pradhan</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">Deep Learning &amp; Computer Vision</span>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://github.com/anurag965"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent-light)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-pradhan-0340bb288/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent-light)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://scholar.google.co.in/citations?hl=en&user=_cFdzngAAAAJ"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent-light)] transition-colors"
          >
            Google Scholar
          </a>
          <button
            onClick={onOpenTerminal}
            className="hover:text-[var(--accent-light)] transition-colors cursor-pointer text-slate-400 hidden sm:inline-block"
            title="Open Interactive Shell (Cmd+K)"
          >
            Shell [⌘K]
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
