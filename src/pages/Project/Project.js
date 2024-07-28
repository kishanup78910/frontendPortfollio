import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <>
      <div className='container project' id='projects'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Top recent project</h2>
        <hr />
        <p className='mb-3 text-center'>👉 Here are my top recent projects with live links and source code</p>

        <div className='row mt-5 mb-5' id='ads'>
          <div className='col-md-4 '>
            <div className='card rounded'>
              <div className='card-image'>
                <span className='card-notify-badge'>Full Stack</span>
                <img src='https://lh5.googleusercontent.com/proxy/xdD5aUVWHR9JaTofdfUKpMYp-kg1Nda0yPhV2k01HYohDRKonXFa8vJ_zHUU1uhbCw174LyFT1fJ_UdZepDIrYsrDHO7BaI1UzaPRZoLcanqjI8uvEDJUykYmqotmWaPTw' alt='project-1' />
              </div>
              <div className='card-image-overlay m-auto mt-3'>
                <span className='card-detail-badge'>Node</span>
                <span className='card-detail-badge'>Express</span>
                <span className='card-detail-badge'>ReactJS</span>
                <span className='card-detail-badge'>MongoDB</span>
              </div>
              <div className='card-body'>
                <div className='ad-title'>
                  <h5 className='text-uppercase text-center'>Tender APP</h5>
                </div>
                <div className='links'>
                  <a href='https://kishanbidapp.netlify.app/' target='_blank' className='view'>View Project</a>
                  <a href='https://github.com/kishanup78910/tenderApplicationAssignemnt' target='_blank' className='view mx-auto'>View Source code</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card rounded'>
              <div className='card-image'>
                <span className='card-notify-badge'>Mobile App</span>
                <img src='https://media.licdn.com/dms/image/D4D12AQHolEDBl9zVpw/article-cover_image-shrink_600_2000/0/1680491082579?e=2147483647&v=beta&t=42YPQA4r7PjInIjqlfO33V-3CMJaYUAPRQibXsddeGM' alt='project-1' />
              </div>
              <div className='card-image-overlay m-auto mt-3'>
                <span className='card-detail-badge'>Dart</span>
                <span className='card-detail-badge'>Flutter</span>
                
              </div>
              <div className='card-body'>
                <div className='ad-title'>
                  <h5 className='text-uppercase text-center'>Duck Store App</h5>
                </div>
                <div className='links'>
                  <a href='https://play.google.com/store/apps/details?id=com.ecom.ecom' target='_blank' className='view'>View Project</a>
                  <a href='https://github.com/kishanup78910/ecom' target='_blank' className='view mx-auto'>View Source code</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card rounded'>
              <div className='card-image'>
                <span className='card-notify-badge'>Full Stack</span>
                <img src='https://ik.imagekit.io/ably/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png?tr=w-1728,q-50' alt='project-1' />
              </div>
              <div className='card-image-overlay m-auto mt-3'>
                <span className='card-detail-badge'>Node</span>
                <span className='card-detail-badge'>Express</span>
                <span className='card-detail-badge'>ReactJS</span>
                <span className='card-detail-badge'>MongoDB</span>
              </div>
              <div className='card-body'>
                <div className='ad-title'>
                  <h5 className='text-uppercase text-center'>Chat Application</h5>
                </div>
                <div className='links'>
                  <a href='#' target='_blank' className='view'>View Project</a>
                  <a href='https://github.com/kishanup78910/MernChatApplicationComplete' target='_blank' className='view mx-auto'>View Source code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
