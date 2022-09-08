import React from 'react'
import RenderCourse from './course.js';
export default function courseNotes() {
    return (
        <div>
            <div className="coursesblocks" id="courseContainer">
                <div className="word">

                    <p className="notesHead">Expand Your Career opportunities with python</p>
                    <p>
                        Take one of Udemy's range of python courses and learn how to code using this incredibly useful language.
                        Its simple syntax and readability makes Python perfect for Flask, Django, data science, and Machine
                        learning. You'll learn how to build everthing for games to site to apps. Choose from a range of courses
                        that will appeal to...
                    </p>
                </div>
                <a href="#" className="explore">
                    Explore Python
                </a>
                <RenderCourse />
                <button className="circlebutton">
                    <i className="fa fa-chevron-right arrow"></i>
                </button>
            </div>
        </div>
    )
}
