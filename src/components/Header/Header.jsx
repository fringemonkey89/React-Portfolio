import React from 'react'
import './Header.css'
import Resume from './Resume'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header>
            <div className='header_container'>
                <div className='profile'>
                    Hi! My Name is Marko Majetic 
                     I'm a Fullstack Developer 
                </div>
                <HeaderSocial />
                <Resume />
                
                
            </div>
        </header>
    )
}

export default Header