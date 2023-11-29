import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>

            <ul className='permlinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#About'>About</a></li>
                <li><a href='#experience'>Skills</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer_social'>
                <a href='https://www.linkedin.com/in/marko-majetic-354232254/'><FaGithub  className='icon'/>Github</a>
                <a href='https://www.linkedin.com/in/marko-majetic-354232254/'><FaLinkedin className='icon' />LinkedIn</a>
                <a href='https://twitter.com/Esterosa1133'><FaSquareXTwitter className='icon' />Twitter</a>
            </div>

            <div className='footer_copyright'>
                <small>&copy;2022</small>
            </div>
        </footer>
    )
}

export default Footer