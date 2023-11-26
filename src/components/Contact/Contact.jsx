import React from 'react'
import './Contact.css'
// import { MdOutlineEmail } from 'react-icon/md' 
// import { RiMessengerLine } from 'react-icon/ri' 
// import { BsWhatsapp } from 'react-icon/bs' 
import { useRef } from 'react'
import { useState } from 'react'
import validator from 'validator'

const Contact = () => {
    const form = useRef()

    const [ emailError, setEmailError ] = useState('')

    const handleChange = (e) => {
        if(validator.isEmail(e.target.value)) {
            console.log('valid email')
            setEmailError('')
        } else {
            console.log('bad email')
            setEmailError('enter valid email')
        }

        console.log('clicked')
        console.log(e.target.value)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        e.target.reset()
    }

    return(

        <section id='contact'>
            <h5>Get In Contact</h5>
            <h2>Send Me A Line</h2>
        <div className='contact_container'>
            <div className='contact_options'>
                <article className='contact_option'>
                    
                    <h4>Email</h4>
                    <h5>markomajeticjr@gmail.com</h5>
                    <a>Send a Message</a>
                </article>
                <article className='contact_option'>
                    
                    <h4>Messenger</h4>
                    <h5>Marko Majetic jr</h5>
                    <a>Send a Message</a>
                </article>
                <article className='contact_option'>
                    
                    <h4>WhatsApp</h4>
                    <h5>416-795-6902</h5>
                    <a>Send a Message</a>
                </article>
            </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Full Name' require />
            <input type='email' name='email' placeholder='Your Email' onChange={handleChange} require />
            <p>{emailError}</p>
            <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </section>
    )
}

export default Contact