import React from 'react'
import CV from '../../assets/MarkoMajeticResume.pdf'

const Resume = () => {
    return (
        <div className='cta'>
            <a href={ CV } className='btn' target='_blank' rel='noopener noreferrer'>Resume</a>
            <a>Contact</a>
        </div>
    )
}

export default Resume