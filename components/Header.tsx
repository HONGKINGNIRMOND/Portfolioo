import React from 'react';
import { SunIcon, MoonIcon } from './icons';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#education', label: 'Education' },
    { href: '/#coding-platforms', label: 'Coding Platforms' },
    { href: '/#socials', label: 'Socials' },
    { href: '/#contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    return (
        <header className="sticky top-0 z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-sm dark:shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-display font-bold text-light-primary dark:text-dark-primary pop-3d glow-enhanced text-3d">
                    RV
                </a>
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-light-text-alt dark:text-dark-text-alt hover:text-light-primary dark:hover:text-dark-primary transition-all duration-300 lift-3d"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full text-light-text-alt dark:text-dark-text-alt hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 btn-3d pop-3d"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <MoonIcon className="w-6 h-6 floating" /> : <SunIcon className="w-6 h-6 floating" />}
                </button>
            </div>
        </header>
    );
};

export default Header;