import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SpotlightCard from './SpotlightCard'
import AnimatedCounter from './AnimatedCounter'

const publication = {
  title: 'Towards Blind and Low-Vision Accessibility of Lightweight VLMs and Custom LLM-Evals',
  venue: '14th International Joint Conference on Natural Language Processing & 4th Asian Chapter of ACL (IJCNLP–AACL 2025)',
  location: 'Mumbai, India',
  acceptance: 'Acceptance Rate: ∼22%',
  authors: ['S. S. Baghel', 'Y. P. S. Rathore', 'A. Pradhan'],
  url: 'https://aclanthology.org/2025.mmloso-1.8/',
  abstract: 'Investigates the accessibility challenges of lightweight Vision-Language Models (VLMs) when deployed on resource-constrained devices for blind and low-vision assistance. Proposes custom evaluation criteria, zero-shot spatial benchmarks, and on-device latency evaluation harnesses.',
  bibtex: `@inproceedings{baghel-etal-2025-towards,
  title     = "Towards Blind and Low-Vision Accessibility of Lightweight {VLM}s and Custom {LLM}-Evals",
  author    = "Baghel, S. S. and Rathore, Y. P. S. and Pradhan, Anurag",
  booktitle = "Proceedings of the 14th International Joint Conference on Natural Language Processing and the 4th Asian Chapter of the ACL",
  year      = "2025",
  address   = "Mumbai, India",
  url       = "https://aclanthology.org/2025.mmloso-1.8/"
}`
}

const drishtiScenarios = [
  {
    id: 'door',
    name: 'Office Corridor',
    target: 'YOLO-World: "doorway (1.8m)"',
    cue: '12 o\'clock direction',
    depth: '1.82m metric depth',
    audio: '“Clear corridor. Open doorway directly ahead at 1.8 meters.”',
  },
  {
    id: 'stairs',
    name: 'Staircase Access',
    target: 'YOLO-World: "descending stairs (0.9m)"',
    cue: '11 o\'clock direction',
    depth: '0.94m metric depth',
    audio: '“Caution: 3 downward steps approaching in 3 feet.”',
  },
  {
    id: 'crosswalk',
    name: 'Urban Crosswalk',
    target: 'YOLO-World: "pedestrian beacon (4.2m)"',
    cue: '1 o\'clock direction',
    depth: '4.21m metric depth',
    audio: '“Pedestrian signal detected at 1 o’clock. Safe crossing lane.”',
  },
]

const allProjects = [
  {
    id: 'cmca-actionnet',
    category: 'Action & RAG',
    title: 'CMCA-ActionNet',
    subtitle: 'Cross-Modal Causal Action Recognition',
    desc: 'Multimodal activity recognition fusing RGB video, optical flow, and MediaPipe pose landmarks via a Cross-Modal Causal Attention (CMCA) module with bidirectional temporal gating.',
    metrics: [
      { label: 'JHMDB Benchmark', val: 84.0, suffix: '% Top-1', decimals: 1 },
      { label: 'Multimodal Gain', val: 6.2, prefix: '+', suffix: '% vs Single', decimals: 1 },
      { label: 'False Positives', val: 15, prefix: '-', suffix: '% Alarms', decimals: 0 },
    ],
    tags: ['PyTorch', 'MediaPipe', 'Optical Flow', 'Causal Attention'],
    link: 'https://github.com/anurag965/SentinelVision',
  },
  {
    id: 'janasathi',
    category: 'Action & RAG',
    title: 'JanaSathi',
    subtitle: 'Odia E-Governance RAG Assistant',
    desc: 'Bilingual conversational assistant designed to bridge digital divide barriers for Odisha citizens. Employs Command-R+, ChromaDB vector indexing, and low-latency Odia language translation.',
    metrics: [
      { label: 'Hackathon Award', text: '2nd Place (AMD)' },
      { label: 'Vector Index', text: 'ChromaDB' },
      { label: 'Generator', text: 'Command-R+' },
    ],
    tags: ['LangChain', 'RAG', 'ChromaDB', 'Odia NLP'],
    link: 'https://github.com/anurag965/OdiaGenAI_JanaSathi',
  },
  {
    id: 'tumor-segmentation',
    category: 'Medical Generative AI',
    title: 'Brain Tumor Segmentation',
    subtitle: 'BEiT Transformers with CE-Dice Loss',
    desc: 'Automated neuroimaging semantic segmentation using vision transformers with skip-layer decoding and an aligned CE-Dice composite loss function to preserve fine tumor boundaries.',
    metrics: [
      { label: 'Architecture', text: 'BEiT Transformer' },
      { label: 'Objective', text: 'CE-Dice Hybrid' },
      { label: 'Domain', text: 'Clinical Neuroimaging' },
    ],
    tags: ['BEiT', 'Vision Transformers', 'Albumentations', 'PyTorch'],
    link: 'https://github.com/anurag965/Brain-Tumor-Segmentation',
  },
]

