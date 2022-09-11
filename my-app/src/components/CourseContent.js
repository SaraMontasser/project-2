import React from 'react'
import Content from './Content';
import Lessons from './Lessons';
import Accordion from 'react-bootstrap/Accordion';

export default function CourseContent(props) {
    const courseContent=props.courseinfo;
  return (
    <div className='content-box'>
      <p className='Course-content-title'>Course content</p>
      <p className='Course-content-info'>15 sections • 146 lectures • 14h 42m total length</p>
        <Accordion defaultActiveKey="One">
      <Content content={courseContent}/>
    </Accordion>
    </div>
  )
}
