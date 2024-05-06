import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

    <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
           <div className="about-para">
           <p>
            Hello, I'm Habiba Rashid Lamiya, a dynamic individual driven by a passion for technology and innovation. Currently, I'm thriving as a Junior Software Developer at Women In Digital, where I'm actively contributing to projects.Also I'm a Blockchain Instructor at Women In Digital.My journey in the realm of computer science began with a solid foundation laid during my SSC and HSC education, followed by a comprehensive exploration at North South University, where I graduated with a degree in Computer Science and Engineering.
            </p>
            <p>
            As a software developer, I thrive on the thrill of innovation, constantly seeking new ways to push the boundaries of what's possible. My approach to coding is not just about writing lines of code but about crafting solutions that inspire and empower.Beyond the screen, I'm an extroverted soul who finds joy in connecting with others. Whether it's making new friends, lending a listening ear, or engaging in meaningful conversations, I believe in the power of human connection to drive positive change.
            </p>
            <p>
            I'm a firm believer in the mantra of "work hard, play harder." When I'm not immersed in the world of technology, you'll likely find me indulging my love for food, spreading smiles wherever I go, and embracing the freedom to express my boundless creativity.Let's embark on a journey together, where we code, create, and celebrate the endless possibilities that technology offers. Join me in shaping a future where innovation knows no bounds, and together, let's make a difference, one line of code at a time.
            </p>
           </div>
           <div className="about-skills">
             <div className="about-skill">
              <p>HTML & CSS</p><hr style={{width:"92%"}}/>
             </div>
             <div className="about-skill">
              <p>PHP</p><hr style={{width:"90%"}}/>
             </div>
             <div className="about-skill">
              <p>Laravel</p><hr style={{width:"90%"}}/>
             </div>
             <div className="about-skill">
              <p>Java Script</p><hr style={{width:"70%"}}/>
             </div>
             <div className="about-skill">
              <p>React Js</p><hr style={{width:"60%"}}/>
             </div>
           </div>
        </div>
      </div>  

    <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>Years of Experience</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>90+</h1>
            <p>Projects Completed</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>Happy Clients </p>
          </div>
          <hr />
        </div>
  </div>
  )
}

export default About