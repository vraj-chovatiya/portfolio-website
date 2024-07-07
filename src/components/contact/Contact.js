import React, { useRef, useState, useEffect } from 'react';
import './contact.css';
import { color, motion, useAnimation } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const fadeIn = {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    // Send email configuration

    // const [messageSent, setMessageSent] = useState(false);
    const form = useRef();

    const notifySuccess = () => toast.success("Message sent... I'll get back to you soon!");
    const notifyFailed = () => toast.error("Failed to send message... Please try again later");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_o7mvylb', 'template_8zipd2i', form.current, {
                publicKey: 'ybh3_voowaXHG9Ava',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    // setMessageSent(true);
                    notifySuccess();
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    notifyFailed();
                },
            );
    };

    // const handleClosePopup = () => {
    //     setMessageSent(false);
    // };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <motion.div className='heading-contact' {...fadeIn}>
                <h1>Let's Connect</h1>
                <p>Contact me for building any project or portfolio like this.</p>
            </motion.div>
            <hr></hr>
            <motion.div className="contact-container"  {...fadeIn}>
                <motion.div className="contact-form"  {...fadeIn}>
                    <h2>Contact Me</h2>
                    <form ref={form} onSubmit={sendEmail}  {...fadeIn}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type='submit' value='Send' className="codepen-button"><span>Send Message</span></button>
                    </form>
                </motion.div>
                <motion.div className="contact-info"  {...fadeIn}>
                    <h2>My Contact Information</h2>
                    <ul>
                        <li><strong>Phone:</strong> +91 8866448029</li>
                        <li><strong>Email:</strong> vrajchovatiya11@gmail.com</li>
                        <li><strong>Address:</strong> Surat, Gujarat.</li>
                    </ul>
                </motion.div>
            </motion.div>
            <ToastContainer />

            {/* // when message sent successfully toastify message will be shown */}
            {/* {messageSent && toast.success('Message Sent!')} */}

        </>
    );
};

export default Contact;