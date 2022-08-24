import datas from './courses/courses.json';
export default function renderCourse(){
    const Course = datas.map((data) => {
        console.log(data);
        return (
          <div className="course1" key={data.id}>
            <img src={data.image} alt="python" className="pythonimg" />
              <a href="#" className="pythoncourse">{data.title} </a>
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