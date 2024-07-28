import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className='about' id='about'>
        <div className='row'>
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'><img src='pro.jpg'></img></div>
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
            <h1>About Me</h1>
            <p>
            I am a passionate and dedicated software developer with a strong foundation in problem-solving and one year of experience in frontend development. With the ability to join a team immediately, I am confident in my ability to contribute effectively.
I possess a solid understanding of HTML, CSS, JavaScript, and ReactJS, along with beginner-level knowledge of backend development using the MERN stack and Flutter. I am eager to bring my technical skills and enthusiasm to innovative projects.
Thank you for visiting my portfolio. Please take a moment to review my resume, attached for your convenience.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default About
