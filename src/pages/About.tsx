import React, { useState } from "react";
import usePortfolio from "../stores/usePortfolio";
import type { Skill } from "../types/Portfolio";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

const About: React.FC = () => {
    const { skills, experiences } = usePortfolio();
    const [skillFilter, setSkillFilter] = useState<string>("all");

    const categories = ["all", "frontend", "backend", "tools", "other"] as const;

    const filteredSkills = skillFilter === "all" 
        ? skills 
        : skills.filter((s) => s.category === skillFilter);

    const getLevelDots = (level: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                    i < level ? "bg-blue-500" : "bg-slate-600"
                }`}
            />
        ));
    };

    const formatDate = (dateStr: string) => {
        if (dateStr === "Present") return "Present";
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
    };

    return (
        <div className="flex-1 py-12 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Page Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-blue-500">Me</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-3xl">
                        Passionate developer with a love for creating elegant solutions to complex problems
                    </p>
                </div>

                {/* Bio Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <FaCode className="text-blue-500" /> Who Am I
                        </h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed">
                            <p>
                                I'm POCH Soknan, a dedicated full-stack developer with a passion for building 
                                exceptional digital experiences. My love for coding stems from the endless 
                                possibilities it brings to turn creative ideas into functional, real-world solutions.
                            </p>
                            <p>
                                I specialize in modern web technologies, with expertise spanning both frontend 
                                and backend development. I enjoy working with frameworks like React and Next.js, 
                                and I'm always exploring new tools and techniques to write cleaner, more 
                                efficient code.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, working on 
                                personal projects, or sharing knowledge with the developer community. I believe 
                                in continuous learning and strive to stay current with the latest industry trends.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/20">
                        <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                                <span className="text-slate-400">Experience</span>
                                <span className="text-white font-semibold">5+ Years</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                                <span className="text-slate-400">Projects Completed</span>
                                <span className="text-white font-semibold">50+</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                                <span className="text-slate-400">Technologies</span>
                                <span className="text-white font-semibold">15+</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Available for Work</span>
                                <span className="text-green-400 font-semibold flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    Yes
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <FaCode className="text-blue-500" /> Skills & Technologies
                    </h2>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSkillFilter(category)}
                                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
                                    skillFilter === category
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredSkills.map((skill: Skill) => (
                            <div
                                key={skill.name}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-5 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-white font-semibold">{skill.name}</h3>
                                    <span className="text-xs text-slate-500 uppercase tracking-wide">
                                        {skill.category}
                                    </span>
                                </div>
                                <div className="flex gap-2">{getLevelDots(skill.level)}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <FaBriefcase className="text-blue-500" /> Work Experience
                    </h2>

                    <div className="space-y-8">
                        {experiences.map((exp) => (
                            <div
                                key={exp.id}
                                className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                            >
                                {/* Timeline indicator */}
                                <div className="absolute left-0 top-6 w-3 h-3 bg-blue-500 rounded-full -translate-x-6"></div>

                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <p className="text-blue-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-slate-400 text-sm mt-2 md:mt-0 flex items-center gap-2">
                                        <FaGraduationCap size={14} />
                                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-4 leading-relaxed">{exp.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
