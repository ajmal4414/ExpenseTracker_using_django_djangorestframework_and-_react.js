// import React, { useState } from 'react'
// import './Login.css'
// import axios from 'axios';
// function Login() {

//     const[email,setEmail] =useState('');
//     const[password,setPassword]= useState('');


//     const handleEmailChange =(e) =>{
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange =(e) =>{
//         setPassword(e.target.value);
//     };

//     console.log({email, password});


//     const handleLogin = async(e) =>{
//         e.preventDefault();
//        console.log("Logging in with email :",email,'and password:', password);
//        try {
//             const{data} = await axios.post("http://127.0.0.1:8000/api/token/",{
//                 email,
//                 password
//             })
//             console.log(data);
//        } catch (error) {
//         console.log(error)

//        }
//     };
    
//   return (
//     <div class="mx-auto max-w-md p-4 border border-gray-300 rounded bg-gray-200 shadow-md">
//     <h1 class="text-center text-gray-700 mb-4">Sign-in</h1>
//     {/* <div className="email-container"> */}
//     <form onSubmit={handleLogin} className='login-form'>
//     <div>
//     <label>Email</label>
//       <input className='' type="text"  class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" placeholder="Email" value={email} onChange={handleEmailChange} />
//     </div>
//      <div > 
//     <label>Password</label>
//       <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" placeholder="Password" value={password} onChange={handlePasswordChange} />
//     </div>
//      <button class="bg-blue-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-blue-700" onClick={handleLogin}>Login</button>
//       </form>
//     </div>
  
// );
// }


// export default Login


// orginal

// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log("Logging in with email:", email, 'and password:', password);
//     try {
//       const { data } = await axios.post("http://127.0.0.1:8000/api/token/", {
//         email,
//         password
//       });
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 border border-gray-300 rounded bg-gray-200 shadow-md">
//       <h1 className="text-center text-gray-700 mb-4">Sign-in</h1>
//       <form onSubmit={handleLogin} className='login-form'>
//         <div className="mb-4">
//           <label>Email</label>
//           <input
//             type="text"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label>Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button className="bg-blue-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-blue-700" onClick={handleLogin}>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;



// original using

// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("http://127.0.0.1:8000/account/login/", {
//         email,
//         password
//       });
// // for add jwt on cookie
//       document.cookie = `jwtToken=${data.token}; secure; HttpOnly`;

//       console.log(data);
//       setErrorMessage(''); // Clear any previous error message
//       setSuccessMessage('Login Successful');
//     } catch (error) {
//       console.log(error);
//       setSuccessMessage(''); // Clear any previous success message
  
//       if (error.response && error.response.status === 401) {
//         setErrorMessage('Login Failed: Invalid email or password. Please try again.');
//       } else {
//         setErrorMessage('Login Failed. An error occurred. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 border border-gray-300 rounded bg-gray-200 shadow-md">
//       <h1 className="text-center text-gray-700 mb-4">Sign-in</h1>
//       {successMessage && <div className="text-green-500 text-center mb-2">{successMessage}</div>}
//       {errorMessage && <div className="text-red-500 text-center mb-2">{errorMessage}</div>}
//       <form onSubmit={handleLogin} className='login-form'>
//         <div className="mb-4">
//           <label>Email</label>
//           <input
//             type="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
//             name='email'
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label>Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
//             name='password'
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button className="bg-blue-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-blue-700" onClick={handleLogin}>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;






// import React, { useState } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setUserDetails } from '../../components/Store/expenseReducer';

// function Login() {
//   const dispatch = useDispatch();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("http://127.0.0.1:8000/account/login/", {
//         email,
//         password
//       });

//       // Assuming your API response structure has access and refresh tokens
//       const access_token = data.access;
//       const refresh_token = data.refresh;

//       // Store tokens in local storage
//       localStorage.setItem("accessToken", access_token);
//       localStorage.setItem("refreshToken", refresh_token);

//       // Dispatch the tokens to the Redux store if needed
//       dispatch(setUserDetails({ access: access_token, refresh: refresh_token }));

//       console.log(data);
//       setErrorMessage('');
//       setSuccessMessage('Login Successful');
//     } catch (error) {
//       console.log(error);
//       setSuccessMessage('');

//       if (error.response && error.response.status === 401) {
//         setErrorMessage('Login Failed: Invalid email or password. Please try again.');
//       } else {
//         setErrorMessage('Login Failed. An error occurred. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 border border-gray-300 rounded bg-gray-200 shadow-md">
//       <h1 className="text-center text-gray-700 mb-4">Sign-in</h1>
//       {successMessage && <div className="text-green-500 text-center mb-2">{successMessage}</div>}
//       {errorMessage && <div className="text-red-500 text-center mb-2">{errorMessage}</div>}
//       <form onSubmit={handleLogin} className='login-form'>
//         <div className="mb-4">
//           <label>Email</label>
//           <input
//             type="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
//             name='email'
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label>Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
//             name='password'
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button className="bg-blue-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-blue-700" onClick={handleLogin}>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;





// adding password redirectoion to login


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setUserDetails } from '../../components/Store/expenseReducer';
// import { useNavigate } from 'react-router-dom';
// // import PasswordReset from './components/Auth/PasswordReset';

