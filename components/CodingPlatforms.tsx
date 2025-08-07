
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { LeetCodeIcon, HackerRankIcon, ExternalLinkIcon } from './icons';

const platforms = [
    {
        name: 'LeetCode',
        username: 'GwecnkFDUg',
        url: 'https://leetcode.com/u/GwecnkFDUg/',
        description: 'I actively solve data structures and algorithms problems on LeetCode to sharpen my problem-solving skills and prepare for technical interviews.',
        Icon: LeetCodeIcon,
    },
    {
        name: 'HackerRank',
        username: 'ragulnoty',
        url: 'https://www.hackerrank.com/profile/ragulnoty',
        description: 'I practice coding challenges and improve my algorithmic thinking skills on HackerRank to enhance my problem-solving abilities.',
        Icon: HackerRankIcon,
    }
];

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

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};


const PlatformCard: React.FC<{platform: typeof platforms[0]}> = ({ platform }) => (
    <motion.div 
        className="bg-light-bg-alt dark:bg-dark-bg-alt rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl flex flex-col p-8"
        variants={cardVariants}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
        <div className="flex items-center mb-4">
            <platform.Icon className="w-10 h-10 mr-4 text-light-text-alt dark:text-dark-text-alt" />
            <div>
                <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-white">{platform.name}</h3>
                <p className="text-light-text-alt dark:text-dark-text-alt font-mono">{platform.username}</p>
            </div>
        </div>
        <p className="text-light-text dark:text-dark-text mb-6 flex-grow">{platform.description}</p>
        <a 
            href={platform.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 self-start bg-light-primary dark:bg-dark-primary text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover transform transition-all duration-300"
        >
            View Profile <ExternalLinkIcon className="w-5 h-5" />
        </a>
    </motion.div>
);

const CodingPlatforms: React.FC = () => {
    return (
        <section
            id="coding-platforms" 
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
                    Coding Platforms
                </motion.h2>
                <motion.div 
                    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                     {platforms.map(p => <PlatformCard key={p.name} platform={p} />)}
                </motion.div>
            </div>
        </section>
    );
};

export default CodingPlatforms;