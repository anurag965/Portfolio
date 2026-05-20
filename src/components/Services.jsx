import React from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ title, description, icon }) => (
    <div className="p-8 bg-gray-50 dark:bg-[#111] rounded-3xl border border-black/5 dark:border-white/5 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group">
        <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-tight">{title}</h3>
        <div className="space-y-2">
            {description.map((item, index) => (
                <p key={index} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-Outfit">
                    • {item}
                </p>
            ))}
        </div>
    </div>
);

const Services = () => {
  const services = [
    {
      title: "Deep Learning & CV",
      description: [
        "Designing and training efficient CNNs and Vision Transformers (ViT, BEiT).",
        "Expertise in real-time object detection using YOLO and MediaPipe.",
        "Advanced image segmentation and processing for medical & surveillance AI."
      ],
      icon: (
        <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: "GenAI & LLMs",
      description: [
        "Building bilingual RAG-based systems and chatbots using LangChain.",
        "Working with Vision-Language Models (SmolVLM2) for multimodal AI.",
        "Fine-tuning Transformers and deploying custom LLM evaluations."
      ],
      icon: (
        <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: "On-Device AI & Opt",
      description: [
        "Optimizing models for on-device inference using Llama.cpp and GGUF.",
        "Expertise in model quantization and conversion (ONNX).",
        "Developing high-performance AI applications for Android and IoT."
      ],
      icon: (
        <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    }
  ];

  return (
    <div id="services" className="w-full px-6 md:px-[12%] py-24 scroll-mt-20 flex flex-col items-center">
        <div className="w-full max-w-6xl">
            <div className="flex flex-col items-center mb-12">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-2">My Expertise</span>
                <h2 className="text-2xl md:text-4xl font-black text-center text-gray-900 dark:text-gray-100 uppercase tracking-tighter">Core Competencies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services
