import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    function toggleNavbar() {
        setIsOpen(!isOpen);
    }

    function closeNav(){
        setIsOpen(false);
    }

    return (
        <nav className="navbar">
            <div className='nav-responsive'>
                <div className="navbar-logo">vraj chovatiya</div>
                <button className="navbar-toggle" onClick={toggleNavbar}>
                    ☰
                </button>
            </div>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={closeNav}>Home</Link></li>
                <li><Link to="/about" onClick={closeNav}>About</Link></li>
                <li><Link to="/education" onClick={closeNav}>Education</Link></li>
                <li><Link to="/experience" onClick={closeNav}>Experience</Link></li>
                <li><Link to="/projects" onClick={closeNav}>Projects</Link></li>
                <li><Link to="/blog" onClick={closeNav}>Blog</Link></li>
                <li><Link to="/contact" onClick={closeNav}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
