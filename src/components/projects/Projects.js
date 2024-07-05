import React from 'react';
import './projects.css';
import { color, motion, useAnimation } from 'framer-motion';
import image from "../../assets/img/flipkart.png";

const projects = [
    {
        id: 1,
        title: "flipkart-clone",
        discription: "This project contains the front-end UI design of the Flipkart website, built using ReactJS.",
        image: "https://raw.githubusercontent.com/vraj-chovatiya/flipkart-clone/main/Screenshot%20(62).png",
        github: "https://github.com/vraj-chovatiya/flipkart-clone"
    },
    {
        id: 2,
        title: "Personal Portfolio",
        discription: "A showcase of my projects, skills, and professional experience as a web developer.",
        image: "https://i.imgur.com/vTUrDak.png",
        github: "https://github.com/vraj-chovatiya/portfolio-website"
    },
    {
        id: 3,
        title: "Weather WebApp",
        discription: "This is a weather web app that shows the weather of the city. Build using HTML, CSS, and JavaScript.",
        image: "https://i.imgur.com/yboqKpS.png",
        github: "https://github.com/vraj-chovatiya/PRODIGY_WD_05"
    },
    {
        id: 4,
        title: "Restaurant WebPage",
        discription: "This is a single page website for the restaurant. Build using HTML, CSS, and JavaScript only.",
        image: "https://i.imgur.com/kPer6Ya.png",
        github: "https://github.com/vraj-chovatiya/PRODIGY_WD_01"
    },
    {
        id: 5,
        title: "StopWatch",
        discription: "This is a simple stopwatch application built using HTML, CSS, and JavaScript.",
        image: "https://i.imgur.com/Lmortak.png",
        github: "https://github.com/vraj-chovatiya/PRODIGY_WD_02"
    }, 
    {
        id: 6,
        title: "React Bundler with Parcel",
        discription: "This is a simple React application bundled with Parcel.",
        image: "https://parceljs.org/assets/home-og.png",
        github: "https://github.com/vraj-chovatiya/parcel-react-app"
    },
    {
        id: 7,
        title: "Real-Time Tracking App",
        discription: "This is a simple Real-Time Tracking Application. Build using Socket.io, Node.js, and Express.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWeqeGD1Mo3v3Dl77zhQBdS1IyaPof5iPPg&s",
        github: "https://github.com/vraj-chovatiya/"
    },
    
    // Add more projects as needed
];

const Projects = () => {

    const fadeIn = {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

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