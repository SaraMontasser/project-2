import React from 'react'

export default function Learn(props) {
    const learn=props.courseinfo;
   function oddColumn(){
    const rows = [];
        for(var i=0;i<learn.length;i+=2){
            rows.push( <li>
            <i class="fa fa-check check" aria-hidden="true"></i>
            <p className='column1'>{learn[i]}</p>
            </li>);
        }
        return rows;
    }
    function evenColumn(){
        const rows = [];
        for(var i=1;i<learn.length;i+=2){
            rows.push(<li>
            <i class="fa fa-check check" aria-hidden="true"></i>
            <p className='column1'>{learn[i]}</p>
            </li>);
        }
        return rows;
    }
    
  return (
    <div>
        <div className='learn-box'>
            <p className='learn-headline'>
                What you'll learn
            </p>
        <ul className='learn-column'>
                {oddColumn()}
                </ul>
                <ul className='learn-column2'>
                {evenColumn()}
                </ul>
        </div>
    </div>
  )
}
