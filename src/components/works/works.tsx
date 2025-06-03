import React from 'react'
import './works.scss'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img1.png'
import IMG3 from '../../assets/img1.png'
import IMG4 from '../../assets/img1.png'

if(document.body.classList.contains('home')) {

  //homepage hero functionality
  let shop = document.getElementById("hero-wrapper-shop");
  let eat = document.getElementById("hero-wrapper-eat");
  let celebrate = document.getElementById("hero-wrapper-celebrate");
  let learn = document.getElementById("hero-wrapper-learn");

  let shopShop = document.getElementById("shop-shop");
  let shopEat = document.getElementById("shop-eat");
  let shopCelebrate = document.getElementById("shop-celebrate");
  let shopLearn = document.getElementById("shop-learn");

  let eatShop = document.getElementById("eat-shop");
  let eatEat = document.getElementById("eat-eat");
  let eatCelebrate = document.getElementById("eat-celebrate");
  let eatLearn = document.getElementById("eat-learn");

  let celebrateShop = document.getElementById("celebrate-shop");
  let celebrateEat = document.getElementById("celebrate-eat");
  let celebrateCelebrate = document.getElementById("celebrate-celebrate");
  let celebrateLearn = document.getElementById("celebrate-learn");

  let learnShop = document.getElementById("learn-shop");
  let learnEat = document.getElementById("learn-eat");
  let learnCelebrate = document.getElementById("learn-celebrate");
  let learnLearn = document.getElementById("learn-learn");

  //shop display
  shopShop.addEventListener("click", function(){
    shop.style.display = 'block';

    eat.style.display = 'none';
    learn.style.display = 'none';
    celebrate.style.display = 'none';
  }, false);
  shopEat.addEventListener("click", function(){
    eat.style.display = 'block';

    shop.style.display = 'none';
    learn.style.display = 'none';
    celebrate.style.display = 'none';
  }, false);
  shopCelebrate.addEventListener("click", function(){
    celebrate.style.display = 'block';

    eat.style.display = 'none';
    learn.style.display = 'none';
    shop.style.display = 'none';
  }, false);
  shopLearn.addEventListener("click", function(){
    learn.style.display = 'block';

    eat.style.display = 'none';
    shop.style.display = 'none';
    celebrate.style.display = 'none';
  }, false);

  //eat display
  eatShop.addEventListener("click", function(){
    shop.style.display = 'block';

    eat.style.display = 'none';
    learn.style.display = 'none';
    celebrate.style.display = 'none';
  }, false);
  eatEat.addEventListener("click", function(){
    eat.style.display = 'block';

    shop.style.display = 'none';
    learn.style.display = 'none';
    celebrate.style.display = 'none';
  }, false);
  eatCelebrate.addEventListener("click", function(){
    celebrate.style.display = 'block';

    eat.style.display = 'none';
    learn.style.display = 'none';
    shop.style.display = 'none';
  }, false);
  eatLearn.addEventListener("click", function(){
    learn.style.display = 'block';

    eat.style.display = 'none';
    shop.style.display = 'none';
    celebrate.style.display = 'none';
  }, false);

  //celebrate display
  celebrateShop.addEventListener("click", function(){
    shop.style.display = 'block';

    eat.style.display = 'none';
    learn.style.display = 'none';
    celebrate.style.display = 'none';
  }, false);
  celebrateEat.addEventListener("click", function(){
    eat.style.display = 'block';

    shop.style.display = 'none';
    learn.style.display = 'none';
    celebrate.style.display = 'none';
  }, false);
  celebrateCelebrate.addEventListener("click", function(){
    celebrate.style.display = 'block';

    eat.style.display = 'none';
    learn.style.display = 'none';
    shop.style.display = 'none';
  }, false);
  celebrateLearn.addEventListener("click", function(){
    learn.style.display = 'block';

    eat.style.display = 'none';
    shop.style.display = 'none';
    celebrate.style.display = 'none';
  }, false);

  //learn display
  learnShop.addEventListener("click", function(){
    shop.style.display = 'block';

    eat.style.display = 'none';
    learn.style.display = 'none';
    celebrate.style.display = 'none';
  }, false);
  learnEat.addEventListener("click", function(){
    eat.style.display = 'block';

    shop.style.display = 'none';
    learn.style.display = 'none';
    celebrate.style.display = 'none';
  }, false);
  learnCelebrate.addEventListener("click", function(){
    celebrate.style.display = 'block';

    eat.style.display = 'none';
    learn.style.display = 'none';
    shop.style.display = 'none';
  }, false);
  learnLearn.addEventListener("click", function(){
    learn.style.display = 'block';

    eat.style.display = 'none';
    shop.style.display = 'none';
    celebrate.style.display = 'none';
  }, false);
}

const Works = () => {
  return (
    <section id="works">

      <h5>My Recent Works & Contributions</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Landing Page (live site)</h3>
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