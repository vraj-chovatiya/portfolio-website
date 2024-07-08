import React, { useEffect } from 'react';
import './about.css';
import { color, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const techStack = {
    languages: [
        { src: require('../../assets/icons/c-.png'), name: 'C++' },
        { src: require('../../assets/icons/java.png'), name: 'Java' },
        { src: require('../../assets/icons/python.png'), name: 'Python' },
        { src: require('../../assets/icons/php.png'), name: 'PHP' },
        { src: require('../../assets/icons/c-sharp.png'), name: 'C-Sharp' },
    ],
    frameworks: [
        { src: require('../../assets/icons/html-5.png'), name: 'HTML' },
        { src: require('../../assets/icons/css-3.png'), name: 'CSS' },
        { src: require('../../assets/icons/js.png'), name: 'JavaScript' },
        { src: require('../../assets/icons/react.png'), name: 'React' },
        { src: require('../../assets/icons/nodejs.png'), name: 'NodeJs' },
        { src: require('../../assets/icons/mongodb.png'), name: 'MongoDB' },
        { src: require('../../assets/icons/tailwindcss.png'), name: 'TailwindCSS' },
    ],
    tools: [
        { src: require('../../assets/icons/figma.png'), name: 'Figma' },
        { src: require('../../assets/icons/firebase.png'), name: 'Firebase' },
        { src: require('../../assets/icons/git.png'), name: 'Git' },
        { src: require('../../assets/icons/github.png'), name: 'GitHub' },
        { src: require('../../assets/icons/sql.png'), name: 'SQL' },
        { src: require('../../assets/icons/visual-studio.png'), name: 'Visual Studio' },
    ],
};


const profileLinks = [
    { href: "https://codeforces.com/profile/vraj_chovatiya", src: "https://asset.brandfetch.io/idMR4CMjcL/idPWmM8aOc.png", alt: "CodeForces" },
    { href: "https://leetcode.com/u/vraj_chovatiya/", src: "https://asset.brandfetch.io/id8BaDflDb/idMTJ6fnty.png", alt: "LeetCode" },
    { href: "https://www.codechef.com/users/vraj_chovatiya", src: "https://asset.brandfetch.io/idM2-b7Taf/id9CeVm2nY.png", alt: "CodeChef" },
    { href: "https://www.hackerrank.com/profile/vrajchovatiya414", src: "https://asset.brandfetch.io/idTrJXGwd0/idAJPV0fZV.png", alt: "HackerRank" },
    { href: "https://www.naukri.com/code360/profile/vb_chovatiya", src: "https://asset.brandfetch.io/ideRRB4-kx/idUvsBj1k5.png", alt: "CodingNinjas" },
    { href: "https://www.geeksforgeeks.org/user/vrajchovatiya11/", src: "https://asset.brandfetch.io/idw2s-0Tuo/idushz6qWf.png", alt: "GeeksForGeeks" }
];


const About = () => {

    const fadeIn = {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='about-container'>
            <motion.div className="heading-about" {...fadeIn}>
                <h1>Here's About Me</h1>
                <p>Here's the information of my background, passion, techStack, etc..</p>
            </motion.div>
            <motion.div className="about-content" {...fadeIn}>
                <div className="text">
                    <h4>About Me</h4>
                    <h2>Vraj Chovatiya</h2>
                    <p>
                        I have completed my Bachelor's in Computer Applications from Veer Narmad South Gujarat University and am currently pursuing further studies at Nirma University. I am deeply passionate about learning new technologies and leveraging them to solve real-world problems. Throughout my academic journey, I have developed strong expertise in various programming languages, including C, C++, HTML, CSS, and JavaScript. My focus on web development has allowed me to build a solid foundation and gain hands-on experience in creating dynamic and responsive web applications.
                    </p>
                    <p>
                        I have honed my skills in ReactJS, developing a robust understanding of this powerful framework to build modern, efficient, and user-friendly interfaces. Additionally, I have experience working with MySQL databases and utilizing WordPress for web development projects.
                    </p>
                    <p>
                        I am always eager to expand my knowledge and explore new technologies that can drive innovation and create impactful solutions. I look forward to connecting with like-minded professionals and exploring opportunities to collaborate on exciting projects.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1LwvBzRpjYZtC3JkqiJ3zNxHuqLbihTnd/view?usp=sharing"
                        className="codepen-button" target='_blank'
                    >
                        <span>Download CV</span>
                    </a>
                </div>
            </motion.div>
            <motion.div className="work" {...fadeIn}>
                <div className="work-item">
                    <h2>10+</h2>
                    <p>Project</p>
                </div>
                <div className="work-item">
                    <h2>5+</h2>
                    <p>React Project</p>
                </div>
                <div className="work-item">
                    <h2>2+</h2>
                    <p>Month of Company experience</p>
                </div>
                <div className="work-item">
                    <h2>119+</h2>
                    <p>DSA Questions Solved</p>
                </div>
            </motion.div>

            <div className="languages">
                <h4>Tech Stack</h4>
                <div>
                    <h2>1. Languages</h2>
                    <ul>
                        {techStack.languages.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <img src={item.src} alt={item.name} />
                                <p>{item.name}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>2. Framework and Libraries</h2>
                    <ul>
                        {techStack.frameworks.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <img src={item.src} alt={item.name} />
                                <p>{item.name}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>3. Other Tools & Technologies</h2>
                    <ul>
                        {techStack.tools.map((item, index) => (
                            <motion.li
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <img src={item.src} alt={item.name} />
                                <p>{item.name}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
            <motion.div className="profile-links" {...fadeIn}>
                <h4>Profile Links</h4>
                <div className='card-container'>
                    {profileLinks.map((item, index) => (
                        <div className='card-item' key={index}>
                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                <img src={item.src} alt={item.alt} />
                                <p>{item.alt}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;