import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='flex-between footer-icons'>
            <a href="https://github.com/hcs847" target="_blank"><FaGithub /></a>
            <a href="mailto:caspi.home@gmail.com"><FaEnvelope /></a>
            <a href="https://linkedin.com/in/hilacaspi/" target="_blank"><FaLinkedin /></a>
        </footer>
    )
}

export default Footer;