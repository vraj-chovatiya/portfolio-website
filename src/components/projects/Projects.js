import React, { useEffect } from 'react';
import './projects.css';
import { color, motion, useAnimation } from 'framer-motion';
import projects from './projectData.json';


const Projects = () => {

    const fadeIn = {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <motion.div className='heading-project' {...fadeIn}>
                <h1>Here's My Project</h1>
                <p>Here's the project that I have created In this journey..</p>
            </motion.div>
            <motion.div className="project-container" {...fadeIn}>
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.discription}</p>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">View on GitHub</a>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default Projects;