import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState('');
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState(0);

    const messages = [
        "INITIALIZING_SYSTEM_CORE...",
        "LOADING_NEURAL_WEIGHTS...",
        "ESTABLISHING_UPLINK...",
        "SYNCING_INTERFACE...",
        "ACCESS_GRANTED."
    ];

    useEffect(() => {
        let currentMsgIndex = 0;
        let charIndex = 0;
        
        const interval = setInterval(() => {
            if (currentMsgIndex < messages.length) {
                const currentFullMsg = messages[currentMsgIndex];
                if (charIndex <= currentFullMsg.length) {
                    setText(currentFullMsg.substring(0, charIndex));
                    charIndex++;
                } else {
                    currentMsgIndex++;
                    charIndex = 0;
                    setPhase(prev => prev + 1);
                }
            } else {
                clearInterval(interval);
                setTimeout(onComplete, 200); // Reduced from 500ms
            }
        }, 25); // Reduced from 40ms

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 1;
            });
        }, 15); // Reduced from 25ms

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <motion.div 
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-white dark:bg-[#0a0a0a] flex flex-col items-center justify-center font-Mono"
        >
            {/* Background Grid for consistency */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            
            <div className="relative w-80 md:w-96 flex flex-col gap-6 p-8 border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md">
                {/* HUD Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>

                <div className="flex justify-between items-center text-xs uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 font-black">
                    <span>System_Boot</span>
                    <span>v3.0.4</span>
                </div>

                <div className="h-1 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="text-sm md:text-base text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 animate-pulse rounded-full"></span>
                        {text}
                        <span className="animate-pulse">_</span>
                    </div>
                </div>

                <div className="flex justify-between items-center opacity-40">
                    <div className="flex gap-1.5">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className={`w-1.5 h-4 ${i < phase ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
                        ))}
                    </div>
                    <span className="text-xs font-bold">{progress}%</span>
                </div>
            </div>

            <div className="mt-8 text-[10px] md:text-xs uppercase tracking-[0.5em] text-gray-400 animate-pulse">
                establishing_secure_connection
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
