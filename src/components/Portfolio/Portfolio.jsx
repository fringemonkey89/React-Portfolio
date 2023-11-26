import React from 'react'
import './Portfolio.css'

const data =[
    {
        id:1,
        title: 'project1',
        description: 'this is a sample description of my project',
        //github: 'examplegit'
    }, 
    {
        id:2,
        title: 'project2',
        description: 'this is a sample description of my project',
       // github: 'examplegit'
    },
    {
        id:3,
        title: 'project3',
        description: 'this is a sample description of my project',
       // github: 'examplegit'
    },
    {
        id:4,
        title: 'project4',
        description: 'this is a sample description of my project',
        //github: 'examplegit'
    },
    {
        id:5,
        title: 'project5',
        description: 'this is a sample description of my project',
        //github: 'examplegit'
    },
    {
        id:6,
        title: 'project6',
        description: 'this is a sample description of my project',
       // github: 'examplegit'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2>Projects</h2>

            <div className='portfolio_container'>
                {
                    data.map(({ id, title, description, github}) => {
                        return(
                            <article key={id} className='portfolio_item'>
                                <div className='portfolio_img'>
                                <img></img>
                                </div>
                                <h3>{title}</h3>
                                <h4>{description}</h4>
                                <div className='portfolio_cta'>
                                   <a>Github</a> 
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio