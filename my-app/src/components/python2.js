import React from 'react'
import Footer from './footer'
import LoadingSpinner from './loadingSpinner';
import CourseInfo from './CourseInfo'
import Learn from './Learn';
import CourseContent from './CourseContent';
import Requirements from './Requirements';
import Description from './Description';
import Instructors from './Instructors';
import Reviews from './Reviews';
import StudentFeedback from './StudentFeedback';
import CourseNavBar from './CourseNavBar';
export default function python2(props) {
  if(props.data==null){
    return (
      <LoadingSpinner />
    )
  }
  else{
    const courseData=props.data[1];
  return (
    <div>
        <CourseInfo courseinfo={courseData}/>
        <CourseNavBar />
        <Learn courseinfo={courseData.learn}/>
        <CourseContent courseinfo={courseData}/>
        <Requirements courseinfo={courseData.requirements}/>
        <Description courseinfo={courseData.descriptions}/>
        <Instructors courseinfo={courseData.instructors}/>
        <StudentFeedback />
        <Reviews courseinfo={courseData.reviews} />
        
        <Footer />
    </div>
  )
  }
}
