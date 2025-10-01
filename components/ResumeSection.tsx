import React from 'react';
import { motion, Variants } from 'framer-motion';
import { DownloadIcon, ExternalLinkIcon } from './icons';

const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ResumeSection: React.FC = () => {
    return (
        <section id="resume" className="py-20 bg-light-bg dark:bg-dark-bg">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-display font-bold text-center text-slate-800 dark:text-white mb-12"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Resume
                </motion.h2>

                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="bg-light-bg-alt dark:bg-dark-bg-alt rounded-lg shadow-lg p-8 md:p-12"
                        variants={itemVariants}
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-white mb-4">
                                RAGULVAIDYA VM
                            </h3>
                            <p className="text-lg text-light-text-alt dark:text-dark-text-alt mb-6">
                                Full Stack Developer
                            </p>
                            <p className="text-light-text dark:text-dark-text max-w-2xl mx-auto">
                                Experienced full-stack developer with expertise in modern web technologies.
                                Passionate about creating scalable applications and solving complex problems.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                                    Technical Skills
                                </h4>
                                <ul className="space-y-2 text-light-text dark:text-dark-text">
                                    <li>• Frontend: React, TypeScript, HTML5, CSS3, JavaScript</li>
                                    <li>• Backend: Node.js, PHP, Express.js</li>
                                    <li>• Database: MySQL, MongoDB</li>
                                    <li>• Tools: Git, VS Code, XAMPP</li>
                                    <li>• Other: REST APIs, Responsive Design</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                                    Key Projects
                                </h4>
                                <ul className="space-y-2 text-light-text dark:text-dark-text">
                                    <li>• Fresh Dairy Store Management System</li>
                                    <li>• Real-time Chat Application</li>
                                    <li>• Task Management Board</li>
                                    <li>• Personal Portfolio Website</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/my_resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-light-primary dark:bg-dark-primary text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    <DownloadIcon className="w-5 h-5" />
                                    Download Resume (PDF)
                                </a>
                                <a
                                    href="/my_resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300 border border-light-border dark:border-dark-border"
                                >
                                    <ExternalLinkIcon className="w-5 h-5" />
                                    View Resume
                                </a>
                            </div>
                            <p className="text-sm text-light-text-alt dark:text-dark-text-alt mt-4">
                                Click to download or view my detailed resume with complete work experience and skills
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResumeSection; 