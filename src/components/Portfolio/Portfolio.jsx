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
        title: 'Weather Report',
        image: Img1,
        description: 'A web application that allows users to search for a city to get the current weather and 5 day forecast. Cities that users have looked up will be saved in their local storage.',
       // github: 'https://fringemonkey89.github.io/weather-report/'
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
        description: 'This is an app that enables users to search movies by title or filter out a list of movies based on preference, view trailers and description, and add movies to a bucket and queue list.',
       // github: 'examplegit'
    },
    {
        id:4,
        title: 'Pop Quiz Hot-Shot',
        image: Img4,
        description: 'I have created a quiz testing your knowledge on web development using Javascript, HTML and CSS.',
        //github: 'examplegit'
    },
    {
        id:5,
        title: 'Password Generator',
        image: Img5,
        description: ' I have created a function with javascript that would generate a password based on what criteria have been chosen through prompts.',
        //github: 'examplegit'
    },
    {
        id:6,
        title: 'Note Taker Supreme',
        image: Img6,
        description: 'note-taker-supreme is an app that allows you to create notes on whatever you like, whether it be tasks, ideas, etc and also allows you to delete them as well',
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