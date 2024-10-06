import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
               {/* <img src={footer_logo} alt="" /> */}
               <p>Hello,I'm Habiba Rashid Lamiya,a full stack developer in Bangladesh</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon}alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                @2024 Habiba Rashid Lamiya.All Rights Reserved
            </p>
            <div className="footer-bottom-right">
                {/* <p>Term Of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p> */}
                <div className="social-links-footer">
                    <a href="https://www.linkedin.com/in/habiba-rashid-lamiya-61b597263/" target="_blank" className="social-linkedin-footer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/habibalamiyawid" target="_blank" className="social-github-footer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.facebook.com/share/6roBYBkAPzgVXn7r/?mibextid=LQQJ4d" target="_blank" className="social-facebook-footer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/habiba_lamiya/" target="_blank" className="social-instagram-footer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
