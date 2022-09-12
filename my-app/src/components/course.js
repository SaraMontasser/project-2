import { Link } from 'react-router-dom'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card';
import React from 'react'
export default function renderCourse(props) {
  const datas = props.courseinfo;
  console.log(datas);
  function getlearnelements(learn){
    const rows = [];
        for(var i=0;i<Math.min(learn.length,3);i++){
            rows.push( <li>
            <i class="fa fa-check check" aria-hidden="true"></i>
            <p>{learn[i]}</p>
            </li>);
        }
        return rows;
    }
  const renderCard = (data) => (
    <Popover>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="last-updatedd">Updated {data.lastupdated}</p>
          <p className="card-text">{data.description}</p>
          {getlearnelements(data.learn)}
          <a href="#" className="btn btn-primary">Add to Cart</a>
          <button className='fav-button'><i class="fa fa-heart-o" aria-hidden="true"></i></button>
        </div>
      </div>
    </Popover>

  );
  const Course = datas.map((data) => {
    console.log(data);
    return (<>
      <OverlayTrigger
        placement={(data.id)%5==0?"left":"right"}
        delay={{ show: 100, hide: 700 }}
        key={data.id}
        overlay={renderCard(data)}
      >
        <div className="course1" key={data.id}>
          <Link to={data.paths}><img src={data.image} alt="python" className="pythonimg" /></Link>
          <Link to={data.paths} className="pythoncourse">{data.title} </Link>
          <p className="authorName">{data.author}</p>
          <p className="ratingsection">{data.rating}</p>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star-half-full notchecked"></i>
          <p className="ratingsection"><span className="visiting">{data.reviewers}</span></p>
          <p className="money">{data.price} <s>{data.oldPrice}</s></p>
        </div>
        {/* "id": 1,
            "field":"Development",
            "category":"Programming Language",
            "type":"Python",
            "author": "Avinash Jain, The Codex",
            "image": "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
            "title": "Learn Python: The Complete Python Programming Course",
            "description": "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
            "rating": 4.4,
            "enrollments": "19,511 students",
            "reviewers": "(2,923 ratings)",
            "price": "E£679.99",
            "oldPrice": "E£ 1,599.99",
            "lastupdated": "9/2015", */}
      </OverlayTrigger>

    </>




    );
  }
  )
  return Course;
}