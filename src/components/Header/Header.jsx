import React from 'react'
import "./Header.css"
import CTA from './CTA'
import propic from "../../assets/mini.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
       <header>
        <div className='container header_container'>
          <h5>Hello I'm</h5>
          <h1>Abdi Ahmed </h1>
          <h5 className='text-light'> Fullstack Developer</h5>
          <CTA/>
          <HeaderSocials/>
          <div className='me'>
            <img src={propic} alt=''/>
          </div>

          <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
       </header>
  )
}

export default Header
