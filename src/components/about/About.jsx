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
            <small>Software Developer</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ completed</small>
          </article>
      </div>
      <p>

      Passionate Full Stack Developer with a keen eye for design and a steadfast dedication to crafting outstanding user experiences. Proficient in HTML, CSS, JavaScript, Bootstrap, React JS, NodeJS, ExpressJS and MONGODB.  I bring a unique blend of creativity and technical expertise to every project. Enthusiastic about collaborating with dynamic teams, I am committed to contributing innovative solutions that not only captivate users but also drive meaningful engagement. My goal is to seamlessly integrate design and functionality, ensuring each application I develop is both visually appealing and highly performant.      </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
  </section>
  )
}

export default About
