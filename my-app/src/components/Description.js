import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Description(props) {
    const description=props.courseinfo;
    const desc = description.map((data) => {
        return (
            <ReactMarkdown>{data}</ReactMarkdown>
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
