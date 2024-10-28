import React, { useState } from 'react'; // Import useState
import '../styles/Navbar.css';
import poto from '../assets/images/poto.png';
import click from '../assets/images/click.png';
import drop from '../assets/images/drop.png';
import log from '../assets/images/log.png';
import logo from '../assets/images/logo.png';
import lgo from '../assets/images/lgo.png';
import social from '../assets/images/social.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className="portfolio">
            <header className="navbar">
                <div className="hamburger" onClick={toggleMenu}> 
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={`navbar-items ${isOpen ? 'show' : ''}`}>
                    <li>Home</li>
                    <li>Case Studies</li>
                    <li>Testimonials</li>
                    <li>Recent Work</li>
                    <li>Get In Touch</li>
                    <li className="navbar-logo-container">
                    <img src={social} alt="social" className="navbar-logo" />
                    </li> 
                </ul>
                <div className="social-icons">
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-behance"></i>
                    <i className="fa fa-twitter"></i>
                </div>
            </header>

            <div className="hero">
                <div className="intro-text">
                    <h1>Your Name Here</h1>
                    <p>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="cta-btn">Let’s get started &gt;</button>
                </div>
                <div className="profile-picture">
                    <img src={poto} alt="poto" />
                </div>
            </div>

            <div className="worked-with">
                <h2 style={{ textAlign: 'left', marginLeft: '130px' }}>Worked with</h2>
                <div className="logos">
                    <img src={click} alt="click" />
                    <img src={drop} alt="drop" />
                    <img src={log} alt="log" />
                    <img src={logo} alt="logo" />
                    <img src={lgo} alt="lgo" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
