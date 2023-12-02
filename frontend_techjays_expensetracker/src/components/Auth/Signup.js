

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Signup.css";




function Signup() {
  const [ email, setEmail] = useState("");
  const [user_name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const postData = () => {
    // we need to valclassNameate the email using ajax javascript
    if (
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        email
      )
    ) {
      alert("complete the inout fileds as per the valid path");
      return;
    }
    fetch("	http://127.0.0.1:8000/register/", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        user_name,
        password,
        
      }),
    })
      .then((res) =>res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } 
        handleClick()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick=()=>{
   localStorage.clear()
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
            <h4>Sign up</h4>
            <h6>to continue to MoneyTracker</h6>
          </div>

          <input
            className="input1"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            className="input1"
            type="text"
            placeholder="user_name"
            value={user_name}
            onChange={(e) => {
              setName(e.target.value);
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
            <button class="button-signup" onClick={() => postData()}>
              Sign up
            </button>
            </div>
        {/* <br></br> */}
          <h3>
          
            <Link 
              to="/login"
              onClick={handleClick}
              style={{ fontSize: "15px", 
               textDecoration: "none",
               display: "inline-block",
               padding: "11px",
              //  margin:"65",
               lineHeight: "1.2",
               transition: "transform 0.2s ease" ,
               verticalAlign: "middle",}}
            // >
             className="link-hover">
              Already have account? Login
            </Link>

          </h3>
          {/* </div> */}
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Signup;
