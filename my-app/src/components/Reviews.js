import React from 'react'

export default function Reviews(props) {
    const reviews=props.courseinfo;
    const printFullStar = starNumber => {
        let content = [];
        for (let i = 0; i < starNumber; i++) {
          content.push(<i className="fa fa-star checked review-star"></i>);
        }
        return content;
      };
      const printHalfStar = starNumber => {
        let content = [];
        for (let i = 0; i < starNumber; i++) {
          content.push(<i className="fa fa-star-half-full notchecked review-star"></i>);
        }
        return content;
      };
      const printNoStar = starNumber => {
        let content = [];
        for (let i = 0; i < starNumber; i++) {
          content.push(<i className="fa fa-star-o notchecked review-star" aria-hidden="true"></i>);
        }
        return content;
      };
    const rev = reviews.map((data) => {
        return (
            <div className='review-box'>
            {/* <img src={data.img} alt={data.name} className="review-photo" width="150" height="150"  /> */}
            {/* <div className='review-avatar'>{data.initials}</div> */}
            <ul className='review-column'>
                <li>
                    <p className='review-name'>{data.name}</p>
                </li>
                    <li>
                    {printFullStar(data.fullrating)}
                    {printHalfStar(data.halfrating)}
                    {printNoStar(data.norating)}
              
                    <p className='review-time'>{data.timeago}</p>
                    </li>
                    <li>
                    <p className='review-comment'>{data.review}</p>
                    </li>
                    <li>
                    <p className='review-question'>Was this review helpful?</p>
                    </li>
                </ul>
                <div className='reactions'>
               <button className='react-buttons' ><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></button>
               <button className='react-buttons' ><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></button>
               <a href="#" className="report">Report</a>
               </div>
            </div>
        );
}
    )
  return (
    <div>
        <p className='reviews'>Reviews</p>
        <form className="review-searchbar">


            <input type="search" className="search-review" placeholder="Search reviews"/>
            <button type="submit" className='submit-button'><i className="fa fa-search search-review-icon"></i></button>
            
          <select name="All Ratings" className='filter-list'>
          <option value="All ratings">All ratings</option>
      <option value="Five stars">Five stars</option>
      <option value="Four stars">Four stars</option>
      <option value="Three stars">Three stars</option>
      <option value="Two stars">Two stars</option>
      <option value="One stars">One stars</option>
  </select>
          </form>
    {rev}
    <button className='more-reviews'>Show more reviews</button>
    </div>

  )
}
