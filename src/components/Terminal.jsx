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
                    className="w-full max-w-3xl glass-hud rounded-2xl overflow-hidden font-mono text-[11px] md:text-[12px] text-gray-300 shadow-2xl flex flex-col max-h-[85vh]"
                >
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
                            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold font-mono">guest@anurag-sys:~</span>
                            <span className="text-[10px] text-slate-500 hidden sm:inline">[press ESC to exit]</span>
                        </div>
                        <button 
                            onClick={onClose}
                            className="text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded hover:bg-white/10 transition-colors font-mono"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Display / Logs Output */}
                    <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-3 leading-relaxed scrollbar-thin scrollbar-thumb-gray-800 select-text">
                        {history.map((line, idx) => {
                            if (line.type === 'input') {
                                return (
                                    <div key={idx} className="text-sky-400 font-bold font-mono">
                                        {line.text}
                                    </div>
                                );
                            }
                            if (line.type === 'neofetch') {
                                return (
                                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-xl bg-black/40 border border-white/5 my-2">
                                        {/* Left Logo */}
                                        <div className="md:col-span-4 text-sky-400 font-bold leading-relaxed select-none text-[9px] md:text-[11px] hidden md:block font-mono">
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
                                            <div className="text-slate-400 font-bold"><span className="text-sky-400">anurag</span>@<span className="text-blue-500">github</span></div>
                                            <div className="border-b border-dashed border-gray-800 my-1.5" />
                                            <div><span className="text-sky-400 font-semibold block md:inline-block md:w-24">OS:</span> <span className="text-emerald-400 font-bold">Research Mode [ON]</span></div>
                                            <div><span className="text-sky-400 font-semibold block md:inline-block md:w-24">Host:</span> <span>IIT Mandi (Research Intern, Prof. Aditya Nigam)</span></div>
                                            <div><span className="text-sky-400 font-semibold block md:inline-block md:w-24">Status:</span> <span>VIT Chennai ('27)</span></div>
                                            <div><span className="text-sky-400 font-semibold block md:inline-block md:w-24">Kernel:</span> <span className="text-yellow-400">PyTorch 2.x / CUDA 12.1</span></div>
                                            <div><span className="text-sky-400 font-semibold block md:inline-block md:w-24">Languages:</span> <span className="text-gray-200">Python, C, C++, Java, Kotlin</span></div>
                                            <div><span className="text-sky-400 font-semibold block md:inline-block md:w-24">ML Stack:</span> <span className="text-gray-300">PyTorch, Transformers, llama.cpp, SimpleITK, PyWavelets, ONNX</span></div>
                                            <div><span className="text-sky-400 font-semibold block md:inline-block md:w-24">Research:</span> <span className="text-gray-300">Diffusion Models, Mamba, Medical AI, GANs, VLMs, EdgeAI</span></div>
                                            <div><span className="text-sky-400 font-semibold block md:inline-block md:w-24">Focus:</span> <span className="text-gray-300">AI for Social Good</span></div>
                                        </div>
                                    </div>
                                );
                            }
                            if (line.type === 'help') {
                                return (
                                    <div key={idx} className="space-y-1 font-mono text-gray-300">
                                        <div className="text-sky-400 font-bold">Available commands:</div>
                                        <div>  <span className="text-emerald-400 font-semibold inline-block w-24">neofetch</span> - Display system specifications & profile ASCII</div>
                                        <div>  <span className="text-emerald-400 font-semibold inline-block w-24">skills</span> - List deep learning framework stack</div>
                                        <div>  <span className="text-emerald-400 font-semibold inline-block w-24">projects</span> - Show key repositories and active links</div>
                                        <div>  <span className="text-emerald-400 font-semibold inline-block w-24">contact</span> - Print active uplink vectors</div>
                                        <div>  <span className="text-emerald-400 font-semibold inline-block w-24">quote</span> - Fetch Anurag's motto</div>
                                        <div>  <span className="text-emerald-400 font-semibold inline-block w-24">clear</span> - Clear the console terminal screen</div>
                                    </div>
                                );
                            }
                            if (line.type === 'skills') {
                                return (
                                    <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 my-2 space-y-1.5 font-mono">
                                        <div className="text-sky-400 font-bold">// CORE SKILLSETS</div>
                                        <div><span className="text-slate-500">Core:</span>    <span className="text-gray-200">Diffusion Models, Mamba, VLMs, LLMs, Medical AI, EdgeAI</span></div>
                                        <div><span className="text-slate-500">Frameworks:</span> <span className="text-gray-200">PyTorch, Transformers, llama.cpp, SimpleITK, PyWavelets</span></div>
                                        <div><span className="text-slate-500">Vision:</span>  <span className="text-gray-200">ViTs, BEiT, YOLO, MediaPipe, OpenCV, Depth-Anything</span></div>
                                        <div><span className="text-slate-500">Systems:</span> <span className="text-gray-200">CUDA, ONNX Runtime, Git, Linux, Docker, Android JNI</span></div>
                                    </div>
                                );
                            }
                            if (line.type === 'projects') {
                                return (
                                    <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 my-2 space-y-2 font-mono">
                                        <div className="text-sky-400 font-bold">// SELECTED ACTIVE REPOSITORIES</div>
                                        <div className="space-y-2">
                                            <div>
                                                <a href="https://github.com/anurag965/DrishtiAI-preview" target="_blank" rel="noreferrer" className="text-emerald-400 font-bold hover:underline">1. DrishtiAI</a>
                                                <span className="text-gray-400 block text-[10px] pl-4">100% offline spatial vision assistant with SmolVLM2 & llama.cpp (13.5+ tok/s).</span>
                                            </div>
                                            <div>
                                                <a href="https://github.com/anurag965" target="_blank" rel="noreferrer" className="text-emerald-400 font-bold hover:underline">2. Uncertainty-Aware MRI-to-sCT Synthesis</a>
                                                <span className="text-gray-400 block text-[10px] pl-4">Wavelet U-Net++ with 3D DWT and deep ensembles (99.9% ENCE reduction).</span>
                                            </div>
                                            <div>
                                                <a href="https://github.com/anurag965/SentinelVision" target="_blank" rel="noreferrer" className="text-emerald-400 font-bold hover:underline">3. CMCA-ActionNet</a>
                                                <span className="text-gray-400 block text-[10px] pl-4">Cross-modal causal spatio-temporal action recognition (84% on JHMDB).</span>
                                            </div>
                                            <div>
                                                <a href="https://github.com/anurag965/OdiaGenAI_JanaSathi" target="_blank" rel="noreferrer" className="text-emerald-400 font-bold hover:underline">4. JanaSathi Odia E-Gov Chatbot</a>
                                                <span className="text-gray-400 block text-[10px] pl-4">Bilingual RAG chatbot (AMD OdiaGenAI Hackathon 2nd place).</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            if (line.type === 'contact') {
                                return (
                                    <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 my-2 space-y-1.5 font-mono text-[11px] md:text-[12px]">
                                        <div className="text-sky-400 font-bold">// TERMINAL ACTIVE UPLINKS</div>
                                        <div><span className="text-slate-500 block md:inline-block md:w-20">Email:</span> <a href="mailto:anuragpradhancb@gmail.com" className="text-emerald-400 hover:underline break-all">anuragpradhancb@gmail.com</a></div>
                                        <div><span className="text-slate-500 block md:inline-block md:w-20">LinkedIn:</span> <a href="https://www.linkedin.com/in/anurag-pradhan-0340bb288" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline break-all">in/anurag-pradhan-0340bb288</a></div>
                                        <div><span className="text-slate-500 block md:inline-block md:w-20">Scholar:</span> <a href="https://scholar.google.co.in/citations?hl=en&user=_cFdzngAAAAJ" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline break-all">Google Scholar profile</a></div>
                                        <div><span className="text-slate-500 block md:inline-block md:w-20">GitHub:</span> <a href="https://github.com/anurag965" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline break-all">github.com/anurag965</a></div>
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
                    <div className="px-4 py-2.5 border-t border-white/10 flex flex-wrap gap-1.5 items-center bg-white/[0.01]">
                        <span className="text-[10px] uppercase font-bold text-slate-500 mr-1 tracking-widest font-mono select-none">Quick:</span>
                        {['help', 'neofetch', 'skills', 'projects', 'contact', 'quote', 'clear'].map((cmd) => (
                            <button
                                key={cmd}
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCommand(cmd);
                                }}
                                className="px-2.5 py-1 bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-500/40 rounded text-[10px] text-gray-300 hover:text-sky-300 font-mono transition-all duration-200 cursor-pointer"
                            >
                                {cmd}
                            </button>
                        ))}
                    </div>

                    {/* Input Prompt Form */}
                    <form onSubmit={handleSubmit} className="px-4 py-3 bg-black/40 border-t border-white/10 flex items-center gap-2">
                        <span className="text-sky-400 font-bold select-none shrink-0 font-mono"><span className="hidden sm:inline">guest@anurag-sys:</span>~$</span>
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
