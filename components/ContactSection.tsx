import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { EmailIcon } from './icons';
import { sanitizeInput, validateEmail, validateFormData } from '../utils/security';

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const sanitizedValue = sanitizeInput(e.target.value);
        setFormData({ ...formData, [e.target.name]: sanitizedValue });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Security validation
        if (!validateFormData(formData)) {
            setStatus('Invalid input detected. Please check your message.');
            setTimeout(() => setStatus(''), 5000);
            return;
        }

        // Email validation
        if (!validateEmail(formData.email)) {
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
        <section id="contact" className="py-20 bg-light-bg-alt dark:bg-dark-bg-alt">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-display font-bold text-center text-slate-800 dark:text-white mb-12"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Get In Touch
                </motion.h2>
                <motion.div
                    className="max-w-lg mx-auto card-3d"
                    variants={formContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div variants={formItemVariants}>
                            <label htmlFor="name" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:ring-light-primary focus:border-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary transition rotate-3d"
                            />
                        </motion.div>
                        <motion.div variants={formItemVariants}>
                            <label htmlFor="email" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:ring-light-primary focus:border-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary transition rotate-3d"
                            />
                        </motion.div>
                        <motion.div variants={formItemVariants}>
                            <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:ring-light-primary focus:border-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary transition rotate-3d"
                            ></textarea>
                        </motion.div>
                        <motion.div variants={formItemVariants}>
                            <button
                                type="submit"
                                className="w-full bg-light-primary dark:bg-dark-primary text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover btn-3d glow"
                            >
                                Send Message
                            </button>
                        </motion.div>
                    </form>
                    {status && <p className="mt-4 text-center text-green-600 dark:text-green-400">{status}</p>}
                    <motion.div className="text-center mt-12" variants={formItemVariants}>
                        <p className="text-light-text-alt dark:text-dark-text-alt mb-4">
                            You can also reach me directly via email or find me on other platforms.
                        </p>
                        <a href="mailto:ragulvaidya21@gmail.com" className="inline-flex items-center gap-2 text-light-primary dark:text-dark-primary hover:underline text-lg">
                            <EmailIcon className="w-6 h-6" />
                            <span>ragulvaidya21@gmail.com</span>
                        </a>

                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactPage;