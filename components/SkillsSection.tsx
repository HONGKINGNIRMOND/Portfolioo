import React from 'react';
import { motion, Variants } from 'framer-motion';

// helper icon component
const Icon: React.FC<{ src: string; alt?: string; className?: string }> = ({ src, alt, className }) => (
    <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
    />
);

// skillIcons — using local icons from /public/icons and emojis
const skillIcons: Record<string, React.ReactNode> = {
    'JavaScript': (
        <span className="inline-flex items-center mr-2">
            <Icon src="/icons/js2.png" alt="JavaScript" className="w-6 h-6" />
        </span>
    ),
    'Python': (
        <span className="inline-flex items-center mr-2">
            <Icon src="/icons/python.png" alt="Python" className="w-6 h-6" />
        </span>
    ),
    'Java': (
        <span className="inline-flex items-center mr-2">
            <Icon src="/icons/java.png" alt="Java" className="w-6 h-6" />
        </span>
    ),
    'C++': (
        <span className="inline-flex items-center mr-2">
            <Icon src="/icons/c-.png" alt="C++" className="w-6 h-6" />
        </span>
    ),
    'C': (
        <span className="inline-flex items-center mr-2">
            <Icon src="/icons/letter-c.png" alt="C" className="w-6 h-6" />
        </span>
    ),
    'React & Next.js': (
        <span className="inline-flex items-center mr-2">
            <Icon src="/icons/react.png" alt="React" className="w-6 h-6" />
        </span>
    ),
    'TypeScript': <span className="text-blue-600 dark:text-blue-400 font-bold text-lg mr-2">TS</span>,
    'Tailwind CSS': <span className="text-cyan-500 text-2xl mr-2">💨</span>,
    'HTML5 & CSS3': (
        <span className="inline-flex items-center mr-2">
            <Icon src="/icons/html,css.png" alt="HTML & CSS" className="w-6 h-6" />
        </span>
    ),
    'Node.js & Express': (
        <span className="inline-flex items-center mr-2">
            <Icon src="/icons/nodejs.png" alt="Node.js" className="w-6 h-6" />
        </span>
    ),
    'MongoDB & Mongoose': <span className="text-green-600 dark:text-green-400 text-2xl mr-2">🍃</span>,
    'SQL (PostgreSQL)': <span className="text-blue-700 dark:text-blue-300 text-2xl mr-2">🗄️</span>,
    'REST & GraphQL APIs': <span className="text-pink-600 dark:text-pink-400 text-2xl mr-2">🔌</span>,
    'Git & GitHub': <span className="text-orange-600 dark:text-orange-400 text-2xl mr-2">🔀</span>,
    'Docker': <span className="text-blue-500 text-2xl mr-2">🐳</span>,
    'CI/CD (GitHub Actions)': <span className="text-purple-600 dark:text-purple-400 text-2xl mr-2">🚀</span>,
};

const skillsData = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'JavaScript' },
            { name: 'Python' },
            { name: 'Java' },
            { name: 'C++' },
            { name: 'C' },
        ]
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'React & Next.js' },
            { name: 'TypeScript' },
            { name: 'Tailwind CSS' },
            { name: 'HTML5 & CSS3' },
        ]
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js & Express' },
            { name: 'MongoDB & Mongoose' },
            { name: 'SQL (PostgreSQL)' },
            { name: 'REST & GraphQL APIs' },
        ]
    },
    {
        title: 'Tools & DevOps',
        skills: [
            { name: 'Git & GitHub' },
            { name: 'Docker' },
            { name: 'CI/CD (GitHub Actions)' },
        ]
    }
];

const SkillBar: React.FC<{ name: string }> = ({ name }) => (
    <div className="mb-4 flex items-center">
        <span className="mr-2">
            {skillIcons[name] || <span className="w-6 h-6 inline-block"></span>}
        </span>
        <span className="text-base font-medium text-light-text dark:text-dark-text">{name}</span>
    </div>
);

const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SkillsSection: React.FC = () => (
    <section id="skills" className="py-20 bg-light-bg-alt dark:bg-dark-bg-alt">
        <div className="container mx-auto px-6">
            <motion.h2
                className="text-3xl md:text-4xl font-display font-bold text-center text-slate-800 dark:text-white mb-12 text-3d"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={category.title}
                        className="bg-light-bg dark:bg-dark-bg p-6 rounded-lg shadow-md card-3d-enhanced shadow-3d"
                        variants={categoryVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{
                            y: -5,
                            rotateY: 5,
                            transition: { duration: 0.3 }
                        }}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <h3 className="text-xl font-bold font-display text-center text-slate-800 dark:text-white mb-6">{category.title}</h3>
                        <div>
                            {category.skills.map(skill => (
                                <SkillBar key={skill.name} name={skill.name} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection;