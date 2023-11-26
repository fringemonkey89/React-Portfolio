import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='About'>
            <h5>Who Is Marko?</h5>
            <h2>About Me</h2>

            <div className='about_container'>
                <div className='about_me'>
                    <div className='about_image'>
                        <img></img>
                    </div>
                </div>

                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Non-Profit Expereince</h5>
                            <small>5 Years Experience</small> 
                        </article>

                        <article className='about_card'>
                            <FiUsers className='about_icon' />
                             <h5>Industries</h5>
                            <small>Construction, Non-Profit, Retail</small> 
                        </article>

                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon' />
                             <h5>Projects</h5>
                            <small>Take a Gander at My Projects</small> 
                        </article>
                    </div>
                    <p> Full Stack Developer who is familiarly acqainted with the non-profit sector</p>
                    <p>I've always been passionate about web development</p>
                    <a href='#contact' className='btn btn-primary'>Contact</a>
                </div>
            </div>
        </section>
    )
}

export default About