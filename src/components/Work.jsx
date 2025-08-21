import React from 'react'
import send_icon from '../assets/send-icon.png'
import right_arrow_blod from '../assets/right-arrow-bold.png'
import right_arrow_blod_dark from '../assets/right-arrow-bold-dark.png'
import { motion } from 'framer-motion'

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
    <motion.h4 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo">My portfolio</motion.h4>
    <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-5xl font-Ovo">My latest work</motion.h2>
    <motion.p 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Welcome to my portfolio! Explore a collection of my projects.</motion.p>

    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        <div className="aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Liver Disease Prediction</h2>
                    <p className="text-sm text-gray-700">Deep Learning, CNN, YOLOv5</p>
                </div>
                <a href="https://github.com/anurag965/Liver_disease_prediction" target="_blank" rel="noopener noreferrer">
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </div></a>
            </div>
        </div>
        <div className="aspect-square bg-[url('./assets/work-2.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Brain Tumor Segmentation</h2>
                    <p className="text-sm text-gray-700">Deep Learning, BEiT, Segmentation, PyTorch, Vision Transformers</p>
                </div>
                <a href="https://github.com/anurag965/Brain-Tumor-Segmentation" target="_blank" rel="noopener noreferrer">
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </div></a>
            </div>
        </div>
        <div className="aspect-square bg-[url('./assets/work-3.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Odia e-Governance Chatbot</h2>
                    <p className="text-sm text-gray-700">PyTorch, LLM, RAG, Openrouter, Langflow</p>
                </div>
                <a href="https://github.com/anurag965/OdiaGenAI_Hackathon" target="_blank" rel="noopener noreferrer">
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </div></a>
            </div>
        </div>
        <div className="aspect-square bg-[url('./assets/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Image Generation Using Pix2Pix GAN</h2>
                    <p className="text-sm text-gray-700">Deep Learning, GANs, Stanford Dogs Dataset, Pix2Pix</p>
                </div>
                <a href="https://github.com/anurag965/pix2pix_GAN_stanford_dogs" target="_blank" rel="noopener noreferrer">
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </div></a>
            </div>
        </div>
    
        <div className="aspect-square bg-[url('./assets/work-5.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Exoplanet Habitability Estimator</h2>
                    <p className="text-sm text-gray-700">Machine Learning, Random Forest, AdaBoost, Decision Trees</p>
                </div>
                <a href="https://github.com/anurag965/planet-habitability-predictor" target="_blank" rel="noopener noreferrer">
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </div></a>
            </div>
        </div>
    </motion.div>
    <motion.a 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        href="https://github.com/anurag965?tab=repositories" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 hover:scale-105 transition-transform
    dark:text-white dark:border-white dark:hover:bg-darkHover">Show more
        <img src={right_arrow_blod} alt="" className="w-4 dark:hidden"/>
        <img src={right_arrow_blod_dark} alt="" className="w-4 hidden dark:block"/>
    </motion.a>

</div>
  )
}

export default Work
