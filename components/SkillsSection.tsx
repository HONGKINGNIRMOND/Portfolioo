import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { SkillCategory } from '../types';

const skillsData: SkillCategory[] = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'JavaScript', level: 95 },
            { name: 'Python', level: 90 },
            { name: 'Java', level: 85 },
            { name: 'C++', level: 85 },
            { name: 'C', level: 80 },
        ]
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'React & Next.js', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'Tailwind CSS', level: 98 },
            { name: 'HTML5 & CSS3', level: 95 },
        ]
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js & Express', level: 90 },
            { name: 'MongoDB & Mongoose', level: 85 },
            { name: 'SQL (PostgreSQL)', level: 80 },
            { name: 'REST & GraphQL APIs', level: 88 },
        ]
    },
    {
        title: 'Tools & DevOps',
        skills: [
            { name: 'Git & GitHub', level: 95 },
            { name: 'Docker', level: 75 },
            { name: 'CI/CD (GitHub Actions)', level: 70 },
        ]
    }
];

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
    const barVariants: Variants = {
        hidden: { width: '0%' },
        visible: {
            width: `${level}%`,
            transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
        }
    };
    
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-light-text dark:text-dark-text">{name}</span>
                <span className="text-sm font-medium text-light-text-alt dark:text-dark-text-alt">{level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                    className="bg-light-primary dark:bg-dark-primary h-2.5 rounded-full"
                    variants={barVariants}
                ></motion.div>
            </div>
        </div>
    );
}

const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-light-bg-alt dark:bg-dark-bg-alt">
            <div className="container mx-auto px-6">
                <motion.h2 
                    className="text-3xl md:text-4xl font-display font-bold text-center text-slate-800 dark:text-white mb-12"
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
                            className="bg-light-bg dark:bg-dark-bg p-6 rounded-lg shadow-md card-3d"
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
                                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;