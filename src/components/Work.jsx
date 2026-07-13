import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STATUS_COLOR = {
  ACTIVE:   '#3fb950',
  DEPLOYED: '#58a6ff',
  RESEARCH: '#d29922',
  MERGED:   '#484f58',
  ACCEPTED: '#3fb950',
}

const projects = [
  { hash: 'a3f2d1c', date: '2026-06', branch: 'main',     status: 'ACTIVE',
    title: 'DrishtiAI — Android App',
    desc: 'Architected an offline multimodal Android assistant using SmolVLM2 and llama.cpp for on-device visual question answering. Built optimized JNI/C++ pipelines for real-time image processing and integrated YOLO-World with Depth-Anything for object-aware depth estimation and spatial reasoning.',
    tags: ['SmolVLM2', 'llama.cpp', 'Kotlin', 'Android', 'JNI', 'YOLO-World', 'Depth-Anything'],
    link: 'https://github.com/anurag965/DrishtiAI-preview' },
  { hash: 'b8e4a2f', date: '2026-05', branch: 'main',     status: 'DEPLOYED',
    title: 'CMCA-ActionNet – Spatio-Temporal Action Detection',
    desc: 'Engineered a multimodal human action recognition system achieving 84% accuracy on the JHMDB dataset. Developed a Cross-Modal Causal Attention (CMCA) module to fuse RGB, optical flow, and MediaPipe pose landmarks. Incorporated bidirectional temporal attention and an uncertainty-aware prediction head for robust action recognition and confidence estimation.',
    tags: ['PyTorch', 'CMCA Attention', 'MediaPipe', 'Action Recognition', 'Optical Flow'],
    link: 'https://github.com/anurag965/SentinelVision' },
  { hash: 'c1d7f3b', date: '2026-03', branch: 'main',     status: 'DEPLOYED',
    title: 'Brain Tumor Segmentation',
    desc: 'Built a BEiT-transformer segmentation pipeline with skip connections and attention-driven decoding. Trained with Albumentations and CE–Dice hybrid loss for stable convergence.',
    tags: ['BEiT', 'ViT', 'Medical AI', 'Albumentations', 'CE-Dice Loss'],
    link: 'https://github.com/anurag965/Brain-Tumor-Segmentation' },
  { hash: 'd9c2e8a', date: '2025-11', branch: 'main',     status: 'DEPLOYED',
    title: 'JanaSathi: Odia E-Governance Chatbot',
    desc: 'Designed a bilingual RAG-based chatbot for Odisha government schemes using OpenRouter LLMs and MiniLM embeddings. Integrated Odia translation with Cohere Command-R+. Achieved 2nd place in the AMD-sponsored OdiaGenAI Hackathon 2025.',
    tags: ['LangChain', 'RAG', 'ChromaDB', 'OpenRouter', 'Command-R+'],
    link: 'https://github.com/anurag965/OdiaGenAI_JanaSathi' },
]

const publication = {
  title: 'Towards Blind and Low-Vision Accessibility of Lightweight VLMs and Custom LLM-Evals',
  venue: 'IJCNLP–AACL 2025, Mumbai, India',
  authors: 'S. S. Baghel, Y. P. S. Rathore, A. Pradhan',
  status: 'ACCEPTED',
}

const Work = () => {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="work" className="py-16" style={{ borderBottom: '1px solid var(--border-dim)' }}>

      {/* Section heading */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs font-Mono font-bold px-2 py-0.5 rounded" style={{ background: 'var(--blue-subtle)', color: 'var(--blue)' }}>05</span>
          <h2 className="text-3xl font-black tracking-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>Work</h2>
        </div>
        <p className="text-sm ml-9" style={{ color: 'var(--text-dim)' }}>Research publications &amp; project commits</p>
      </div>

      {/* ── PUBLICATION ── */}
      <div className="term-prompt">
        <span className="prompt-char">$</span>
        <span className="prompt-cmd">cat publications/peer_reviewed.bib</span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="term-block mb-12 overflow-hidden"
      >
        <div className="flex items-center gap-3 px-4 py-2.5 text-sm font-Mono border-b" style={{ borderColor: 'var(--border-dim)', background: 'var(--bg-hover)' }}>
          <span style={{ color: 'var(--purple, #bc8cff)' }}>@article</span>
          <span style={{ color: 'var(--text-dim)' }}>{`{anurag_aacl2025}`}</span>
          <span className="ml-auto text-sm font-bold" style={{ color: STATUS_COLOR[publication.status] }}>
            [{publication.status}]
          </span>
        </div>
        <div className="px-5 py-5 font-Mono space-y-2 text-base">
          {[
            ['title',  publication.title,   'var(--text-primary)'],
            ['venue',  publication.venue,   'var(--text-secondary)'],
            ['author', publication.authors, 'var(--text-secondary)'],
            ['year',   '2025',              'var(--blue)'],
          ].map(([k, v, c]) => (
            <div key={k} className="flex gap-3">
              <span className="w-16 shrink-0 text-sm" style={{ color: 'var(--text-dim)' }}>{k}</span>
              <span className="text-sm">=</span>
              <span className="text-sm leading-relaxed" style={{ color: c }}>"{v}"</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── PROJECTS ── */}
      <div className="term-prompt">
        <span className="prompt-char">$</span>
        <span className="prompt-cmd">git log --oneline --graph --all ~/projects</span>
      </div>

      <div className="space-y-1">
        {projects.map((p, i) => (
          <motion.div
            key={p.hash}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            {/* Log line */}
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded text-sm font-Mono transition-colors group"
              style={{ background: expanded === i ? 'var(--bg-surface)' : 'transparent' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-surface)'}
              onMouseLeave={e => e.currentTarget.style.background = expanded === i ? 'var(--bg-surface)' : 'transparent'}
            >
              <span style={{ color: 'var(--text-dim)' }}>*</span>
              <span style={{ color: '#e3b341' }}>{p.hash}</span>
              <span style={{ color: 'var(--text-dim)' }}>({p.date})</span>
              <span className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--blue-subtle)', color: 'var(--blue)' }}>
                {p.branch}
              </span>
              <span className="flex-1 font-medium text-sm" style={{ color: 'var(--text-primary)' }}>{p.title}</span>
              <span className="shrink-0 text-sm font-bold" style={{ color: STATUS_COLOR[p.status] }}>{p.status}</span>
              <span style={{ color: 'var(--text-dim)' }}>{expanded === i ? '▼' : '▶'}</span>
            </button>

            {/* Expanded */}
            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-5 border-l pl-5 py-4 space-y-3"
                  style={{ borderColor: 'var(--border-dim)' }}
                >
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => <span key={t} className="term-badge">{t}</span>)}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-Mono transition-colors"
                    style={{ color: 'var(--blue)' }}
                    onClick={e => e.stopPropagation()}
                  >
                    ↗ {p.link.replace('https://', '')}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-sm font-Mono" style={{ color: 'var(--text-dim)' }}>
        <span style={{ color: 'var(--blue)' }}>❯ </span>
        <a href="https://github.com/anurag965?tab=repositories" target="_blank" rel="noreferrer"
          className="transition-colors" style={{ color: 'var(--text-dim)' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--blue)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
        >
          open https://github.com/anurag965 --all-repos
        </a>
        <span className="cursor-blink" />
      </div>
    </section>
  )
}

export default Work
