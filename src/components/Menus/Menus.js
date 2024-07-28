import React from 'react';
import './Mens.css';
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

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className='navbar-profile-pic'>
            <img src='pro.jpg' alt='profile' />
          </div>
          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='home' spy={true} offset={-100} duration={100}>
                  <FcHome />
                  Home
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='about' spy={true} offset={-100} duration={100}>
                  <FcAbout />
                  About
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='work-experience' spy={true} offset={-100} duration={100}>
                  <FcPortraitMode />
                  Work Experience
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='tech-stack' spy={true} offset={-100} duration={100}>
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='education-details' spy={true} offset={-100} duration={100}>
                  <FcReadingEbook />
                  Education Details
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='projects' spy={true} offset={-100} duration={100}>
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='contact' spy={true} offset={-100} duration={100}>
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='nav-items'>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='home' spy={true} offset={-100} duration={100}>
                <FcHome size={30} title='Home' />
              </Link>
            </div>
          </div>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='about' spy={true} offset={-100} duration={100}>
                <FcAbout size={30} title='About' />
              </Link>
            </div>
          </div>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='work-experience' spy={true} offset={-100} duration={100}>
                <FcPortraitMode size={30} title='Work Experience' />
              </Link>
            </div>
          </div>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='tech-stack' spy={true} offset={-100} duration={100}>
                <FcBiotech size={30} title='Tech Stack' />
              </Link>
            </div>
          </div>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='education-details' spy={true} offset={-100} duration={100}>
                <FcReadingEbook size={30} title='Education Details' />
              </Link>
            </div>
          </div>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='projects' spy={true} offset={-100} duration={100}>
                <FcVideoProjector size={30} title='Projects' />
              </Link>
            </div>
          </div>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='contact' spy={true} offset={-100} duration={100}>
                <FcBusinessContact size={30} title='Contact' />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
