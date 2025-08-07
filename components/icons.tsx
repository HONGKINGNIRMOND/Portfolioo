import React from 'react';
import { motion } from 'framer-motion';

type IconProps = React.SVGProps<SVGSVGElement>;

export const GitHubIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export const LinkedInIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const EmailIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

export const SunIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);

export const MoonIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

export const DownloadIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export const DeveloperIllustration: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g>
            <path fill="#FFD15D" d="M375.522 176.471h-239.04c-6.627 0-12 5.373-12 12v135.058c0 6.627 5.373 12 12 12h239.04c6.627 0 12-5.373 12-12V188.471c0-6.627-5.373-12-12-12z"/>
            <path fill="#3F3F3F" d="M399.522 347.529H112.48c-8.284 0-15-6.716-15-15V176.471c0-8.284 6.716-15 15-15h287.04c8.284 0 15 6.716 15 15v156.058c0 8.284-6.716 15-15 15zM127.48 317.529h257.04V191.471H127.48v126.058z"/>
            <path fill="#2E2E2E" d="M112.48 347.529c-8.284 0-15-6.716-15-15V176.471c0-8.284 6.716-15 15-15h143.52v198.058H112.48z"/>
            <path fill="#595959" d="M381.522 161.471h-251.04v15h251.04v-15z"/>
            <g>
                <path fill="#B3B3B3" d="M189.522 368.529h133v30h-133z"/>
                <path fill="#9B9B9B" d="M256.022 368.529h66.5v30h-66.5z"/>
            </g>
            <rect x="238.022" y="347.529" width="36" height="21" fill="#C4C4C4"/>
        </g>
        <path fill="#2E80D2" d="M211.522 230.138l-23.064 12.981 12.51 22.213 23.064-12.981z"/>
        <path fill="#2E80D2" d="M298.478 281.862l23.064-12.981-12.51-22.213-23.064 12.981z"/>
        <path fill="#4A90E2" d="M239.522 216.529l33 18.5 -33 58 -33-18.5z"/>
    </svg>
);

export const ReactIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" stroke="currentColor" {...props}>
        <title>React Logo</title>
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <g strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
    </svg>
);

export const NodeIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.15,1.05C11.19,0.4,10.03,0,8.8,0C5.1,0,2.15,2.95,2.15,6.65c0,2.44,1.31,4.6,3.3,5.77L5,13.78C3.13,14.6,2,16.38,2,18.4 c0,3.17,2.41,5.59,5.5,5.59c2.49,0,4.63-1.62,5.29-3.92l0.87-3.08c0.88,0.28,1.83,0.44,2.84,0.44c3.7,0,6.65-2.95,6.65-6.65 C23.15,5.43,18.52-0.34,12.15,1.05z M8.8,21.84c-1.88,0-3.4-1.69-3.4-3.59c0-1.48,0.82-2.78,2.02-3.34l0.91,1.3 c-0.61,0.35-1.02,1.01-1.02,1.79c0,1.1,0.89,2,2,2c0.77,0,1.45-0.44,1.79-1.08l1.34,0.8C11.9,20.81,10.49,21.84,8.8,21.84z M6.8,9.73 C5.1,9.73,3.7,8.34,3.7,6.65c0-1.7,1.4-3.09,3.1-3.09c1.7,0,3.1,1.39,3.1,3.09C9.9,8.34,8.5,9.73,6.8,9.73z M19.43,12.23 c-0.19,0.68-0.78,1.17-1.48,1.17c-0.88,0-1.6-0.72-1.6-1.6c0-0.7,0.45-1.3,1.09-1.51l-0.53-1.89C16,8.88,15.1,9.65,15.1,10.8 c0,1.44,1.03,2.62,2.37,2.83l-0.89,3.16c-1.81-0.53-3.38,0.5-3.9,2.15c-0.6,1.89,0.38,3.87,2.2,4.45c1.81,0.57,3.71-0.4,4.32-2.28 C20.17,18.9,19.06,16.5,17.1,15.5l0.87-3.08C18.67,12.46,19.29,12.33,19.43,12.23z M16.5,8.68c1.1,0,2,0.9,2,2s-0.9,2-2,2 s-2-0.9-2-2S15.4,8.68,16.5,8.68z"/>
    </svg>
);

export const TSIcon: React.FC<IconProps> = (props) => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.5 0H4.5C2.025 0 0 2.025 0 4.5v15C0 21.975 2.025 24 4.5 24h15c2.475 0 4.5-2.025 4.5-4.5v-15C24 2.025 21.975 0 19.5 0zM14.625 18.375h-3.75V11.25h1.875v6.375h1.875v.75zm3-5.25h-1.5v-1.5h1.5v-1.5h-1.5v-1.5h-1.5v4.5h3v1.5h-4.5v-7.5h6v4.5h-1.5z"/>
    </svg>
);

