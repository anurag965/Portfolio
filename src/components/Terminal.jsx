import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Terminal = ({ isOpen = false, onClose }) => {
    const [history, setHistory] = useState([
        { type: 'output', text: 'ANURAG SYSTEM TERMINAL v3.2.0 — Research Shell' },
        { type: 'output', text: 'Type "help" for active commands or click the chips below. Press ESC to close.' },
        { type: 'neofetch' }
    ]);
    const [input, setInput] = useState('');
    const terminalEndRef = useRef(null);
    const inputRef = useRef(null);
    const isInitialMount = useRef(true);

    const commands = {
        help: () => ({ type: 'help' }),
        neofetch: () => ({ type: 'neofetch' }),
        skills: () => ({ type: 'skills' }),
        projects: () => ({ type: 'projects' }),
        contact: () => ({ type: 'contact' }),
        quote: () => ({ type: 'output', text: '"The world responds to actions, not thoughts."' }),
        clear: () => ({ type: 'clear' })
    };

    const handleCommand = (cmdText) => {
        const trimmedCmd = cmdText.trim().toLowerCase();
        if (!trimmedCmd) return;

        let newHistory = [...history, { type: 'input', text: `guest@anurag-sys:~$ ${cmdText}` }];

        if (trimmedCmd === 'clear') {
            setHistory([]);
            setInput('');
            return;
        }

        if (commands[trimmedCmd]) {
            const result = commands[trimmedCmd]();
            newHistory.push(result);
        } else {
            newHistory.push({ type: 'output', text: `Command not found: "${cmdText}". Type "help" for support.` });
        }

        setHistory(newHistory);
        setInput('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCommand(input);
    };

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        if (!isOpen) return;
        const timer = setTimeout(() => {
            focusInput();
        }, 100);

        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && onClose) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        if (terminalEndRef.current) {
            terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        focusInput();
                    }}
                    className="w-full max-w-3xl glass-hud rounded-2xl overflow-hidden font-mono text-[11px] md:text-[12px] text-gray-300 shadow-2xl flex flex-col max-h-[85vh] relative"
                    style={{
                        borderColor: 'var(--border-hover)',
                        boxShadow: '0 25px 60px -15px rgba(0,0,0,0.9), 0 0 35px var(--accent-glow-subtle)',
                    }}
                >
                    {/* HUD scanning radar line */}
                    <div className="absolute inset-x-0 h-[2px] animate-scanline pointer-events-none" style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)' }} />

                    {/* Header / Title Bar */}
                    <div className="border-b border-white/10 px-4 py-3 flex items-center justify-between select-none bg-white/[0.02]">
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={onClose} 
                                title="Close (ESC)"
                                className="w-3 h-3 bg-red-500/80 hover:bg-red-500 rounded-full cursor-pointer transition-colors"
                            />
                            <span className="w-3 h-3 bg-yellow-500/80 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500/80 rounded-full"></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-mono" style={{ color: 'var(--accent)' }}>guest@anurag-sys:~</span>
                            <span className="text-[10px] text-slate-500 hidden sm:inline">[press ESC to exit]</span>
                        </div>
                        <button 
                            onClick={onClose}
                            className="text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded hover:bg-white/10 transition-colors font-mono cursor-pointer"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Display / Logs Output */}
                    <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-3 leading-relaxed scrollbar-thin scrollbar-thumb-gray-800 select-text">
                        {history.map((line, idx) => {
                            if (line.type === 'input') {
                                return (
                                    <div key={idx} className="font-bold font-mono" style={{ color: 'var(--accent-light)' }}>
                                        {line.text}
                                    </div>
                                );
                            }
                            if (line.type === 'neofetch') {
                                return (
                                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-xl glass-hud border border-white/10 my-2">
                                        {/* Left Logo */}
                                        <div className="md:col-span-4 font-bold leading-relaxed select-none text-[9px] md:text-[11px] hidden md:block font-mono" style={{ color: 'var(--accent)' }}>
{`      _   _ _____ 
     | | | |  ___|
     | | | | |__  
     | | | |  __| 
     \\ \\_/ / |___ 
      \\___/\\____/ 
                  
     RESEARCH_DEV
     ============`}
                                        </div>
                                        {/* Right Details */}
                                        <div className="md:col-span-8 space-y-1 text-gray-300 text-[11px] md:text-[12px] leading-relaxed font-mono">
                                            <div className="text-slate-400 font-bold">
                                                <span style={{ color: 'var(--accent)' }}>anurag</span>@<span style={{ color: 'var(--accent-light)' }}>github</span>
                                            </div>
                                            <div className="border-b border-dashed border-white/10 my-1.5" />
                                            <div>
                                                <span className="font-semibold block md:inline-block md:w-24" style={{ color: 'var(--accent)' }}>OS:</span>
                                                <span className="px-2 py-0.5 rounded text-[10px] font-semibold font-mono" style={{ backgroundColor: 'var(--accent-badge-bg)', borderColor: 'var(--accent-badge-border)', color: 'var(--accent-badge-text)', border: '1px solid var(--accent-badge-border)' }}>
                                                    RESEARCH MODE [ON]
                                                </span>
                                            </div>
                                            <div><span className="font-semibold block md:inline-block md:w-24" style={{ color: 'var(--accent)' }}>Host:</span> <span>IIT Mandi (Research Intern, Prof. Aditya Nigam)</span></div>
                                            <div><span className="font-semibold block md:inline-block md:w-24" style={{ color: 'var(--accent)' }}>Status:</span> <span>VIT Chennai ('27)</span></div>
                                            <div><span className="font-semibold block md:inline-block md:w-24" style={{ color: 'var(--accent)' }}>Kernel:</span> <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>PyTorch 2.x / CUDA 12.1</span></div>
                                            <div><span className="font-semibold block md:inline-block md:w-24" style={{ color: 'var(--accent)' }}>Languages:</span> <span className="text-gray-200">Python, C, C++, Java, Kotlin</span></div>
                                            <div><span className="font-semibold block md:inline-block md:w-24" style={{ color: 'var(--accent)' }}>ML Stack:</span> <span className="text-gray-300">PyTorch, Transformers, llama.cpp, SimpleITK, ONNX</span></div>
                                            <div><span className="font-semibold block md:inline-block md:w-24" style={{ color: 'var(--accent)' }}>Research:</span> <span className="text-gray-300">Diffusion Models, Mamba, Medical AI, Edge VLMs</span></div>
                                            <div><span className="font-semibold block md:inline-block md:w-24" style={{ color: 'var(--accent)' }}>Focus:</span> <span className="text-gray-300">AI for Social Good &amp; Spatial Assistive Tech</span></div>
                                        </div>
                                    </div>
                                );
                            }
                            if (line.type === 'help') {
                                return (
                                    <div key={idx} className="space-y-1.5 font-mono text-gray-300 p-3 rounded-xl glass-hud border border-white/5 my-2">
                                        <div className="font-bold pb-1 border-b border-white/10" style={{ color: 'var(--accent)' }}>// AVAILABLE SYSTEM COMMANDS:</div>
                                        <div>  <span className="font-semibold inline-block w-24" style={{ color: 'var(--accent-light)' }}>neofetch</span> - Display system specifications &amp; profile ASCII</div>
                                        <div>  <span className="font-semibold inline-block w-24" style={{ color: 'var(--accent-light)' }}>skills</span> - List deep learning framework stack</div>
                                        <div>  <span className="font-semibold inline-block w-24" style={{ color: 'var(--accent-light)' }}>projects</span> - Show key repositories and active links</div>
                                        <div>  <span className="font-semibold inline-block w-24" style={{ color: 'var(--accent-light)' }}>contact</span> - Print active uplink vectors</div>
                                        <div>  <span className="font-semibold inline-block w-24" style={{ color: 'var(--accent-light)' }}>quote</span> - Fetch research motto</div>
                                        <div>  <span className="font-semibold inline-block w-24" style={{ color: 'var(--accent-light)' }}>clear</span> - Clear console screen</div>
                                    </div>
                                );
                            }
                            if (line.type === 'skills') {
                                return (
                                    <div key={idx} className="p-4 rounded-xl glass-hud border border-white/5 my-2 space-y-1.5 font-mono">
                                        <div className="font-bold pb-1 border-b border-white/10" style={{ color: 'var(--accent)' }}>// CORE TECHNICAL SKILLSETS</div>
                                        <div><span className="text-slate-400">Core:</span>       <span className="text-gray-200">Diffusion Models, Mamba, VLMs, Medical AI, EdgeAI</span></div>
                                        <div><span className="text-slate-400">Frameworks:</span> <span className="text-gray-200">PyTorch 2.x, Transformers, llama.cpp, SimpleITK</span></div>
                                        <div><span className="text-slate-400">Vision:</span>     <span className="text-gray-200">ViTs, 3D DWT Wavelets, Depth-Anything, YOLO</span></div>
                                        <div><span className="text-slate-400">Systems:</span>    <span className="text-gray-200">CUDA, ONNX Runtime, ARM NEON SIMD, Android JNI</span></div>
                                    </div>
                                );
                            }
                            if (line.type === 'projects') {
                                return (
                                    <div key={idx} className="p-4 rounded-xl glass-hud border border-white/5 my-2 space-y-2 font-mono">
                                        <div className="font-bold pb-1 border-b border-white/10" style={{ color: 'var(--accent)' }}>// ACTIVE RESEARCH REPOSITORIES</div>
                                        <div className="space-y-2">
                                            <div>
                                                <a href="https://github.com/anurag965/DrishtiAI-preview" target="_blank" rel="noreferrer" className="font-bold hover:underline" style={{ color: 'var(--accent-light)' }}>1. DrishtiAI</a>
                                                <span className="text-gray-400 block text-[10px] pl-4">100% offline spatial vision assistant with SmolVLM2 &amp; llama.cpp (13.5+ tok/s).</span>
                                            </div>
                                            <div>
                                                <a href="https://github.com/anurag965" target="_blank" rel="noreferrer" className="font-bold hover:underline" style={{ color: 'var(--accent-light)' }}>2. Uncertainty-Aware MRI-to-sCT Synthesis</a>
                                                <span className="text-gray-400 block text-[10px] pl-4">Wavelet U-Net++ with 3D DWT and deep ensembles (99.9% ENCE reduction).</span>
                                            </div>
                                            <div>
                                                <a href="https://github.com/anurag965/SentinelVision" target="_blank" rel="noreferrer" className="font-bold hover:underline" style={{ color: 'var(--accent-light)' }}>3. CMCA-ActionNet</a>
                                                <span className="text-gray-400 block text-[10px] pl-4">Cross-modal causal spatio-temporal action recognition (84% on JHMDB).</span>
                                            </div>
                                            <div>
                                                <a href="https://github.com/anurag965/OdiaGenAI_JanaSathi" target="_blank" rel="noreferrer" className="font-bold hover:underline" style={{ color: 'var(--accent-light)' }}>4. JanaSathi Odia E-Gov Chatbot</a>
                                                <span className="text-gray-400 block text-[10px] pl-4">Bilingual RAG chatbot (AMD OdiaGenAI Hackathon 2nd place).</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            if (line.type === 'contact') {
                                return (
                                    <div key={idx} className="p-4 rounded-xl glass-hud border border-white/5 my-2 space-y-1.5 font-mono text-[11px] md:text-[12px]">
                                        <div className="font-bold pb-1 border-b border-white/10" style={{ color: 'var(--accent)' }}>// TERMINAL ACTIVE UPLINKS</div>
                                        <div><span className="text-slate-400 block md:inline-block md:w-20">Email:</span> <a href="mailto:anuragpradhancb@gmail.com" className="hover:underline break-all" style={{ color: 'var(--accent-light)' }}>anuragpradhancb@gmail.com</a></div>
                                        <div><span className="text-slate-400 block md:inline-block md:w-20">LinkedIn:</span> <a href="https://www.linkedin.com/in/anurag-pradhan-0340bb288" target="_blank" rel="noreferrer" className="hover:underline break-all" style={{ color: 'var(--accent-light)' }}>in/anurag-pradhan-0340bb288</a></div>
                                        <div><span className="text-slate-400 block md:inline-block md:w-20">Scholar:</span> <a href="https://scholar.google.co.in/citations?hl=en&user=_cFdzngAAAAJ" target="_blank" rel="noreferrer" className="hover:underline break-all" style={{ color: 'var(--accent-light)' }}>Google Scholar profile</a></div>
                                        <div><span className="text-slate-400 block md:inline-block md:w-20">GitHub:</span> <a href="https://github.com/anurag965" target="_blank" rel="noreferrer" className="hover:underline break-all" style={{ color: 'var(--accent-light)' }}>github.com/anurag965</a></div>
                                    </div>
                                );
                            }
                            return (
                                <div key={idx} className="text-gray-300 font-mono">
                                    {line.text}
                                </div>
                            );
                        })}
                        <div ref={terminalEndRef} />
                    </div>

                    {/* Quick-Click Command Badges */}
                    <div className="px-4 py-2.5 border-t border-white/10 flex flex-wrap gap-2 items-center bg-white/[0.01]">
                        <span className="text-[10px] uppercase font-bold text-slate-500 mr-1 tracking-widest font-mono select-none">Quick:</span>
                        {['help', 'neofetch', 'skills', 'projects', 'contact', 'quote', 'clear'].map((cmd) => (
                            <button
                                key={cmd}
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCommand(cmd);
                                }}
                                className="px-2.5 py-1 glass-chip rounded-lg text-[11px] text-slate-300 hover:text-white font-mono transition-all duration-200 cursor-pointer"
                            >
                                {cmd}
                            </button>
                        ))}
                    </div>

                    {/* Input Prompt Form */}
                    <form onSubmit={handleSubmit} className="px-4 py-3 bg-black/50 border-t border-white/10 flex items-center gap-2">
                        <span className="font-bold select-none shrink-0 font-mono" style={{ color: 'var(--accent)' }}><span className="hidden sm:inline">guest@anurag-sys:</span>~$</span>
                        <input 
                            ref={inputRef}
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none focus:ring-0 p-0 text-white font-mono select-text text-xs"
                            placeholder="Type a command (e.g. 'projects', 'help')..."
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                        />
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Terminal;
