import React, { useEffect, useState } from 'react'

const GutterSidebars = () => {
  const [logs, setLogs] = useState([
    'SYSTEM: Initialize portfolio...',
    'VRAM: Allocating 3.4GB for SmolVLM2...',
    'JNI: CUDA 12.1 loaded successfully.',
    'API: Uplink status OK.',
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      const messages = [
        'SYSTEM: Ping check OK',
        'CUDA: Temp 48°C | Fan 22%',
        'CPU: Load average 0.42 0.38 0.31',
        'API: GET /api/v1/projects 200',
        'VLM: On-device prompt template updated',
        'MEMORY: Garbage collection completed',
      ]
      const randomMsg = messages[Math.floor(Math.random() * messages.length)]
      const timestamp = new Date().toLocaleTimeString()
      setLogs(prev => [...prev.slice(-8), `[${timestamp}] ${randomMsg}`])
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Left Sidebar - File Tree */}
      <div 
        className="fixed left-6 top-32 w-64 hidden xl:flex flex-col font-Mono text-xs select-none border-r border-dashed"
        style={{ borderColor: 'var(--border-dim)', height: 'calc(100vh - 200px)', color: 'var(--text-secondary)' }}
      >
        <div className="text-xs font-bold mb-4 uppercase tracking-wider" style={{ color: 'var(--blue)' }}>
          // EXPLORER (PORTFOLIO)
        </div>
        <div className="space-y-1.5 pl-2">
          <div className="flex items-center gap-1.5">
            <span style={{ color: 'var(--yellow)' }}>📁</span>
            <span className="font-bold">anurag-portfolio</span>
          </div>
          <div className="pl-4 space-y-1.5 border-l" style={{ borderColor: 'var(--border-dim)' }}>
            <div className="flex items-center gap-1.5 opacity-60">
              <span>📁</span> <span>public</span>
            </div>
            <div className="pl-4 opacity-40">
              <span>📄</span> <span className="hover:text-blue-400">Anurag_Pradhan.pdf</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <span>📁</span> <span>src</span>
            </div>
            <div className="pl-4 space-y-1.5 border-l" style={{ borderColor: 'var(--border-dim)' }}>
              <div className="flex items-center gap-1.5">
                <span>📁</span> <span>components</span>
              </div>
              <div className="pl-4 space-y-1 opacity-60">
                <div><span>📄</span> <a href="#top">Header.jsx</a></div>
                <div><span>📄</span> <a href="#about">About.jsx</a></div>
                <div><span>📄</span> <a href="#experience">Experience.jsx</a></div>
                <div><span>📄</span> <a href="#education">Education.jsx</a></div>
                <div><span>📄</span> <a href="#work">Work.jsx</a></div>
                <div><span>📄</span> <a href="#contact">Contact.jsx</a></div>
              </div>
              <div className="flex items-center gap-1.5 opacity-60">
                <span>📄</span> <span>App.jsx</span>
              </div>
              <div className="flex items-center gap-1.5 opacity-60">
                <span>📄</span> <span>index.css</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 opacity-60">
              <span>📄</span> <span>package.json</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-60">
              <span>📄</span> <span>vite.config.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - System Stats & Logs */}
      <div 
        className="fixed right-6 top-32 w-64 hidden xl:flex flex-col font-Mono text-xs select-none border-l border-dashed pl-4"
        style={{ borderColor: 'var(--border-dim)', height: 'calc(100vh - 200px)', color: 'var(--text-secondary)' }}
      >
        <div className="text-xs font-bold mb-4 uppercase tracking-wider" style={{ color: 'var(--blue)' }}>
          // SYSTEM LOGS & MONITOR
        </div>

        {/* System parameters */}
        <div className="space-y-2 mb-6">
          <div>
            <span style={{ color: 'var(--text-dim)' }}>GPU:</span> Nvidia V100 / RTX 4090
          </div>
          <div>
            <span style={{ color: 'var(--text-dim)' }}>CUDA Version:</span> 12.1
          </div>
          <div className="flex flex-col gap-0.5">
            <span style={{ color: 'var(--text-dim)' }}>RAM Allocation:</span>
            <div className="flex items-center gap-2">
              <div className="w-24 bg-gray-800 h-2.5 rounded overflow-hidden">
                <div className="bg-green-500 h-full w-2/3" />
              </div>
              <span>64%</span>
            </div>
          </div>
        </div>

        {/* Live log feed */}
        <div className="flex-1 flex flex-col justify-end min-h-0">
          <div className="text-xs font-bold mb-2 opacity-50 uppercase tracking-wider">
            CONSOLE STREAM
          </div>
          <div className="space-y-1.5 overflow-hidden">
            {logs.map((log, i) => (
              <div 
                key={i} 
                className="opacity-50 text-[10px] whitespace-nowrap overflow-hidden text-ellipsis hover:opacity-100 transition-opacity"
                style={{ color: log.includes('SYSTEM') ? 'var(--blue)' : 'var(--text-secondary)' }}
              >
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default GutterSidebars
