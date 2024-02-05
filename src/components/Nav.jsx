import React from 'react'
import { Link } from 'react-router-dom'
import "./global.css"

const Nav = () => {
  return (
    <>
      <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="https://inspgr.id/app/uploads/2022/10/orange-zach-hannibal-feature.jpg" alt="" />
        {/* <img src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Orange_Logo_Design_2_1024x1024.png?v=1679565593" alt="logo" /> */}</div> 
        <div className="menu_block">
        <Link to={"/"}>Home</Link>
        <Link to={"/register"}>Register</Link>
       <Link to={"/login"}>Login</Link>
      <Link to={"/dashboard"}>Dashboard</Link>


        </div>

      </div>
    </nav>

    </>
  )
}

export default Nav
