import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Devlopment</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>HTML&CSS</h4>
              <small className='text-light'>Experienced</small>

             </div>
             </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div><h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>


            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Experienced</small>

              </div>

            </article>
           
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>ReactJS</h4>
              <small className='text-light'>Experienced</small>
             </div>


            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
             </div>


            </article>
          </div>
        </div>


        <div className="experience__backend">
        <h3>Backend Devlopment</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>

              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>


            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
             </div>


            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Python</h4>
              <small className='text-light'>Basic</small>
             </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Django</h4>
              <small className='text-light'>Basic</small>
             </div>


            </article>
           
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Experience