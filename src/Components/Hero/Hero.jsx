import React from 'react';
import profile_img from '../../assets/pro_pic1.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />

      <h1><span>This is Habiba Rashid Lamiya,</span> Signing in from Bangladesh.</h1>

      <p>Software Developer with a Passion for Innovation 🚀| Block Chain Instructor | Graduate of North South University 🎓 |
         Lover of Smiles 😊 and Food Enthusiast 🍲 | Believer in Freedom and Boundless Creativity ✨ 
         Let's Code, Create, and Celebrate the Joy of Technology Together!
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume">
        <a href="/resume.pdf" download="Habiba_Rashid_Lamiya_Resume.pdf">
          My Resume / CV
        </a>

        </div>
      </div>
    </div>
  );
}

export default Hero;
