import React from 'react'

export default function Lessons(props) {
    const datas=props.lessons;
    const Course = datas.map((data) => {
        console.log(data);
        return (
            <li>
            <a href="#" className='course-content'>{data}</a>
            </li>
        );
}
    )
  return Course;
}
