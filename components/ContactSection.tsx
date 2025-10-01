import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { EmailIcon } from './icons';

const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const formContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        }
    }
};

const formItemVariants: Variants = {
    hidden: { opacity: 0, y: 20, rotateX: -15 },
    visible: { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: { 
            duration: 0.5,
            type: "spring",
            stiffness: 100
        } 
    }
};

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus('Please enter a valid email address.');
            setTimeout(() => setStatus(''), 5000);
            return;
        }

        // Here you would typically send the form data to a backend service
        console.log('Form submitted:', formData);
        setStatus('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-light-bg via-light-bg-alt to-light-bg dark:from-dark-bg dark:via-dark-bg-alt dark:to-dark-bg relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-light-primary dark:bg-dark-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 dark:bg-blue-600 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-800 dark:text-white mb-4 text-3d">
                        Let's Work Together
                    </h2>
                    <p className="text-lg text-light-text-alt dark:text-dark-text-alt max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl card-3d-enhanced border border-gray-200/50 dark:border-gray-700/50 perspective-3d"
                        variants={formContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ 
                            scale: 1.02,
                            rotateY: 2,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div variants={formItemVariants}>
                                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">
                                    Your Name
                                </label>
                                <motion.input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300 text-slate-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-3d"
                                    whileFocus={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                                    whileHover={{ y: -2 }}
                                />
                            </motion.div>
                            <motion.div variants={formItemVariants}>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">
                                    Email Address
                                </label>
                                <motion.input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300 text-slate-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-3d"
                                    whileFocus={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                                    whileHover={{ y: -2 }}
                                />
                            </motion.div>
                            <motion.div variants={formItemVariants}>
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">
                                    Your Message
                                </label>
                                <motion.textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300 text-slate-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none shadow-3d"
                                    whileFocus={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                                    whileHover={{ y: -2 }}
                                ></motion.textarea>
                            </motion.div>
                            <motion.div variants={formItemVariants}>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-light-primary to-orange-600 dark:from-dark-primary dark:to-orange-500 text-white font-bold py-4 px-6 rounded-xl shadow-xl btn-3d glow-enhanced flex items-center justify-center gap-2"
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 20px 50px rgba(249, 115, 22, 0.4)",
                                        y: -3
                                    }}
                                    whileTap={{ scale: 0.98, y: 0 }}
                                >
                                    <span>Send Message</span>
                                    <motion.svg 
                                        className="w-5 h-5" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </motion.svg>
                                </motion.button>
                            </motion.div>
                        </form>
                        {status && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-center"
                            >
                                <p className="text-green-700 dark:text-green-400 font-medium">{status}</p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="space-y-8"
                        variants={formContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div
                            variants={formItemVariants}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg card-3d-enhanced border border-gray-200/50 dark:border-gray-700/50"
                            whileHover={{ 
                                y: -5,
                                rotateY: 3,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-light-primary/10 dark:bg-dark-primary/10 rounded-lg">
                                    <EmailIcon className="w-6 h-6 text-light-primary dark:text-dark-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">Email</h3>
                                    <a href="mailto:ragulvaidya21@gmail.com" className="text-light-primary dark:text-dark-primary hover:underline">
                                        ragulvaidya21@gmail.com
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={formItemVariants}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg card-3d-enhanced border border-gray-200/50 dark:border-gray-700/50"
                            whileHover={{ 
                                y: -5,
                                rotateY: 3,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-light-primary/10 dark:bg-dark-primary/10 rounded-lg">
                                    <svg className="w-6 h-6 text-light-primary dark:text-dark-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">Location</h3>
                                    <p className="text-light-text-alt dark:text-dark-text-alt">Chennai, India</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={formItemVariants}
                            className="bg-gradient-to-br from-light-primary/10 to-orange-500/10 dark:from-dark-primary/10 dark:to-orange-600/10 p-8 rounded-2xl border-2 border-light-primary/20 dark:border-dark-primary/20 tilt-3d"
                            whileHover={{ 
                                scale: 1.05,
                                rotateZ: 1,
                                boxShadow: "0 15px 35px rgba(249, 115, 22, 0.2)"
                            }}
                        >
                            <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-3">Let's Connect!</h3>
                            <p className="text-light-text-alt dark:text-dark-text-alt mb-4">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                            <div className="flex gap-3">
                                <span className="text-2xl">💼</span>
                                <span className="text-2xl">🚀</span>
                                <span className="text-2xl">💡</span>
                                <span className="text-2xl">🎯</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;