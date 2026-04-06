import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    const footerLinks = {
        navigation: [
            { label: "Home", path: "/" },
            { label: "Projects", path: "/projects" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
        ],
        social: [
            { icon: <FaGithub size={20} />, label: "GitHub", url: "https://github.com" },
            { icon: <FaLinkedin size={20} />, label: "LinkedIn", url: "https://linkedin.com" },
            { icon: <FaTwitter size={20} />, label: "Twitter", url: "https://twitter.com" },
        ],
    };

    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <h3 className="text-white font-bold text-xl mb-4">
                            Portfolio
                        </h3>
                        <p className="text-slate-400 mb-4 max-w-sm">
                            Building exceptional digital experiences with modern web technologies. 
                            Let's create something amazing together.
                        </p>
                        <div className="flex gap-4">
                            {footerLinks.social.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li>your.email@example.com</li>
                            <li>Your City, Country</li>
                            <li className="text-green-400 flex items-center gap-2 mt-3">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                Available for work
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm flex items-center gap-2">
                        © {currentYear} Made with <FaHeart className="text-red-500" size={14} /> using React & Tailwind CSS
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
