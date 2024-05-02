import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {PiUsersFill} from 'react-icons/pi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-img">
           <img src={ME} alt="About Img"/>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ years working</small>
          </article>

          <article className="about__card">
            <PiUsersFill className='about__icon'/>
            <h5>Profession</h5>
            <small>a student</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ completed</small>
          </article>
      </div>
      <p>
         Passionate Front-End Developer with a creative eye for design and a strong commitment to delivering exceptional user experiences. Proficient in HTML, CSS, JavaScript, Bootstrap and React JS, I bring fresh perspectives to web development projects. Eager to collaborate with dynamic teams and contribute innovative solutions that captivate users and drive engagement.
      </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
  </section>
  )
}

export default About
