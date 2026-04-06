import { create } from "zustand";
import type { Project, Skill, Experience } from "../types/Portfolio";

type PortfolioStore = {
    projects: Project[];
    skills: Skill[];
    experiences: Experience[];
    addProject: (project: Project) => void;
    removeProject: (id: number) => void;
    updateProject: (id: number, project: Partial<Project>) => void;
}

const usePortfolio = create<PortfolioStore>((set) => ({
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce with payment integration and admin dashboard",
            longDescription: "Built a complete e-commerce solution with user authentication, product management, shopping cart, and payment integration. Features include order tracking, admin dashboard, inventory management, and responsive design for seamless mobile shopping.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            featured: true,
            date: "2024-01"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management with real-time updates and drag-and-drop",
            longDescription: "A Kanban-style task management application with drag-and-drop functionality, real-time collaboration, team management, priority levels, and analytics dashboard. Built for productivity and seamless team workflows.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
            tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
            githubUrl: "https://github.com",
            featured: true,
            date: "2024-03"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather tracking with interactive data visualizations",
            longDescription: "Interactive weather dashboard using weather APIs with location-based forecasts, historical data visualization, severe weather alerts, and beautiful data visualizations using Chart.js. Features include saved locations and customizable widgets.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b47?w=800&h=400&fit=crop&q=80",
            tags: ["React", "Chart.js", "OpenWeather API"],
            liveUrl: "https://example.com",
            featured: false,
            date: "2023-11"
        },
        {
            id: 4,
            title: "Social Media Analytics",
            description: "Analytics platform for tracking social media metrics and engagement",
            longDescription: "Comprehensive analytics dashboard aggregating data from multiple social media platforms. Features include engagement tracking, growth analytics, competitor analysis, automated reporting, and exportable insights.",
            image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=400&fit=crop",
            tags: ["Vue.js", "Python", "D3.js", "Firebase"],
            featured: false,
            date: "2023-09"
        },
        {
            id: 5,
            title: "Fitness Tracker",
            description: "Mobile-first fitness tracking application with social features",
            longDescription: "Cross-platform fitness tracking app with workout logging, progress photos, nutrition tracking, and social features. Includes push notifications, offline support, goal setting, and community challenges.",
            image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=400&fit=crop",
            tags: ["React Native", "GraphQL", "AWS"],
            githubUrl: "https://github.com",
            featured: true,
            date: "2024-06"
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "Modern portfolio website showcasing projects and skills",
            longDescription: "A sleek, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include dark theme, smooth animations, project showcase, contact form, and optimized performance for fast loading.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
            tags: ["React", "TypeScript", "Tailwind CSS"],
            githubUrl: "https://github.com",
            featured: true,
            date: "2024-08"
        }
    ],
    skills: [
        { name: "React", level: 5, category: "frontend" },
        { name: "TypeScript", level: 5, category: "frontend" },
        { name: "Next.js", level: 4, category: "frontend" },
        { name: "Tailwind CSS", level: 5, category: "frontend" },
        { name: "HTML/CSS", level: 5, category: "frontend" },
        { name: "Node.js", level: 4, category: "backend" },
        { name: "Python", level: 4, category: "backend" },
        { name: "PostgreSQL", level: 4, category: "backend" },
        { name: "MongoDB", level: 3, category: "backend" },
        { name: "GraphQL", level: 3, category: "backend" },
        { name: "Git", level: 5, category: "tools" },
        { name: "Docker", level: 4, category: "tools" },
        { name: "AWS", level: 3, category: "tools" },
        { name: "Figma", level: 4, category: "tools" },
        { name: "CI/CD", level: 4, category: "tools" }
    ],
    experiences: [
        {
            id: 1,
            role: "Senior Frontend Developer",
            company: "Tech Corp Inc.",
            startDate: "2023-01",
            endDate: "Present",
            description: "Leading frontend development for enterprise SaaS platform. Implemented micro-frontend architecture, improved performance by 40%, and mentored junior developers.",
            technologies: ["React", "TypeScript", "GraphQL", "AWS"]
        },
        {
            id: 2,
            role: "Full Stack Developer",
            company: "StartupXYZ",
            startDate: "2021-06",
            endDate: "2022-12",
            description: "Built and maintained multiple features for the core product. Developed RESTful APIs, implemented CI/CD pipelines, and contributed to database optimization.",
            technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"]
        },
        {
            id: 3,
            role: "Junior Developer",
            company: "Digital Agency",
            startDate: "2019-09",
            endDate: "2021-05",
            description: "Developed responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UI components.",
            technologies: ["JavaScript", "React", "SASS", "WordPress"]
        }
    ],
    addProject: (project: Project) => set((state) => ({ projects: [...state.projects, project] })),
    removeProject: (id: number) => set((state) => ({ projects: state.projects.filter((p) => p.id !== id) })),
    updateProject: (id: number, project: Partial<Project>) => set((state) => ({
        projects: state.projects.map((p) => p.id === id ? { ...p, ...project } : p)
    }))
}));

export default usePortfolio;
