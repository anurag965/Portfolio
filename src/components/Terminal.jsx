import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', text: 'ANURAG SYSTEM TERMINAL v3.1.2' },
        { type: 'output', text: 'Type "help" for a list of active commands or click the chips below.' },
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
        quote: () => ({ type: 'output', text: '"The world responds to actions , not thoughts."' }),
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
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        if (terminalEndRef.current) {
            terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    return (
        <div 
            onClick={focusInput}
            className="w-full bg-[#0a0a0a] rounded-2xl border border-blue-500/20 shadow-2xl overflow-hidden font-Mono text-[11px] md:text-[12px] text-gray-300 cursor-text"
        >
            {/* Header / Title Bar */}
            <div className="bg-[#111] border-b border-white/5 px-4 py-3 flex items-center justify-between select-none">
                <div className="flex gap-2">
                    <span className="w-3 h-3 bg-red-500/70 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500/70 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500/70 rounded-full"></span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold font-Mono">guest@anurag-sys:~</span>
                <div className="w-10"></div>
            </div>

            {/* Display / Logs Output */}
            <div className="p-5 h-[340px] md:h-[400px] overflow-y-auto space-y-3 leading-relaxed scrollbar-thin scrollbar-thumb-gray-800 select-text">
                {history.map((line, idx) => {
                    if (line.type === 'input') {
                        return (
                            <div key={idx} className="text-blue-500 font-bold font-Mono">
                                {line.text}
                            </div>
                        );
                    }
                    if (line.type === 'neofetch') {
                        return (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 rounded-xl bg-black/40 border border-white/5 my-2">
                                {/* Left Logo */}
                                <div className="md:col-span-4 text-blue-500 font-bold leading-relaxed select-none text-[9px] md:text-[11px] hidden md:block font-Mono">
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
                                <div className="md:col-span-8 space-y-1 text-gray-300 text-[11px] md:text-[12px] leading-relaxed font-Mono">
                                    <div className="text-gray-400 font-bold"><span className="text-blue-400">anurag</span>@<span className="text-blue-500">github</span></div>
                                    <div className="text-gray-500 font-bold">--------------------------------</div>
                                    <div><span className="text-blue-400 font-semibold inline-block w-24">OS:</span> <span className="text-green-400 font-bold">Research Mode [ON]</span></div>
                                    <div><span className="text-blue-400 font-semibold inline-block w-24">Host:</span> <span>IIT Mandi (Research Intern)</span></div>
                                    <div><span className="text-blue-400 font-semibold inline-block w-24">Status:</span> <span>Final-year, VIT Chennai ('27)</span></div>
                                    <div><span className="text-blue-400 font-semibold inline-block w-24">Kernel:</span> <span className="text-yellow-400">PyTorch 2.x / CUDA</span></div>
                                    <div><span className="text-blue-400 font-semibold inline-block w-24">Editor:</span> <span>VS Code</span></div>
                                    <div><span className="text-blue-400 font-semibold inline-block w-24">Languages:</span> <span className="text-gray-200">Python, C, C++, Java</span></div>
                                    <div><span className="text-blue-400 font-semibold inline-block w-24">ML Stack:</span> <span className="text-gray-300">PyTorch, TensorFlow, HuggingFace, llama.cpp, OpenCV, LangChain</span></div>
                                    <div><span className="text-blue-400 font-semibold inline-block w-24">Research:</span> <span className="text-gray-300">Medical AI, Generative Models, LLMs, VLMs, SLMs, EdgeAI</span></div>
                                    <div><span className="text-blue-400 font-semibold inline-block w-24">Focus:</span> <span className="text-gray-300">AI for Social Good</span></div>
                                </div>
                            </div>
                        );
                    }
                    if (line.type === 'help') {
                        return (
                            <div key={idx} className="space-y-1 font-Mono text-gray-300">
                                <div className="text-blue-400 font-bold">Available commands:</div>
                                <div>  <span className="text-green-400 font-semibold inline-block w-24">neofetch</span> - Display system specifications & profile ASCII</div>
                                <div>  <span className="text-green-400 font-semibold inline-block w-24">skills</span> - List deep learning framework stack</div>
                                <div>  <span className="text-green-400 font-semibold inline-block w-24">projects</span> - Show key repositories and active links</div>
                                <div>  <span className="text-green-400 font-semibold inline-block w-24">contact</span> - Print active uplink vectors</div>
                                <div>  <span className="text-green-400 font-semibold inline-block w-24">quote</span> - Fetch Anurag's motto</div>
                                <div>  <span className="text-green-400 font-semibold inline-block w-24">clear</span> - Clear the console terminal screen</div>
                            </div>
                        );
                    }
                    if (line.type === 'skills') {
                        return (
                            <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 my-2 space-y-1.5 font-Mono">
                                <div className="text-blue-400 font-bold">// CORE SKILLSETS</div>
                                <div><span className="text-gray-500">ML / DL:</span> <span className="text-gray-200">PyTorch, TensorFlow, Keras, HuggingFace, Ultralytics</span></div>
                                <div><span className="text-gray-500">GenAI:</span>   <span className="text-gray-200">LangChain, llama.cpp, SmolVLM2, GGUF Quantization</span></div>
                                <div><span className="text-gray-500">Vision:</span>  <span className="text-gray-200">ViTs, BEiT, YOLO, MediaPipe, OpenCV</span></div>
                                <div><span className="text-gray-500">Systems:</span> <span className="text-gray-200">Git, Linux, Docker, Firebase, MongoDB</span></div>
                            </div>
                        );
                    }
                    if (line.type === 'projects') {
                        return (
                            <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 my-2 space-y-2 font-Mono">
                                <div className="text-blue-400 font-bold">// SELECTED ACTIVE REPOSITORIES</div>
                                <div className="space-y-2">
                                    <div>
                                        <a href="https://github.com/anurag965" target="_blank" rel="noreferrer" className="text-green-400 font-bold hover:underline">1. DrishtiAI</a>
                                        <span className="text-gray-400 block text-[10px] pl-4">Android App using llama.cpp & SmolVLM2 for blind accessibility.</span>
                                    </div>
                                    <div>
                                        <a href="https://github.com/anurag965/SentinelVision" target="_blank" rel="noreferrer" className="text-green-400 font-bold hover:underline">2. SentinelVision</a>
                                        <span className="text-gray-400 block text-[10px] pl-4">VEHANT Spatio-Temporal causal fight & collapse action detection.</span>
                                    </div>
                                    <div>
                                        <a href="https://github.com/anurag965/Brain-Tumor-Segmentation" target="_blank" rel="noreferrer" className="text-green-400 font-bold hover:underline">3. Brain Tumor Segmentation</a>
                                        <span className="text-gray-400 block text-[10px] pl-4">Semantic segmentations utilizing custom BEiT transformers.</span>
                                    </div>
                                    <div>
                                        <a href="https://github.com/anurag965/OdiaGenAI_JanaSathi" target="_blank" rel="noreferrer" className="text-green-400 font-bold hover:underline">4. JanaSathi Odia E-Gov Chatbot</a>
                                        <span className="text-gray-400 block text-[10px] pl-4">LangChain-powered multilingual RAG oracle for governance access.</span>
                                    </div>
                                    <div>
                                        <a href="https://github.com/anurag965/Liver_disease_prediction" target="_blank" rel="noreferrer" className="text-green-400 font-bold hover:underline">5. Liver Disease Prediction</a>
                                        <span className="text-gray-400 block text-[10px] pl-4">Deep learning YOLOv5 model for segmentation and predictions.</span>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    if (line.type === 'contact') {
                        return (
                            <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 my-2 space-y-1.5 font-Mono">
                                <div className="text-blue-400 font-bold">// TERMINAL ACTIVE UPLINKS</div>
                                <div><span className="text-gray-500 w-20 inline-block">Email:</span> <a href="mailto:anuragpradhancb@gmail.com" className="text-green-400 hover:underline">anuragpradhancb@gmail.com</a></div>
                                <div><span className="text-gray-500 w-20 inline-block">LinkedIn:</span> <a href="https://www.linkedin.com/in/anurag-pradhan-0340bb288" target="_blank" rel="noreferrer" className="text-green-400 hover:underline">in/anurag-pradhan-0340bb288</a></div>
                                <div><span className="text-gray-500 w-20 inline-block">Scholar:</span> <a href="https://scholar.google.co.in/citations?hl=en&user=_cFdzngAAAAJ" target="_blank" rel="noreferrer" className="text-green-400 hover:underline">Google Scholar citations</a></div>
                                <div><span className="text-gray-500 w-20 inline-block">GitHub:</span> <a href="https://github.com/anurag965" target="_blank" rel="noreferrer" className="text-green-400 hover:underline">github.com/anurag965</a></div>
                            </div>
                        );
                    }
                    return (
                        <div key={idx} className="text-gray-300 font-Mono">
                            {line.text}
                        </div>
                    );
                })}
                <div ref={terminalEndRef} />
            </div>

            {/* Quick-Click Command Badges */}
            <div className="px-5 py-3 bg-[#111]/80 border-t border-white/5 flex flex-wrap gap-2 items-center">
                <span className="text-[10px] uppercase font-bold text-gray-500 mr-2 tracking-widest font-Mono select-none">Shortcuts:</span>
                {['help', 'neofetch', 'skills', 'projects', 'contact', 'quote', 'clear'].map((cmd) => (
                    <button
                        key={cmd}
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCommand(cmd);
                        }}
                        className="px-3 py-1.5 bg-[#181818] hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/40 rounded-md text-[10px] text-gray-400 hover:text-blue-400 font-Mono transition-all duration-300"
                    >
                        {cmd}
                    </button>
                ))}
            </div>

            {/* Input Prompt Form */}
            <form onSubmit={handleSubmit} className="px-5 py-4 bg-[#070707] border-t border-white/5 flex items-center gap-2">
                <span className="text-blue-500 font-bold select-none shrink-0">guest@anurag-sys:~$</span>
                <input 
                    ref={inputRef}
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none focus:ring-0 p-0 text-white font-Mono select-text"
                    placeholder="Type command here..."
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                />
            </form>
        </div>
    );
};

export default Terminal;
