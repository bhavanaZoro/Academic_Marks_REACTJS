import React, { useState } from 'react'
import "./global.css"
import axiosInstance from '../helper/axiosInstence'

import STYLE from "./login.module.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Login = () => {
  let navigate=useNavigate()
  let [toggle , setToggle] = useState(false)
  let passIcon = ()=>{
      if(toggle)
      {
        setToggle(false)
      }
      else
      {
        setToggle(true)
      }
  }
  let [studentAuth , setStudentAuth]  = useState({
    username : "" , 
    password : ""
  })

  let handleLogin = async (e) => {
    e.preventDefault();
    try {
      let payload = studentAuth;
      let { data } = await axiosInstance.post("/students/login", payload);
      const { token, message } = data;
  
      if (token) {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("username", studentAuth.username);
        toast.success(`${studentAuth.username.username} logged in`)
        navigate('/dashboard');
      } else {
        toast.error(message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Error during login:", err);
      toast.error("Login failed. Please try again.");
    }
  };
  return (
    <>
    <div className={STYLE.videoContainer}>
        <video width="100%" height="650" muted loop autoPlay className='videos'>
          <source src={process.env.PUBLIC_URL + '/videos/student_login.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={STYLE.formholder} >
                        <form className={STYLE.form} action="" onSubmit={handleLogin}>
                                <h2>Login User</h2>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="username">Username </label>
                                        <input type="text" id='username' name='username' onChange={(e)=>{
                                          setStudentAuth({...studentAuth,[e.target.name]:e.target.value})
                                          }} v placeholder='Enter Username' />
                                </div>
                                <div className={STYLE.formitems}>

                                <label htmlFor="password">Password </label>

                                <div className={STYLE.pass}>
                <input type={toggle? "text" : "password"} id='password' name='password' onChange={(e)=>{
                  setStudentAuth({...studentAuth  , [e.target.name] : e.target.value})
                }} placeholder='Enter Password' />
                {toggle ? 
                  <img onClick={passIcon} src="https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png" alt="" />
                  :
                  <img onClick={passIcon} src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699007-icon-21-eye-hidden-512.png" alt="" />
                }
                </div>
                                </div>
                                <button className={STYLE.login}>Login</button>
                        </form>
                </div>
      </div>
    
    </>
  )
}

export default Login
