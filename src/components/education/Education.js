import React, { useEffect } from 'react';
import './education.css';
import { color, motion, useAnimation } from 'framer-motion';

const Education = () => {

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
            <motion.div className="heading-edu" {...fadeIn}>
                <h1>Here's My Education</h1>
                <p>Here's the information about my educational background...</p>
            </motion.div>
            <motion.div className='container' {...fadeIn}>
                <div className='timeline'>
                    <div className='timeline-item'>
                        <div className='timeline-content'>
                            <h2>Year 2018</h2>
                            <h3>SSC</h3>
                            <p>Gurukul Vidhyapith Kumar Vidhyalaya, Katargam, Surat</p>
                            <p className='highlight'>Percentage: 59.9%</p>
                        </div>
                    </div>
                    <div className='timeline-item'>
                        <div className='timeline-content'>
                            <h2>Year 2020</h2>
                            <h3>HSC</h3>
                            <p>P.P. Savani Vidhyabhawan, Hirabaug, Surat.</p>
                            <p className='highlight'>Percentage: 73.73%</p>
                        </div>
                    </div>
                    <div className='timeline-item'>
                        <div className='timeline-content'>
                            <h2>Year 2020-2023</h2>
                            <h3>Bachelor of Computer Application (BCA)</h3>
                            <p>Veer Narmad South Gujarat University, Surat</p>
                            <p className='highlight'>CGPA: 7.20</p>
                        </div>
                    </div>
                    <div className='timeline-item'>
                        <div className='timeline-content'>
                            <h2>Year2023-2025</h2>
                            <h3>Master of Computer Application (MCA)</h3>
                            <p>Institute of Technology Nirma University, Ahmedabad.</p>
                            <p className='highlight'>CGPA: 7.75</p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </>
    );
};

export default Education;