// function Login() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   // Move handleResetPassword outside of handleLogin
//   const handleResetPassword = () => {
//     // Redirect to the PasswordReset component
//     navigate('/password-reset');
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("http://127.0.0.1:8000/account/login/", {
//         email,
//         password
//       });

//       // Assuming your API response structure has access and refresh tokens
//       const access_token = data.access;
//       const refresh_token = data.refresh;


//       console.log('Login Response:', data);
//       console.log('Access Token:', access_token);

//       // Store tokens in local storage
//       localStorage.setItem("accessToken", access_token);
//       localStorage.setItem("refreshToken", refresh_token);

//       // Dispatch the tokens to the Redux store if needed
//       dispatch(setUserDetails({ access: access_token, refresh: refresh_token }));


//       navigate('/home')

      // add
// BEFORE HERE

  //     setErrorMessage('');
  //     setSuccessMessage('Login Successful');
  //   } catch (error) {
  //     console.log('Login Error:', error);
  //     setSuccessMessage('');
  
  //     if (error.response && error.response.status === 401) {
  //       setErrorMessage('Login Failed: Invalid email or password. Please try again.');
  //     } else {
  //       setErrorMessage('Login Failed. An error occurred. Please try again later.');
  //     }
  //   }
  // };



// // real wrk
//       console.log(data);
//       setErrorMessage('');
//       setSuccessMessage('Login Successful');
//     } catch (error) {
//       console.log(error);
//       setSuccessMessage('');

//       if (error.response && error.response.status === 401) {
//         setErrorMessage('Login Failed: Invalid email or password. Please try again.');
//       } else {
//         setErrorMessage('Login Failed. An error occurred. Please try again later.');
//       }
//     }
//   };

//   // BEFORE HERE

//   return (
//     <div className="max-w-md mx-auto p-4 border border-gray-300 rounded bg-gray-200 shadow-md">
//       <h1 className="text-center text-gray-700 mb-4">Sign-in</h1>
//       {successMessage && <div className="text-green-500 text-center mb-2">{successMessage}</div>}
//       {errorMessage && <div className="text-red-500 text-center mb-2">{errorMessage}</div>}
//       <form onSubmit={handleLogin} className='login-form'>
//         <div className="mb-4">
//           <label>Email</label>
//           <input
//             type="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
//             name='email'
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label>Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
//             name='password'
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button className="bg-blue-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-blue-700" onClick={handleLogin}>Login</button>
//         <button className="bg-gray-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-gray-700" onClick={handleResetPassword}>Reset Password</button>
//       </form>
//     </div>
//   );
// }

// export default Login;







// old here

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PasswordReset from "./PasswordReset";
// import { Link as RouterLink, useNavigate } from "react-router-dom";
// import M from "materialize-css";
import "./Login.css";
// import GoogleIcon from "../../Components/Images/Navbar/googleloginicon.png";

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
{/*  */}




          {/* <RouterLink
              to="/signup"
              onClick={handleClick}
              style={{
                fontSize: "20px",
                textDecoration: "none",
                color: "#3498db",
                fontWeight: 600,
                transition: "color 0.3s ease",
              }}
            >
              Already have an account? Sign Up
            </RouterLink>
          </h2>
          <h5>
            <RouterLink
              to="/password-reset"
              style={{ fontSize: "20px", textDecoration: "underline" }}
            >
              Forgot your password?
            </RouterLink> */} 
            {/* </h5> */}
        </div>
      </div>
    </div>
  );
}

export default Login;




// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("http://127.0.0.1:8000/account/login/", {
//         email,
//         password
//       });
// // for add jwt on cookie
//       document.cookie = `jwtToken=${data.token}; secure; HttpOnly`;

//       console.log(data);
//       setErrorMessage(''); // Clear any previous error message
//       setSuccessMessage('Login Successful');
//     } catch (error) {
//       console.log(error);
//       setSuccessMessage(''); // Clear any previous success message
  
//       if (error.response && error.response.status === 401) {
//         setErrorMessage('Login Failed: Invalid email or password. Please try again.');
//       } else {
//         setErrorMessage('Login Failed. An error occurred. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 border border-gray-300 rounded bg-gray-200 shadow-md">
//       <h1 className="text-center text-gray-700 mb-4">Sign-in</h1>
//       {successMessage && <div className="text-green-500 text-center mb-2">{successMessage}</div>}
//       {errorMessage && <div className="text-red-500 text-center mb-2">{errorMessage}</div>}
//       <form onSubmit={handleLogin} className='login-form'>
//         <div className="mb-4">
//           <label>Email</label>
//           <input
//             type="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
//             name='email'
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label>Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
//             name='password'
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button className="bg-blue-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-blue-700" onClick={handleLogin}>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;