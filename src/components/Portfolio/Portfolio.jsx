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
        github: 'https://fringemonkey89.github.io/weather-report/'
    }, 
    {
        id:2,
        title: 'Critter Sitter',
        image: Img2,
        description: 'Critter Sitter is a website that provides an organized and easily accessible database holding essential information about animals under a pet sitters care',
       github: 'https://github.com/Team-1-UofT-Project2/critter-sitter'
    },
    {
        id:3,
        title: 'CineSearch',
        image: Img3,
        description: 'This is an app that enables users to search movies by title or filter out a list of movies based on preference, view trailers and description, and add movies to a bucket and queue list.',
       github: 'https://github.com/Team-ccmy/Cine-Search'
    },
    {
        id:4,
        title: 'Pop Quiz Hot-Shot',
        image: Img4,
        description: 'I have created a quiz testing your knowledge on web development using Javascript, HTML and CSS.',
        github: 'https://github.com/fringemonkey89/pop-quiz'
    },
    {
        id:5,
        title: 'Password Generator',
        image: Img5,
        description: ' I have created a function with javascript that would generate a password based on what criteria have been chosen through prompts.',
        github: 'https://github.com/fringemonkey89/random-password-generator'
    },
    {
        id:6,
        title: 'Note Taker Supreme',
        image: Img6,
        description: 'note-taker-supreme is an app that allows you to create notes on whatever you like, whether it be tasks, ideas, etc and also allows you to delete them as well',
        github: 'https://github.com/fringemonkey89/note-taker-supreme'
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
                                <a href={github}> project link</a>
                                
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio