import React from 'react';
import './TechStack.css'
import { TechstackList } from '../../utils/TechStackList';

const TechStack = () => {
  return (
    <>
      <div className='container techStack' id='tech-stack'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technology Stack</h2>
        <hr/>
        <p className='mb-3 text-center'>👉 including programming Languages, frameworks, databases ,  frontend, backend tools and APIs</p>

       <div className='row'>
       {TechstackList.map(tech=>(
        <div key={tech._id} className='col-md-3'>
            <div className='card m-2'>
                <div className='card-content'>
                    <div className='card-body'>
                        <div className='media d-flex justify-content-center'>
                            <div className='align-self-center'>
                            <tech.icon className='tech-icon'/>
                            </div>
                            <div className='media-body'>
                                <h5>{tech.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      ))}
       </div>
      </div>
     
    </>
  )
}

export default TechStack
