import React from 'react'
import './Nav.css'
import { AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}> <AiOutlineHome /> Home</a>
            <a href='#About' onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser /> About Me</a>
            <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}> <BiBook /> Skills</a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine />Portfolio</a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail />Contact</a>
        </nav>
    )
}

export default Nav