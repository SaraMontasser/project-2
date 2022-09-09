import React from 'react'
import NavBar from './navBar.js';
import Headernote from './header.js';
import Coursenotes from './courseNotes';
export default function home(props) {
  return (
    <div>
        
      <Headernote />
      <Coursenotes CoursesData={props.data}/>
    </div>
  )
}
