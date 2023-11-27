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
                <li><a href='#'>About</a></li>
                <li><a href='#'>Skills</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>

            <div className='footer_social'>
                <a><FaGithub />Github</a>
                <a><FaLinkedin />LinkedIn</a>
                <a><FaSquareXTwitter />Twitter</a>
            </div>

            <div className='footer_copyright'>
                <small>&copy;2022</small>
            </div>
        </footer>
    )
}

export default Footer