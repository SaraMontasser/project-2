import datas from './courses/courses.json';
import { Link } from 'react-router-dom'
export default function renderCourse(){
    const Course = datas.map((data) => {
        console.log(data);
        return (
          <div className="course1" key={data.id}>
            <Link to={data.paths}><img src={data.image} alt="python" className="pythonimg" /></Link>
              <Link to={data.paths} className="pythoncourse">{data.title} </Link>
              <p className="authorName">{data.author}</p>
              <p className="ratingsection">{data.rate}</p>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star-half-full notchecked"></i>
              <p className="ratingsection"><span className="visiting">{data.reviewers}</span></p>
              <p className="money">{data.price} <s>{data.oldPrice}</s></p>
          </div>
        );
}
    )
    return Course;
}