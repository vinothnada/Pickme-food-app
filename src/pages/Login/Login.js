import React from "react";
import { useNavigate } from "react-router-dom";
import './Loginmodule.css';
import { FaGoogle , FaFacebook, FaLinkedin } from "react-icons/fa";

const Login = () => {

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '/hotels'
    navigate(path);
  }

  return (
    <div className="logincontainer">
      <h2></h2>
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social"><FaFacebook/></a>
                <a href="#" className="social"><FaGoogle/></a>
                <a href="#" className="social"><FaLinkedin/></a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button onClick={routeChange}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>Hello, There!</h1>
                <p>Welcome to PickMe Food App</p>
              </div>
            </div>
          </div>
        </div>
            </div>
  )
}

export default Login