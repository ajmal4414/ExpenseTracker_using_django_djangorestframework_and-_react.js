

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PasswordReset from "./PasswordReset";

// import M from "materialize-css";
import "./Login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const PostData = () => {
    // we need to valclassNameate the email using ajax javascript
    if (
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        email
      )
    ) {
      alert("invalid email");
    }
    fetch("	http://127.0.0.1:8000/account/login/", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.refresh && data.access) {
          const Access = data.access;
          const Refresh = data.refresh;
          const user=data.user_name
          const email=data.email
          localStorage.setItem("refreshToken", Refresh);
          localStorage.setItem("accessToken", Access);
          localStorage.setItem("user",user);
          localStorage.setItem("email",email)
            const flash=true;
          localStorage.setItem('flash',flash)
          alert("Welcome");
          navigate("/");
          window.location.reload();
        } else {
          alert(data.detail);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = () => {
    const ToggleToken = true;
    localStorage.setItem("ToggleToken", ToggleToken);
   
   
    window.location.reload(); 
    
  };
  const handleClicked=()=>{
    const we=true;
localStorage.setItem("WE",we) 
window.location.reload(); 
  }
  return (
    <div class="container">
      <div className="secondContainer">
        <div class="wrapper">
          <div className="HearderContainer">
            {/* <img src={GoogleIcon} /> */}
          </div>
          <div className="hedding1">
            <h4>Sign in</h4>
            <h6>in to MoneyTracker</h6>
          </div>
          <input
            className="input1"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="input1"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="buttonContainer">
            <button onClick={() => PostData()}>Sign in</button>
          </div>
          <h2>
             <Link
              to="/signup"
              onClick={handleClick} 
          
                  style={{
            fontSize: "20px",
            textDecoration: "none",
            color: "#3498db", // Blue color
            fontWeight: 600,
            transition: "color 0.3s ease", // Smooth color transition on hover
          }}
        > 
          Create new account
        
        {/* Already have account?? SignUp */}

            </Link>
         </h2>
          <h5>
            <Link
              onClick={handleClicked} // Add a route for forgotten password
              style={{ fontSize: "20px", textDecoration: "none",  color: "#3498db", fontWeight: 600,
            transition: "color 0.3s ease", }}
            >
              Forgotten password?

            </Link>
          </h5> 




