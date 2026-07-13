import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BOOT_LINES = [
  'Linux anurag-sys 6.8.0-31-generic x86_64 GNU/Linux',
  '[    0.412331] CUDA driver loaded: 12.1.r12.1',
  '[    0.831204] PyTorch 2.3.0+cu121 — runtime detected',
  '[    1.042891] Loading SmolVLM2-2.2B.gguf [Q4_K_M]...',
  '[    1.614223] llama.cpp: n_gpu_layers=33, ctx=4096',
  '[    2.019443] HuggingFace tokenizer initialized',
  '[    2.381027] LangChain RAG pipeline: ready',
  '[    2.755109] Inference server: 0.0.0.0:8000',
  '[    3.001847] SSH daemon started — port 22',
  '[    3.512833] All services running.',
  '',
  'anurag-sys login: anurag',
  'Last login: Jul 2026 from iit-mandi.ac.in',
  '',
  '$ portfolio --init',
  'ACCESS GRANTED.',
];

const LoadingScreen = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let idx = 0;
    const t1 = setInterval(() => {
      if (idx < BOOT_LINES.length) {
        const i = idx;
        setLines(prev => [...prev, BOOT_LINES[i]]);
        idx++;
      } else {
        clearInterval(t1);
        setTimeout(onComplete, 400);
      }
    }, 65);

    const t2 = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(t2); return 100; }
        return p + 1;
      });
    }, 18);

    return () => { clearInterval(t1); clearInterval(t2); };
  }, []); // eslint-disable-line

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] flex flex-col font-Mono text-xs overflow-hidden"
      style={{ background: '#0d1117' }}
    >
      <div className="crt-scanlines" aria-hidden="true" />
      <div className="crt-vignette"  aria-hidden="true" />

      <div className="flex-1 overflow-hidden px-8 py-12 flex flex-col justify-end">
        <div className="space-y-0.5">
          {lines.map((line, i) => (
            <div key={i} style={{
              color: line.startsWith('[') ? '#484f58' :
                     line.includes('GRANTED') ? '#58a6ff' :
                     line.startsWith('$') ? '#58a6ff' :
                     line.startsWith('anurag-sys') ? '#8b949e' :
                     line.startsWith('Last') ? '#8b949e' :
                     '#30363d'
            }}>
              {line || '\u00A0'}
            </div>
          ))}
        </div>
      </div>

      <div className="px-8 pb-12 space-y-2">
        <div className="flex justify-between text-xs" style={{ color: '#484f58' }}>
          <span>Booting anurag-sys...</span>
          <span>{progress}%</span>
        </div>
        <div className="term-progress-bar">
          <div className="term-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
