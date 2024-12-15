import React from 'react'
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/KishanResume.pdf';

const Home = () => {
  return (
    <>
      <div className='container-fluid home-container' id='home'>
        <div className='container home-content text-3xl'>
          <h2>Hi ✌  I'm a </h2>
          <h1>
            <Typewriter
              options={{
                strings: ['ReactJS developer !', 'Full Stack Developer !', "Flutter developer !", "Coder !","Tech Consultant"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className='home-buttons'>
          <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=916307997224' target='_blank' rel='noopener noreferrer'>Hire Me</a>
            <a href={Resume} download="Kishan_Upadhyay_Resume.pdf" className='btn btn-cv'> My Resume</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
