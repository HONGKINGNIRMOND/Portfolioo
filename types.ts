
export interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  imageUrl: string;
}

export interface Skill {
    name: string;
    level: number; // A number from 0 to 100 for the progress bar
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    logoUrl: string;
}
