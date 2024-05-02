import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Screenshot 2024-04-22 092250.png'
import IMG2 from '../../assets/textutil.png'
import IMG4 from '../../assets/Screenshot 2024-05-02 100205.png'

    const data =[
    
    
     
      {
        id: 2,
        image: IMG1,
        title: "FoodClub-Heystreet",
        github: 'https://github.com/kivaghani/mern-street',
        demo: "https://foodclub-heystreet.onrender.com/",
      },
      
      {
        id: 4,
        image: IMG2,
        title: "Text Converter",
        github: 'https://github.com/kivaghani/TextCoverter',
        demo: "",
      },
     
      {
        id: 6,
        image: IMG4,
        title: "Rental-Service",
        github: '/',
        demo: "https://rental-service-54ti.onrender.com/"
      }
    ];
    
    
    
    
    const Portfolio = () => {
      return (
        <section id='portfolio'>
         <h5>My Recent Work</h5>
         <h2>portfolio</h2>
          
          <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
          return (
            <article key={id} className='portfolio-item'>
            <div className="portfolio__item-image">
    
    
              <img src={image} alt={title} />
            </div>
              <h3>{title}</h3>
             <div className="portfolio__item-cta">
             <a href={github} className='btn'>Github</a>
          <a href={demo} className='btn btn-primary'>Live Demo</a>
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