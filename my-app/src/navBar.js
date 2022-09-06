import React from 'react'
import LogoImg from './img/logo-udemy.svg'
export default function navBar() {
  return (
    <>
    <div className="sidemenu">
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
  <div className="navBar">

    <div className="leftside">

      <img src={LogoImg} alt="udemy logo" className="logo" />
      <a href="#" className="categories">Categories</a>
    </div>
    <div className="middle">

      <form className="searchbar">

        <i className="fa fa-search searchicon"></i>

        <input type="search" className="testbox" id="searchfield" placeholder="Search for anything" />
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
        <i className="fa fa-language"></i>

      </button>


    </div>
  </div>
  </>
  )
}
