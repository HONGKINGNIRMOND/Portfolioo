
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ResumeSection from './components/ResumeSection';
import ContactPage from './components/ContactSection';
import Footer from './components/Footer';
import CodingPlatforms from './components/CodingPlatforms';
import SocialsPage from './components/SocialsPage';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (prefersDark) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const handleLocationAndScroll = () => {
            const path = window.location.pathname;
            const hash = window.location.hash;

            // Redirect from /section to /#section for direct navigation
            if (path && path !== '/') {
                const sectionId = path.substring(1);
                window.history.replaceState(null, '', `/#${sectionId}`);
                // Manually scroll after replacing state
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else if (hash) {
                // This handles popstate and initial load with a hash.
                // The browser often handles the initial scroll, but popstate
                // can be inconsistent. This makes it robust.
                 setTimeout(() => {
                    const element = document.getElementById(hash.substring(1));
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        };

        // Clicks on <a href="/#..."> are now handled natively by the browser.
        // We only listen to popstate for back/forward buttons.
        window.addEventListener('popstate', handleLocationAndScroll);

        // Run once on initial load.
        handleLocationAndScroll();

        return () => {
            window.removeEventListener('popstate', handleLocationAndScroll);
        };
    }, []);


    return (
        <div className="flex flex-col min-h-screen">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main className="flex-grow">
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ExperienceSection />
                <CodingPlatforms />
                <SocialsPage />
                <ContactPage />
            </main>
            <Footer />
        </div>
    );
};

export default App;
