import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a href='https://www.linkedin.com/in/marko-majetic-354232254/'><FaLinkedin />Linkedin</a>
            <a href='https://github.com/fringemonkey89'><FaGithub />Github</a>
            <a href='https://twitter.com/Esterosa1133'><FaSquareXTwitter />Twitter</a>
        </div>
    )
}

export default HeaderSocial