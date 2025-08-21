import React, { useState } from 'react'
import right_arrow_white from '../assets/right-arrow-white.png'
import { motion } from 'framer-motion'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        const mailtoLink = `mailto:anuragpradhancb@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom:%20${name}%0D%0AEmail:%20${email}`;

        window.location.href = mailtoLink;
        setResult("Your message has been sent!");
        event.target.reset();
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <motion.h4
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-2 text-lg font-Ovo">Connect with me</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-5xl font-Ovo">Get in touch</motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</motion.p>

            <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onSubmit={onSubmit} className="max-w-2xl mx-auto">

                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name" className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" required name="name" />

                    <input type="email" placeholder="Enter your email" className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" required name="email" />
                </div>
                <textarea rows="6" placeholder="Enter your message" className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90" required name="message"></textarea>
                <button type='submit' className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover hover:scale-105 transition-transform">Submit now
                    <img src={right_arrow_white} alt="" className="w-4" />
                </button>
                <p className='mt-4'>{result}</p>
            </motion.form>
        </div>
    )
}

export default Contact