import React from 'react';
import "./global.css"
import STYLE from "./home.module.css"
const Home = () => {
  return (
    <>
    <div>
      <video width="100%" height="650" muted loop autoPlay>
        <source src={process.env.PUBLIC_URL + '/videos/students1 (2).mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      <h1> YOUR COLLEGE NAME</h1>
    </div>
    <div className='footer'>

    </div>
    </>
  );
};

export default Home;
