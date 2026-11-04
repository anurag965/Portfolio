import React from 'react'

const marqueeItems = [
  'PyTorch 2.x',
  'Diffusion Models (DDPM)',
  'SmolVLM2-500M',
  'Mamba & SSMs',
  'llama.cpp (C++ JNI)',
  'ARMv8.4 NEON SIMD',
  'Wavelet U-Net++',
  'Volumetric 3D Synthesis',
  'SimpleITK 3D',
  'Depth-Anything Zero-Shot',
  'CUDA 12.1 Acceleration',
  'CanSat Flight Software',
  'ONNX Runtime Mobile',
  'ChromaDB & RAG',
]

const TechMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-white/[0.06] bg-black/20 backdrop-blur-sm select-none">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee gap-8 items-center text-xs sm:text-sm font-mono text-slate-400">
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0 group cursor-default">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            <span className="group-hover:text-white transition-colors tracking-wide">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechMarquee

