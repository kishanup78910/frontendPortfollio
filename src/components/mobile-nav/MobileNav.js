import React, { useState } from 'react';
import './mobilenav.css';
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-scroll';
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from 'react-icons/fc';

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className='mobile-nav'>
        <div className='mobile-nav-header'>
            <IoMdMenu className='mobile-nav-icon' size={30} onClick={toggleMenu} />
            <span className='mobile-nav-titile'>My Portfolio App</span>
        </div>
        {menuOpen && (
        <div className='mobile-nav-menu'>
          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={toggleMenu}>
                  <FcHome />
                  Home
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={toggleMenu}>
                  <FcAbout />
                  About
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='work-experience' spy={true} smooth={true} offset={-100} duration={100} onClick={toggleMenu}>
                  <FcPortraitMode />
                  Work Experience
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='tech-stack' spy={true} smooth={true} offset={-100} duration={100} onClick={toggleMenu}>
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='education-details' spy={true} smooth={true} offset={-100} duration={100} onClick={toggleMenu}>
                  <FcReadingEbook />
                  Education Details
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='projects' spy={true} smooth={true} offset={-100} duration={100} onClick={toggleMenu}>
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={toggleMenu}>
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        )}
    </div>
  );
}

export default MobileNav;
