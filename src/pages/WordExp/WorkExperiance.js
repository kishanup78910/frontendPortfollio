import React from 'react'
import './work.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';
import { RiFlutterLine, RiReactjsLine } from 'react-icons/ri';


const WorkExperiance = () => {
  return (
    <>
      <div className='container education' id='work-experience'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Work Experiance</h2>
        <hr />
        <VerticalTimeline>

        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="Feb 2024 - July 2024"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<RiReactjsLine />}
  >
    <h3 className="vertical-timeline-element-title">VideoStori</h3>
    <h4 className="vertical-timeline-element-subtitle">Software Developer</h4>
    <p>
       Responsible for development of new feature in company website using reactjs
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="May-2023 - Jan -2024"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<RiFlutterLine />}
  >
    <h3 className="vertical-timeline-element-title">Tech Inject</h3>
    <h4 className="vertical-timeline-element-subtitle">Flutter Developer</h4>
    <p>
       Responsible for development of app using flutter and dart
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
      
    </>
  )
}

export default WorkExperiance
