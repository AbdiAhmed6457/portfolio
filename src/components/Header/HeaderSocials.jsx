import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const HeaderSocials = () => {
  return  (
    <div className='header_socials'>
      <a href='https://linkedin.com' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com' target='_blank'><FaGithub/></a>
      <a href='https://dribble.com' target='_blank'><FaDribbble/></a>
    </div>
  )
}

export default HeaderSocials
