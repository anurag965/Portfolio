import React from 'react'
import { motion } from 'framer-motion'
import SpotlightCard from './SpotlightCard'

const skillGroups = [
  {
    category: 'Core Deep Learning & Generative AI',
    skills: ['Diffusion Models (DDPM)', 'Mamba & SSMs', 'Vision-Language Models', 'Quantization (GGUF)', 'Medical Volume Synthesis', 'Uncertainty Estimation'],
  },
  {
    category: 'Frameworks & Scientific Computing',
    skills: ['PyTorch 2.x', 'Hugging Face Transformers', 'llama.cpp', 'SimpleITK', 'ONNX Runtime', 'PyWavelets', 'MediaPipe', 'OpenCV'],
  },
  {
    category: 'Languages & Systems Engineering',
    skills: ['Python', 'C / C++', 'Java', 'Kotlin', 'Android JNI', 'CUDA C++'],
  },
  {
    category: 'Compute & Edge Accelerators',
    skills: ['ARM NEON SIMD', 'CUDA 12.1 / cuDNN', 'Git / GitHub', 'Linux Kernel & Bash', 'STM32 / Arduino', 'Docker'],
  },
]

const About = () => {
  return (
    <section id="skills" className="space-y-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6"
      >
        <div className="space-y-1.5">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--accent)' }}>
            // PERSPECTIVE &amp; TOOLKIT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Background &amp; Skills
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
          Technical foundation across deep learning research, clinical volume processing, and edge execution.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Research Approach (5 cols) */}
        <SpotlightCard className="lg:col-span-5 p-7 sm:p-8 flex flex-col justify-between space-y-6" tilt={false} spotlightColor="var(--accent-glow)">
          <div className="space-y-4">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider block" style={{ color: 'var(--accent)' }}>
              Core Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Bridging Generative Theory &amp; Edge Execution
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              My engineering approach centers on two extremes of modern computing: high-dimensional clinical synthesis, where probabilistic calibration and anatomical fidelity are vital for safety; and extreme edge deployment, where memory footprints and latency must be squeezed onto mobile silicon without cloud dependencies.
            </p>
            <p className="text-base text-slate-400 leading-relaxed font-sans">
              Whether decomposing 3D medical volumes with discrete wavelet transforms or compiling lightweight models with SIMD acceleration, I focus on practical architectures with rigorous, reproducible benchmarks.
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs sm:text-sm font-mono text-slate-400">
            <span>Primary Focus</span>
            <span className="font-medium" style={{ color: 'var(--accent-light)' }}>Generative Vision &amp; Edge AI</span>
          </div>
        </SpotlightCard>

        {/* Right Column: Categorized Technical Matrix (7 cols) */}
        <SpotlightCard className="lg:col-span-7 p-7 sm:p-8 space-y-7" tilt={false} spotlightColor="var(--accent-glow)">
          {skillGroups.map(group => (
            <div key={group.category} className="space-y-3">
              <h4 className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider" style={{ color: 'var(--accent-light)' }}>
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="tech-pill cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </SpotlightCard>

      </div>

    </section>
  )
}

export default About
