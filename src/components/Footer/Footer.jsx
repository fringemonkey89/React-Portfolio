import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <a>Marko Majetic</a>

            <ul className='permlinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Skills</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>

            <div className='footer_social'>
                <a>Github</a>
                <a>LinkedIn</a>
                <a>Twitter</a>
            </div>

            <div className='footer_copyright'>
                <small>&copy;2022</small>
            </div>
        </footer>
    )
}

export default Footer