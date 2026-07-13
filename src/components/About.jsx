import React from 'react'
import { motion } from 'framer-motion'
import user_image from '../assets/user-image.webp'

const skills = [
  { cat: 'Core Expertise', pct: 92, items: 'VLMs · LLMs/SLMs · EdgeAI · Agentic AI · GenerativeAI · CV · Transformers' },
  { cat: 'Frameworks',     pct: 90, items: 'PyTorch · TensorFlow · Hugging Face · llama.cpp · SmolVLM2 · BEiT · BLIP · OpenCV · LangChain' },
  { cat: 'Tools & Platforms', pct: 85, items: 'Git · Docker · CUDA · ONNX · W&B · HF Hub · Android/Compose (JNI)' },
  { cat: 'Languages',      pct: 90, items: 'Python · C · C++ · Java' },
  { cat: 'Research Areas', pct: 88, items: 'Generative Modeling · Medical Imaging · Video Processing · VLM Accessibility Evaluation · EdgeAI' },
]

const About = () => (
  <section id="about" className="py-10 md:py-16" style={{ borderBottom: '1px solid var(--border-dim)' }}>

    {/* Section heading */}
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-xs font-Mono font-bold px-2 py-0.5 rounded" style={{ background: 'var(--blue-subtle)', color: 'var(--blue)' }}>02</span>
        <h2 className="text-3xl font-black tracking-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>About</h2>
      </div>
      <p className="text-sm ml-9" style={{ color: 'var(--text-dim)' }}>Skills profile &amp; tool ecosystem</p>
    </div>

    {/* Prompt */}
    <div className="term-prompt">
      <span className="prompt-char">$</span>
      <span className="prompt-cmd">cat ~/.profile &amp;&amp; ls -la ~/skills/</span>
    </div>
  

    {/* Bio & Formal Photo grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {/* Bio text (takes 2 cols) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-2 p-5 rounded-lg text-base leading-loose flex flex-col justify-between"
        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-dim)', color: 'var(--text-secondary)' }}
      >
        <div>
          <div className="text-xs mb-3" style={{ color: 'var(--text-dim)' }}>{'# ~/.profile'}</div>
          <p>
            Final-year Computer Science student at <span style={{ color: 'var(--blue)' }} className="font-bold">VIT Chennai</span> with research experience in Deep Learning, Medical AI, and Generative Models.
          </p>
          <p className="mt-3">
            Ex-Summer Research Intern at <span style={{ color: 'var(--blue)' }} className="font-bold">IIT Mandi</span> under Prof. Aditya Nigam, working on MRI-to-synthetic CT reconstruction using GANs, VAEs, and diffusion models.
          </p>
          <p className="mt-3">
            Skilled in CNNs, Transformers, LLMs, VLMs and Generative Models. Co-authored a paper published at <span style={{ color: 'var(--purple, #bc8cff)' }} className="font-bold">IJCNLP–AACL 2025</span>.
          </p>
        </div>
      </motion.div>

      {/* Formal Image File Panel (takes 1 col) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-lg overflow-hidden border flex flex-col"
        style={{ borderColor: 'var(--border-dim)', background: 'var(--bg-surface)' }}
      >
        <div className="flex items-center gap-2 px-3 py-2 border-b text-[10px] font-Mono shrink-0" style={{ borderColor: 'var(--border-dim)', background: 'var(--bg-surface)' }}>
          <span style={{ color: 'var(--yellow)' }}>🖼️</span>
          <span style={{ color: 'var(--text-secondary)' }}>formal_photo.png</span>
        </div>
        <div className="p-2 flex-1 flex items-center justify-center bg-black/25">
          <img 
            src={user_image} 
            alt="Anurag Pradhan Formal"
            className="w-full h-full min-h-[240px] max-h-[300px] object-cover object-top rounded" 
            style={{ filter: 'grayscale(15%) brightness(0.9) contrast(1.05)' }}
          />
        </div>
      </motion.div>
    </div>

    {/* Section heading */}
    <div className="term-section-heading">
      <span style={{ color: 'var(--blue)' }}>//</span>
      <span>skill proficiency</span>
    </div>

    {/* Skills */}
    <div className="space-y-5">
      {skills.map((s, i) => (
        <motion.div
          key={s.cat}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.06 }}
          viewport={{ once: true }}
          className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 md:items-center text-sm"
        >
          {/* Category & Percentage: side-by-side on mobile, contents on desktop */}
          <div className="flex justify-between items-center md:contents">
            <span className="text-sm font-bold md:col-span-3" style={{ color: 'var(--text-secondary)' }}>{s.cat}</span>
            <span className="text-sm md:hidden" style={{ color: 'var(--text-dim)' }}>{s.pct}%</span>
          </div>

          <div className="md:col-span-2">
            <div className="term-progress-bar">
              <motion.div
                className="term-progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.pct}%` }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <span className="hidden md:inline md:col-span-1 text-sm text-left" style={{ color: 'var(--text-dim)' }}>{s.pct}%</span>

          <span className="md:col-span-6 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>{s.items}</span>
        </motion.div>
      ))}
    </div>

    {/* Tools */}
    <div className="mt-10 text-sm font-Mono">
      <div className="term-prompt" style={{ marginBottom: '8px' }}>
        <span className="prompt-char">$</span>
        <span className="prompt-cmd">which python3 nvcc docker git code</span>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-1 pl-4" style={{ color: 'var(--text-dim)' }}>
        {['/usr/bin/python3.11', '/usr/local/cuda/bin/nvcc', '/usr/bin/docker', '/usr/bin/git', '/usr/bin/code'].map(p => (
          <span key={p} className="text-xs">{p}</span>
        ))}
      </div>
    </div>
  </section>
)

export default About
