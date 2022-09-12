import React from 'react'

export default function Learn(props) {
    const learn=props.courseinfo;
   function getlearnelements(){
    const rows = [];
        for(var i=0;i<learn.length;i++){
            rows.push( <li>
            <i class="fa fa-check check" aria-hidden="true"></i>
            <p className='column1'>{learn[i]}</p>
            </li>);
        }
        return rows;
    }
    
    
  return (
    <div>
        <div className='learn-box' id="learn-section">
            <p className='learn-headline'>
                What you'll learn
            </p>
        <ul className='learn-column'>
                {getlearnelements()}
                </ul>
        </div>
    </div>
  )
}
