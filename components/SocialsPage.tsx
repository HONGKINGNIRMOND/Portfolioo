
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, InstagramIcon, ExternalLinkIcon } from './icons';

const socialLinks = [
    {
        name: 'GitHub',
        username: 'HONGKINGNIRMOND',
        url: 'https://github.com/HONGKINGNIRMOND',
        description: 'Check out my projects and code repositories.',
        Icon: GitHubIcon,
    },
    {
        name: 'LinkedIn',
        username: 'ragul-vaidya',
        url: 'http://www.linkedin.com/in/ragul-vaidya',
        description: 'Connect with me on my professional network.',
        Icon: LinkedInIcon,
    },
    {
        name: 'Instagram',
        username: 'am__hyness',
        url: 'https://www.instagram.com/am__hyness/',
        description: 'Follow my personal journey and interests.',
        Icon: InstagramIcon,
    }
];

const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const cardContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};


const SocialCard: React.FC<{ link: typeof socialLinks[0] }> = ({ link }) => (
    <motion.div 
        className="bg-light-bg-alt dark:bg-dark-bg-alt rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl flex flex-col p-6 text-center"
        variants={cardVariants}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
        <div className="flex-shrink-0 mx-auto">
            <link.Icon className="w-12 h-12 mb-4 text-light-primary dark:text-dark-primary" />
        </div>
        <div className="flex-grow flex flex-col">
            <h3 className="text-xl font-bold font-display text-slate-800 dark:text-white">{link.name}</h3>
            <p className="text-sm text-light-text-alt dark:text-dark-text-alt font-mono mb-4 truncate">{link.username}</p>
            <p className="text-light-text dark:text-dark-text text-sm flex-grow mb-6">{link.description}</p>
            <a 
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer" 
                className="mt-auto inline-flex items-center justify-center gap-2 self-center bg-light-primary/10 dark:bg-dark-primary/20 text-light-primary dark:text-dark-primary font-semibold py-2 px-4 rounded-lg hover:bg-light-primary/20 dark:hover:bg-dark-primary/30 transform transition-all duration-300"
            >
                View Profile
                <ExternalLinkIcon className="w-4 h-4" />
            </a>
        </div>
    </motion.div>
);

const SocialsPage: React.FC = () => {
    return (
        <section
            id="socials" 
            className="py-20 bg-light-bg dark:bg-dark-bg"
        >
            <div className="container mx-auto px-6">
                <motion.h2 
                    className="text-3xl md:text-4xl font-display font-bold text-center text-slate-800 dark:text-white mb-12"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Connect With Me
                </motion.h2>
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
                    variants={cardContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                     {socialLinks.map(link => <SocialCard key={link.name} link={link} />)}
                </motion.div>
            </div>
        </section>
    );
};

export default SocialsPage;