import React from 'react'
import './Header.css'
import Resume from './Resume'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header>
            <div className='header_container'>
                <h5>I'm</h5>
                <h1>Marko Majetic</h1>
                <h5 className='text-light'>Full Stack Developer</h5>
                <Resume />
                <HeaderSocial />
                <div className='me'>
                    <img></img>
                </div>

                <a>Scroll down!</a>
            </div>
        </header>
    )
}

export default Header