import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [latency, setLatency] = useState(42);
  const [uptime, setUptime] = useState('00:00:00');

  useEffect(() => {
    // Generate slight latency shifts for high-tech feeling
    const interval = setInterval(() => {
      setLatency(prev => Math.max(15, Math.min(120, prev + Math.floor(Math.random() * 21) - 10)));
    }, 4000);

    // Dynamic mock uptime counter
    const startTime = Date.now();
    const uptimeInterval = setInterval(() => {
      const diff = Date.now() - startTime;
      const secs = Math.floor(diff / 1000) % 60;
      const mins = Math.floor(diff / 60000) % 60;
      const hrs = Math.floor(diff / 3600000);
      setUptime(
        `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
      );
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(uptimeInterval);
    };
  }, []);

  return (
    <footer className="w-full max-w-5xl mx-auto px-4 pb-10 pt-4 font-Mono text-xs z-10 relative">
      <div className="apple-glass rounded-2xl p-6 md:p-8 flex flex-col gap-6 md:gap-8">
        
        {/* System Monitor Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-white/5 text-[10px] md:text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 uppercase tracking-wider text-[9px] font-bold">// SYSTEM STATUS</span>
            <div className="flex items-center gap-1.5 text-gray-300">
              <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span>GUEST_SESSION: ACTIVE</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 uppercase tracking-wider text-[9px] font-bold">// LOCAL LATENCY</span>
            <span className="text-gray-300 font-bold text-emerald-400">{latency}ms (STABLE)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 uppercase tracking-wider text-[9px] font-bold">// PROCESS UPTIME</span>
            <span className="text-gray-300 font-bold">{uptime}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 uppercase tracking-wider text-[9px] font-bold">// PORTFOLIO RENDERER</span>
            <span className="text-gray-300 font-bold text-sky-400">VITE_REACT @ v7.3</span>
          </div>
        </div>

        {/* Info & Navigation row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
              Anurag Pradhan
            </span>
            <span className="text-[10px] text-gray-500">
              Deep Learning & Computer Vision Engineer
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs">
            {[
              ['GitHub', 'https://github.com/anurag965'],
              ['LinkedIn', 'https://www.linkedin.com/in/anurag-pradhan-0340bb288/'],
              ['Scholar', 'https://scholar.google.co.in/citations?hl=en&user=_cFdzngAAAAJ'],
            ].map(([label, href]) => (
              <a 
                key={label} 
                href={href} 
                target="_blank" 
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-blue-600/10 text-gray-400 hover:text-blue-400 transition-all duration-300"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="text-[10px] text-gray-500 flex flex-col items-center md:items-end gap-1">
            <span>DESIGNED BY ANURAG — © {new Date().getFullYear()}</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
