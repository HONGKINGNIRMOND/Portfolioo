import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './icons';

const projects: Project[] = [
    {
        name: 'Fresh Dairy - Store Management',
        description: 'A web-based e-commerce platform that connects local dairy farmers directly with consumers. Features product browsing, cart, checkout, order tracking, and admin tools for managing products, orders, and suppliers.',
        tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'XAMPP'],
        liveUrl: '#',
        githubUrl: 'https://github.com/HONGKINGNIRMOND/DAIRY--STORE-MANAGEMENT',
        imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Real-time Chat App',
        description: 'A web application that allows users to chat in real-time using WebSockets for instant communication.',
        tech: ['React', 'TypeScript', 'Node.js', 'Socket.IO'],
        liveUrl: '#',
        githubUrl: '#',
        imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Task Management Board',
        description: 'A Kanban-style task board with drag-and-drop functionality to manage tasks and workflows efficiently.',
        tech: ['React', 'Tailwind CSS', 'dnd-kit'],
        liveUrl: '#',
        githubUrl: '#',
        imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Portfolio Website',
        description: 'My personal portfolio site (the one you are looking at!) built to showcase my skills and projects.',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        githubUrl: 'https://github.com/HONGKINGNIRMOND/Portfolioo',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
];

const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <motion.div
            className="bg-light-bg-alt dark:bg-dark-bg-alt rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl flex flex-col card-3d"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
            <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-display text-slate-800 dark:text-white mb-2">{project.name}</h3>
                <p className="text-light-text-alt dark:text-dark-text-alt text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                        <span key={t} className="bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{t}</span>
                    ))}
                </div>
                <div className="mt-auto flex justify-end space-x-4">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light-text-alt dark:text-dark-text-alt hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300"
                            title={`View ${project.name} live`}
                        >
                            <ExternalLinkIcon className="w-6 h-6" />
                        </a>
                    )}
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-text-alt dark:text-dark-text-alt hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300"
                        title={`View ${project.name} on GitHub`}
                    >
                        <GitHubIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-light-bg dark:bg-dark-bg">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-display font-bold text-center text-slate-800 dark:text-white mb-12"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    My Projects
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projects.map(p => <ProjectCard key={p.name} project={p} />)}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;