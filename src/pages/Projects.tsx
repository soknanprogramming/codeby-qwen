import React, { useState, useMemo } from "react";
import usePortfolio from "../stores/usePortfolio";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

const Projects: React.FC = () => {
    const { projects } = usePortfolio();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState<string>("all");
    const [sortBy, setSortBy] = useState<"date" | "name">("date");

    // Get all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projects.forEach((p) => p.tags.forEach((tag) => tags.add(tag)));
        return Array.from(tags).sort();
    }, [projects]);

    // Filter and sort projects
    const filteredProjects = useMemo(() => {
        let filtered = projects;

        // Filter by search term
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (p) =>
                    p.title.toLowerCase().includes(term) ||
                    p.description.toLowerCase().includes(term) ||
                    p.tags.some((tag) => tag.toLowerCase().includes(term))
            );
        }

        // Filter by tag
        if (selectedTag !== "all") {
            filtered = filtered.filter((p) => p.tags.includes(selectedTag));
        }

        // Sort
        filtered = [...filtered].sort((a, b) => {
            if (sortBy === "date") {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            return a.title.localeCompare(b.title);
        });

        return filtered;
    }, [projects, searchTerm, selectedTag, sortBy]);

    return (
        <div className="flex-1 py-12 px-6">
            <div className="container mx-auto max-w-7xl">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-blue-500">Projects</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        A comprehensive list of projects I've worked on. Each project represents a unique challenge and learning experience.
                    </p>
                </div>

                {/* Filters Section */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */}
                        <div className="relative">
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                            />
                        </div>

                        {/* Tag Filter */}
                        <select
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 cursor-pointer"
                        >
                            <option value="all">All Technologies</option>
                            {allTags.map((tag) => (
                                <option key={tag} value={tag}>
                                    {tag}
                                </option>
                            ))}
                        </select>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as "date" | "name")}
                            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 cursor-pointer"
                        >
                            <option value="date">Sort by Date</option>
                            <option value="name">Sort by Name</option>
                        </select>
                    </div>

                    {/* Active Filters Display */}
                    {(searchTerm || selectedTag !== "all") && (
                        <div className="mt-4 flex items-center gap-2 flex-wrap">
                            <span className="text-slate-400 text-sm">Active filters:</span>
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full hover:bg-blue-500/30 transition-colors duration-300"
                                >
                                    "{searchTerm}" ×
                                </button>
                            )}
                            {selectedTag !== "all" && (
                                <button
                                    onClick={() => setSelectedTag("all")}
                                    className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full hover:bg-blue-500/30 transition-colors duration-300"
                                >
                                    {selectedTag} ×
                                </button>
                            )}
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedTag("all");
                                }}
                                className="px-3 py-1 text-slate-400 text-sm hover:text-white transition-colors duration-300"
                            >
                                Clear all
                            </button>
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-slate-400">
                        Showing <span className="text-white font-semibold">{filteredProjects.length}</span>{" "}
                        {filteredProjects.length === 1 ? "project" : "projects"}
                    </p>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-2 group"
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden h-52">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://via.placeholder.com/800x400/1e293b/3b82f6?text=Project+Image";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-2">{project.description}</p>
                                    <p className="text-slate-500 text-xs mb-4">
                                        {new Date(project.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                        })}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 pt-4 border-t border-slate-700">
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
                                                <FaGithub size={14} /> View Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-400 text-xl">No projects found matching your criteria</p>
                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedTag("all");
                            }}
                            className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
