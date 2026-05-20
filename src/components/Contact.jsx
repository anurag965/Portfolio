import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        setResult("Redirecting to your mail app...");
        const formData = new FormData(event.target);

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        const mailtoLink = `mailto:anuragpradhancb@gmail.com?subject=Inquiry from ${name}&body=${message}%0D%0A%0D%0A---%0D%0ASender: ${name}%0D%0AContact: ${email}`;

        window.location.href = mailtoLink;
        setResult("Sent!");
        event.target.reset();
    };

    return (
        <div id="contact" className="w-full px-6 md:px-[12%] py-24 scroll-mt-20 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <div className="flex flex-col items-center mb-12">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-2">Collaboration</span>
                    <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 dark:text-gray-100 uppercase tracking-tighter">Get In Touch</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-gray-50 dark:bg-[#111] p-8 md:p-12 rounded-3xl border border-black/5 dark:border-white/5 shadow-2xl shadow-blue-500/5"
                >
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. John Doe" 
                                    className="w-full p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl focus:border-blue-500 outline-none transition-all font-Outfit" 
                                    required 
                                    name="name" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="e.g. john@example.com" 
                                    className="w-full p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl focus:border-blue-500 outline-none transition-all font-Outfit" 
                                    required 
                                    name="email" 
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                            <textarea 
                                rows="6" 
                                placeholder="How can I help you?" 
                                className="w-full p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl focus:border-blue-500 outline-none transition-all font-Outfit resize-none" 
                                required 
                                name="message"
                            ></textarea>
                        </div>
                        
                        <div className="flex flex-col items-center gap-6">
                            <button 
                                type='submit' 
                                className="w-full md:w-max px-12 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-full hover:bg-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Send Message
                            </button>
                            
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-[10px] font-Mono text-gray-400 uppercase tracking-widest opacity-50">Manual_Uplink</p>
                                <button 
                                    type="button"
                                    onClick={() => {
                                        navigator.clipboard.writeText('anuragpradhancb@gmail.com');
                                        setResult("Email Copied!");
                                        setTimeout(() => setResult(""), 2000);
                                    }}
                                    className="text-xs font-Mono font-black text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-dashed border-gray-400 pb-1"
                                >
                                    anuragpradhancb@gmail.com
                                </button>
                            </div>

                            {result && <p className="text-sm font-bold text-blue-600 dark:text-blue-400 animate-pulse uppercase tracking-widest">{result}</p>}
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
