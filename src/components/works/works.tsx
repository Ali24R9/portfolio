import React from 'react'
import './works.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img1.png'
import IMG3 from '../../assets/img1.png'
import IMG4 from '../../assets/img1.png'

const Works = () => {
  return (
    <section>

      <h5>My Recent Works & Contributions</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Fashion Gallery</h3>
            <small className='text-light'>Spring Boot | ReactJs | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://www.zingermanscommunity.com" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Beauty Garden</h3>
            <small className='text-light'>HTML | CSS | JS | php | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://www.zingermanscommunity.com" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://www.zingermanscommunity.com" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://www.zingermanscommunity.com" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>My Resume</h3>
            <small className='text-light'>HTML | CSS | JS | Bootstrap</small>
            <div className="portfolio__item-cta">
              <a href="https://www.zingermanscommunity.com" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://www.zingermanscommunity.com" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Works