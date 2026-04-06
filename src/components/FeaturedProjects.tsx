import React from "react";
import { Link } from "react-router-dom";
import usePortfolio from "../stores/usePortfolio";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const FeaturedProjects: React.FC = () => {
    const { projects } = usePortfolio();
    const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

    return (
        <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Featured <span className="text-blue-500">Projects</span>
                        </h2>
                        <p className="text-slate-400">A selection of my recent work</p>
                    </div>
                    <Link 
                        to="/projects" 
                        className="text-blue-500 hover:text-blue-400 font-medium transition-colors duration-300 flex items-center gap-2"
                    >
                        View All <FaExternalLinkAlt size={14} />
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <div 
                            key={project.id} 
                            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-2 group"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-48">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 4).map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    {project.liveUrl && (
                                        <a 
                                            href={project.liveUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                                        >
                                            <FaExternalLinkAlt size={12} /> Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                                        >
                                            <FaGithub size={14} /> Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
