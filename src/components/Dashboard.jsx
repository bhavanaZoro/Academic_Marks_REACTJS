import React from 'react'
import STYLE from "./dashboard.module.css"
import AddStudent from "./AddStudent"
import StudentAside from './StudentAside'


const Dashboard = () => {
  return (
    <>
     <div className={STYLE.videoContainer}>
        <video width="100%" height="650" muted loop autoPlay className='videos'>
          <source src={process.env.PUBLIC_URL + '/videos/students.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={STYLE.dashboard}> 
        <StudentAside/>

        </div>
        </div>
    
    </>
  )
}

export default Dashboard