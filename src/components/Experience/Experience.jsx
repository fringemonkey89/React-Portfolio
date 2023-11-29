import React from 'react'
import './Experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return(
        <section id='experience'>
            <h2 id='exp'>Experience</h2>
            <div className='experience_container'>
                <div className='frontEnd'>
                    <h3>Frontend Development </h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4>HTML</h4>
                        </div>
                        </article>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4>CSS</h4>
                        </div>
                        </article>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4>Javascript</h4>
                        </div>
                        </article>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4>Bootstrap</h4>
                        </div>
                        </article>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4>Materialise</h4>
                        </div>
                        </article>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4>SASS</h4>
                        </div>
                        </article>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4>React</h4>
                        </div>
                        </article>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4>Web API's</h4>
                        </div>
                        </article>
                    </div>
                </div>
            </div>
            <div className='experience_container'>
            <div className='experience_backend'>
                <h3> Backend Development</h3>
                <div className='experience_content'>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4> Node JS</h4>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4> MongoDB </h4>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4> MySQL WorkBench </h4>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4> MYSQL </h4>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4>Mongoose</h4>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4> Postman</h4>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='details_icon' />
                        <div>
                            <h4> Insomnia </h4>
                        </div>
                    </article>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Experience