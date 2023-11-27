import React from 'react'
import './Header.css'
import HeaderSocial from './HeaderSocial'
import Logo  from '../../assets/logo.png'
const Header = () => {
    return (
        <header>
            <div className='header_container'>
                <div className='profile'>
                    Hi! My Name is Marko Majetic 
                    
                     I'm a Fullstack Developer 
                </div>
                <div className='logo'>
                    <img src={Logo} />
                </div>
                <HeaderSocial />
               
                
            </div>
        </header>
    )
}

export default Header