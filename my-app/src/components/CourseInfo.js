import React from 'react'

export default function CourseInfo(props) {
    const data=props.courseinfo;
  return (
    <div>
        <div className='course-info'>
            <p className='course-type'>
                {data.field}
                <i class="fa fa-angle-right angle-right" aria-hidden="true"></i>
                {data.category}
                <i class="fa fa-angle-right angle-right" aria-hidden="true"></i>
                {data.type}
            </p>
          <p className='course-title'>{data.title}</p>
          <p className='course-description'>{data.description}</p>
          <p className="ratingsection">{data.rating}</p>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star-half-full notchecked"></i>
              <a href="#" className="course-reviewers">{data.reviewers}</a>
              <p className="course-enrollment">{data.enrollments}</p>
              <p className="course-creation">created by <a href="#">{data.author}</a></p>
              <i class="fa fa-exclamation-circle exclamation-circle" aria-hidden="true"></i>
              <p className='last-updated'>Last updated {data.lastupdated}</p>
              <i class="fa fa-globe global"></i>
              <p className='course-language'>English</p>
              <i class="fa fa-cc closed-caption" aria-hidden="true"></i>
              <p className='course-language'>English</p>
        </div>
    </div>
  )
}


// "id": 2,
//             "author": "Jose Portilla",
//             "Image": "https://img-c.udemycdn.com/course/750x422/396876_cc92_7.jpg",
//             "title": "Learning Python for Data Analysis and Visualization",
//             "description": "Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!",
//             "img": "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
//             "rating": 4.4,
//             "enrollments": 191470,
//             "reviewers": "(2,923)",
//             "price": "E£679.99",
//             "oldPrice": "E£ 1,599.99",
//             "lastupdated": "9/2019",
//             "instructors": [