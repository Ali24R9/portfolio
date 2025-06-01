import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">
          <h1>Ali Abou-Zahr</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA/>
          <HeaderSocials/>

        </div>
      </header>

    
    
  )
}

export default Header