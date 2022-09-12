import React from 'react'
function ExpandButton({setIsClicked}) {
    return (
      <button onClick={()=>setIsClicked(true)} className="expand-button"> 5 more sections</button>
    );
  }
  
  export default ExpandButton;