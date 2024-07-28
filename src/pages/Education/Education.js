import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Education.css'
import { MdSchool } from 'react-icons/md';

const Education = () => {
  return (
    <>
      <div className='container education' id='education-details'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education Details</h2>
        <hr />
        <VerticalTimeline>

        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2019 - 2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">B.TECH</h3>
    <h4 className="vertical-timeline-element-subtitle">Computer Science And Engineering</h4>
    <p>
      Lovely Professional University , Jalandhar
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2016 - 2018"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Class 12</h3>
    <h4 className="vertical-timeline-element-subtitle">PCM</h4>
    <p>
      Swami Harsewanand Public School , Varanasi
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
    </>
  )
}

export default Education
