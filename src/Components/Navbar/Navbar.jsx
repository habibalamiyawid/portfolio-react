import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className='navbar'>
      {/* <img src={logo} alt="Logo" /> */}
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' href='#home' onClick={() => setMenu("home")}>Home</AnchorLink>
          {menu === "home" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about' onClick={() => setMenu("about")}>About Me</AnchorLink>
          {menu === "about" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services' onClick={() => setMenu("services")}>Services</AnchorLink>
          {menu === "services" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work' onClick={() => setMenu("work")}>Portfolio</AnchorLink>
          {menu === "work" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setMenu("contact")}>Contact</AnchorLink>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>
      </ul>

      <div className="social-links">
          <a href="https://www.linkedin.com/in/habiba-rashid-lamiya-61b597263/" target="_blank" className="social-linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/habibalamiyawid" target="_blank" className="social-github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.facebook.com/share/6roBYBkAPzgVXn7r/?mibextid=LQQJ4d" target="_blank" className="social-facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/habiba_lamiya/" target="_blank" className="social-instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
      </div>

    </div>
  )
}

export default Navbar;
