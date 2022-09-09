import React from 'react'
import Footer from './footer'
import LoadingSpinner from './loadingSpinner';
import CourseInfo from './CourseInfo'
import Learn from './Learn';
export default function python1(props) {
  if(props.data==null){
    return (
      <LoadingSpinner />
    )
  }
  else{
    const courseData=props.data[0];
  return (
    <div>
        <CourseInfo courseinfo={courseData}/>
        <Learn courseinfo={courseData.learn[0]}/>
        <Footer />
    </div>
  )
  }
}
