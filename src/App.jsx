import React from 'react'
import About from './components/About/About'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Header from './components/Header/Header'
import './App.css'

function App() {
  

  return (
    <>
    <Header />
      <Nav />
      <About />
      
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
