import React from 'react'

export default function Lessons(props) {
    const datas=props.lessons;
    const Course = datas.map((data) => {
        console.log(data);
        return (
            <li>
                {(data=="Exercise Files"?<i class="fa fa-file-o exercise-file" aria-hidden="true"></i>:<i class="fa fa-play-circle play-circle" aria-hidden="true"></i>)}
            <a href="#" className='course-content'>{data}</a>
            </li>
        );
}
    )
  return Course;
}
