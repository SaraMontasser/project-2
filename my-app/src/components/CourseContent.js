import React,{ useState } from 'react'
import Content from './Content';
import Lessons from './Lessons';
import Accordion from 'react-bootstrap/Accordion';
import ExpandButton from './ExpandButton';

export default function CourseContent(props) {
    const courseContent=props.courseinfo;
    const [isClicked, setIsClicked] = useState(false);
  return (
    <div className='content-box' id="content-section">
      <p className='Course-content-title'>Course content</p>
      <p className='Course-content-info'>15 sections • 146 lectures • 14h 42m total length</p>
        <Accordion defaultActiveKey="One">
      <Content content={courseContent.notExpandedlectures}/>
      {!isClicked ?
        <ExpandButton setIsClicked={setIsClicked} />:<Content content={courseContent.Expandedlectures}/>
        }
    </Accordion>
    </div>
  )
}
