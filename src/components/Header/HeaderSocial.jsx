import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a><FaLinkedin />Linkedin</a>
            <a><FaGithub />Github</a>
            <a><FaSquareXTwitter />Twitter</a>
        </div>
    )
}

export default HeaderSocial