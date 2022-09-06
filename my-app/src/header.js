import React from 'react'

export default function header() {
  return (
    <div>
         <div className="imgbanner">
    <img src={"https://img-b.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg"} alt="img" className="bannerimg" />
    <div className="notes">
      <p className="notesHead">Learning that gets you</p>
      <p className="notesword">Skills for your present (and your future). Get started with us.</p>
    </div>
  </div>

  <div className="notes2">
      <p className="notesHead">Learning that gets you</p>
      <p className="notesword">Skills for your present (and your future). Get started with us.</p>
    </div>
  <div className="coursesnote">

    <p className="notesHead">A Broad selection of courses </p>
    <p>Choose from 185,000 online video courses with new additions published every month</p>
  </div>
  <div className="coursessection">
        <a href="#" className="courses">python</a>
        <a href="#" className="courses">Excel</a>
        <a href="#" className="courses">Web Development</a>
        <a href="#" className="courses">JavaScript</a>
        <a href="#" className="courses">DataScience</a>
        <a href="#" className="courses">AWS Certification</a>
        <a href="#" className="courses">Drawing</a>
    </div>
    </div>
  )
}
