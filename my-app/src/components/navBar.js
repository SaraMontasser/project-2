import React, { useRef,useEffect } from 'react'
import LogoImg from './img/logo-udemy.svg'
import { Link, useSearchParams,useNavigate } from 'react-router-dom'
export default function NavBar() {
  //const navigate=useNavigate();
  const [searchParms, setSearchParms] = useSearchParams();
  const searchWord = useRef();
  function removeElementsBysearch(searchWordNeeded){
    let elements = document.getElementsByClassName("course1");
    var courses=document.getElementsByClassName('pythoncourse');
    let cnt=0;
    if(searchWordNeeded==null){
      for(var i=0;i<elements.length;i++){
          elements[i].style.display='inline-Block';
          cnt++;
      }
      
    }
    else{
    searchWordNeeded=searchWordNeeded.toLowerCase();
    for(var i=0;i<elements.length;i++){
      var title=courses[i].innerHTML.toLowerCase();
      if (title.indexOf(searchWordNeeded) == -1){
        elements[i].style.display='none';
      }
      else{
        elements[i].style.display='inline-Block';
        cnt++;
      }
    }
  }
  if(cnt<5){
    document.querySelector(".circlebutton").style.display='none';
    document.querySelector(".arrow").style.display='none';
  }
  else{
    document.querySelector(".circlebutton").style.display='inline-Block';
    document.querySelector(".arrow").style.display='inline-Block';
  }
    
}
  function setSearchQuery() {
    if(searchWord.current.value=="")
      setSearchParms({});
    else 
      setSearchParms({getCourse: searchWord.current.value});
  }
  function search(e) {
    if (e.key == 'Enter') {
      e.preventDefault();
      //navigate('/');
      removeElementsBysearch(searchParms.get('getCourse'));
    }
  }
  return (
    <>
      <div className="sidemenu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="navBar">

        <div className="leftside">
          <Link to='/'>
            <img src={LogoImg} alt="udemy logo" className="logo" />
          </Link>
          <a href="#" className="categories">Categories</a>
        </div>
        <div className="middle">

          <form className="searchbar">

            <i className="fa fa-search searchicon"></i>

            <input type="search" className="testbox" id="searchfield" placeholder="Search for anything" ref={searchWord} onChange={setSearchQuery} onKeyDown={search} />
          </form>
        </div>
        <div className="rightside">

          <a href="#" className="udemyBussiness">Udemy Bussiness</a>
          <a href="#" className="teachOnUdemy">Teach on Udemy</a>
          <button className="cart">

            <i className="fa fa-shopping-cart carticon"></i>
          </button>

          <button className="login">
            Log in
          </button>
          <button className="signup">
            Sign up
          </button>


          <button className="langbutton">
          <i class="fa fa-globe"></i>

          </button>


        </div>
      </div>
    </>
  )
}
