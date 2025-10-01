import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ReactIcon, NodeIcon, TSIcon, JSIcon, MongoIcon, TailwindIcon, HTMLIcon, CSSIcon, PythonIcon, TensorFlowIcon, AIIcon } from './icons';

const techIcons = [
    { Icon: HTMLIcon, name: "HTML5" },
    { Icon: CSSIcon, name: "CSS3" },
    { Icon: JSIcon, name: "JavaScript" },
    { Icon: TSIcon, name: "TypeScript" },
    { Icon: ReactIcon, name: "React" },
    { Icon: NodeIcon, name: "Node.js" },
    { Icon: MongoIcon, name: "MongoDB" },
    { Icon: TailwindIcon, name: "Tailwind CSS" },
    { Icon: PythonIcon, name: "Python" },
    { Icon: TensorFlowIcon, name: "TensorFlow" },
    { Icon: AIIcon, name: "AI/ML" },
];

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const iconContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
};

const AboutSection: React.FC = () => {
    return (
        <motion.section 
            id="about" 
            className="py-20 bg-light-bg-alt dark:bg-dark-bg-alt"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-slate-800 dark:text-white mb-12 text-3d">
                    About Me
                </h2>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg text-light-text-alt dark:text-dark-text-alt leading-relaxed mb-8">
                        I'm a passionate Full Stack Developer with experience in building modern, responsive, and scalable web applications. I love solving complex problems and learning new technologies. My goal is to create high-quality software that provides real value to users.
                    </p>
                    <p className="text-lg text-light-text-alt dark:text-dark-text-alt leading-relaxed mb-8">
                        Currently, I'm expanding my skillset by diving into Machine Learning and Large Language Models (LLMs). I'm learning Python, TensorFlow, and exploring AI/ML concepts to build intelligent applications that can understand and process natural language. This journey into AI/ML complements my full-stack development skills, allowing me to create more sophisticated and intelligent web applications.
                    </p>
                    <motion.div 
                        className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
                        variants={iconContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {techIcons.map(({ Icon, name }, index) => (
                            <motion.div 
                                key={name} 
                                className="group flex flex-col items-center gap-2 pop-3d"
                                variants={iconVariants}
                                whileHover={{ 
                                    scale: 1.2, 
                                    rotateY: 15,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <Icon className="w-10 h-10 text-gray-500 dark:text-gray-400 group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-300 transform group-hover:scale-110 floating" style={{ animationDelay: `${index * 0.1}s` }} />
                                <span className="text-xs font-medium text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutSection;