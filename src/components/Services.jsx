import React from 'react'
import right_arrow from '../assets/right-arrow.png'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
    <h4 className="text-center mb-2 text-lg font-Ovo">What I can offer</h4>
    <h2 className="text-center text-5xl font-Ovo">My services</h2>
    <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a Deep Learning enthusiast studying in VIT Chennai, India with 2 years of experience learning and applying Deep Learning and GenAI for public welfare.</p>

    <div className="grid grid-cols-auto gap-6 my-10">
        <div className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            {/* Deep Learning SVG - Brain with connections */}
            <svg className="w-10 h-10 text-blue-500" viewBox="0 0 48 48" fill="none">
              <ellipse cx="24" cy="24" rx="16" ry="14" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="16" cy="20" r="2" fill="currentColor"/>
              <circle cx="32" cy="20" r="2" fill="currentColor"/>
              <circle cx="20" cy="30" r="2" fill="currentColor"/>
              <circle cx="28" cy="30" r="2" fill="currentColor"/>
              <circle cx="24" cy="24" r="2" fill="currentColor"/>
              <line x1="16" y1="20" x2="24" y2="24" stroke="currentColor" strokeWidth="2"/>
              <line x1="32" y1="20" x2="24" y2="24" stroke="currentColor" strokeWidth="2"/>
              <line x1="20" y1="30" x2="24" y2="24" stroke="currentColor" strokeWidth="2"/>
              <line x1="28" y1="30" x2="24" y2="24" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">Deep Learning Engineer</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80"><p>1) Familiar with PyTorch for training neural networks.</p>

<p>2) Worked on image classification, object detection, and NLP tasks.</p>

<p>3) Basic understanding of model optimization techniques.</p>
            </p>
    
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            {/* Deep Learning SVG - Neural Network */}
            <svg className="w-10 h-10 text-blue-500" viewBox="0 0 48 48" fill="none">
              <circle cx="12" cy="24" r="4" fill="currentColor"/>
              <circle cx="24" cy="12" r="4" fill="currentColor"/>
              <circle cx="24" cy="24" r="4" fill="currentColor"/>
              <circle cx="24" cy="36" r="4" fill="currentColor"/>
              <circle cx="36" cy="24" r="4" fill="currentColor"/>
              <line x1="15.07" y1="21.07" x2="21.07" y2="15.07" stroke="currentColor" strokeWidth="2"/>
              <line x1="15.07" y1="26.93" x2="21.07" y2="32.93" stroke="currentColor" strokeWidth="2"/>
              <line x1="28.93" y1="15.07" x2="32.93" y2="21.07" stroke="currentColor" strokeWidth="2"/>
              <line x1="28.93" y1="32.93" x2="32.93" y2="26.93" stroke="currentColor" strokeWidth="2"/>
              <line x1="24" y1="16" x2="24" y2="20" stroke="currentColor" strokeWidth="2"/>
              <line x1="24" y1="28" x2="24" y2="32" stroke="currentColor" strokeWidth="2"/>
              <line x1="16" y1="24" x2="20" y2="24" stroke="currentColor" strokeWidth="2"/>
              <line x1="28" y1="24" x2="32" y2="24" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">Image Processing</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80"><p>1) Knowledge of CNNs for image classification and feature extraction.</p><p>2) Knowledge of CNNs for image classification and feature extraction.</p>

<p>3) Experience with YOLO for real-time object detection.</p>

<p>4) Exposure to Vision Transformers (ViT) for image classification.</p>
            </p>
            
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            {/* GenAI SVG - Sparkle/AI chip */}
            <svg className="w-10 h-10 text-purple-500" viewBox="0 0 48 48" fill="none">
              <rect x="14" y="14" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="24" cy="24" r="6" fill="currentColor"/>
              <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M10 38l4-4M34 14l4-4" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">GenAI</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80"><p>1) Hands-on experience with GPT and BERT for NLP tasks.</p> <p>2) Worked on projects like chatbots, text summarization, and sentiment analysis.</p> <p>3) Familiar with fine-tuning and applying transformers.</p></p>
            
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            {/* Git SVG - Official Git Mark */}
            <svg className="w-10 h-10 text-orange-500" viewBox="0 0 48 48" fill="none">
              <g>
                <rect x="8" y="8" width="32" height="32" rx="8" fill="currentColor"/>
                <circle cx="16" cy="24" r="3" fill="#fff"/>
                <circle cx="32" cy="16" r="3" fill="#fff"/>
                <circle cx="32" cy="32" r="3" fill="#fff"/>
                <line x1="18.2" y1="25.8" x2="29.8" y2="30.2" stroke="#fff" strokeWidth="2"/>
                <line x1="18.2" y1="22.2" x2="29.8" y2="17.8" stroke="#fff" strokeWidth="2"/>
              </g>
            </svg>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">GIT</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80"><p>1) Basic knowledge of Git for version control and collaboration.</p> <p>2) Experience in managing Git repositories, branching, and merge conflicts.</p> <p>3) Comfortable using GitHub for project hosting.</p></p>
            
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            {/* Data Visualization SVG - Bar and line chart */}
            <svg className="w-10 h-10 text-blue-500" viewBox="0 0 48 48" fill="none">
              <rect x="10" y="28" width="4" height="10" fill="currentColor"/>
              <rect x="20" y="20" width="4" height="18" fill="currentColor"/>
              <rect x="30" y="14" width="4" height="24" fill="currentColor"/>
              <polyline points="10,38 22,28 32,18 40,14" fill="none" stroke="currentColor" strokeWidth="2"/>
              <line x1="8" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">Data Visualization</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80"><p>1) Experience with Matplotlib, Seaborn, and Plotly for data visualization.</p> <p>2) Worked on creating visual representations of data.</p> <p>3) Familiar with generating interactive charts and dashboards.</p></p>
            
        </div>
    </div>
  </div>
  )
}

export default Services
