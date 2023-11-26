import React from 'react'
import './Nav.css'

import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a>About Me</a>
            <a> Skills</a>
            <a>Portfolio</a>
            <a> Contact</a>
        </nav>
    )
}

export default Nav