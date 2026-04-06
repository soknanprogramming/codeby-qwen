export type Project = {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    date: string;
}

export type Skill = {
    name: string;
    level: number; // 1-5
    category: 'frontend' | 'backend' | 'tools' | 'other';
}

export type Experience = {
    id: number;
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
    technologies: string[];
}

export type SocialLink = {
    name: string;
    url: string;
    icon: string; // react-icons key
}