export const JSIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M0 0h24v24H0V0zm21.5 18.5c.8-1 1.3-2.3 1.5-3.8h-3.4c-.2.9-.6 1.6-1.2 2.1-.6.5-1.3.7-2.1.7-1 0-1.8-.3-2.5-.8-.7-.6-1-1.3-1.3-2.3h6.3v-3h-9.4v8.9h3v-1.5c.5 1 1.4 1.8 2.5 2.2 1.2.4 2.4.4 3.6.1zm-10.7-3.9c.1.9.4 1.7 1 2.3.6.6 1.4.9 2.3.9.9 0 1.7-.2 2.3-.7s1-1.2 1.2-2h-6.8zM10.8 12V3.1h3v7.4c0 .8-.2 1.5-.5 2-.4.5-.9.7-1.5.7s-1.1-.2-1.5-.7c-.3-.5-.5-1.1-.5-2z"/>
    </svg>
);

export const MongoIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M15.42,12.86a5.2,5.2,0,0,1-3.32,1.26,5.1,5.1,0,0,1-4.42-4.93,6.33,6.33,0,0,1,1.93-4.5,6.5,6.5,0,0,1,8.22,0,6.29,6.29,0,0,1,1.87,4.45,6,6,0,0,1-.94,2.58A5.27,5.27,0,0,1,15.42,12.86Zm-3.38,2.55a3.3,3.3,0,0,0,2.19-3,3.27,3.27,0,0,0-2.15-3A3.14,3.14,0,0,0,9,12.54a3.34,3.34,0,0,0,1,2.13A3,3,0,0,0,12.08,15.41Z M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10,10.08,10.08,0,0,0,8.23-4.55A10,10,0,0,0,12,2Z"/>
    </svg>
);

export const TailwindIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M12.001 4.529c2.346-2.346 5.862-2.346 8.208 0 2.346 2.346 2.346 5.862 0 8.208-2.346 2.346-5.862 2.346-8.208 0-2.346-2.346-2.346-5.862 0-8.208zm0 0C9.655 2.183 6.138 2.183 3.792 4.529c-2.346 2.346-2.346 5.862 0 8.208 2.346 2.346 5.862 2.346 8.208 0 2.346-2.346 2.346-5.862 0-8.208z" fill="currentColor" fillOpacity=".5"></path>
        <path d="M12.001 12.737c-2.346 2.346-5.862 2.346-8.208 0-2.346-2.346-2.346-5.862 0-8.208 2.346-2.346 5.862-2.346 8.208 0 2.346 2.346 2.346 5.862 0 8.208z" fill="currentColor"></path>
    </svg>
);

export const HTMLIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M1.75 2.75h20.5L20.5 21.75l-8.5 2.5-8.5-2.5L1.75 2.75zM12 19.25l6-2.25L18.625 6h-13.25L6.5 17l5.5 2.25v-.01zM12 7.75h4.125l-.25 2.5H12V7.75z"/>
  </svg>
);

export const CSSIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M1.75 2.75h20.5L20.5 21.75l-8.5 2.5-8.5-2.5L1.75 2.75zM12 19.25l6-2.25L18.625 6h-13.25L6.5 17l5.5 2.25v-.01zM16.125 10.25h-8.25l.25-2.5h7.75l-.125 2.5z"/>
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const LeetCodeIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-1.374 1.374v18.752h1.374v-7.376h5.126v7.376h1.374V1.374A1.374 1.374 0 0 0 18.609 0H13.483zm1.374 1.374h3.752v4.375h-3.752V1.374zM0 13.483a1.374 1.374 0 0 0 1.374 1.374h7.376v7.376h1.374V13.483A1.374 1.374 0 0 0 8.75 12.11H1.374a1.374 1.374 0 0 0-1.374 1.373zm1.374 1.374h6.001v4.375H1.374v-4.375z"/>
    </svg>
);

export const HackerRankIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M12 0c1.285 0 9.75 4.886 9.75 11.25 0 6.364-8.465 11.25-9.75 11.25-1.285 0-9.75-4.886-9.75-11.25C2.25 4.886 10.715 0 12 0zm0 2.25c-1.892 0-6.75 3.427-6.75 9 0 5.573 4.858 9 6.75 9s6.75-3.427 6.75-9c0-5.573-4.858-9-6.75-9zm0 3.75c1.892 0 3.375 1.483 3.375 3.375S13.892 12.75 12 12.75 8.625 11.267 8.625 9.375S10.108 6 12 6z"/>
    </svg>
);

export const PythonIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1 6v8h2V8h-2zm4 0v8h2V8h-2z"/>
    </svg>
);

export const TensorFlowIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
);

export const AIIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
);
