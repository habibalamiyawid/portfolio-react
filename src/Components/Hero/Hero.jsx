import React from 'react'
import profile_img from '../../assets/profile_img.svg'

import './Hero.css'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img}alt="" />

      <h1><span>This is Habiba Rashid Lamiya,</span> Signing in from Bangladesh.</h1>

      <p>Software Developer with a Passion for Innovation 🚀 | Graduate of North South University 🎓 |
         Lover of Smiles 😊 and Food Enthusiast 🍲 | Believer in Freedom and Boundless Creativity ✨ 
         and Boundless Creativity ✨ Let's Code, Create, and Celebrate the Joy of Technology Together!
      </p>
      <div className="hero-action">
           <div className="hero-connect">
            Connect With Me
           </div>
           <div className="hero-resume">
            My Resume
           </div>
      </div>
    </div>
  )
}

export default Hero