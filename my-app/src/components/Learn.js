import React from 'react'

export default function Learn(props) {
    console.log(props.courseinfo);
    const learn=props.courseinfo;
  return (
    <div>
        <div className='learn-box'>
            <p className='learn-headline'>
                What you'll learn
            </p>
        <ul className='learn-column'>
                <li>
                <i class="fa fa-check check" aria-hidden="true"></i>
                <p className='column1'>{learn.learn1}</p>
                    </li>
                    <li>
                    <i class="fa fa-check check" aria-hidden="true"></i>
                    <p className='column1'>{learn.learn3}</p>
                    </li>
                </ul>
                <ul className='learn-column2'>
                <li >
                <i class="fa fa-check check" aria-hidden="true"></i>
                <p className='column1'>{learn.learn2}</p>
                    </li>
                </ul>
        </div>
    </div>
  )
}
