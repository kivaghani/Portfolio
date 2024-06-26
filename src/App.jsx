import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
// import Testmonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contacts'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
       <Header />
       <Nav />
       <About />
       <Experience />
        <Services />
       <Portfolio />
       {/* <Testmonials /> */}
       <Contact />
       <Footer />
    </>
  )
}

export default App
