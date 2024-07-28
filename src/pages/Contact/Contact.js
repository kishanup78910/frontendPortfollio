import React from 'react';
import './contact.css';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
      <div className='contact ' id='contact'>
        <div className='card card0 border-0'>
          <div className='row no-gutters'>
            <div className='col-md-6'>
              <div className='card1'>
                <img
                  src='https://t3.ftcdn.net/jpg/00/33/66/26/360_F_33662697_tk3fshKBh7tKthHIFcbR9JDQeG7oQaI9.jpg'
                  alt='Contact'
                  className='img-fluid'
                />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='card2 d-flex flex-column border-0 px-4 py-5'>
                <h6 className='mb-2'>Connect With Me On</h6>
                <div className='mb-3'>
                  <a href='https://www.linkedin.com/in/kishan-upadhyay-60a218193/' target='_blank' rel='noopener noreferrer'>
                    <BsLinkedin color='blue' size={30} className='me-2' />
                  </a>
                  <a href='https://github.com/kishanup78910' target='_blank' rel='noopener noreferrer'>
                    <BsGithub color='black' size={30} className='me-2' />
                  </a>
                  <a href='https://www.facebook.com/kishan.upadhyay.9404362/' target='_blank' rel='noopener noreferrer'>
                    <BsFacebook color='blue' size={30} className='me-2' />
                  </a>
                </div>
                <div className='row px-3 mb-4'>
                  <div className='line' />
                  <small className='or text-center'>OR</small>
                  <div className='line' />
                </div>
                <div className='row px-3 mb-3'>
                  <input type='text' name='name' placeholder='Write Your Name' className='mb-3 form-control' />
                </div>
                <div className='row px-3 mb-3'>
                  <input type='Email' name='Email' placeholder='Write Your Email' className='mb-3 form-control' />
                </div>
                <div className='row px-3 mb-3'>
                  <textarea type='text' placeholder='Write Your Message' className='mb-3 form-control' />
                </div>
                <div className='row px-3 mb-3'>
                  <button className='btn btn-primary' type='submit'>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
