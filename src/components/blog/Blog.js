import { animate } from 'framer-motion';
import React from 'react';
import { color, motion, useAnimation } from 'framer-motion';
import './blog.css';


const Blog = () => {

    const fadeIn = {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    return (
        <>
            <div className='blog-container'>
                <motion.div className="heading-blog" {...fadeIn}>
                    <h1>Here's My Blog</h1>
                    <p>Here's the information about my blog...</p>
                </motion.div>
                <motion.div className='blog-content' {...fadeIn}>
                    <h2>Under Construction...😉 but you can check <a href="https://medium.com/@vrajchovatiya414" target='_blank'>here</a></h2>
                </motion.div>
            </div>
        </>
    )
};

export default Blog;