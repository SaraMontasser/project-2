import React from 'react'

export default function Requirements(props) {
    const requirements=props.courseinfo;
    const req = requirements.map((data) => {
        return (
            <li className='requirement-column'>
            <p>{data}</p>
            </li>
        );
}
    )
  return (
    <div className='requirements-box'>
        <p className='requirements'>Requirements</p> 
        <ul >
                {req}
        </ul>
    </div>
  )
}
