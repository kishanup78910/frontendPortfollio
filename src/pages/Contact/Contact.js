import React, { useState } from 'react';
import './contact.css';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c8efc356-f356-411e-86fa-958509899626");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
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
              <form onSubmit={onSubmit}>
                <div className='row px-3 mb-3'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Write Your Name'
                    className='mb-3 form-control'
                    required
                  />
                </div>
                <div className='row px-3 mb-3'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Write Your Email'
                    className='mb-3 form-control'
                    required
                  />
                </div>
                <div className='row px-3 mb-3'>
                  <textarea
                    name='message'
                    placeholder='Write Your Message'
                    className='mb-3 form-control'
                    required
                  />
                </div>
                <div className='row px-3 mb-3'>
                  <button className='btn btn-primary' type='submit'>Send Message</button>
                </div>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
