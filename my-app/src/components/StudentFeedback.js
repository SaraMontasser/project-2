import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function StudentFeedback() {
  return (
    <div className='feedback-box'>
        <p className='feedback'>Student feedback</p>
        <ul className='feedback-rating'>
            <li>
            <p className='feedback-rate'>4.4</p>
            </li>
            <li>
            <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
            <p className='course-rating'>Course rating</p>
            </li>

        </ul>
        <ul>
            <li>
        <ProgressBar now={43} />
        <div className='progressBar-stars'>
        <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <a href="#"> 43%</a>
        </div>
        </li>
        <li>
        <ProgressBar now={37} />
        <div className='progressBar-stars'>
        <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star-o notchecked review-star" aria-hidden="true"></i>
              <a href="#"> 37%</a>
        </div>
        </li>
        <li>
        <ProgressBar now={15} />
        <div className='progressBar-stars'>
        <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star-o notchecked review-star" aria-hidden="true"></i>
              <i className="fa fa-star-o notchecked review-star" aria-hidden="true"></i>
              <a href="#"> 15%</a>
        </div>
        </li>
        <li>
        <ProgressBar now={3} />
        <div className='progressBar-stars'>
        <i className="fa fa-star checked"></i>
        <i className="fa fa-star checked"></i>
              <i className="fa fa-star-o notchecked review-star" aria-hidden="true"></i>
              <i className="fa fa-star-o notchecked review-star" aria-hidden="true"></i>
              <i className="fa fa-star-o notchecked review-star" aria-hidden="true"></i>
              <a href="#"> 3%</a>
        </div>
        </li>
        <li>
        <ProgressBar now={2} />
        <div className='progressBar-stars'>
        <i className="fa fa-star checked"></i>
              <i className="fa fa-star-o notchecked review-star" aria-hidden="true"></i>
              <i className="fa fa-star-o notchecked review-star" aria-hidden="true"></i>
              <i className="fa fa-star-o notchecked review-star" aria-hidden="true"></i>
              <i className="fa fa-star-o notchecked review-star" aria-hidden="true"></i>
              <a href="#"> 2%</a>
        </div>
        </li>
        </ul>
    </div>
  )
}
