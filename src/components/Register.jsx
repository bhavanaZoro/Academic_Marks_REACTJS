import React, { useState } from 'react';
import STYLE from "./register.module.css";
import axiosInstance from '../helper/axiosInstence';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  let navigate=useNavigate()
  let [studentData, setstudentData] = useState({
          username: "",
          password: ""
  })
  let data = (e) => {
          setstudentData({ ...studentData, [e.target.name]: e.target.value })
  }
  let handleRegister = async(e) => {
          e.preventDefault();
          if (!studentData.username || !studentData.password) {
            alert("Please enter both username and password.");
            return; // Stop function execution if fields are empty
          }
         try{
          let payload = studentData ; 
          let data = await axiosInstance.post("/students", payload);
          toast.success(data.message);
          navigate('/login');
         }
         catch(err)
         {
          alert("please enter")
         }       
  }

  return (
    <>
      <div className={STYLE.videoContainer}>
        <video width="100%" height="650" muted loop autoPlay className='videos'>
          <source src={process.env.PUBLIC_URL + '/videos/student.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={STYLE.formholder}>
          <form className={STYLE.form} action="" onSubmit={handleRegister}>
            {/* ... your form inputs */}
            <h2>Register User</h2>
            <div className={STYLE.formitems}>
              <label htmlFor="username">Username </label>
              <input type="text" id='username' name='username' onChange={data} placeholder='Enter Username' />
            </div>
            <div className={STYLE.formitems}>
              <label htmlFor="password">Password </label>
              <input type="password" id='password' name='password' onChange={data} placeholder='Enter Password' />
            </div>
            <button className={STYLE.register}>Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
