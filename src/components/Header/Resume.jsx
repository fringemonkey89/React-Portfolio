import React from "react";
import CV from '../../assets/MarkoMajeticResume.pdf'

const Resume = () => {
    return (
        <div className="resumeBox">
            <a href={CV} download className='btn' target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
    )
}

export default Resume;