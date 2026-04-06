import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero: React.FC = () => {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting */}
                    <p className="text-blue-400 font-medium mb-4 text-lg animate-fade-in">Hi, my name is</p>
                    
                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-slate-300 bg-clip-text text-transparent">
                        POCH Soknan
                    </h1>
                    
                    {/* Tagline */}
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
                        I build things for the web
                    </h2>
                    
                    {/* Description */}
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        I'm a passionate full-stack developer who loves turning ideas into reality through clean, 
                        efficient code. I enjoy building modern web applications that are both functional and 
                        user-friendly, constantly learning and growing with every project I take on.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Link 
                            to="/projects" 
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 min-w-[180px]"
                        >
                            View My Work
                        </Link>
                        <Link 
                            to="/contact" 
                            className="px-8 py-4 border-2 border-slate-600 hover:border-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 min-w-[180px]"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 justify-center items-center">
                        <a 
                            href="https://github.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                            aria-label="GitHub"
                        >
                            <FaGithub size={28} />
                        </a>
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={28} />
                        </a>
                        <a 
                            href="mailto:your.email@example.com" 
                            className="text-slate-400 hover:text-red-400 transition-colors duration-300 hover:scale-110 transform"
                            aria-label="Email"
                        >
                            <MdEmail size={28} />
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <FaArrowDown className="text-slate-500" size={24} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
