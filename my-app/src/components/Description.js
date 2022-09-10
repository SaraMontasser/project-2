import React from 'react'

export default function Description(props) {
    const description=props.courseinfo;
    const desc = description.map((data) => {
        return (
            <p>{data}</p>
        );
}
    )
  return (
    <div className='description-box'>
    <p className='description'>Description</p>
    {desc}
    </div>
  )
}
