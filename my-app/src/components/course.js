import datas from './courses/courses.json';
import { Link } from 'react-router-dom'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card';
export default function renderCourse(){
  const renderCard = () => (
    <Popover>
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Learn Python: The Complete Python Programming Course</h5>
    <p class="card-text">Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!</p>
    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>
    </Popover>
    
  );
    const Course = datas.map((data) => {
        console.log(data);
        return (<>
          {/* <OverlayTrigger
      placement="right"
      delay={{ show: 1000, hide: 1000 }}  
      key={data.id}
      overlay={renderCard}
    > */}
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
    {/* </OverlayTrigger> */}

    </>



          
        );
}
    )
    return Course;
}