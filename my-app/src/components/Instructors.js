import React from 'react'

export default function Instructors(props) {
    const instructors=props.courseinfo;
    const instructor = instructors.map((data) => {
        return (
            <>
            <a href="#" className='instructor-name'>{data.name}</a>
            <p className='instructor-job'>{data.job}</p>
            
            <img src={data.img} alt={data.name} className="instructor-photo" width="150" height="150"  />
            <ul className='link-column'>
                <li>
                    <p className='instructor-info'>{data.rating} Instructor Rating</p>
                    </li>
                    <li>
                    <p className='instructor-info'>{data.reviews} Reviews Reviews</p>
                    </li>
                    <li>
                    <p className='instructor-info'>{data.students} Students</p>
                    </li>
                    <li>
                    <p className='instructor-info'>{data.courses} Courses</p>
                    </li>
                </ul>
                <p>{data.description}</p>
               
            </>
        );
}
    )
  return (
    <div className='instructors-box'>
        <p className='instructors'>Instructors</p>
{instructor}
    </div>
  )
}
