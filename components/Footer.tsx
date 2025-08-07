import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light-bg-alt dark:bg-dark-bg-alt border-t border-light-border dark:border-dark-border">
            <div className="container mx-auto px-6 py-8 flex justify-center items-center">
                <p className="text-sm text-light-text-alt dark:text-dark-text-alt text-center">
                    &copy; {new Date().getFullYear()} RAGULVAIDYA  All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
