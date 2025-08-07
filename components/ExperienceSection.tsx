import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { Experience } from '../types';

const experiences: Experience[] = [
    {
        role: 'B.Tech, Computer Science & Engineering',
        company: 'SRM Institute of Science and Technology, Ramapuram',
        period: '2023 - Present',
        description: 'Currently pursuing my degree with a focus on web development, algorithms, and data structures. Actively solving problems on platforms like LeetCode.',
        logoUrl: 'https://picsum.photos/seed/srm/40/40'
    },
    {
        role: 'Senior Secondary Education (CBSE)',
        company: 'Sri Jayendra Golden Jubilee School',
        period: '2021 - 2023',
        description: 'Completed my higher secondary education with a specialization in the Computer Science and Mathematics stream, building a strong foundational knowledge.',
        logoUrl: 'https://picsum.photos/seed/school/40/40'
    }
];

const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const timelineItemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const timelineContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3
        }
    }
};

const TimelineItem: React.FC<{ experience: Experience; isLast: boolean }> = ({ experience, isLast }) => (
    <motion.div 
        className="relative pl-12 pb-12"
        variants={timelineItemVariants}
    >
        {/* Timeline Dot */}
        <div className="absolute left-0 top-1 w-4 h-4 mt-1.5 bg-light-primary dark:bg-dark-primary rounded-full border-4 border-light-bg-alt dark:border-dark-bg-alt"></div>
        
        {/* Timeline Line */}
        {!isLast && <div className="absolute left-[7px] top-8 w-0.5 h-full bg-light-border dark:bg-dark-border"></div>}

        {/* Content */}
        <div className="flex items-center mb-1">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white">{experience.role}</h3>
        </div>
        <div className="flex items-center gap-4 mb-2 text-sm">
            <span className="font-medium text-light-primary dark:text-dark-primary">{experience.company}</span>
            <span className="text-light-text-alt dark:text-dark-text-alt">{experience.period}</span>
        </div>
        <p className="text-light-text dark:text-dark-text">{experience.description}</p>
    </motion.div>
);


const ExperienceSection: React.FC = () => {
    return (
        <section id="education" className="py-20 bg-light-bg dark:bg-dark-bg">
            <div className="container mx-auto px-6">
                <motion.h2 
                    className="text-3xl md:text-4xl font-display font-bold text-center text-slate-800 dark:text-white mb-16"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Education
                </motion.h2>
                <div className="max-w-3xl mx-auto">
                    <motion.div 
                        className="relative"
                        variants={timelineContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {experiences.map((exp, index) => (
                            <TimelineItem 
                                key={index} 
                                experience={exp} 
                                isLast={index === experiences.length - 1} 
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;