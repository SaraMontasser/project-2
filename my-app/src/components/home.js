import React from 'react'
import NavBar from './navBar.js';
import Headernote from './header.js';
import Coursenotes from './courseNotes';
export default function home() {
  return (
    <div>
        
      <Headernote />
      <Coursenotes />
    </div>
  )
}
