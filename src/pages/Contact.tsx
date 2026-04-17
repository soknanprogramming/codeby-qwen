import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission (replace with actual API call)
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
    };

    const contactMethods = [
        {
            icon: <FaEnvelope size={24} />,
            title: "Email",
            value: "soknan@gmail.com",
            link: "mailto:soknan@gmail.com",
        },
        {
            icon: <FaLinkedin size={24} />,
            title: "LinkedIn",
            value: "linkedin.com/in/yourprofile",
            link: "https://linkedin.com",
        },
        {
            icon: <FaGithub size={24} />,
            title: "GitHub",
            value: "github.com/yourusername",
            link: "https://github.com",
        },
        {
            icon: <FaTwitter size={24} />,
            title: "Twitter",
            value: "@yourhandle",
            link: "https://twitter.com",
        },
    ];

    return (
        <div className="flex-1 py-12 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Page Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="text-blue-500">Touch</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Have a question or want to work together? I'd love to hear from you. 
                        Let's create something amazing!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                        <p className="text-slate-400 mb-8">
                            Feel free to reach out through any of these channels. I typically respond within 24 hours.
                        </p>

                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <a
                                    key={index}
                                    href={method.link}
                                    target={method.link.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
                                >
                                    <div className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                                        {method.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">{method.title}</h3>
                                        <p className="text-slate-400 text-sm">{method.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Location */}
                        <div className="mt-8 p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/20">
                            <div className="flex items-center gap-3 mb-3">
                                <FaMapMarkerAlt className="text-blue-500" size={20} />
                                <h3 className="text-white font-semibold">Location</h3>
                            </div>
                            <p className="text-slate-400">Kratie, Cambodia</p>
                            <p className="text-slate-500 text-sm mt-2">Open to remote work worldwide</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                            <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>

                            {submitSuccess && (
                                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
                                    <MdCheckCircle className="text-green-500" size={24} />
                                    <div>
                                        <p className="text-green-400 font-medium">Message sent successfully!</p>
                                        <p className="text-green-500/70 text-sm">I'll get back to you as soon as possible.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                            placeholder="soknan@gmail.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-slate-300 mb-2 font-medium">
                                        Subject <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                                        placeholder="Tell me about your project, idea, or opportunity..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane /> Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