const categories = ['All Systems', 'Medical Generative AI', 'On-Device Vision', 'Action & RAG']

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All Systems')
  const [activeScenario, setActiveScenario] = useState(drishtiScenarios[0])
  const [showBibtex, setShowBibtex] = useState(false)
  const [copiedBibtex, setCopiedBibtex] = useState(false)
  const [liveTokSpeed, setLiveTokSpeed] = useState('13.8')

  // Interactive Reverse Diffusion Simulation state
  const [isDenoising, setIsDenoising] = useState(false)
  const [diffusionStep, setDiffusionStep] = useState(0) // 1000 down to 0
  const [simulatedMAE, setSimulatedMAE] = useState(98.2)

  // Live fluctuating telemetry ticker for DrishtiAI HUD
  useEffect(() => {
    const speeds = ['13.5', '13.8', '14.1', '13.6', '14.2']
    let idx = 0
    const interval = setInterval(() => {
      idx = (idx + 1) % speeds.length
      setLiveTokSpeed(speeds[idx])
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  // Run simulated reverse diffusion loop
  const runDiffusionSimulation = () => {
    if (isDenoising) return
    setIsDenoising(true)
    let t = 1000
    const interval = setInterval(() => {
      t -= 50
      if (t <= 0) {
        t = 0
        clearInterval(interval)
        setIsDenoising(false)
      }
      setDiffusionStep(t)
      // Progressively calculate realistic MAE reduction
      const progress = (1000 - t) / 1000
      const currentMae = 312.4 - (312.4 - 98.2) * Math.pow(progress, 1.4)
      setSimulatedMAE(currentMae.toFixed(1))
    }, 90)
  }

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(publication.bibtex)
    setCopiedBibtex(true)
    setTimeout(() => setCopiedBibtex(false), 2000)
  }

  const filteredProjects = activeFilter === 'All Systems'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter)

  return (
    <section id="research" className="space-y-12">
      
      {/* Section Header with Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6"
      >
        <div className="space-y-2">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--accent)' }}>
            // SELECTED PUBLICATIONS &amp; SYSTEMS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Research &amp; Engineering
          </h2>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'font-semibold shadow-md'
                  : 'text-slate-300 hover:text-white glass-chip'
              }`}
              style={
                activeFilter === cat
                  ? {
                      backgroundColor: 'var(--accent-btn)',
                      color: 'var(--accent-btn-text)',
                      boxShadow: '0 0 16px var(--accent-glow)',
                    }
                  : undefined
              }
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* ── FLAGSHIP 1: SPOTLIGHT PUBLICATION ── */}
      <SpotlightCard className="border-beam-card p-7 sm:p-10 space-y-6" tilt={false} spotlightColor="var(--accent-glow)">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-semibold border"
              style={{
                backgroundColor: 'var(--accent-badge-bg)',
                borderColor: 'var(--accent-badge-border)',
                color: 'var(--accent-badge-text)',
              }}
            >
              IJCNLP–AACL 2025
            </span>
            <span
              className="text-xs sm:text-sm font-mono px-3 py-1 rounded-lg border"
              style={{
                backgroundColor: 'var(--accent-badge-bg)',
                borderColor: 'var(--accent-badge-border)',
                color: 'var(--accent-light)',
              }}
            >
              {publication.acceptance}
            </span>
            <span className="text-xs sm:text-sm font-mono text-slate-400">
              {publication.location}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBibtex(!showBibtex)}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {showBibtex ? 'Hide BibTeX' : 'BibTeX Citation'}
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={publication.url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all flex items-center gap-2 shadow-md"
              style={{
                backgroundColor: 'var(--accent-btn)',
                color: 'var(--accent-btn-text)',
              }}
            >
              <span>ACL Anthology</span>
              <span>↗</span>
            </motion.a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
            {publication.title}
          </h3>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            {publication.abstract}
          </p>
          <div className="text-xs sm:text-sm font-mono text-slate-400 flex flex-wrap gap-2 pt-1">
            <span className="text-slate-500 font-semibold">Authors:</span>
            <span>
              {publication.authors.map((author, i) => (
                <span key={author}>
                  {author === 'A. Pradhan' ? (
                    <strong className="font-bold underline" style={{ color: 'var(--accent-light)' }}>{author}</strong>
                  ) : (
                    author
                  )}
                  {i < publication.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* BibTeX Drawer */}
        <AnimatePresence>
          {showBibtex && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-4 border-t border-white/[0.08] space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">BibTeX Citation Entry</span>
                <button
                  onClick={handleCopyBibtex}
                  className="px-3 py-1 rounded-lg border text-xs font-mono cursor-pointer"
                  style={{
                    backgroundColor: 'var(--accent-badge-bg)',
                    borderColor: 'var(--accent-badge-border)',
                    color: 'var(--accent-badge-text)',
                  }}
                >
                  {copiedBibtex ? '✓ Copied to Clipboard' : 'Copy BibTeX'}
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950/90 border border-white/10 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                {publication.bibtex}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </SpotlightCard>

      {/* ── FLAGSHIP 2: DRISHTIAI WITH LIVE AUDIO EQUALIZER ── */}
      {(activeFilter === 'All Systems' || activeFilter === 'On-Device Vision') && (
        <SpotlightCard className="p-7 sm:p-9" tilt={false} spotlightColor="var(--accent-glow)">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: System Narrative & Benchmarks (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <span
                  className="inline-block px-3 py-1 rounded-lg text-xs font-mono font-semibold border mb-2"
                  style={{
                    backgroundColor: 'var(--accent-badge-bg)',
                    borderColor: 'var(--accent-badge-border)',
                    color: 'var(--accent-badge-text)',
                  }}
                >
                  ACTIVE ON-DEVICE SYSTEM
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  DrishtiAI: On-Device Spatial Vision Assistant
                </h3>
                <p className="text-sm sm:text-base font-mono text-slate-400">
                  100% Offline Multimodal Assistive Intelligence for Android
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Architected a fully offline mobile assistant combining <strong className="text-white">SmolVLM2-500M</strong> with <strong className="text-white">llama.cpp</strong> (via optimized C++ Android JNI) and <strong className="text-white">ONNX Runtime</strong> for real-time spatial navigation and visual QA for blind and low-vision users. Fused Depth-Anything metric depth with zero-shot YOLO-World v2 to convert 3D distances into clock-face directional audio cues.
              </p>

              {/* 3 Prominent Stat Highlights with Animated Counter */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl glass-chip flex flex-col justify-between">
                  <span className="text-xs font-mono text-slate-400">Edge Speed</span>
                  <span className="text-base sm:text-xl font-bold font-mono mt-1" style={{ color: 'var(--accent-light)' }}>
                    <AnimatedCounter to={13.5} decimals={1} suffix="+ tok/s" />
                  </span>
                </div>
                <div className="p-3.5 rounded-xl glass-chip flex flex-col justify-between">
                  <span className="text-xs font-mono text-slate-400">SIMD Engine</span>
                  <span className="text-base sm:text-xl font-bold font-mono text-white mt-1">ARMv8.4 I8MM</span>
                </div>
                <div className="p-3.5 rounded-xl glass-chip flex flex-col justify-between">
                  <span className="text-xs font-mono text-slate-400">Vision Prefill</span>
                  <span className="text-base sm:text-xl font-bold font-mono text-slate-200 mt-1">384px Context</span>
                </div>
              </div>

              {/* Interactive Scenario Switcher Buttons */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Simulate Camera Input Scenario:
                </span>
                <div className="flex flex-wrap gap-2">
                  {drishtiScenarios.map((s) => (
                    <motion.button
                      key={s.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveScenario(s)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                        activeScenario.id === s.id
                          ? 'font-semibold shadow-md'
                          : 'glass-chip text-slate-300'
                      }`}
                      style={
                        activeScenario.id === s.id
                          ? {
                              backgroundColor: 'var(--accent-btn)',
                              color: 'var(--accent-btn-text)',
                            }
                          : undefined
                      }
                    >
                      {s.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Live Responsive HUD Terminal with Equalizer (5 cols) */}
            <div className="lg:col-span-5 w-full">
              <div className="p-5 rounded-2xl glass-hud font-mono text-xs shadow-2xl relative overflow-hidden" style={{ borderColor: 'var(--accent-badge-border)' }}>
                {/* Continuous scanning line */}
                <div className="absolute inset-x-0 h-[2px] animate-scanline pointer-events-none" style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)' }} />

                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-xs">
                  <div className="flex items-center gap-2 font-semibold" style={{ color: 'var(--accent-light)' }}>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--accent)' }} />
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--accent)' }} />
                    </span>
                    <span>LIVE_TELEMETRY // ON-DEVICE</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">ARMv8.4 NEON</span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl glass-chip">
                    <span className="text-slate-500 text-xs block mb-0.5">Target Detection</span>
                    <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>{activeScenario.target}</span>
                  </div>
                  <div className="p-3 rounded-xl glass-chip">
                    <span className="text-slate-500 text-xs block mb-0.5">Spatial Direction Cue</span>
                    <span className="text-slate-200 font-semibold">{activeScenario.cue}</span>
                  </div>
                  <div className="p-3 rounded-xl glass-chip">
                    <span className="text-slate-500 text-xs block mb-0.5">Zero-Shot Depth Map</span>
                    <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>{activeScenario.depth}</span>
                  </div>
                  
                  {/* Haptic Audio Equalizer Animation */}
                  <div className="p-3 rounded-xl border text-xs space-y-2" style={{ backgroundColor: 'var(--accent-badge-bg)', borderColor: 'var(--accent-badge-border)', color: 'var(--accent-light)' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono opacity-80">Haptic Audio TTS Stream</span>
                      {/* Bouncing Audio Bars */}
                      <div className="flex items-end gap-1 h-3.5">
                        {[40, 80, 55, 100, 65, 90, 45, 95, 70, 85].map((h, i) => (
                          <motion.span
                            key={i}
                            animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }}
                            transition={{ duration: 0.6 + (i % 3) * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-1 rounded-full"
                            style={{ backgroundColor: 'var(--accent)' }}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed italic">{activeScenario.audio}</p>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                  <span>Inference Throughput:</span>
                  <span className="font-bold font-mono text-sm" style={{ color: 'var(--accent-light)' }}>
                    ⚡ {liveTokSpeed} tok/s (Q4_K_M)
                  </span>
                </div>
              </div>
            </div>

          </div>
        </SpotlightCard>
      )}

      {/* ── FLAGSHIP 3: MRI-TO-sCT SYNTHESIS WITH INTERACTIVE SAMPLING SIMULATOR ── */}
      {(activeFilter === 'All Systems' || activeFilter === 'Medical Generative AI') && (
        <SpotlightCard className="p-7 sm:p-9 space-y-6" tilt={false} spotlightColor="var(--accent-glow)">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1">
              <span
                className="inline-block px-3 py-1 rounded-lg text-xs font-mono font-semibold border mb-2"
                style={{
                  backgroundColor: 'var(--accent-badge-bg)',
                  borderColor: 'var(--accent-badge-border)',
                  color: 'var(--accent-badge-text)',
                }}
              >
                CLINICAL RADIOTHERAPY RESEARCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Uncertainty-Aware MRI-to-sCT Synthesis
              </h3>
              <p className="text-sm sm:text-base font-mono text-slate-400">
                2.5D Wavelet U-Net++ with 3D Discrete Wavelet Transforms
              </p>
            </div>

            <a
              href="https://github.com/anurag965"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs sm:text-sm font-mono text-slate-300 hover:text-white transition-all shrink-0 flex items-center gap-1.5"
            >
              <span>Lab Repo</span>
              <span>↗</span>
            </a>
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Formulated a dual-pass 2.5D Wavelet U-Net++ incorporating 3D discrete wavelet transforms (db1) and deep ensembles to predict probabilistic mean attenuation (µ) alongside heteroscedastic aleatoric variance (σ²). A tissue-stratified isotonic regression calibrator reduced Expected Normalized Calibration Error (ENCE) by 99.9% (ENCE &lt; 0.19), while a 7-channel residual refinement network cut Bone MAE by 83.4 HU and Dose-Volume Histogram (DVH) D50 error by 56.8%.
          </p>

          {/* Interactive Diffusion Reverse Sampling Simulator */}
          <div className="p-5 rounded-2xl glass-hud space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                <span className="text-xs sm:text-sm font-mono text-white font-semibold">
                  Interactive Lab Simulation: DDPM Reverse Denoising Sampling Loop
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={runDiffusionSimulation}
                disabled={isDenoising}
                className="px-4 py-1.5 rounded-xl font-mono text-xs font-semibold cursor-pointer transition-all shadow-md self-start sm:self-auto"
                style={{
                  backgroundColor: 'var(--accent-btn)',
                  color: 'var(--accent-btn-text)',
                  opacity: isDenoising ? 0.7 : 1,
                }}
              >
                {isDenoising ? `Simulating Step t=${diffusionStep}...` : '▶ Run Reverse Diffusion (t=1000 → 0)'}
              </motion.button>
            </div>

            {/* Simulated Live Step & Reconstruction MAE Gauge */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl glass-chip">
                <span className="text-slate-400 block mb-1">Sampling Time Step (t)</span>
                <span className="text-lg font-bold text-white">t = {diffusionStep}</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">{diffusionStep === 0 ? 'Full Anatomy Reconstructed' : 'Denoising Latent Volume'}</span>
              </div>
              <div className="p-3 rounded-xl glass-chip">
                <span className="text-slate-400 block mb-1">Current Full-Volume MAE</span>
                <span className="text-lg font-bold" style={{ color: 'var(--accent-light)' }}>
                  {simulatedMAE} HU
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Reduced from ~312 HU baseline</span>
              </div>
              <div className="p-3 rounded-xl glass-chip">
                <span className="text-slate-400 block mb-1">Convergence Quality</span>
                <span className="text-lg font-bold text-emerald-400">
                  {diffusionStep === 0 ? 'Optimal (γ Pass: 98.4%)' : 'Refining Residuals...'}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">2.5D Wavelet High-Pass Filter</span>
              </div>
            </div>

            {/* Visual Denoising Progress Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>Gaussian Noise (t=1000)</span>
                <span>Calibrated CT Volume (t=0)</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden relative">
                <motion.div
                  className="h-full rounded-full transition-all duration-100"
                  style={{
                    width: `${((1000 - diffusionStep) / 1000) * 100}%`,
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 0 10px var(--accent)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* 3 Prominent Clinical Benchmarks with Live Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl glass-chip">
              <span className="text-xs font-mono text-slate-400 block mb-1">Calibration Quality</span>
              <span className="text-xl sm:text-2xl font-bold font-mono" style={{ color: 'var(--accent-light)' }}>
                <AnimatedCounter to={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-slate-400 block mt-0.5">ENCE Reduction (&lt; 0.19)</span>
            </div>
            <div className="p-4 rounded-xl glass-chip">
              <span className="text-xs font-mono text-slate-400 block mb-1">Bone Region Accuracy</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">
                <AnimatedCounter to={83.4} prefix="-" decimals={1} suffix=" HU" />
              </span>
              <span className="text-xs text-slate-400 block mt-0.5">Bone MAE Reduction</span>
            </div>
            <div className="p-4 rounded-xl glass-chip">
              <span className="text-xs font-mono text-slate-400 block mb-1">Dosimetric Safety</span>
              <span className="text-xl sm:text-2xl font-bold font-mono" style={{ color: 'var(--accent-light)' }}>
                <AnimatedCounter to={10.4} prefix="+" decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-slate-400 block mt-0.5">Gamma 2%/2mm Pass Rate</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
            {['Wavelet U-Net++', 'Deep Ensembles', '3D DWT', 'Isotonic Regression', 'Medical AI', 'PyTorch'].map(t => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </SpotlightCard>
      )}

      {/* ── SUPPORTING SYSTEMS: FILTERED BENTO GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((p) => (
          <SpotlightCard
            key={p.id}
            tilt={true}
            className="p-6 flex flex-col justify-between group"
            spotlightColor="var(--accent-glow)"
          >
            <div className="space-y-3.5">
              <div className="flex items-start justify-between gap-2 pb-3 border-b border-white/[0.08]">
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-[var(--accent-light)] transition-colors">
                    {p.title}
                  </h4>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {p.subtitle}
                  </div>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-400 hover:text-white transition-all text-xs font-mono shrink-0"
                >
                  ↗
                </a>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {p.desc}
              </p>

              {/* Metrics with Animated Numbers */}
              <div className="space-y-1.5 pt-1">
                {p.metrics.map(m => (
                  <div key={m.label} className="p-2 rounded-lg glass-chip flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">{m.label}</span>
                    <span className="text-white font-bold">
                      {m.val !== undefined ? (
                        <AnimatedCounter
                          to={m.val}
                          prefix={m.prefix || ''}
                          suffix={m.suffix || ''}
                          decimals={m.decimals || 0}
                        />
                      ) : (
                        m.text
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-1.5 border-t border-white/[0.06] mt-4">
              {p.tags.map(t => (
                <span key={t} className="tech-pill text-xs">{t}</span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>

    </section>
  )
}

export default Work
