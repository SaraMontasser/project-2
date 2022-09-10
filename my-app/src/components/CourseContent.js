import React from 'react'
import Content from './Content';
import Lessons from './Lessons';
import Accordion from 'react-bootstrap/Accordion';

export default function CourseContent(props) {
    const courseContent=props.courseinfo;
  return (
    <div className='content-box'>
        <Accordion defaultActiveKey="One">
      <Content content={courseContent}/>
    </Accordion>
    </div>
  )
}