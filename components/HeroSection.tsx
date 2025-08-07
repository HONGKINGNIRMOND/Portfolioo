
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { DownloadIcon, ArrowRightIcon } from './icons';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProfileImage: React.FC = () => (
    <div className="relative flex items-center justify-center perspective-3d">
        <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-light-primary dark:border-dark-primary bg-gradient-to-br from-light-primary to-light-primary-hover dark:from-dark-primary dark:to-dark-primary-hover flex items-center justify-center rotate-3d floating">
            <img 
                src="/my.jpg" 
                alt="Ragulvaidya VM - Full Stack Developer" 
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: 'center 20%' }}
                onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                        parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                                RV
                            </div>
                        `;
                    }
                }}
            />
        </div>
        {/* Decorative elements with 3D effects */}
        <div className="absolute -top-0 -right-2 w-6 h-6 md:w-8 md:h-8 bg-light-primary dark:bg-dark-primary rounded-full pulse-slow floating" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -bottom-2 -left-2 w-5 h-5 md:w-6 md:h-6 bg-light-primary dark:bg-dark-primary rounded-full pulse-slow floating" style={{ animationDelay: '1.5s' }}></div>
    </div>
);

const HeroSection: React.FC = () => {
    return (
        <section id="hero" className="py-20 md:py-32 bg-light-bg dark:bg-dark-bg overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
                <motion.div 
                    className="md:w-1/2 text-center md:text-left order-2 md:order-1"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        className="text-4xl md:text-6xl font-display font-bold text-slate-800 dark:text-white leading-tight mb-4"
                        variants={itemVariants}
                    >
                        Hi, I'm RAGUL VAIDYA
                        <span className="block text-light-primary dark:text-dark-primary">Full Stack Developer</span>
                    </motion.h1>
                    <motion.p 
                        className="text-lg md:text-xl text-light-text-alt dark:text-dark-text-alt mb-8 max-w-xl mx-auto md:mx-0"
                        variants={itemVariants}
                    >
                        I build scalable web apps with clean code & great user experience.
                    </motion.p>
                    <motion.div className="flex justify-center md:justify-start space-x-4" variants={itemVariants}>
                        <a
                            href="/#projects"
                            className="inline-flex items-center gap-2 bg-light-primary dark:bg-dark-primary text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover btn-3d glow"
                        >
                            View Projects <ArrowRightIcon className="w-5 h-5" />
                        </a>
                        <a
                            href="/My resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-light-bg-alt dark:bg-dark-bg-alt text-light-text dark:text-dark-text font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 btn-3d"
                        >
                            Download Resume <DownloadIcon className="w-5 h-5" />
                        </a>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="md:w-1/2 flex justify-center order-1 md:order-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                >
                    <ProfileImage />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;