import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/weather-report.png'
import Img2 from '../../assets/critter.png'
import Img3 from '../../assets/cineSearch.png'
import Img4 from '../../assets/quiz.png'
import Img5 from '../../assets/password.png'
import Img6 from '../../assets/note.png'

const data =[
    {
        id:1,
        title: 'Weather App',
        image: Img1,
        description: 'this is a sample description of my project',
        //github: 'examplegit'
    }, 
    {
        id:2,
        title: 'Critter Sitter',
        image: Img2,
        description: 'this is a sample description of my project',
       // github: 'examplegit'
    },
    {
        id:3,
        title: 'Cine Search',
        image: Img3,
        description: 'this is a sample description of my project',
       // github: 'examplegit'
    },
    {
        id:4,
        title: 'project4',
        image: Img4,
        description: 'this is a sample description of my project',
        //github: 'examplegit'
    },
    {
        id:5,
        title: 'project5',
        image: Img5,
        description: 'this is a sample description of my project',
        //github: 'examplegit'
    },
    {
        id:6,
        title: 'project6',
        image: Img6,
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
                    data.map(({ id, title, description, image, github}) => {
                        return(
                            <article key={id} className='portfolio_item'>
                                <div className='portfolio_img'>
                                <img src={image} alt={title} />
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