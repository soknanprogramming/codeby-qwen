import React from "react";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";

const Home: React.FC = () => {
    return (
        <div className="flex-1">
            <Hero />
            <FeaturedProjects />
        </div>
    );
};

export default Home;
